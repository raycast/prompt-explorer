import { IconName, Icons } from "@raycast/icons";
import { SVGProps } from "react";

export type Prompt = {
  id: string;
  title: string;
  prompt: string;
  icon: IconName;
  creativity: "none" | "low" | "medium" | "high" | "maximum";
};

function generateSelection(selectionWord: string, resultWord: string) {
  return `\n\n${selectionWord}: {selection}\n\n${resultWord}:`;
}

const code: Prompt[] = [
  {
    id: "css-to-tailwind",
    title: "Convert CSS code to Tailwind Classes",
    prompt:
      "Convert the following code into Tailwind CSS classes and give me the result in a code block. Make sure to remove any browser prefixes. Only give me what I can put into my HTML elements `class` properties." +
      generateSelection("Code", "Tailwind CSS classes"),
    creativity: "low",
    icon: "code",
  },
  {
    id: "linux-terminal",
    title: "Linux Terminal",
    prompt:
      "Act as a linux terminal. Execute the following code and reply with what the terminal should show. Only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations." +
      generateSelection("Code", "Terminal"),
    creativity: "medium",
    icon: "code",
  },
  {
    id: "code-interpreter",
    title: "Code Interpreter",
    prompt:
      "Act as a {argument name=language} interpreter. Execute the {argument name=language} code and reply with the output. Do not provide any explanations." +
      generateSelection("Code", "Output"),
    creativity: "medium",
    icon: "code",
  },
  {
    id: "git-commands",
    title: "Git Commands",
    prompt:
      "Translate the text to Git commands. Only reply one unique code block, and nothing else. Do not write explanations." +
      generateSelection("Text", "Git commands"),
    creativity: "low",
    icon: "code",
  },
  {
    id: "regex-generator",
    title: "Regex Generator",
    prompt:
      "Generate a regular expression that match the specific patterns in the text. Return the regular expression in a format that can be easily copied and pasted into a regex-enabled text editor or programming language. Then, give clear and understandable explanations on what the regex is doing and how it is constructed." +
      generateSelection("Text", "Regex"),
    creativity: "medium",
    icon: "code",
  },
  {
    id: "convert-html-to-markdown",
    title: "Convert HTML to Markdown",
    prompt:
      "Convert the HTML code to Markdown." +
      generateSelection("HTML code", "Markdown"),
    creativity: "none",
    icon: "code",
  },
  {
    id: "add-debug-statements",
    title: "Add Debug Statements",
    prompt:
      "Act as a software engineer debugging its code. Add debug statements to the code. Add as many as necessary to make debugging easier." +
      generateSelection("Code", "Debugged code"),
    creativity: "medium",
    icon: "bug",
  },
  // Inspired from alireza (https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1680637199593819?thread_ts=1680603745.648819&cid=C04R45E5FV1)
  {
    id: "write-tests",
    title: "Write Tests",
    prompt:
      "As a software developer, I am currently working on a project using Jest, TypeScript, and React Testing Library. I would like you to help me generate unit tests for the given code. Analyze the given code and provide a single unit test with the necessary imports, without any additional explanations or comments, unless absolutely necessary. Avoid repeating imports and mocks you've mentioned already.\n\nIf I say 'next,' please give me another test for the same code. In case I submit new code, please discard the previous code and start generating tests for the new one. Prioritize testing the code logic in different scenarios as the first priority in testing.\n\nIf I provide specific instructions or ask you to test a particular part or scenario, please follow those instructions and generate the unit test accordingly. If I send you a Jest error, fix the problem and only return the lines which need to be changed in a readable format. Please format the output as a unique code block." +
      generateSelection("Code", "Output"),
    creativity: "medium",
    icon: "bug",
  },
  {
    id: "write-docstring",
    title: "Write Docstring",
    prompt:
      "Write a docstring for the function. Make sure the documentation is detailed." +
      generateSelection("Function", "Docstring"),
    creativity: "low",
    icon: "blank-document",
  },
];

const communication: Prompt[] = [
  {
    id: "translate-to-language",
    title: "Translate to Language",
    prompt:
      "Translate the text in {argument name=language}." +
      generateSelection("Text", "Translation"),
    creativity: "low",
    icon: "speech-bubble",
  },
  {
    id: "decline-mail",
    title: "Decline this Mail",
    prompt:
      "Write a polite and friendly email to decline the following email. The email should be written in a way that it can be sent to the recipient." +
      generateSelection("Email", "Declined email"),
    creativity: "low",
    icon: "envelope",
  },
  {
    id: "ask-question",
    title: "Ask Question",
    prompt:
      "Rewrite the following text as a concise and friendly message, phrased as a question. This should be written in a way that it can be sent in a chat application like Slack." +
      generateSelection("Text", "Question"),
    creativity: "low",
    icon: "question-mark-circle",
  },
  {
    id: "bluf-message",
    title: "BLUF Message",
    prompt:
      `Rewrite the following text as a bottom line up front (BLUF) message formatted in Markdown. The format of the message should be made of two parts:
    
- The first part should be written in bold and convey the message's key information. It can either be a statement or a question. Don't lose any important detail in this part.
- The second part should be put onto a new line. This should give more details and provide some background about the message.

Make sure the message stays concise and clear so that readers don't lose extra time reading it.` +
      generateSelection("Text", "Rewritten text"),
    creativity: "low",
    icon: "speech-bubble-active",
  },
  // Inspired from alireza (https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1680639860474589?thread_ts=1680603745.648819&cid=C04R45E5FV1)
  {
    id: "summarize-long-email",
    title: "Summarize Long Emails",
    prompt:
      `Help me summarize the key points from the email text into a maximum of 5 bullet points, each preferably one sentence, and at most two sentences. Also, identify any action items requested of me.

Key points:
<one-liner one>
<one-liner two>
...

Asked from you:
<action point one>
<action point two>

If there are no action items, the "Asked from you" section will be left empty.` +
      generateSelection("Email", "Output"),
    creativity: "low",
    icon: "envelope",
  },
  {
    id: "debate-controversial-topic",
    title: "Debate a Topic",
    prompt:
      "Take a stance on the topic and {argument default=for} it. Construct a convincing argument and provide evidence to support your stance." +
      generateSelection("Topic", "Argument"),
    creativity: "high",
    icon: "speech-bubble-important",
  },
  // Inspired from Roel Van Gils (https://raycastcommunity.slack.com/archives/C04R45E5FV1/p1685451820703389?thread_ts=1685451749.404159&cid=C04R45E5FV1)
  {
    id: "create-calendar-event",
    title: "Create a Calendar Event",
    prompt:
      "Create a calendar event in ICS format based on the information. Include the start time, the end time, the location, all attendees, and a summary. If no end time is provided, assume the event will be one hour long. Add a reminder 1 hour before the event starts and 1 day before the event starts. Don't include the PRODID property. Only output the code block. Don't add any comments." +
      generateSelection("Information", "ICS"),
    creativity: "medium",
    icon: "calendar",
  },
];

const writing: Prompt[] = [
  {
    id: "write-story",
    title: "Write a Story",
    prompt:
      "Write a story based on the text. Make the story engaging. The story shouldn't be more than {argument name=number default=500} words." +
      generateSelection("Text", "Story"),
    creativity: "high",
    icon: "pencil",
  },
  {
    id: "blog-post",
    title: "Write a Blog Post",
    prompt:
      "Write a blog post on the topic. Don't use more than {argument name=number default=1000} words" +
      generateSelection("Topic", "Blog post"),
    creativity: "high",
    icon: "pencil",
  },
  {
    id: "twitter-thread",
    title: "Twitter Thread",
    prompt:
      "Convert the text into a list of tweets (= Twitter thread). The first tweet should be clear and engaging. Each tweet should flow smoothly into the next, building anticipation and momentum. The last tweet should be impactful so that the user can reflect on the whole thread. Make sure each tweet doesn't exceed 280 characters. Don't add a single hashtag to any of the tweets." +
      generateSelection("Text", "Tweets"),
    creativity: "medium",
    icon: "bird",
  },
];

const music: Prompt[] = [
  {
    id: "write-a-song",
    title: "Write a Song",
    prompt:
      "Write a song based on the given text. The song should have a clear melody, lyrics that tell a story, and a memorable chorus. The mood of the song should be {argument name=mood}." +
      generateSelection("Text", "Song"),
    creativity: "high",
    icon: "music",
  },
  {
    id: "playlist-maker",
    title: "Playlist Maker",
    prompt:
      "Act as a song recommender. Based on the given song, create a playlist of 10 similar songs. Provide a name and description for the playlist. Do not choose songs that are the same name or artist. Do not include the original song in the playlist." +
      generateSelection("Song", "Playlist"),
    creativity: "high",
    icon: "music",
  },
];

const image: Prompt[] = [
  {
    id: "youtube-script",
    title: "Create a YouTube Script",
    prompt:
      "Create a compelling and captivating YouTube script based on the text. Make sure to include B-Rolls in the script. Make the script as long as necessary to make a video of {argument name=minutes default=10} minutes." +
      generateSelection("Text", "Script"),
    creativity: "high",
    icon: "image",
  },
  {
    id: "midjourney-prompt-generator",
    title: "Midjourney Prompt Generator",
    prompt:
      `Based on the text, generate an "imagine prompt" that contains a maximum word count of 1,500 words that will be used as input for an AI-based text to image program called MidJourney based on the following parameters: /imagine prompt: [1], [2], [3], [4], [5], [6]
    
In this prompt, [1] should be replaced with a random subject and [2] should be a short concise description about that subject. Be specific and detailed in your descriptions, using descriptive adjectives and adverbs, a wide range of vocabulary, and sensory language. Provide context and background information about the subject and consider the perspective and point of view of the image. Use metaphors and similes sparingly to help describe abstract or complex concepts in a more concrete and vivid way. Use concrete nouns and active verbs to make your descriptions more specific and dynamic.
    
[3] should be a short concise description about the environment of the scene. Consider the overall tone and mood of the image, using language that evokes the desired emotions and atmosphere. Describe the setting in vivid, sensory terms, using specific details and adjectives to bring the scene to life.
    
[4] should be a short concise description about the mood of the scene. Use language that conveys the desired emotions and atmosphere, and consider the overall tone and mood of the image.
    
[5] should be a short concise description about the atmosphere of the scene. Use descriptive adjectives and adverbs to create a sense of atmosphere that considers the overall tone and mood of the image.
    
[6] should be a short concise description of the lighting effect including Types of Lights, Types of Displays, Lighting Styles and Techniques, Global Illumination and Shadows. Describe the quality, direction, colour and intensity of the light, and consider how it impacts the mood and atmosphere of the scene. Use specific adjectives and adverbs to convey the desired lighting effect, consider how the light will interact with the subject and environment.
    
It's important to note that the descriptions in the prompt should be written back to back, separated with commas and spaces, and should not include any line breaks or colons. Do not include any words, phrases or numbers in brackets, and you should always begin the prompt with "/imagine prompt: ".
    
Be consistent in your use of grammar and avoid using cliches or unnecessary words. Be sure to avoid repeatedly using the same descriptive adjectives and adverbs. Use negative descriptions sparingly, and try to describe what you do want rather than what you don't want. Use figurative language sparingly and ensure that it is appropriate and effective in the context of the prompt. Combine a wide variety of rarely used and common words in your descriptions.
     
The "imagine prompt" should strictly contain under 1,500 words. Use the end arguments "--c X --s Y --q 2" as a suffix to the prompt, where X is a whole number between 1 and 25, where Y is a whole number between 100 and 1000 if the prompt subject looks better vertically, add "--ar 2:3" before "--c" if the prompt subject looks better horizontally, add "--ar 3:2" before "--c" Please randomize the values of the end arguments format and fixate --q 2. Please do not use double quotation marks or punctuation marks. Please use randomized end suffix format.` +
      generateSelection("Text", "Midjourney Prompt"),
    creativity: "high",
    icon: "image",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "generate-icons",
    title: "Generate Icons",
    prompt:
      "Generate base64 data URIs of 100x100 SVG icons representing the text. Do not provide any commentary other than the list of data URIs as markdown images. For each icon, explain how it relates to the text." +
      generateSelection("Text", "Icons"),
    creativity: "maximum",
    icon: "image",
  },
];

const ideas: Prompt[] = [
  {
    id: "write-alternatives",
    title: "Write 10 Alternatives",
    prompt:
      "Give me 10 alternative versions of the text. Ensure that the alternatives are all distinct from one another." +
      generateSelection("Text", "Alternatives"),
    creativity: "high",
    icon: "shuffle",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "project-ideas",
    title: "Project Ideas",
    prompt:
      "Brainstorm 5 project ideas based on the text. Make sure the ideas are distinct from one another." +
      generateSelection("Text", "Ideas"),
    creativity: "high",
    icon: "shuffle",
  },
  {
    id: "create-analogies",
    title: "Create Analogies",
    prompt:
      "Develop {argument name=number default=3} creative analogies or metaphors that help explain the main idea of the text." +
      generateSelection("Text", "Analogies"),
    creativity: "high",
    icon: "light-bulb",
  },
];

const fun: Prompt[] = [
  {
    id: "act-as-a-character",
    title: "Act As a Character",
    prompt:
      "Rewrite the text as if you were {argument name=character default=yoda}. Use {argument name=character default=yoda}'s tone, manner and vocabulary. You must know all of the knowledge of {argument name=character default=yoda}." +
      generateSelection("Text", "Rewritten text"),
    creativity: "medium",
    icon: "person",
  },
  {
    id: "drunkgpt",
    title: "DrunkGPT",
    prompt:
      "Rewrite the text as if you were drunk." +
      generateSelection("Text", "Rewritten text"),
    creativity: "medium",
    icon: "game-controller",
  },
];

const misc: Prompt[] = [
  {
    id: "tldr",
    title: "TL;DR",
    prompt:
      "Extract all facts from the text and summarize it in all relevant aspects in up to seven bullet points and a 1-liner summary. Pick a good matching emoji for every bullet point." +
      generateSelection("Text", "Summary"),
    creativity: "low",
    icon: "bullet-points",
  },
  {
    id: "title-case",
    title: "Title Case",
    prompt: "Convert {selection} to title case.",
    creativity: "low",
    icon: "text",
  },
  {
    id: "emoji-suggestion",
    title: "Emoji Suggestion",
    prompt:
      "Suggest emojis that relate to the text. Suggest around 10 emojis and order them by relevance. Don't add any duplicates. Only respond with emojis." +
      generateSelection("Text", "Emojis"),
    creativity: "medium",
    icon: "emoji",
  },
  {
    id: "find-synonyms",
    title: "Find Synonyms",
    prompt:
      "Find synonyms for the word {selection} and format the output as a list. Words should exist. Do not write any explanations. Do not include the original word in the list. The list should not have any duplicates.",
    creativity: "medium",
    icon: "text",
  },
  {
    id: "create-recipe",
    title: "Give Me a Recipe",
    prompt:
      "Give me a recipe based on the ingredients delimited. The recipe should be easy to follow." +
      generateSelection("Ingredients", "Recipe"),
    creativity: "medium",
    icon: "bullet-points",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "create-action-items",
    title: "Create Action Items",
    prompt:
      "Generate a markdown list of action items to complete based on the text, using a unique identifier for each item as bold headings. If there are any errors in the text, make action items to fix them. In a sublist of each item, provide a description, priority, estimated level of difficulty, and a reasonable duration for the task." +
      generateSelection("Text", "Action items"),
    creativity: "medium",
    icon: "check-circle",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "extract-email-addresses",
    title: "Extract Email Addresses",
    prompt:
      "Extract all email addresses in the text and list them using markdown. Include anything that might be an email address. If possible, provide the name of the person or company to which the email address belongs." +
      generateSelection("Text", "Email addresses"),
    creativity: "low",
    icon: "envelope",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "extract-phone-numbers",
    title: "Extract Phone Numbers",
    prompt:
      "Identify all phone numbers in the text and list them using markdown. Include anything that might be a phone number. If possible, provide the name of the person or company to which the phone number belongs." +
      generateSelection("Text", "Phone numbers"),
    creativity: "low",
    icon: "phone",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "extract-links",
    title: "Extract Links",
    prompt:
      "Extract links in the text. Do not provide any commentary other than the list of Markdown links." +
      generateSelection("Text", "Links"),
    creativity: "low",
    icon: "link",
  },
  // Inspired from SKaplan gist (https://gist.github.com/SKaplanOfficial/484174135c26a0fb83c906a8ff149588)
  {
    id: "pros-and-cons",
    title: "Pros & Cons",
    prompt:
      "List pros and cons for the text based on the topics mentioned. Format the response as a markdown list of pros and cons. Do not provide any other commentary." +
      generateSelection("Text", "Pros & Cons"),
    creativity: "low",
    icon: "bullet-points",
  },
  {
    id: "eli",
    title: "Explain Like I'm a...",
    prompt:
      `Explain the text like I’m a {argument name=identity default="5 year old"}` +
      generateSelection("Text", "Explanation"),
    creativity: "low",
    icon: "book",
  },
  {
    id: "text-analysis",
    title: "Text Analysis",
    prompt:
      "Analyze the text and provide insights on its tone, style, and potential audience." +
      generateSelection("Text", "Analysis"),
    creativity: "medium",
    icon: "magnifying-glass",
  },
];

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export type Category = {
  name: string;
  slug: string;
  prompts: (Prompt & { iconComponent: IconComponent })[];
  icon: IconName;
  iconComponent: IconComponent;
};

export const categories: Category[] = [
  {
    name: "Code",
    slug: "/code",
    prompts: [...code],
    icon: "code" as const,
  },
  {
    name: "Communication",
    slug: "/communication",
    prompts: [...communication],
    icon: "envelope" as const,
  },
  {
    name: "Image",
    slug: "/image",
    prompts: [...image],
    icon: "image" as const,
  },
  {
    name: "Writing",
    slug: "/writing",
    prompts: [...writing],
    icon: "pencil" as const,
  },
  {
    name: "Music",
    slug: "/music",
    prompts: [...music],
    icon: "music" as const,
  },
  {
    name: "Ideas",
    slug: "/ideas",
    prompts: [...ideas],
    icon: "light-bulb" as const,
  },
  {
    name: "Fun",
    slug: "/fun",
    prompts: [...fun],
    icon: "game-controller" as const,
  },
  {
    name: "Misc",
    slug: "/misc",
    prompts: [...misc],
    icon: "folder" as const,
  },
].map((category) => {
  return {
    ...category,
    iconComponent: Icons[category.icon],
    prompts: category.prompts.map((prompt) => {
      return {
        ...prompt,
        iconComponent: Icons[prompt.icon],
      };
    }),
  };
});
