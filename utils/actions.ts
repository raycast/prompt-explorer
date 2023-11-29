import copy from "copy-to-clipboard";
import { NextRouter } from "next/router";
import { Prompt } from "../data/prompts";

const raycastProtocolForEnvironments = {
  development: "raycastinternal",
  production: "raycast",
  test: "raycastinternal",
};
const raycastProtocol = raycastProtocolForEnvironments[process.env.NODE_ENV];

function makePromptImportData(prompts: Prompt[]): string {
  return `[${prompts
    .map((selectedPrompt) => {
      const { title, prompt, creativity, icon, model } = selectedPrompt;

      return JSON.stringify({
        title,
        prompt,
        creativity,
        icon,
        model,
      });
    })
    .join(",")}]`;
}

function makeQueryString(prompts: Prompt[]): string {
  const queryString = prompts
    .map((selectedPrompt) => {
      const { title, prompt, creativity, icon, model } = selectedPrompt;

      return `prompts=${encodeURIComponent(
        JSON.stringify({ title, prompt, creativity, icon, model })
      )}`;
    })
    .join("&");
  return queryString;
}

export function downloadData(prompts: Prompt[]) {
  const encodedPromptsData = encodeURIComponent(makePromptImportData(prompts));
  const jsonString = `data:text/json;chatset=utf-8,${encodedPromptsData}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "prompts.json";
  link.click();
}

export function copyData(prompts: Prompt[]) {
  copy(makePromptImportData(prompts));
}

export function copyUrl(prompts: Prompt[]) {
  copy(`${window.location.origin}/shared?${makeQueryString(prompts)}`);
}

export function addToRaycast(router: NextRouter, prompts: Prompt[]) {
  router.replace(
    `${raycastProtocol}://prompts/import?${makeQueryString(prompts)}`
  );
}
