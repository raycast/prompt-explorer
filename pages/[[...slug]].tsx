import React from "react";
import NextLink from "next/link";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../components/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../components/DropdownMenu";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "../components/ScrollArea";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import * as Collapsible from "@radix-ui/react-collapsible";
import { isTouchDevice } from "../utils/isTouchDevice";

import { categories, Category, Prompt } from "../data/prompts";

import styles from "../styles/Home.module.css";
import { Instructions } from "../components/Instructions";
import { useSectionInView } from "../utils/useSectionInViewObserver";
import { extractPrompts } from "../utils/extractPrompts";
import CreativityIcon from "../components/CreativityIcon";
import {
  ChevronDownIcon,
  CopyClipboardIcon,
  DownloadIcon,
  LinkIcon,
  PlusCircleIcon,
  RaycastLogoNegIcon,
  StarsIcon,
  TrashIcon,
} from "@raycast/icons";
import {
  addToRaycast,
  copyData,
  copyUrl,
  downloadData,
} from "../utils/actions";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycast",
  test: "raycastinternal",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

const promptModel = {
  openai_davinci_003: ["Davinci", "Davinci-3"],
  openai_gpt35_turbo: ["GPT-3.5", "Open AI GPT-3.5 Turbo"],
  openai_gpt4: ["GPT-4", "Open AI GPT-4"],
  anthropic_claude: ["Claude", "Antrophic Claude"],
};

export function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { slug: [category.slug.replace("/", "")] },
  }));

  return {
    paths: [
      ...paths,
      {
        params: { slug: [] },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Home({ onTouchReady }: { onTouchReady: () => void }) {
  const router = useRouter();

  const [selectedPrompts, setSelectedPrompts] = React.useState<Prompt[]>([]);
  const [copied, setCopied] = React.useState(false);

  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState<boolean>();

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!isTouch && !event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelectedPrompts([]);
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    const addedPrompts = extractPrompts(added, categories);
    const removedPrompts = extractPrompts(removed, categories);

    setSelectedPrompts((prevPrompts) => {
      const prompts = [...prevPrompts];

      addedPrompts.forEach((prompt) => {
        if (!prompt) {
          return;
        }
        if (prompts.find((p) => p.id === prompt.id)) {
          return;
        }
        prompts.push(prompt);
      });

      removedPrompts.forEach((prompt) => {
        return prompts.filter((s) => s?.id !== prompt?.id);
      });

      return prompts;
    });
  };

  const handleDownload = React.useCallback(() => {
    downloadData(selectedPrompts);
  }, [selectedPrompts]);

  const handleCopyData = React.useCallback(() => {
    copyData(selectedPrompts);
    setCopied(true);
  }, [selectedPrompts]);

  const handleCopyUrl = React.useCallback(() => {
    copyUrl(selectedPrompts);
    setCopied(true);
  }, [selectedPrompts]);

  const handleAddToRaycast = React.useCallback(
    () => addToRaycast(router, selectedPrompts),
    [router, selectedPrompts]
  );

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
    onTouchReady();
  }, [isTouch, setIsTouch, onTouchReady]);

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const { key, keyCode, metaKey, shiftKey, altKey } = event;

      if (key === "k" && metaKey) {
        if (selectedPrompts.length === 0) return;
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        if (selectedPrompts.length === 0) return;
        event.preventDefault();
        handleDownload();
      }

      if (key === "Enter" && metaKey) {
        if (selectedPrompts.length === 0) return;
        event.preventDefault();
        handleAddToRaycast();
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedPrompts.length === 0) return;
        event.preventDefault();
        handleCopyData();
        setActionsOpen(false);
      }

      if (key === "c" && metaKey && shiftKey) {
        event.preventDefault();
        handleCopyUrl();
        setActionsOpen(false);
      }

      if (key === "," && metaKey && shiftKey) {
        event.preventDefault();
        setActionsOpen(false);
        setAboutOpen(false);
      }

      if (key === "/" && metaKey) {
        event.preventDefault();
        setActionsOpen(false);
        setAboutOpen((prevOpen) => !prevOpen);
      }

      if (key === "a" && metaKey) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    setActionsOpen,
    setAboutOpen,
    selectedPrompts,
    handleCopyData,
    handleDownload,
    handleCopyUrl,
    handleAddToRaycast,
  ]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div>
      <header className={styles.nav}>
        <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
          <DialogTrigger asChild>
            <button className={styles.logo}>
              <RaycastLogoNegIcon />
              <div className={styles.logoSeparator} aria-hidden="true"></div>
              <h2>Prompt Explorer</h2>
            </button>
          </DialogTrigger>
          <DialogContent className={styles.about} showCloseButton={true}>
            <div className={styles.aboutTopContent}>
              <div>
                <DialogTitle className={styles.dialogTitle}>About</DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  Prompt Explorer is a tool to easily browse, share, and add
                  prompts to <a href="https://raycast.com">Raycast</a>.
                </DialogDescription>
                <p className={styles.dialogDescription}>
                  Select the prompts by clicking on them. To select multiple,
                  hold <kbd>⌘</kbd> or select them with your mouse.
                </p>
                <p className={styles.dialogDescription}>
                  Then, click the “Add to Raycast” button to import these
                  prompts as AI Commands. You can also download the prompts as a
                  JSON file, or copy the URL to share with others.
                </p>
              </div>
              {!isTouch && (
                <div>
                  <h4 className={styles.dialogTitle}>Shortcuts</h4>
                  <ul className={styles.shortcuts}>
                    <li>
                      Add to Raycast
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⏎</kbd>
                      </span>
                    </li>
                    <li>
                      Toggle Export Menu
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>K</kbd>
                      </span>
                    </li>
                    <li>
                      Configure Hotkeys
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>,</kbd>
                      </span>
                    </li>
                    <li>
                      Download JSON
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>D</kbd>
                      </span>
                    </li>
                    <li>
                      Copy JSON
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⌥</kbd>
                        <kbd>C</kbd>
                      </span>
                    </li>
                    <li>
                      Copy URL to Share
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>⇧</kbd>
                        <kbd>C</kbd>
                      </span>
                    </li>
                    <li>
                      Toggle this view
                      <span className={styles.hotkeys}>
                        <kbd>⌘</kbd>
                        <kbd>/</kbd>
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <h4 className={styles.dialogTitle}>Contribute</h4>
            <p className={styles.dialogDescription}>
              This project is Open Source and{" "}
              <a
                href="https://github.com/raycast/prompt-explorer"
                title="Prompt Explorer on GitHub"
              >
                available on GitHub
              </a>
              . We welcome contributions!
              <br />
              If you have any questions or feedback, please{" "}
              <a href="mailto:feedback+rayso@raycast.com?subject=prompts">
                send us an email
              </a>
              .
            </p>

            <p style={{ fontSize: 13, marginTop: 32 }}>
              <a
                href="https://raycast.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                Made by{" "}
                <span style={{ color: "#FF6363" }}>
                  <RaycastLogoNegIcon />{" "}
                </span>
                <span>Raycast</span>
              </a>
            </p>
            <div className={styles.aboutGlow} />
          </DialogContent>
        </Dialog>

        <div className={styles.navControls}>
          {!isTouch ? (
            <ButtonGroup>
              <Button
                variant="red"
                disabled={selectedPrompts.length === 0}
                onClick={() => handleAddToRaycast()}
              >
                <PlusCircleIcon /> Add to Raycast
              </Button>

              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="red"
                    disabled={selectedPrompts.length === 0}
                    aria-label="Export options"
                  >
                    <ChevronDownIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    disabled={selectedPrompts.length === 0}
                    onSelect={() => handleDownload()}
                  >
                    <DownloadIcon /> Download JSON
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>D</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedPrompts.length === 0}
                    onSelect={() => handleCopyData()}
                  >
                    <CopyClipboardIcon /> Copy JSON{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⌥</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedPrompts.length === 0}
                    onSelect={() => handleCopyUrl()}
                  >
                    <LinkIcon /> Copy URL to Share{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⇧</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          ) : (
            <Button
              variant="red"
              disabled={selectedPrompts.length === 0}
              onClick={() => handleCopyUrl()}
            >
              <LinkIcon /> Copy URL to Share
            </Button>
          )}
        </div>
      </header>

      <Toast open={copied} onOpenChange={setCopied}>
        <ToastTitle className={styles.toastTitle}>
          <CopyClipboardIcon /> Copied to clipboard
        </ToastTitle>
      </Toast>

      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <ScrollArea>
              <div className={styles.sidebarContent}>
                <div className={styles.sidebarNav}>
                  <p className={styles.sidebarTitle}>Categories</p>

                  {categories.map((category) => (
                    <NavItem key={category.slug} category={category} />
                  ))}
                </div>

                {selectedPrompts.length === 0 && <Instructions />}

                {selectedPrompts.length > 0 && (
                  <div>
                    <p className={styles.sidebarTitle}>Add to Raycast</p>

                    <Collapsible.Root>
                      <Collapsible.Trigger asChild>
                        <button className={styles.summaryTrigger}>
                          {selectedPrompts.length}{" "}
                          {selectedPrompts.length > 1 ? "Prompts" : "Prompt"}{" "}
                          selected
                          <ChevronDownIcon />
                        </button>
                      </Collapsible.Trigger>

                      <Collapsible.Content className={styles.summaryContent}>
                        {selectedPrompts.map((prompt, index) => (
                          <div
                            key={prompt.title + index}
                            className={styles.summaryItem}
                          >
                            {prompt.title}
                            <button
                              className={styles.summaryItemButton}
                              onClick={() => {
                                setSelectedPrompts(
                                  selectedPrompts.filter(
                                    (selectedPrompt) =>
                                      selectedPrompt.id !== prompt.id
                                  )
                                );
                              }}
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>

                    <div className={styles.summaryControls}>
                      <Button onClick={handleAddToRaycast} variant="red">
                        Add to Raycast
                      </Button>

                      <Button onClick={() => setSelectedPrompts([])}>
                        Clear selected
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className={styles.container}>
          {isTouch !== null && (
            <SelectionArea
              className="container"
              onStart={onStart}
              onMove={onMove}
              selectables=".selectable"
              features={{
                // Disable support for touch devices
                touch: isTouch ? false : true,
                range: true,
                singleTap: {
                  allow: true,
                  intersect: "native",
                },
              }}
            >
              {categories.map((category) => {
                return (
                  <div
                    key={category.name}
                    data-section-slug={category.slug}
                    style={{
                      outline: "none",
                    }}
                    tabIndex={-1}
                  >
                    <h2 className={styles.subtitle}>
                      <category.iconComponent /> {category.name}
                    </h2>
                    <div className={styles.prompts}>
                      {category.prompts.map((prompt, index) => {
                        return (
                          <div
                            className={`${styles.item} selectable`}
                            key={prompt.id}
                            data-selected={selectedPrompts.some(
                              (selectedPrompt) =>
                                selectedPrompt.id === prompt.id
                            )}
                            data-key={`${category.slug}-${index}`}
                          >
                            <div className={styles.promptTemplate}>
                              <ScrollArea>
                                <pre
                                  className={styles.template}
                                  dangerouslySetInnerHTML={{
                                    __html: prompt.prompt.replace(
                                      /\{[^}]+\}/g,
                                      `<span class="${styles.placeholder}">$&</span>`
                                    ),
                                  }}
                                ></pre>
                              </ScrollArea>
                            </div>
                            <div className={styles.prompt}>
                              <span className={styles.name}>
                                <prompt.iconComponent />
                                {prompt.title}
                                {prompt.author ? (
                                  <span className={styles.promptAuthor}>
                                    by{" "}
                                    {prompt.author.link ? (
                                      <a
                                        href={prompt.author.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {prompt.author.name}
                                      </a>
                                    ) : (
                                      prompt.author.name
                                    )}
                                  </span>
                                ) : null}
                              </span>
                              {prompt.model ? (
                                <span
                                  className={styles.promptModel}
                                  title={promptModel[prompt.model][1]}
                                >
                                  {promptModel[prompt.model][0]}
                                </span>
                              ) : null}

                              <CreativityIcon creativity={prompt.creativity} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </SelectionArea>
          )}
        </div>
      </div>
    </div>
  );
}

function NavItem({ category }: { category: Category }) {
  const activeSection = useSectionInView();

  return (
    <NextLink
      href={category.slug}
      shallow
      className={styles.sidebarNavItem}
      data-active={activeSection === category.slug}
    >
      {category.icon ? <category.iconComponent /> : <StarsIcon />}

      {category.name}
      <span className={styles.badge}>{category.prompts.length}</span>
    </NextLink>
  );
}
