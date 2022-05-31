import { soundXLogo, spamCheckerLogo, sireneLogo } from "./logo-data";

export const projectsData = {
  1: {
    title: "E-commerce Store",
    video: "/images/project/sirene.mp4",
    videoPoster: "/images/project/sirene.png",
    description:
      "Sirène is a full-stack e-commerce store with a clean modern polished design that enables customers to find and purchase products smoothly.",
    description_short:
      "Sirène is a full-stack e-commerce store with a clean modern polished design that enables customers to find and purchase products smoothly.",
    features: [
      "Checkout",
      "Product Filtering & sorting",
      "Product Search",
      "CRM",
    ],

    stack: ["Laravel", "Vue", "MySQL", "Tailwind"],
    url: "https://sirene.garethrichards.dev",
    code: "https://github.com/TheBoringBOT/mnml-ecommerce",
    logo: sireneLogo,
    comingSoon: false,
  },
  2: {
    title: "Spam Checker",
    video: "/images/project/spam.mp4",
    videoPoster: "/images/project/spam.png",
    description:
      "A text editor for writing email copy that checks the content in real-time for known spam word triggers and highlights the offending words.",
    description_short:
      "A text editor for writing email copy that checks the content in real-time for known spam word triggers and highlights the offending words.",
    features: [
      "Word analysis",
      "Word highlighting",
      "Word count",
      "Reading time",
    ],
    stack: ["React", "Tailwind", "Draft-Js"],
    url: "https://spamchecker.garethrichards.dev",
    code: "https://github.com/TheBoringBOT/email-spam-word-checker",
    logo: spamCheckerLogo,
    comingSoon: false,
  },
  3: {
    title: "Sound Sharing",
    video: "/images/project/soundx.mp4",
    videoPoster: "/images/project/soundx.png",
    description:
      "A sound sharing website for users to create a profile to display their sounds & fx and for others to download freely.",
    description_short:
      "A sound sharing website for users to create a profile to display their sounds & fx and for others to download freely.",
    features: [
      "Authentication",
      "Audio processing & meta data capture",
      "Tagging system",
      "Audio Search",
    ],
    stack: ["Laravel", "Vue", "MySQL", "Tailwind"],
    url: "https://soundx.garethrichards.dev",
    code: "https://github.com/TheBoringBOT/audioapp-laravel",
    logo: soundXLogo,
    comingSoon: false,
  },

  4: {
    title: "Studio Moo",
    video: "/images/project/moo.mp4",
    videoPoster: "/images/project/moo.png",
    description:
      "Studio Moo is an agency website with a focus on clean modern design that utilizes smooth refined animations and striking composition.",
    description_short:
      "Studio Moo is an agency website with a focus on clean modern design that utilizes smooth refined animations and striking composition.",
    features: [
      "Multi-step forms",
      "Markdown blog",
      "Advanced animations",
      "Modern UI/UX",
    ],
    stack: ["React", "Next.js", "Tailwind", "Framer motion"],
    url: "https://www.google.com",
    code: "https://www.google.com",
    comingSoon: true,
  },
};
