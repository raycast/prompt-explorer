import { nanoid } from "nanoid";
import {
  BugIcon,
  CodeBlockIcon,
  EnvelopeIcon,
  MusicIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  ImageIcon,
  SpeechBubbleIcon,
  SpeechBubbleActiveIcon,
  SpeechBubbleImportantIcon,
  BulletPointsIcon,
  TextIcon,
  PhoneIcon,
  EmojiIcon,
  GameControllerIcon,
  BookIcon,
  ShuffleIcon,
  FolderIcon,
  PersonIcon,
  LightBulbIcon,
  LinkIcon,
  BlankDocumentIcon,
  BirdIcon,
  CheckCircleIcon,
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
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to French",
    instruction: "Translate to French",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Spanish",
    instruction: "Translate to Spanish",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Italian",
    instruction: "Translate to Italian",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to German",
    instruction: "Translate to German",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Portuguese",
    instruction: "Translate to Portuguese",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Arabic",
    instruction: "Translate to Arabic",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Hindi",
    instruction: "Translate to Hindi",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Russian",
    instruction: "Translate to Russian",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Chinese",
    instruction: "Translate to Chinese",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Japanese",
    instruction: "Translate to Japanese",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
  {
    id: nanoid(),
    title: "Translate to Korean",
    instruction: "Translate to Korean",
    creativity: "none",
    icon: SpeechBubbleIcon,
  },
];

const code: Command[] = [
  {
    id: nanoid(),
    title: "Find Bugs in Code",
    instruction:
      'Act as a software engineer with deep understanding of any programming language. Review the code to fix logical bugs in the code. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can\'t confidently find bugs, answer with "LGTM 👍"',
    creativity: "medium",
    icon: BugIcon,
  },
  {
    id: nanoid(),
    title: "Refactor Code",
    instruction:
      'Act as a software engineer with deep understanding of any programming language. Refactor the code to make it more efficient and maintainable. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can\'t confidently refactor the code, answer with "LGTM 👍"',
    creativity: "medium",
    icon: CodeBlockIcon,
  },
  // Inspired from https://showgpt.co/t/css-to-tailwind
  {
    id: nanoid(),
    title: "Convert CSS code to Tailwind Classes",
    instruction:
      "Convert this code into Tailwind CSS classes and give me the result in a code block. Make sure to remove the browser prefixes. Only give me what I can put into my element's class property.",
    creativity: "medium",
    icon: CodeBlockIcon,
  },
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as a Linux Terminal",
    instruction:
      "I want you to act as a linux terminal. Execute the text and reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}.",
    creativity: "medium",
    icon: CodeBlockIcon,
  },
  // Inspired from https://beebom.com/best-chatgpt-prompts/
  {
    id: nanoid(),
    title: "Act as a Python Interpreter",
    instruction:
      "I want you to act like a Python interpreter. Execute the selected text which is Python code. Do not provide any explanations. Do not respond with anything except the output of the code.",
    creativity: "medium",
    icon: CodeBlockIcon,
  },
  {
    id: nanoid(),
    title: "Find Me the Git Command",
    instruction:
      "I want you to find me what's the Git command I'm searching for. I want you to only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}.",
    creativity: "low",
    icon: CodeBlockIcon,
  },
  {
    id: nanoid(),
    title: "Regex Generator",
    instruction:
      "Generate regular expressions that match specific patterns in the selected text. Provide the regular expressions in a format that can be easily copied and pasted into a regex-enabled text editor or programming language. Then, give clear and understandable explanations on what the regex is doing and how it is constructed.",
    creativity: "medium",
    icon: CodeBlockIcon,
  },

  {
    id: nanoid(),
    title: "Add Debug Statements",
    instruction:
      "Act as a software engineer debugging its code. Add debug statements to the code. Add as many as necessary to make debugging easier.",
    creativity: "medium",
    icon: BugIcon,
  },
  {
    id: nanoid(),
    title: "Remove Debug Statements",
    instruction:
      "Act as a software engineer cleaning its code. Remove every debug statements from the code.",
    creativity: "medium",
    icon: BugIcon,
  },
  // https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1680637199593819?thread_ts=1680603745.648819&cid=C04R45E5FV1 Alireza
  {
    id: nanoid(),
    title: "Write Tests",
    instruction: `As a software developer, I am currently working on a project using Jest, TypeScript, and React Testing Library. I would like you to help me generate unit tests for the given code. Analyze the given code and provide a single unit test with the necessary imports, without any additional explanations or comments, unless absolutely necessary. Avoid repeating imports and mocks you've mentioned already. If I say "next," please give me another test for the same code. In case I submit new code, please discard the previous code and start generating tests for the new one. Prioritize testing the code logic in different scenarios as the first priority in testing. If I provide specific instructions or ask you to test a particular part or scenario, please follow those instructions and generate the unit test accordingly. If I send you a Jest error, fix the problem and only return the lines which need to be changed in a readable format. Please format the output as follows:
ts
\`\`\`
<OUTPUT>
\`\`\``,
    creativity: "medium",
    icon: BugIcon,
  },
  {
    id: nanoid(),
    title: "Write Docstring",
    instruction: "Write a docstring for this function",
    creativity: "low",
    icon: BlankDocumentIcon,
  },
];

const writing: Command[] = [
  {
    id: nanoid(),
    title: "Write a Wikipedia Article",
    instruction:
      "Write a Wikipedia article. The article should be written in a neutral point of view and should not contain any promotional content. The article should be written in a way that it can be published on Wikipedia.",
    creativity: "medium",
    icon: PencilIcon,
  },
  {
    id: nanoid(),
    title: "Write a Short Story",
    instruction: "Write a short story based on the given prompt or theme.",
    creativity: "high",
    icon: PencilIcon,
  },
  // Inspired from https://beebom.com/best-chatgpt-prompts/
  {
    id: nanoid(),
    title: "Write a Blog Post",
    instruction: "Write a 500-word blog post on this topic.",
    creativity: "medium",
    icon: PencilIcon,
  },
  {
    id: nanoid(),
    title: "Twitter Thread",
    instruction:
      "Convert this text to a Twitter thread. Make sure the first tweet is clear and engaging so that users want to read the thread. Every tweet don't exceed the maximum length of 140 characters. Make sure each tweet flows smoothly into the next, building anticipation and momentum. The last tweet should be impactful so that the user can reflect on the whole thread.",
    creativity: "medium",
    icon: BirdIcon,
  },
];

const music: Command[] = [
  {
    id: nanoid(),
    title: "Write a Song",
    instruction:
      "Write a song based on the given prompt or theme. The song should have a clear melody, lyrics that tell a story, and a memorable chorus.",
    creativity: "high",
    icon: MusicIcon,
  },
  // Inspired from https://beebom.com/best-chatgpt-prompts/
  {
    id: nanoid(),
    title: "Write a Rap",
    instruction:
      "I want you to act as a rapper. Based on the text, come up with powerful and meaningful lyrics that have an intriguing meaning and message that people can relate to. When it comes to choosing your beat, make sure it is catchy yet relevant to your words.",
    creativity: "high",
    icon: MusicIcon,
  },
  {
    id: nanoid(),
    title: "Playlist Maker",
    instruction:
      "Act as a song recommender. Based on the selected song, create a playlist of 10 similar songs. Provide a name and description for the playlist. Do not choose songs that are same name or artist. Do not include the original song in the playlist.",
    creativity: "high",
    icon: MusicIcon,
  },
];

const communication: Command[] = [
  {
    id: nanoid(),
    title: "Decline this Mail",
    instruction:
      "Write a polite and friendly email to decline this email. The email should be written in a way that it can be sent to the recipient.",
    creativity: "low",
    icon: EnvelopeIcon,
  },
  {
    id: nanoid(),
    title: "Ask Question",
    instruction:
      "Rewrite the selected text as a concise and friendly message, phrased as a question. This should be written in a way that it can be sent in a chat application.",
    creativity: "low",
    icon: QuestionMarkCircleIcon,
  },
  {
    id: nanoid(),
    title: "New LinkedIn Connection",
    instruction:
      "Transform the selected text into a personalized and engaging LinkedIn message to be sent to a new connection.",
    creativity: "medium",
    icon: EnvelopeIcon,
  },
  {
    id: nanoid(),
    title: "BLUF Message",
    instruction: `Rewrite the selected text as a BLUF (bottom line up front) Markdown message. The format of the message should be made of two parts:
    
- The first part should be written in bold and convey the message's key information. It can either be a statement or a question. Don't lose any important detail in this part.
- The second part should be put onto a new line. This should give more details and provide some background about the message.

Make sure the message stays concise and clear so that readers don't lose extra time reading it.`,
    creativity: "low",
    icon: SpeechBubbleActiveIcon,
  },
  // https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1680639860474589?thread_ts=1680603745.648819&cid=C04R45E5FV1 alireza
  {
    id: nanoid(),
    title: "Summarize Long Emails",
    instruction: `{Help me summarize the key points from the given email text into a maximum of 5 bullet points, each preferably one sentence, and at most two sentences. Also, identify any action items requested of me.
Key points:
<one-liner one>
<one-liner two>
...

Asked from you:
<action point one>
<action point two>}

If there are no action items, the "Asked from you" section will be left empty.
`,
    creativity: "low",
    icon: EnvelopeIcon,
  },
];

const image: Command[] = [
  {
    id: nanoid(),
    title: "Create a YouTube Script",
    instruction:
      "Create a compelling and captivating YouTube script from the text.",
    creativity: "maximum",
    icon: ImageIcon,
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
    icon: ImageIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Generate Icons",
    instruction:
      "Generate base64 data URIs of 100x100 SVG icons representing the text. Do not provide any commentary other than the list of data URIs as markdown images. For each icon, explain how it relates to the text.",
    creativity: "maximum",
    icon: ImageIcon,
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
    icon: PersonIcon,
  },
  // Inspired from https://github.com/f/awesome-chatgpt-prompts
  {
    id: nanoid(),
    title: "Act as Darth Vader",
    instruction:
      "I want you to act like Darth Vader from Star Wars. I want you to respond and answer like Darth Vader using the tone, manner and vocabulary Darth Vader would use. Do not write any explanations. Only answer like Darth Vader. You must know all of the knowledge of Darth Vader.",
    creativity: "high",
    icon: PersonIcon,
  },
];

const ideas: Command[] = [
  {
    id: nanoid(),
    title: "Write 10 Alternatives",
    instruction: "Give me 10 alternative versions.",
    creativity: "high",
    icon: ShuffleIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Project Ideas",
    instruction: "Brainstorm 5 project ideas based on this text",
    creativity: "high",
    icon: ShuffleIcon,
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
    icon: BulletPointsIcon,
  },
  {
    id: nanoid(),
    title: "Title Case",
    instruction: "Convert this to title case.",
    creativity: "low",
    icon: TextIcon,
  },
  {
    id: nanoid(),
    title: "Debate a Controversial Topic",
    instruction:
      "Take a stance on a controversial topic and argue for or against it.",
    creativity: "high",
    icon: SpeechBubbleImportantIcon,
  },
  {
    id: nanoid(),
    title: "Quiz",
    instruction:
      "I want to do some interactive instruction. I want you to start explaining the selected text to me at a 10th-grade level. Then, stop, give me a multiple-choice quiz, grade the quiz, and resume the explanation. If I get the quiz wrong, reduce the grade level by three for the explanation and language you use, making the language simpler. Otherwise, increase it by three and make the language harder. Then, quiz me again and repeat the process. Do not talk about the changing of the grade level. Don't give away the answer to the quiz before the user has a chance to respond. Stop after you've asked each question to wait for the user to answer.",
    creativity: "medium",
    icon: QuestionMarkCircleIcon,
  },
  // Idea from the community: https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1678984675086069
  {
    id: nanoid(),
    title: "Emoji Suggestion",
    instruction:
      "Suggest emojis that summarize, resemble (parts or words of) or are otherwise related to the text, suggest around 10, up to 30 (if there are that many, for example for input 'animal' you may want to list all animal emojis), no duplicates, and order them by relevance. Only respond with emojis, no other text or charachters, don't autocomplete the text.",
    creativity: "medium",
    icon: EmojiIcon,
  },
  {
    id: nanoid(),
    title: "Find Synonyms",
    instruction:
      "Find synonyms for the given word. Words should exist. Do not write any explanations. Only answer with synonyms.",
    creativity: "medium",
    icon: TextIcon,
  },
  {
    id: nanoid(),
    title: "Give Me a Recipe",
    instruction: "Give me a recipe based on the ingredients I have.",
    creativity: "medium",
    icon: BulletPointsIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Create Action Items",
    instruction:
      "Generate a markdown list of action items to complete based on the text, using a unique identifier for each item as bold headings. If there are any errors in the text, make actions items to fix them. In a sublist of each item, provide a description, priority, estimated level of difficulty, and a reasonable duration for the task.",
    creativity: "medium",
    icon: CheckCircleIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Extract Email Addresses",
    instruction:
      "Extract all email addresses in this text and list them using markdown. Include anything that might be an email address. If possible, provide the name of the person or company to which the email address belongs.",
    creativity: "low",
    icon: EnvelopeIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Extract Phone Numbers",
    instruction:
      "Identify all phone numbers in this text and list them using markdown. Include anything that might be a phone number. If possible, provide the name of the person or company to which the phone number belongs.",
    creativity: "low",
    icon: PhoneIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Extract Links",
    instruction:
      "Extract links in the following text. Do not provide any commentary other than the list of markdown links.",
    creativity: "low",
    icon: LinkIcon,
  },
  // https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588
  {
    id: nanoid(),
    title: "Pros & Cons",
    instruction:
      "List pros and cons for this text based on the topics mentioned. Format the response as a markdown list. Do not provide any other commentary.",
    creativity: "medium",
    icon: BulletPointsIcon,
  },
  {
    id: nanoid(),
    title: "Explain This in Simple Terms",
    instruction: "Explain this in simple terms.",
    creativity: "low",
    icon: BookIcon,
  },
  // https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1680604788545379?thread_ts=1680603745.648819&cid=C04R45E5FV1 andreas
  {
    id: nanoid(),
    title: "ELI5",
    instruction: "Explain the selected text like I’m a 12 year old",
    creativity: "low",
    icon: BookIcon,
  },
];

const fun: Command[] = [
  {
    id: nanoid(),
    title: "DrunkGPT",
    instruction:
      "Answer to the text like you were drunk. Your answers should be incoherent. Don't add 'hic' or 'hiccup' in your answer.",
    creativity: "high",
    icon: GameControllerIcon,
  },
  {
    id: nanoid(),
    title: "Come Up With Jokes",
    instruction: "Come up with a series of jokes.",
    creativity: "medium",
    icon: EmojiIcon,
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
    name: "Communication",
    slug: "/communication",
    gridCols: 4,
    commands: [...communication],
    icon: EnvelopeIcon,
  },
  {
    name: "Image",
    slug: "/image",
    gridCols: 4,
    commands: [...image],
    icon: ImageIcon,
  },
  {
    name: "Writing",
    slug: "/writing",
    gridCols: 4,
    commands: [...writing],
    icon: PencilIcon,
  },
  {
    name: "Music",
    slug: "/music",
    gridCols: 4,
    commands: [...music],
    icon: MusicIcon,
  },
  {
    name: "Ideas",
    slug: "/ideas",
    gridCols: 4,
    commands: [...ideas],
    icon: LightBulbIcon,
  },
  {
    name: "Fun",
    slug: "/fun",
    gridCols: 4,
    commands: [...characters, ...fun],
    icon: GameControllerIcon,
  },
  {
    name: "Misc",
    slug: "/misc",
    gridCols: 4,
    commands: [...misc],
    icon: FolderIcon,
  },
];
