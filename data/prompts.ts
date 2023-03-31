import { nanoid } from "nanoid";
import {
  Bug,
  CodeBlock,
  Envelope,
  Music,
  Pencil,
  QuestionMarkCircle,
  Image,
  SpeechBubble,
  SpeechBubbleActive,
  Person,
  BulletPoints,
  Text,
  SpeechBubbleImportant,
  Phone,
  Emoji,
  GameController,
  Book,
  Shuffle,
  Folder,
} from "@raycast/icons";
import { SVGProps } from "react";

export type Command = {
  id: string;
  title: string;
  instruction: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  creativity: "none" | "low" | "medium" | "high" | "maximum";
};

const translate: Command[] = [
  {
    id: nanoid(),
    title: "Translate to English",
    instruction: "Translate to English",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to French",
    instruction: "Translate to French",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Spanish",
    instruction: "Translate to Spanish",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Italian",
    instruction: "Translate to Italian",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to German",
    instruction: "Translate to German",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Portuguese",
    instruction: "Translate to Portuguese",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Arabic",
    instruction: "Translate to Arabic",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Hindi",
    instruction: "Translate to Hindi",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Russian",
    instruction: "Translate to Russian",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Chinese",
    instruction: "Translate to Chinese",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Japanese",
    instruction: "Translate to Japanese",
    creativity: "low",
    icon: SpeechBubble,
  },
  {
    id: nanoid(),
    title: "Translate to Korean",
    instruction: "Translate to Korean",
    creativity: "low",
    icon: SpeechBubble,
  },
];

const code: Command[] = [
  {
    id: nanoid(),
    title: "Find Bugs in Code",
    instruction:
      'Act as a software engineer with deep understanding of any programming language. Review the code to fix logical bugs in the code. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can\'t confidently find bugs, answer with "LGTM 👍"',
    creativity: "medium",
    icon: Bug,
  },
  {
    id: nanoid(),
    title: "Refactor Code",
    instruction:
      'Act as a software engineer with deep understanding of any programming language. Refactor the code to make it more efficient and maintainable. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can\'t confidently refactor the code, answer with "LGTM 👍"',
    creativity: "medium",
    icon: CodeBlock,
  },
  // Inspired from https://showgpt.co/t/css-to-tailwind
  {
    id: nanoid(),
    title: "Convert CSS code to Tailwind Classes",
    instruction:
      "Convert this code into Tailwind CSS classes and give me the result in a code block. Make sure to remove the browser prefixes. Only give me what I can put into my element's class property.",
    creativity: "medium",
    icon: CodeBlock,
  },
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as a Linux Terminal",
    instruction:
      "I want you to act as a linux terminal. Reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}.",
    creativity: "high",
    icon: CodeBlock,
  },
  // Inspired from https://beebom.com/best-chatgpt-prompts/
  {
    id: nanoid(),
    title: "Act as a Python Interpreter",
    instruction:
      "I want you to act like a Python interpreter. Execute the selected text which is Python code. Do not provide any explanations. Do not respond with anything except the output of the code.",
    creativity: "high",
    icon: CodeBlock,
  },
  {
    id: nanoid(),
    title: "Find Me the Git Command",
    instruction:
      "I want you to find me what's the Git command I'm searching for. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}.",
    creativity: "low",
    icon: CodeBlock,
  },
  {
    id: nanoid(),
    title: "Regex Generator",
    instruction:
      "Generate regular expressions that match specific patterns in the selected text. Provide the regular expressions in a format that can be easily copied and pasted into a regex-enabled text editor or programming language. Then, give clear and understandable explanations on what the regex is doing and how it is constructed.",
    creativity: "medium",
    icon: CodeBlock,
  },

  {
    id: nanoid(),
    title: "Add Debug Statements",
    instruction:
      "Act as a software engineer debugging its code. Add debug statements to the code. Add as many as necessary to make debugging easier.",
    creativity: "medium",
    icon: CodeBlock,
  },
  {
    id: nanoid(),
    title: "Remove Debug Statements",
    instruction:
      "Act as a software engineer cleaning its code. Remove every debug statements from the code.",
    creativity: "medium",
    icon: CodeBlock,
  },
];

const writing: Command[] = [
  {
    id: nanoid(),
    title: "Write a Wikipedia Article",
    instruction:
      "Write a Wikipedia article. The article should be written in a neutral point of view and should not contain any promotional content. The article should be written in a way that it can be published on Wikipedia.",
    creativity: "high",
    icon: Pencil,
  },
  {
    id: nanoid(),
    title: "Write a Short Story",
    instruction: "Write a short story based on the given prompt or theme.",
    creativity: "high",
    icon: Pencil,
  },
  // Inspired from https://beebom.com/best-chatgpt-prompts/
  {
    id: nanoid(),
    title: "Write a Blog Post",
    instruction: "Write a 500-word blog post on this topic.",
    creativity: "medium",
    icon: Pencil,
  },
];

const music: Command[] = [
  {
    id: nanoid(),
    title: "Write a Song",
    instruction:
      "Write a song based on the given prompt or theme. The song should have a clear melody, lyrics that tell a story, and a memorable chorus.",
    creativity: "high",
    icon: Music,
  },
  // Inspired from https://beebom.com/best-chatgpt-prompts/
  {
    id: nanoid(),
    title: "Write a Rap",
    instruction:
      "I want you to act as a rapper. You will come up with powerful and meaningful lyrics, beats, and rhythm that can ‘wow’ the audience. Your lyrics should have an intriguing meaning and message that people can relate to. When it comes to choosing your beat, make sure it is catchy yet relevant to your words, so that when combined they make an explosion of sound every time.",
    creativity: "high",
    icon: Music,
  },
  {
    id: nanoid(),
    title: "Playlist Maker",
    instruction:
      "Act as a song recommender. Based on the selected song, create a playlist of 10 similar songs. Provide a name and description for the playlist. Do not choose songs that are same name or artist. Do not include the original song in the playlist.",
    creativity: "high",
    icon: Music,
  },
];

const communication: Command[] = [
  {
    id: nanoid(),
    title: "Decline this Mail",
    instruction:
      "Write a polite and friendly email to decline this email. The email should be written in a way that it can be sent to the recipient.",
    creativity: "low",
    icon: Envelope,
  },
  {
    id: nanoid(),
    title: "Ask Question",
    instruction:
      "Rewrite the selected text as a concise and friendly message, phrased as a question. This should be written in a way that it can be sent in a chat application.",
    creativity: "low",
    icon: QuestionMarkCircle,
  },
  {
    id: nanoid(),
    title: "New LinkedIn Connection",
    instruction:
      "Transform the selected text into a personalized and engaging LinkedIn message to be sent to a new connection.",
    creativity: "medium",
    icon: Envelope,
  },
  {
    id: nanoid(),
    title: "BLUF Message",
    instruction: `Rewrite the selected text as a BLUF (bottom line up front) Markdown message. The format of the message should be made of two parts:
    
- The first part should be written in bold and convey the message's key information. It can either be a statement or a question. Don't lose any important detail in this part.
- The second part should be put onto a new line. This should give more details and provide some background about the message.

Make sure the message stays concise and clear so that readers don't lose extra time reading it.`,
    creativity: "low",
    icon: SpeechBubbleActive,
  },
];

const image: Command[] = [
  {
    id: nanoid(),
    title: "Create a YouTube Script",
    instruction:
      "Create a compelling and captivating YouTube script from the text.",
    creativity: "maximum",
    icon: Image,
  },
  {
    id: nanoid(),
    title: "Midjourney Prompt Generator",
    instruction: `Generate an "imagine prompt" that contains a maximum word count of 1,500 words that will be used as input for an AI-based text to image program called MidJourney based on the following parameters: /imagine prompt: [1], [2], [3], [4], [5], [6]
    
In this prompt, [1] should be replaced with a random subject and [2] should be a short concise description about that subject. Be specific and detailed in your descriptions, using descriptive adjectives and adverbs, a wide range of vocabulary, and sensory language. Provide context and background information about the subject and consider the perspective and point of view of the image. Use metaphors and similes sparingly to help describe abstract or complex concepts in a more concrete and vivid way. Use concrete nouns and active verbs to make your descriptions more specific and dynamic.
    
[3] should be a short concise description about the environment of the scene. Consider the overall tone and mood of the image, using language that evokes the desired emotions and atmosphere. Describe the setting in vivid, sensory terms, using specific details and adjectives to bring the scene to life.
    
[4] should be a short concise description about the mood of the scene. Use language that conveys the desired emotions and atmosphere, and consider the overall tone and mood of the image.
    
[5] should be a short concise description about the atmosphere of the scene. Use descriptive adjectives and adverbs to create a sense of atmosphere that considers the overall tone and mood of the image.
    
[6] should be a short concise description of the lighting effect including Types of Lights, Types of Displays, Lighting Styles and Techniques, Global Illumination and Shadows. Describe the quality, direction, colour and intensity of the light, and consider how it impacts the mood and atmosphere of the scene. Use specific adjectives and adverbs to convey the desired lighting effect, consider how the light will interact with the subject and environment.
    
It's important to note that the descriptions in the prompt should be written back to back, separated with commas and spaces, and should not include any line breaks or colons. Do not include any words, phrases or numbers in brackets, and you should always begin the prompt with "/imagine prompt: ".
    
Be consistent in your use of grammar and avoid using cliches or unnecessary words. Be sure to avoid repeatedly using the same descriptive adjectives and adverbs. Use negative descriptions sparingly, and try to describe what you do want rather than what you don't want. Use figurative language sparingly and ensure that it is appropriate and effective in the context of the prompt. Combine a wide variety of rarely used and common words in your descriptions.
    
The "imagine prompt" should strictly contain under 1,500 words. Use the end arguments "--c X --s Y --q 2" as a suffix to the prompt, where X is a whole number between 1 and 25, where Y is a whole number between 100 and 1000 if the prompt subject looks better vertically, add "--ar 2:3" before "--c" if the prompt subject looks better horizontally, add "--ar 3:2" before "--c" Please randomize the values of the end arguments format and fixate --q 2. Please do not use double quotation marks or punctuation marks. Please use randomized end suffix format.`,
    creativity: "high",
    icon: Image,
  },
];

const characters: Command[] = [
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as Yoda",
    instruction:
      "I want you to act like Yoda from Star Wars is executing order 66. I want you to respond and answer like Yoda using the tone, manner and vocabulary Yoda would use. Do not write any explanations. Only answer like Yoda. You must know all of the knowledge of Yoda.",
    creativity: "high",
    icon: Person,
  },
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as Darth Vader",
    instruction:
      "I want you to act like Darth Vader from Star Wars. I want you to respond and answer like Darth Vader using the tone, manner and vocabulary Darth Vader would use. Do not write any explanations. Only answer like Darth Vader. You must know all of the knowledge of Darth Vader.",
    creativity: "high",
    icon: Person,
  },
];

const misc: Command[] = [
  // Inspired from AIPRM (https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj/related)
  {
    id: nanoid(),
    title: "TL;DR",
    instruction:
      "Extract all facts and summarize the text in all relevant aspects in up to seven bulletpoints and a 1-liner summary. Pick a good matching emoji for every bullet point.",
    creativity: "medium",
    icon: BulletPoints,
  },
  {
    id: nanoid(),
    title: "Title Case",
    instruction: "Convert this to title case.",
    creativity: "low",
    icon: Text,
  },
  {
    id: nanoid(),
    title: "Debate a Controversial Topic",
    instruction:
      "Take a stance on a controversial topic and argue for or against it.",
    creativity: "high",
    icon: SpeechBubbleImportant,
  },
  {
    id: nanoid(),
    title: "Twitter Thread",
    instruction:
      "Convert this text to a Twitter thread. Make sure the first tweet is clear and engaging so that users want to read the thread. Every tweet don't exceed the maximum length of 140 characters. Make sure each tweet flows smoothly into the next, building anticipation and momentum. The last tweet should be impactful so that the user can reflect on the whole thread.",
    creativity: "medium",
    icon: Phone,
  },
  {
    id: nanoid(),
    title: "Quiz",
    instruction:
      "I want to do some interactive instruction. I want you to start explaining the selected text to me at a 10th-grade level. Then, stop, give me a multiple-choice quiz, grade the quiz, and resume the explanation. If I get the quiz wrong, reduce the grade level by three for the explanation and language you use, making the language simpler. Otherwise, increase it by three and make the language harder. Then, quiz me again and repeat the process. Do not talk about the changing of the grade level. Don't give away the answer to the quiz before the user has a chance to respond. Stop after you've asked each question to wait for the user to answer.",
    creativity: "medium",
    icon: QuestionMarkCircle,
  },
  // Idea from the community: https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1678984675086069
  {
    id: nanoid(),
    title: "Emoji Suggestion",
    instruction:
      "Suggest emojis that summarize, resemble (parts or words of) or are otherwise related to the text, suggest around 10, up to 30 (if there are that many, for example for input 'animal' you may want to list all animal emojis), no duplicates, and order them by relevance. Only respond with emojis, no other text or charachters, don't autocomplete the text.",
    creativity: "medium",
    icon: Emoji,
  },
  {
    id: nanoid(),
    title: "Find Synonyms",
    instruction:
      "Find synonyms for the given word. Words should exist. Do not write any explanations. Only answer with synonyms.",
    creativity: "medium",
    icon: Text,
  },
  {
    id: nanoid(),
    title: "Give Me a Recipe",
    instruction: "Give me a recipe based on the ingredients I have.",
    creativity: "medium",
    icon: BulletPoints,
  },
];

const fun: Command[] = [
  {
    id: nanoid(),
    title: "DrunkGPT",
    instruction:
      "Answer to the text like you were drunk. Your answers should be incoherent. Don't add 'hic' or 'hiccup' in your answer.",
    creativity: "high",
    icon: GameController,
  },
  {
    id: nanoid(),
    title: "Come Up With Jokes",
    instruction: "Come up with a series of jokes.",
    creativity: "medium",
    icon: Emoji,
  },
  {
    id: nanoid(),
    title: "Explain This in Simple Terms",
    instruction: "Explain this in simple terms.",
    creativity: "low",
    icon: Book,
  },
  {
    id: nanoid(),
    title: "Write 10 Alternatives",
    instruction: "Give me 10 alternative versions.",
    creativity: "high",
    icon: Shuffle,
  },
];

type Category = {
  name: string;
  slug: string;
  gridCols: number;
  commands: Command[];
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export const categories: Category[] = [
  {
    name: "Translate",
    slug: "/translate",
    gridCols: 4,
    commands: [...translate],
    icon: SpeechBubble,
  },
  {
    name: "Code",
    slug: "/code",
    gridCols: 4,
    commands: [...code],
    icon: CodeBlock,
  },
  {
    name: "Communication",
    slug: "/communication",
    gridCols: 4,
    commands: [...communication],
    icon: Envelope,
  },
  {
    name: "Image",
    slug: "/image",
    gridCols: 4,
    commands: [...image],
    icon: Image,
  },
  {
    name: "Writing",
    slug: "/writing",
    gridCols: 4,
    commands: [...writing],
    icon: Pencil,
  },
  {
    name: "Music",
    slug: "/music",
    gridCols: 4,
    commands: [...music],
    icon: Music,
  },
  {
    name: "Fun",
    slug: "/fun",
    gridCols: 4,
    commands: [...characters, ...fun],
    icon: GameController,
  },
  {
    name: "Misc",
    slug: "/misc",
    gridCols: 4,
    commands: [...misc],
    icon: Folder,
  },
];
