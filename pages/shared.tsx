import React from "react";
import Link from "next/link";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";
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
import { isTouchDevice } from "../utils/isTouchDevice";
import { extractPrompts } from "../utils/extractPrompts";
import styles from "../styles/Home.module.css";
import buttonStyles from "../components/Button.module.css";
import { Prompt } from "../data/prompts";
import CreativityIcon from "../components/CreativityIcon";
import {
  ChevronDownIcon,
  CopyClipboardIcon,
  DownloadIcon,
  PlusCircleIcon,
  StarsIcon,
  Icons,
  MinusCircleIcon,
} from "@raycast/icons";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { addToRaycast, copyData, downloadData } from "../utils/actions";
import copy from "copy-to-clipboard";

export default function Home() {
  const router = useRouter();

  const [copied, setCopied] = React.useState(false);

  const [actionsOpen, setActionsOpen] = React.useState(false);
  const sharedPromptsInURL = React.useMemo(
    () => parseURLPrompt(router.query.prompts),
    [router.query]
  );
  const [selectedPrompts, setSelectedPrompts] = React.useState([
    ...sharedPromptsInURL,
  ]);
  const isTouch = React.useMemo(
    () => (typeof window !== "undefined" ? isTouchDevice() : false),
    []
  );

  React.useEffect(() => {
    // everytime the sharedPromptsInURL changes, we want to update the selectedPrompts
    // so that we start with the shared prompts selected
    setSelectedPrompts([...sharedPromptsInURL]);
  }, [sharedPromptsInURL]);

  const categories = [
    {
      name: `${sharedPromptsInURL.length} ${
        sharedPromptsInURL.length > 1 ? "prompts" : "prompt"
      } shared with you`,
      isTemplate: true,
      isShared: true,
      prompts: sharedPromptsInURL,
      slug: "/shared",
      icon: StarsIcon,
    },
  ];

  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!event?.ctrlKey && !event?.metaKey) {
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

  const handleAddToRaycast = React.useCallback(
    () => addToRaycast(router, selectedPrompts),
    [router, selectedPrompts]
  );

  const handleCopyText = React.useCallback((prompt: Prompt) => {
    copy(prompt.prompt);
    setCopied(true);
  }, []);

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const { key, keyCode, metaKey, altKey } = event;

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

      if (key === "a" && metaKey) {
        event.preventDefault();
        setSelectedPrompts([...sharedPromptsInURL]);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [
    sharedPromptsInURL,
    setActionsOpen,
    selectedPrompts,
    handleCopyData,
    handleDownload,
    handleAddToRaycast,
  ]);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  if (sharedPromptsInURL.length === 0) {
    return;
  }

  console.log(categories);

  return (
    <div>
      <header className={styles.nav}>
        <Link
          href="/"
          aria-label="Home"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <span
            className={buttonStyles.button}
            style={{ fontWeight: 500, fontSize: 13 }}
            data-variant="gray"
          >
            ← See all Prompts
          </span>
        </Link>
        <div className={styles.navControls}>
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
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      </header>

      <Toast open={copied} onOpenChange={setCopied}>
        <ToastTitle className={styles.toastTitle}>
          <CopyClipboardIcon /> Copied to clipboard
        </ToastTitle>
      </Toast>

      <div>
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
              {categories.map((promptGroup) => {
                return (
                  <div
                    key={promptGroup.name}
                    data-section-slug={promptGroup.slug}
                    style={{ outline: "none" }}
                  >
                    <h2 className={styles.subtitle}>
                      <promptGroup.icon /> {promptGroup.name}
                    </h2>
                    <div className={styles.prompts}>
                      {promptGroup.prompts.map((prompt, index) => {
                        const Icon =
                          prompt.icon in Icons ? Icons[prompt.icon] : StarsIcon;

                        const isSelected = selectedPrompts.some(
                          (selectedPrompt) => selectedPrompt.id === prompt.id
                        );

                        return (
                          <ContextMenu.Root key={prompt.id}>
                            <ContextMenu.Trigger>
                              <div
                                className={`${styles.item} selectable`}
                                key={prompt.id}
                                data-selected={selectedPrompts.some(
                                  (selectedPrompt) =>
                                    selectedPrompt?.id === prompt.id
                                )}
                                data-key={`${promptGroup.slug}-${index}`}
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
                                    <Icon />
                                    {prompt.title}
                                  </span>
                                  <CreativityIcon
                                    creativity={prompt.creativity}
                                  />
                                </div>
                              </div>
                            </ContextMenu.Trigger>
                            <ContextMenu.Portal>
                              <ContextMenu.Content
                                className={styles.contextMenuContent}
                              >
                                <ContextMenu.Item
                                  className={styles.contextMenuItem}
                                  onSelect={() => {
                                    if (isSelected) {
                                      return setSelectedPrompts((prevPrompts) =>
                                        prevPrompts.filter(
                                          (prevPrompt) =>
                                            prevPrompt.id !== prompt.id
                                        )
                                      );
                                    }
                                    setSelectedPrompts((prevPrompts) => [
                                      ...prevPrompts,
                                      prompt,
                                    ]);
                                  }}
                                >
                                  {isSelected ? (
                                    <MinusCircleIcon />
                                  ) : (
                                    <PlusCircleIcon />
                                  )}
                                  {isSelected
                                    ? "Deselect Prompt"
                                    : "Select Prompt"}
                                </ContextMenu.Item>
                                <ContextMenu.Item
                                  className={styles.contextMenuItem}
                                  onSelect={() => handleCopyText(prompt)}
                                >
                                  <CopyClipboardIcon /> Copy Prompt Text{" "}
                                </ContextMenu.Item>
                              </ContextMenu.Content>
                            </ContextMenu.Portal>
                          </ContextMenu.Root>
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

function parseURLPrompt(promptQueryString?: string | string[]): Prompt[] {
  if (!promptQueryString) {
    return [];
  }
  let prompts;
  if (Array.isArray(promptQueryString)) {
    prompts = promptQueryString;
  } else {
    prompts = [promptQueryString];
  }
  return prompts.map((prompt) => ({
    ...JSON.parse(prompt),
    id: nanoid(),
    isShared: true,
  }));
}
