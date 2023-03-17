import { nanoid } from "nanoid";
import {
  CodeBlockIcon,
  GameControllerIcon,
  SpeechBubbleIcon,
  StarsIcon,
  TextIcon,
} from "../components/Icons";

export type Command = {
  id: string;
  title: string;
  instruction: string;
  // icon: ({ size }: { size: number }) => JSX.Element;
  creativity: "none" | "low" | "medium" | "high" | "maximum";
  model: "text" | "code";
};

const translate: Command[] = [
  {
    id: nanoid(),
    title: "Translate to English",
    instruction: "Translate to English",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to French",
    instruction: "Translate to French",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Spanish",
    instruction: "Translate to Spanish",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Italian",
    instruction: "Translate to Italian",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to German",
    instruction: "Translate to German",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Portuguese",
    instruction: "Translate to Portuguese",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Arabic",
    instruction: "Translate to Arabic",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Hindi",
    instruction: "Translate to Hindi",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Russian",
    instruction: "Translate to Russian",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Chinese",
    instruction: "Translate to Chinese",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Japanese",
    instruction: "Translate to Japanese",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Translate to Korean",
    instruction: "Translate to Korean",
    creativity: "low",
    model: "text",
  },
];

const code: Command[] = [
  {
    id: nanoid(),
    title: "Find Bugs in Code",
    instruction:
      'Act as a software engineer with deep understanding of any programming language. Review the code to fix logical bugs in the code. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can\'t confidently find bugs, answer with "LGTM 👍"',
    creativity: "medium",
    model: "code",
  },
  // Inspired from https://showgpt.co/t/css-to-tailwind
  {
    id: nanoid(),
    title: "Convert CSS code to Tailwind Classes",
    instruction:
      "Convert this code into Tailwind CSS classes and give me the result in a code block. Make sure to remove the browser prefixes. Only give me what I can put into my element's class property.",
    creativity: "medium",
    model: "code",
  },
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as a Linux Terminal",
    instruction:
      "I want you to act as a linux terminal. Reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}.",
    creativity: "high",
    model: "code",
  },
  {
    id: nanoid(),
    title: "Find Me the Git Command",
    instruction:
      "I want you to find me what's the Git command I'm searching for. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}.",
    creativity: "high",
    model: "code",
  },
  {
    id: nanoid(),
    title: "Refactor Code",
    instruction:
      'Act as a software engineer with deep understanding of any programming language. Refactor the code to make it more efficient and maintainable. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can\'t confidently refactor the code, answer with "LGTM 👍"',
    creativity: "medium",
    model: "code",
  },
  {
    id: nanoid(),
    title: "Add Debug Statements",
    instruction:
      "Act as a software engineer debugging its code. Add debug statements to the code. Add as many as necessary to make debugging easier.",
    creativity: "medium",
    model: "code",
  },
  {
    id: nanoid(),
    title: "Remove Debug Statements",
    instruction:
      "Act as a software engineer cleaning its code. Remove every debug statements from the code.",
    creativity: "medium",
    model: "code",
  },
];

const creativity: Command[] = [
  {
    id: nanoid(),
    title: "Create a YouTube Script",
    instruction:
      "Create a compelling and captivating YouTube script from the text.",
    creativity: "maximum",
    model: "code",
  },
  {
    id: nanoid(),
    title: "Write a Wikipedia Article",
    instruction:
      "Write a Wikipedia article. The article should be written in a neutral point of view and should not contain any promotional content. The article should be written in a way that it can be published on Wikipedia.",
    creativity: "high",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Write a Short Story",
    instruction: "Write a short story based on the given prompt or theme.",
    creativity: "high",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Come up with Jokes",
    instruction: "Come up with a series of jokes.",
    creativity: "medium",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Write a Song",
    instruction:
      "Write a song based on the given prompt or theme. The song should have a clear melody, lyrics that tell a story, and a memorable chorus.",
    creativity: "high",
    model: "text",
  },
];

const characters: Command[] = [
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as Yoda",
    instruction:
      "I want you to act like Yoda from Star Wars. I want you to respond and answer like Yoda using the tone, manner and vocabulary Yoda would use. Do not write any explanations. Only answer like Yoda. You must know all of the knowledge of Yoda.",
    creativity: "high",
    model: "text",
  },
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as Darth Vader",
    instruction:
      "I want you to act like Darth Vader from Star Wars. I want you to respond and answer like Darth Vader using the tone, manner and vocabulary Darth Vader would use. Do not write any explanations. Only answer like Darth Vader. You must know all of the knowledge of Darth Vader.",
    creativity: "high",
    model: "text",
  },
];

const text: Command[] = [
  // Inspired from AIPRM (https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj/related)
  {
    id: nanoid(),
    title: "TL;DR",
    instruction:
      "Extract all facts and summarize the text in all relevant aspects in up to seven bulletpoints and a 1-liner summary. Pick a good matching emoji for every bullet point.",
    creativity: "medium",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Title Case",
    instruction: "Convert this to title case.",
    creativity: "low",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Debate a Controversial Topic",
    instruction:
      "Take a stance on a controversial topic and argue for or against it.",
    creativity: "high",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Twitter Thread",
    instruction:
      "Convert this text to a Twitter thread. Make sure the first tweet is clear and engaging so that users want to read the thread. Every tweet don't exceed the maximum length of 140 characters. Make sure each tweet flows smoothly into the next, building anticipation and momentum. The last tweet should be impactful so that the user can reflect on the whole thread.",
    creativity: "medium",
    model: "text",
  },
  {
    id: nanoid(),
    title: "Quiz",
    instruction:
      "I want to do some interactive instruction. I want you to start explaining the selected text to me at a 10th-grade level. Then, stop, give me a multiple-choice quiz, grade the quiz, and resume the explanation. If I get the quiz wrong, reduce the grade level by three for the explanation and language you use, making the language simpler. Otherwise, increase it by three and make the language harder. Then, quiz me again and repeat the process. Do not talk about the changing of the grade level. Don't give away the answer to the quiz before the user has a chance to respond. Stop after you've asked each question to wait for the user to answer.",
    creativity: "medium",
    model: "code",
  },
  // Idea from the community: https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1678984675086069
  {
    id: nanoid(),
    title: "Emoji Suggestion",
    instruction:
      "Suggest emojis that summarize, resemble (parts or words of) or are otherwise related to the text, suggest around 10, up to 30 (if there are that many, for example for input 'animal' you may want to list all animal emojis), no duplicates, and order them by relevance. Only respond with emojis, no other text or charachters, don't autocomplete the text.",
    creativity: "medium",
    model: "code",
  },
];

type Category = {
  name: string;
  slug: string;
  gridCols: number;
  commands: Command[];
  icon: ({ size }: { size: number }) => JSX.Element;
};

export const categories: Category[] = [
  {
    name: "Translate",
    slug: "/translate",
    gridCols: 4,
    commands: [...translate],
    icon: SpeechBubbleIcon,
  },
  {
    name: "Code",
    slug: "/code",
    gridCols: 4,
    commands: [...code],
    icon: CodeBlockIcon,
  },
  {
    name: "Creativity",
    slug: "/creativity",
    gridCols: 4,
    commands: [...creativity],
    icon: StarsIcon,
  },
  {
    name: "Text",
    slug: "/text",
    gridCols: 4,
    commands: [...text],
    icon: TextIcon,
  },
  {
    name: "Fun",
    slug: "/fun",
    gridCols: 4,
    commands: [...characters],
    icon: GameControllerIcon,
  },
];
