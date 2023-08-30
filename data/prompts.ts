import { IconName, Icons } from "@raycast/icons";
import { SVGProps } from "react";

export type Prompt = {
  id: string;
  title: string;
  prompt: string;
  icon: IconName;
  creativity: "none" | "low" | "medium" | "high" | "maximum";
  model?: "openai_davinci_003" | "openai_gpt35_turbo" | "openai_gpt4" | "anthropic_claude";
  date: `${number}-${number}-${number}`;
  author?: {
    name: string;
    link?: string;
  };
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
    date: "2023-06-06",
    icon: "code",
  },
  {
    id: "linux-terminal",
    title: "Linux Terminal",
    prompt:
      "Act as a linux terminal. Execute the following code and reply with what the terminal should show. Only reply with the terminal output inside one unique code block, and nothing else. Do not write explanations." +
      generateSelection("Code", "Terminal"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "code",
  },
  {
    id: "code-interpreter",
    title: "Code Interpreter",
    prompt:
      "Act as a {argument name=language} interpreter. Execute the {argument name=language} code and reply with the output. Do not provide any explanations." +
      generateSelection("Code", "Output"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "code",
  },
  {
    id: "git-commands",
    title: "Git Commands",
    prompt:
      "Translate the text to Git commands. Only reply one unique code block, and nothing else. Do not write explanations." +
      generateSelection("Text", "Git commands"),
    creativity: "low",
    date: "2023-06-06",
    icon: "code",
  },
  {
    id: "regex-generator",
    title: "Regex Generator",
    prompt:
      "Generate a regular expression that match the specific patterns in the text. Return the regular expression in a format that can be easily copied and pasted into a regex-enabled text editor or programming language. Then, give clear and understandable explanations on what the regex is doing and how it is constructed." +
      generateSelection("Text", "Regex"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "code",
  },
  {
    id: "convert-html-to-markdown",
    title: "Convert HTML to Markdown",
    prompt:
      "Convert the HTML code to Markdown." +
      generateSelection("HTML code", "Markdown"),
    creativity: "none",
    date: "2023-06-06",
    icon: "code",
  },
  {
    id: "add-debug-statements",
    title: "Add Debug Statements",
    prompt:
      "Act as a software engineer debugging its code. Add debug statements to the code. Add as many as necessary to make debugging easier." +
      generateSelection("Code", "Debugged code"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "bug",
  },
  {
    id: "write-tests",
    title: "Write Tests",
    prompt:
      "As a software developer, I am currently working on a project using Jest, TypeScript, and React Testing Library. I would like you to help me generate unit tests for the given code. Analyze the given code and provide a single unit test with the necessary imports, without any additional explanations or comments, unless absolutely necessary. Avoid repeating imports and mocks you've mentioned already.\n\nIf I say 'next,' please give me another test for the same code. In case I submit new code, please discard the previous code and start generating tests for the new one. Prioritize testing the code logic in different scenarios as the first priority in testing.\n\nIf I provide specific instructions or ask you to test a particular part or scenario, please follow those instructions and generate the unit test accordingly. If I send you a Jest error, fix the problem and only return the lines which need to be changed in a readable format. Please format the output as a unique code block." +
      generateSelection("Code", "Output"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "bug",
    author: {
      name: "Alireza Sheikholmolouki",
      link: "https://github.com/Alireza29675",
    },
  },
  {
    id: "write-docstring",
    title: "Write Docstring",
    prompt:
      "Write a docstring for the function. Make sure the documentation is detailed." +
      generateSelection("Function", "Docstring"),
    creativity: "low",
    date: "2023-06-06",
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
    date: "2023-06-06",
    icon: "speech-bubble",
  },
  {
    id: "decline-mail",
    title: "Decline this Mail",
    prompt:
      "Write a polite and friendly email to decline the following email. The email should be written in a way that it can be sent to the recipient." +
      generateSelection("Email", "Declined email"),
    creativity: "low",
    date: "2023-06-06",
    icon: "envelope",
  },
  {
    id: "ask-question",
    title: "Ask Question",
    prompt:
      "Rewrite the following text as a concise and friendly message, phrased as a question. This should be written in a way that it can be sent in a chat application like Slack." +
      generateSelection("Text", "Question"),
    creativity: "low",
    date: "2023-06-06",
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
    date: "2023-06-06",
    icon: "speech-bubble-active",
  },
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
    date: "2023-06-06",
    icon: "envelope",
    author: {
      name: "Alireza Sheikholmolouki",
      link: "https://github.com/Alireza29675",
    },
  },
  {
    id: "debate-controversial-topic",
    title: "Debate a Topic",
    prompt:
      "Take a stance on the topic and {argument default=for} it. Construct a convincing argument and provide evidence to support your stance." +
      generateSelection("Topic", "Argument"),
    creativity: "high",
    date: "2023-06-06",
    icon: "speech-bubble-important",
  },
  {
    id: "create-calendar-event",
    title: "Create a Calendar Event",
    prompt:
      "Create a calendar event in ICS format based on the information. Include the start time, the end time, the location, all attendees, and a summary. If no end time is provided, assume the event will be one hour long. Add a reminder 1 hour before the event starts and 1 day before the event starts. Don't include the PRODID property. Only output the code block. Don't add any comments." +
      generateSelection("Information", "ICS"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "calendar",
    author: {
      name: "Roel Van Gils",
      link: "https://github.com/roelvangils",
    },
  },
  {
    id: "summarize-and-sympathize",
    title: "Summarize and sympathize text",
    prompt:
      "Please summarize and omit the following. Then express your empathy." +
      generateSelection("Text", "Sympathy"),
    creativity: "low",
    date: "2023-06-12",
    icon: "speech-bubble",
    author: {
      name: "nagauta",
      link: "https://github.com/nagauta",
    },
  },
  {
    id: "fill-the-gap",
    title: "Fill in the gap",
    prompt:
      `Use the following instructions to rewrite the text

Give me 5 words that most accurarely fill in the blank in a sentence.

The bank is represented by a few underscores, such as ___, or ______.

So for example: "I'm super ___ to announce my new product".

1. I'm super happy to announce my new product 
2. I'm super excited to announce my new product 
3. I'm super pumped to announce my new product 
4. I'm super proud to announce my new product 
5. I'm super nervous to announce my new product 

Now do the same for this sentece:` +
      generateSelection("Text", "Rewritten text"),
    creativity: "high",
    date: "2023-08-03",
    icon: "speech-bubble",
    author: {
      name: "peduarte",
      link: "https://github.com/peduarte",
    },
  }  
];

const image: Prompt[] = [
  {
    id: "youtube-script",
    title: "Create a YouTube Script",
    prompt:
      "Create a compelling and captivating YouTube script based on the text. Make sure to include B-Rolls in the script. Make the script as long as necessary to make a video of {argument name=minutes default=10} minutes." +
      generateSelection("Text", "Script"),
    creativity: "high",
    date: "2023-06-06",
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
    date: "2023-06-06",
    icon: "image",
  },
  {
    id: "generate-icons",
    title: "Generate Icons",
    prompt:
      "Generate base64 data URIs of 100x100 SVG icons representing the text. Do not provide any commentary other than the list of data URIs as markdown images. For each icon, explain how it relates to the text." +
      generateSelection("Text", "Icons"),
    creativity: "maximum",
    date: "2023-06-06",
    icon: "image",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
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
    date: "2023-06-06",
    icon: "pencil",
  },
  {
    id: "blog-post",
    title: "Write a Blog Post",
    prompt:
      "Write a blog post on the topic. Don't use more than {argument name=number default=1000} words" +
      generateSelection("Topic", "Blog post"),
    creativity: "high",
    date: "2023-06-06",
    icon: "pencil",
  },
  {
    id: "twitter-thread",
    title: "Twitter Thread",
    prompt:
      "Convert the text into a list of tweets (= Twitter thread). The first tweet should be clear and engaging. Each tweet should flow smoothly into the next, building anticipation and momentum. The last tweet should be impactful so that the user can reflect on the whole thread. Make sure each tweet doesn't exceed 280 characters. Don't add a single hashtag to any of the tweets." +
      generateSelection("Text", "Tweets"),
    creativity: "medium",
    date: "2023-06-06",
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
    date: "2023-06-06",
    icon: "music",
  },
  {
    id: "playlist-maker",
    title: "Playlist Maker",
    prompt:
      "Act as a song recommender. Based on the given song, create a playlist of 10 similar songs. Provide a name and description for the playlist. Do not choose songs that are the same name or artist. Do not include the original song in the playlist." +
      generateSelection("Song", "Playlist"),
    creativity: "high",
    date: "2023-06-06",
    icon: "music",
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
    date: "2023-06-06",
    icon: "shuffle",
  },
  {
    id: "project-ideas",
    title: "Project Ideas",
    prompt:
      "Brainstorm 5 project ideas based on the text. Make sure the ideas are distinct from one another." +
      generateSelection("Text", "Ideas"),
    creativity: "high",
    date: "2023-06-06",
    icon: "shuffle",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
  },
  {
    id: "create-analogies",
    title: "Create Analogies",
    prompt:
      "Develop {argument name=number default=3} creative analogies or metaphors that help explain the main idea of the text." +
      generateSelection("Text", "Analogies"),
    creativity: "high",
    date: "2023-06-06",
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
    date: "2023-06-06",
    icon: "person",
  },
  {
    id: "drunkgpt",
    title: "DrunkGPT",
    prompt:
      "Rewrite the text as if you were drunk." +
      generateSelection("Text", "Rewritten text"),
    creativity: "medium",
    date: "2023-06-06",
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
    date: "2023-06-06",
    icon: "bullet-points",
  },
  {
    id: "title-case",
    title: "Title Case",
    prompt: "Convert {selection} to title case.",
    creativity: "low",
    date: "2023-06-06",
    icon: "text",
  },
  {
    id: "emoji-suggestion",
    title: "Emoji Suggestion",
    prompt:
      "Suggest emojis that relate to the text. Suggest around 10 emojis and order them by relevance. Don't add any duplicates. Only respond with emojis." +
      generateSelection("Text", "Emojis"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "emoji",
  },
  {
    id: "find-synonyms",
    title: "Find Synonyms",
    prompt:
      "Find synonyms for the word {selection} and format the output as a list. Words should exist. Do not write any explanations. Do not include the original word in the list. The list should not have any duplicates.",
    creativity: "medium",
    date: "2023-06-06",
    icon: "text",
  },
  {
    id: "create-recipe",
    title: "Give Me a Recipe",
    prompt:
      "Give me a recipe based on the ingredients. The recipe should be easy to follow." +
      generateSelection("Ingredients", "Recipe"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "bullet-points",
  },
  {
    id: "create-action-items",
    title: "Create Action Items",
    prompt:
      "Generate a markdown list of action items to complete based on the text, using a unique identifier for each item as bold headings. If there are any errors in the text, make action items to fix them. In a sublist of each item, provide a description, priority, estimated level of difficulty, and a reasonable duration for the task." +
      generateSelection("Text", "Action items"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "check-circle",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
  },
  {
    id: "extract-email-addresses",
    title: "Extract Email Addresses",
    prompt:
      "Extract all email addresses in the text and list them using markdown. Include anything that might be an email address. If possible, provide the name of the person or company to which the email address belongs." +
      generateSelection("Text", "Email addresses"),
    creativity: "low",
    date: "2023-06-06",
    icon: "envelope",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
  },
  {
    id: "extract-phone-numbers",
    title: "Extract Phone Numbers",
    prompt:
      "Identify all phone numbers in the text and list them using markdown. Include anything that might be a phone number. If possible, provide the name of the person or company to which the phone number belongs." +
      generateSelection("Text", "Phone numbers"),
    creativity: "low",
    date: "2023-06-06",
    icon: "phone",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
  },
  {
    id: "extract-links",
    title: "Extract Links",
    prompt:
      "Extract links in the text. Do not provide any commentary other than the list of Markdown links." +
      generateSelection("Text", "Links"),
    creativity: "low",
    date: "2023-06-06",
    icon: "link",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
  },
  {
    id: "pros-and-cons",
    title: "Pros & Cons",
    prompt:
      "List pros and cons for the text based on the topics mentioned. Format the response as a markdown list of pros and cons. Do not provide any other commentary." +
      generateSelection("Text", "Pros & Cons"),
    creativity: "low",
    date: "2023-06-06",
    icon: "bullet-points",
    author: {
      name: "Stephen Kaplan",
      link: "https://github.com/SKaplanOfficial",
    },
  },
  {
    id: "eli",
    title: "Explain Like I'm a…",
    prompt:
      `Explain the text like I’m a {argument name=identity default="5 year old"}` +
      generateSelection("Text", "Explanation"),
    creativity: "low",
    date: "2023-06-06",
    icon: "book",
  },
  {
    id: "text-analysis",
    title: "Text Analysis",
    prompt:
      "Analyze the text and provide insights on its tone, style, and potential audience." +
      generateSelection("Text", "Analysis"),
    creativity: "medium",
    date: "2023-06-06",
    icon: "magnifying-glass",
  },
  {
    id: "summarize-product-reviews",
    title: "Summarize Product Reviews",
    prompt:
      `Carefully read the product reviews below. Translate them to English and create a summary of all the reviews in English and list them as Pros and Cons in the bullet point format. Remember that each bullet point should be one sentence or at max two short sentences. Most frequently mentioned should come first in each list and every bullet point should have a percentage showing how much evidence the reviews have brought for that pro or con. For example if reviews are mentioning that product is going bad easily and they brought some reasons for what they are saying, the percentage of your confidence should go higher, but if there are some reviews which are unsure about something or there are no evidence or it's not repeated frequently then the percentage should go lower. At the end you should write a paragraph about what I should pay attention to, before buying this product. These can be some warnings or some tips or some suggestions, points that I will miss, or anything that you think is important to know before buying this product.

You can use the following template to create the summary:

'''
## Summary of the reviews

**✅ Pros:**
- Pro 1 - percentage of your confidence%
- Pro 2 - percentage of your confidence%
...
- Pro n - percentage of your confidence%

**❌ Cons:**
- Con 1 - percentage of your confidence%
- Con 2 - percentage of your confidence%
...
- Con n - percentage of your confidence%

**💡 You should pay attention to:**
- Tip 1
- Tip 2
...
- Tip n
'''` + generateSelection("Product reviews", "Summary"),
    creativity: "low",
    date: "2023-06-16",
    icon: "tag",
    author: {
      name: "Alireza Sheikholmolouki",
      link: "https://github.com/Alireza29675",
    },
  },
];

const raycast: Prompt[] = [
  {
    id: "improve-writing-custom",
    title: "Improve Writting - Editable",
    prompt: `Act as a spelling corrector and improver. Reply to each message with rewritten text using following instructions to rewrite it:
    - Fix spelling, grammar and punctuation
    - Improve clarity and conciseness
    - Break up overly long sentences
    - Reduce repetition
    - Prefer active voice
    - Prefer simple words
    - Keep the meaning same
    - Keep the tone of voice same
    Use english language
    ${generateSelection("Text", "Improved Text")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "fix-spelling-and-grammar-custom",
    title: "Fix Spelling and Grammar - Editable",
    prompt: `Act as a spelling corrector and improver. Rewrite the text with corrected spelling, grammar and punctuation. Use english language
    ${generateSelection("Text", "Fixed Text")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "explain-this-in-simple-terms-custom",
    title: "Explain This in Simple Terms - Editable",
    prompt: `Act as a dictionary and encyclopedia. Explain the text in a simple and concise language. If it's a single word, provide a short definition. If you can't confidently explain the text, answer with "That's something I can't explain 😥".

    Text:
    Philosophy

    Explanation:
    Philosophy is the study of the fundamental nature of knowledge, reality, and existence. It is a system of ideas that attempts to explain the world and our place in it. Philosophers use logic and reason to explore the meaning of life and the universe.

    ${generateSelection("Text", "Explanation")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "make-longer-custom",
    title: "Make Longer - Editable",
    prompt: `Act as a content writer. Expand the text with the following instructions:
    - Use the same style and tone of voice
    - Expand the key information and concepts
    - Avoid repetition
    - Stay factual close to the provided text
    Use english language

    ${generateSelection("Text", "Expanded text")}`,
    creativity: "high",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "make-shorter-custom",
    title: "Make Shorter - Editable",
    prompt: `Act as a content writer. Make the text shorter with the following instructions:
    - Use the same style and tone of voice
    - Reduce repetition
    - Keep key information
    Use english language

    ${generateSelection("Text", "Expanded text")}`, 
    creativity: "high",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "change-tone-to-professional",
    title: "Change Tone to Professional - Editable",
    prompt: `Act as a professional content writer and editor. Rewrite the text to ensure:
    - Professional tone of voice
    - Formal language
    - Accurate facts
    - Correct spelling, grammar, and punctuation
    - Concise phrasing
    - meaning  unchanged
    - Length retained
    Use english language

    ${generateSelection("Text", "Rewritten text")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "change-tone-to-friendly",
    title: "Change Tone to Friendly - Editable",
    prompt: `Act as a content writer and editor. Rewrite the text to ensure:
    - Friendly and optimistic tone of voice
    - Correct spelling, grammar, and punctuation
    - Meaning unchanged
    - Length retained
    Use english language

    ${generateSelection("Text", "Rewritten text")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "change-tone-to-confident-custom",
    title: "Change Tone to Confident - Editable",
    prompt: `Act as a content writer and editor. Rewrite the text with the following instructions:
    - Use confident, formal and friendly tone of voice
    - Avoid hedging, be definite where possible
    - Skip apologies
    - Focus on main arguments
    - Correct spelling, grammar, and punctuation
    - Keep meaning unchanged
    - Keep length retained
    Use english language

    ${generateSelection("Text", "Rewritten text")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "change-tone-to-casual-custom",
    title: "Change Tone to Casual - Editable",
    prompt: `Act as a content writer and editor. Rewrite the text with the following instructions:
    - Use casual and friendly tone of voice
    - Use active voice
    - Keep sentences shorts
    - Ok to use slang and contractions
    - Keep grammatical person
    - Correct spelling, grammar, and punctuation
    - Keep meaning unchanged
    - Keep length retained
    Use english language

    ${generateSelection("Text", "Rewritten text")}`,
    creativity: "low",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "rephrase-as-tweet-custom",
    title: "Rephrase as Tweet - Editable",
    prompt: `You're an expert in the field and have the perfect opportunity to share your ideas and insights with a huge audience!. Rewrite the text as a tweet that is:
    - Casual and upbeat
    - Creative and catchy
    - Focused on key takeaways that challenge the status quo
    - Engaging and punchy
    - IMPORTANT: less than 25 words.
    - IMPORTANT: doesn't include hash, hashtags and words starting with #, i.e. #innovation #Technology
    Use english language

    Text:
    The concept of Rayday is simple. Every Friday, everyone can use the day to work on something that benefits Raycast. From new features, to fixing bugs, drafting documentation or tidying up, it’s time for us to take a break from project work. As well as getting creative with our own ideas, it’s a great chance to act on feedback from our users and community too.

    Tweet:
    ⚒️ We hack every Friday – we call it 'Rayday'. Everyone can use the day to work on something that benefits Raycast – aside from normal project work.

    ${generateSelection("Text", "Tweet")}`,
    creativity: "high",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "explain-code-custom",
    title: "Explain Code - Editable",
    prompt: `Act as a software engineer with deep understanding of any programming language and it's documentation.. Explain how the code works step by step in a list. Be concise with a casual tone of voice and write it as documentation for others.
    Code:
    \`\`\`
    function GoToPreviousPageAction() {
      const [page, setPage] = useGlobalState("page");
      return (
        <Action
          icon={Icon.ArrowLeftCircle}
          title="Go to Previous Page"
          shortcut={{ modifiers: ["cmd"], key: "[" }}
          onAction={() => setPage(Math.max(page - 1, 0))}
        />
      );
    }
    \`\`\`
    Explanation:
    The code is a React component that goes to the previous page.
    1. The component renders an 'Action' component with an icon, title, and shortcut.
    3. The 'useGlobalState' hook is used to get the current page number from the global state.
    4. The 'onAction' prop is used to set the page number to one less than the current page number.
    5. This will cause the page to go back one page when the action is taken.
    6. The page is capped at 0 so that the page is never negative.

    ${generateSelection("Code", "Explanation")}`,
    creativity: "medium",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
  {
    id: "find-bugs-custom",
    title: "Find Bugs - Editable",
    prompt: `Act as a software engineer with deep understanding of any programming language. Review the code to fix logical bugs in the code. Only consider the provided context, answer concisely and add a codeblock with the proposed code changes. If you can't confidently find bugs, answer with "LGTM 👍".
    Code:🚁
    \`\`\`
    function PrevAction() {
      const [page, setPage] = useGlobalState("page");
      return (
        <Action
          title="Go to Previous Page"
          onAction={() => setPage(page - 1)}
        />
      );
    }
    \`\`\`
    Review:
    The code is missing a check to make sure 'page' is greater than 0 before subtracting 1. Otherwise, the page could be set to -1 which might cause unexpected behavior.
    \`\`\`
    function PrevAction() {
      const [page, setPage] = useGlobalState("page");
      return (
        <Action
          title="Go to Previous Page"
          onAction={() => setPage(Math.max(page - 1, 0))}
        />
      );
    }
    \`\`\`
    Code:
    \`\`\`
    private func submit(_ text: String) {
      guard !text.isEmpty else { return }
      let prompt = OpenAIPrompt(prompt: text, imitateChatGPT: true)
      submit(prompt)
    }
    \`\`\`
    Problems:
    Nothing found - LGTM 👌

    ${generateSelection("Code", "Problems")}`,
    creativity: "medium",
    date: "2023-08-30",
    icon: "raycast-logo-neg",
    model: "openai_gpt35_turbo",
  },
]

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export type Category = {
  name: string;
  slug: string;
  prompts: (Prompt & { iconComponent: IconComponent })[];
  icon: IconName;
  iconComponent: IconComponent;
};

const baseCategories: Category[] = [
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
  {
    name: "Raycast Prompts",
    slug: "/raycast",
    prompts: [...raycast],
    icon: "raycast-logo-neg" as const,
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

const allPrompts = baseCategories.flatMap((category) => category.prompts);

const newCategory = {
  name: "New",
  slug: "/new",
  // Show prompts that have been published for the past two weeks
  prompts: allPrompts
    .filter((prompt) => {
      const twoWeeksAgo = new Date();
      twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
      return new Date(prompt.date) >= twoWeeksAgo;
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }),
  icon: "calendar" as const,
  iconComponent: Icons["calendar"],
};

export const categories: Category[] = [
  ...(newCategory.prompts.length > 0 ? [newCategory] : []),
  ...baseCategories,
];
