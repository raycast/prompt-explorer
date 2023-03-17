import React from "react";
import Link from "next/link";
import SelectionArea, { SelectionEvent } from "@viselect/react";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
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
} from "@raycast/icons";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycast",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

export default function Home() {
  const router = useRouter();

  const [selectedPrompts, setSelectedPrompts] = React.useState<Prompt[]>([]);
  const [copied, setCopied] = React.useState(false);

  const [actionsOpen, setActionsOpen] = React.useState(false);
  const [sharedPromptsInURL, setSharedPromptsInURL] = React.useState([]);
  const [isTouch, setIsTouch] = React.useState(null);

  const sharedPromptsGroup = [
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

  const selectedPromptsConfig = selectedPrompts;

  const extractIds = (els: Element[]) =>
    els.map((v) => v.getAttribute("data-key"));

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
    const addedIds = extractIds(added);
    const removedIds = extractIds(removed);

    const addedPrompts = addedIds.map((id) => {
      const [slug, index] = id.split("-");
      const promptCategory = sharedPromptsGroup.find(
        (prompt) => prompt.slug === slug
      );

      return promptCategory.prompts[index];
    });

    addedPrompts.forEach((prompt) => {
      setSelectedPrompts((prevPrompts) => {
        if (prevPrompts.find((p) => p.id === prompt.id)) {
          return prevPrompts;
        }
        return [...prevPrompts, prompt];
      });
    });

    const removedPrompts = removedIds.map((id) => {
      const [slug, index] = id.split("-");
      const promptCategory = sharedPromptsGroup.find(
        (prompt) => prompt.slug === slug
      );
      return promptCategory.prompts[index];
    });

    removedPrompts.forEach((prompt) => {
      setSelectedPrompts((prevPrompts) => {
        return prevPrompts.filter((s) => s?.id !== prompt?.id);
      });
    });
  };

  const makePromptImportData = React.useCallback(() => {
    return `[${selectedPromptsConfig
      .map((selectedPrompt) => {
        const { title, prompt, creativity, icon } = selectedPrompt;
        return JSON.stringify({ title, prompt, creativity, icon });
      })
      .join(",")}]`;
  }, [selectedPromptsConfig]);

  const makeQueryString = React.useCallback(() => {
    const queryString = selectedPromptsConfig
      .map((selectedPrompt) => {
        const { title, prompt, creativity, icon } = selectedPrompt;
        return `prompts=${encodeURIComponent(
          JSON.stringify({ title, prompt, creativity, icon: icon + "-16" })
        )}`;
      })
      .join("&");
    return queryString;
  }, [selectedPromptsConfig]);

  const handleDownload = React.useCallback(() => {
    const encodedPromptsData = encodeURIComponent(makePromptImportData());
    const jsonString = `data:text/json;chatset=utf-8,${encodedPromptsData}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "prompts.json";
    link.click();
  }, [makePromptImportData]);

  const handleCopyData = React.useCallback(() => {
    copy(makePromptImportData());
    setCopied(true);
  }, [makePromptImportData]);
  const handleAddToRaycast = React.useCallback(
    () =>
      router.replace(
        `${raycastProtocol}://prompts/import?${makeQueryString()}`
      ),
    [router, makeQueryString]
  );

  React.useEffect(() => {
    setIsTouch(isTouchDevice());
  }, [isTouch, setIsTouch]);

  React.useEffect(() => {
    if (router.query.prompts) {
      setSharedPromptsInURL(formatURLPrompt(router.query.prompts));
    } else {
      setSharedPromptsInURL([]);
    }
  }, [router.query]);

  React.useEffect(() => {
    const down = (event) => {
      const { key, keyCode, metaKey, altKey } = event;

      if (key === "k" && metaKey) {
        if (selectedPromptsConfig.length === 0) return;
        setActionsOpen((prevOpen) => {
          return !prevOpen;
        });
      }

      if (key === "d" && metaKey) {
        if (selectedPromptsConfig.length === 0) return;
        event.preventDefault();
        handleDownload();
      }

      if (key === "Enter" && metaKey) {
        if (selectedPromptsConfig.length === 0) return;
        event.preventDefault();
        handleAddToRaycast();
      }

      // key === "c" doesn't work when using alt key, so we use keCode instead (67)
      if (keyCode === 67 && metaKey && altKey) {
        if (selectedPromptsConfig.length === 0) return;
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
    selectedPromptsConfig,
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
              disabled={selectedPromptsConfig.length === 0}
              onClick={() => handleAddToRaycast()}
            >
              <PlusCircleIcon /> Add to Raycast
            </Button>

            <DropdownMenu open={actionsOpen} onOpenChange={setActionsOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="red"
                  disabled={selectedPromptsConfig.length === 0}
                  aria-label="Export options"
                >
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  disabled={selectedPromptsConfig.length === 0}
                  onSelect={() => handleDownload()}
                >
                  <DownloadIcon /> Download JSON
                  <span className={styles.hotkeys}>
                    <kbd>⌘</kbd>
                    <kbd>D</kbd>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={selectedPromptsConfig.length === 0}
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
          {!isTouch && (
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
              {sharedPromptsGroup.map((promptGroup) => {
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

                        return (
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

function formatURLPrompt(promptQueryString) {
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
