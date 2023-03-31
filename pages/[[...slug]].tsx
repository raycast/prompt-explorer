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
import { PromptLogo } from "../components/PromptLogo";
import { Toast, ToastTitle } from "../components/Toast";
import { ScrollArea } from "../components/ScrollArea";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import * as Collapsible from "@radix-ui/react-collapsible";
import { isTouchDevice } from "../utils/isTouchDevice";

import { categories, Command } from "../data/prompts";

import styles from "../styles/Home.module.css";
import { Instructions } from "../components/Instructions";
import { useSectionInView } from "../utils/useSectionInViewObserver";
import CreativityIcon from "../components/CreativityIcon";
import {
  ChevronDown,
  CopyClipboard,
  Download,
  Link,
  PlusCircle,
  RaycastLogoNeg,
  Stars,
  Trash,
} from "@raycast/icons";

const raycastProtocolForEnvironments = {
  development: "raycastdebug",
  production: "raycast",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

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

export default function Home({ onTouchReady }) {
  const router = useRouter();

  const [selectedCommands, setSelectedCommands] = React.useState<Command[]>([]);
  const [copied, setCopied] = React.useState(false);

  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(null);

  const selectedCommandsConfig = selectedCommands;

  const extractIds = (els: Element[]) =>
    els.map((v) => v.getAttribute("data-key"));

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!isTouch && !event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelectedCommands([]);
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    const addedIds = extractIds(added);
    const removedIds = extractIds(removed);

    const addedCommands = addedIds.map((id) => {
      const [slug, index] = id.split("-");
      const commandCategory = categories.find(
        (category) => category.slug === slug
      );
      return commandCategory.commands[index];
    });

    addedCommands.forEach((command) => {
      setSelectedCommands((prevCommands) => {
        if (prevCommands.find((c) => c.id === command.id)) {
          return prevCommands;
        }
        return [...prevCommands, command];
      });
    });

    const removedCommands = removedIds.map((id) => {
      const [slug, index] = id.split("-");
      const commandCategory = categories.find(
        (category) => category.slug === slug
      );
      return commandCategory.commands[index];
    });

    removedCommands.forEach((command) => {
      setSelectedCommands((prevCommands) => {
        return prevCommands.filter((c) => c.id !== command.id);
      });
    });
  };

  const makeCommandsImportData = React.useCallback(() => {
    return `[${selectedCommandsConfig
      .map((command) => {
        const { title, instruction, creativity, icon } = command;

        const stringWithoutSvgPrefix = icon.name.slice(3);
        const stringWithHyphens = stringWithoutSvgPrefix.replace(
          /[A-Z]/g,
          (match, index) => {
            // Don't add a hyphen at the beginning of the string
            return (index > 0 ? "-" : "") + match.toLowerCase();
          }
        );
        const result = stringWithHyphens + "-16";

        return JSON.stringify({ title, instruction, creativity, icon: result });
      })
      .join(",")}]`;
  }, [selectedCommandsConfig]);

  const makeQueryString = React.useCallback(() => {
    const queryString = selectedCommandsConfig
      .map((command) => {
        const { title, instruction, creativity, icon } = command;

        const stringWithoutSvgPrefix = icon.name.slice(3);
        const stringWithHyphens = stringWithoutSvgPrefix.replace(
          /[A-Z]/g,
          (match, index) => {
            // Don't add a hyphen at the beginning of the string
            return (index > 0 ? "-" : "") + match.toLowerCase();
          }
        );
        const result = stringWithHyphens + "-16";

        return `prompts=${encodeURIComponent(
          JSON.stringify({ title, instruction, creativity, icon: result })
        )}`;
      })
      .join("&");
    return queryString;
  }, [selectedCommandsConfig]);

  const handleDownload = React.useCallback(() => {
    const encodedCommandsData = encodeURIComponent(makeCommandsImportData());
    const jsonString = `data:text/json;chatset=utf-8,${encodedCommandsData}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "commands.json";
    link.click();
  }, [makeCommandsImportData]);

  const handleCopyData = React.useCallback(() => {
    copy(makeCommandsImportData());
    setCopied(true);
  }, [makeCommandsImportData]);

  const handleCopyUrl = React.useCallback(() => {
    copy(`${window.location.origin}/shared?${makeQueryString()}`);
    setCopied(true);
  }, [makeQueryString]);

  const handleAddToRaycast = React.useCallback(
    () =>
      router.replace(
        `${raycastProtocol}://prompts/import?${makeQueryString()}`
      ),
    [router, makeQueryString]
  );

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
    onTouchReady();
  }, [isTouch, setIsTouch, onTouchReady]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, keyCode, metaKey, shiftKey, altKey } = event;

      if (key === "k" && metaKey) {
        if (selectedCommandsConfig.length === 0) return;
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        if (selectedCommandsConfig.length === 0) return;
        event.preventDefault();
        handleDownload();
      }

      if (key === "Enter" && metaKey) {
        if (selectedCommandsConfig.length === 0) return;
        event.preventDefault();
        handleAddToRaycast();
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedCommandsConfig.length === 0) return;
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
    selectedCommandsConfig,
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
            <button style={{ all: "unset" }}>
              <div className={styles.logo}>
                <PromptLogo />
                <h2>Prompt Explorer</h2>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className={styles.about} showCloseButton={true}>
            <div className={styles.aboutTopContent}>
              <div>
                <DialogTitle className={styles.dialogTitle}>About</DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  Prompt Explorer is a tool to easily browse and import AI
                  Commands directly to <a href="https://raycast.com">Raycast</a>
                  .
                </DialogDescription>
                <p className={styles.dialogDescription}>
                  Select the AI Commands by clicking on them. To select
                  multiple, hold <kbd>⌘</kbd> or select them with your mouse.
                </p>
                <p className={styles.dialogDescription}>
                  Then, click the “Add to Raycast” button. You can also download
                  the AI Commands as a JSON file, or copy the URL to share with
                  others.
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
                      Copy URL to share
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
                  <RaycastLogoNeg />{" "}
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
                disabled={selectedCommandsConfig.length === 0}
                onClick={() => handleAddToRaycast()}
              >
                <PlusCircle /> Add to Raycast
              </Button>

              <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="red"
                    disabled={selectedCommandsConfig.length === 0}
                    aria-label="Export options"
                  >
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    disabled={selectedCommandsConfig.length === 0}
                    onSelect={() => handleDownload()}
                  >
                    <Download /> Download JSON
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>D</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedCommandsConfig.length === 0}
                    onSelect={() => handleCopyData()}
                  >
                    <CopyClipboard /> Copy JSON{" "}
                    <span className={styles.hotkeys}>
                      <kbd>⌘</kbd>
                      <kbd>⌥</kbd>
                      <kbd>C</kbd>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    disabled={selectedCommandsConfig.length === 0}
                    onSelect={() => handleCopyUrl()}
                  >
                    <Link /> Copy URL to share{" "}
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
              disabled={selectedCommandsConfig.length === 0}
              onClick={() => handleCopyUrl()}
            >
              <Link /> Copy URL to share
            </Button>
          )}
        </div>
      </header>

      <Toast open={copied} onOpenChange={setCopied}>
        <ToastTitle className={styles.toastTitle}>
          <CopyClipboard /> Copied to clipboard
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

                {selectedCommandsConfig.length === 0 && <Instructions />}

                {selectedCommandsConfig.length > 0 && (
                  <div>
                    <p className={styles.sidebarTitle}>Add to Raycast</p>

                    <Collapsible.Root>
                      <Collapsible.Trigger asChild>
                        <button className={styles.summaryTrigger}>
                          {selectedCommandsConfig.length}{" "}
                          {selectedCommandsConfig.length > 1
                            ? "Commands"
                            : "Command"}{" "}
                          selected
                          <ChevronDown />
                        </button>
                      </Collapsible.Trigger>

                      <Collapsible.Content className={styles.summaryContent}>
                        {selectedCommandsConfig.map((command, index) => (
                          <div
                            key={command.title + index}
                            className={styles.summaryItem}
                          >
                            {command.title}
                            <button
                              className={styles.summaryItemButton}
                              onClick={() => {
                                setSelectedCommands(
                                  selectedCommands.filter(
                                    (selectedCommand) =>
                                      selectedCommand.id !== command.id
                                  )
                                );
                              }}
                            >
                              <Trash />
                            </button>
                          </div>
                        ))}
                      </Collapsible.Content>
                    </Collapsible.Root>

                    <div className={styles.summaryControls}>
                      <Button onClick={handleAddToRaycast} variant="red">
                        Add to Raycast
                      </Button>

                      <Button onClick={() => setSelectedCommands([])}>
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
                      <category.icon /> {category.name}
                    </h2>
                    <div
                      className={styles.prompts}
                      data-grid={category.gridCols}
                    >
                      {category.commands.map((command, index) => {
                        return (
                          <div
                            className={`${styles.item} selectable`}
                            key={command.id}
                            data-selected={selectedCommands.some(
                              (selectedCommand) =>
                                selectedCommand.id === command.id
                            )}
                            data-key={`${category.slug}-${index}`}
                          >
                            <div className={styles.prompt}>
                              <ScrollArea>
                                <pre className={styles.template}>
                                  {command.instruction}
                                </pre>
                              </ScrollArea>
                            </div>
                            <div className={styles.command}>
                              <span className={styles.name}>
                                <command.icon />
                                {command.title}
                              </span>

                              <CreativityIcon creativity={command.creativity} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {category.gridCols === 1 && (
                      <hr className={styles.divider} />
                    )}
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

function NavItem({ category }) {
  const activeSection = useSectionInView();

  return (
    <NextLink
      href={category.slug}
      shallow
      className={styles.sidebarNavItem}
      data-active={activeSection === category.slug}
    >
      {category.icon ? <category.icon /> : <Stars />}

      {category.name}
      <span className={styles.badge}>{category.commands.length}</span>
    </NextLink>
  );
}
