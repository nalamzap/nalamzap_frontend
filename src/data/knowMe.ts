import { KnowMeCard } from '../types';

export const knowMeCards: KnowMeCard[] = [
  {
    id: "card_1",
    title: "Mind & Emotions",
    subtitle: "How I think, feel, and process things",
    description: "I spend a lot of time observing people, systems, and my own reactions to them. I'm drawn to questions of fairness, emotional balance, and why things are the way they are.\n\nI don't experience emotions loudly and I tend to analyze feelings before expressing them, trying to understand how they influence decisions.\n\nMy mind loops.. revisiting ideas, questioning assumptions, and refining them. Sometimes this becomes overthinking; other times, it leads to clarity.",
    primaryActionLabel: "Grab a coffee/meal",
    primaryActionUrl: "mailto:nalamzap@gmail.com?subject=Let's Grab Coffee",
    order: 1
  },
  {
    id: "card_2",
    title: "At a Glance - Interests",
    subtitle: "Exploring limits and disciplines",
    description: "**Create** - Programming, Blog & Author, Pencil Sketch\n\n**Media** - Anime & Manga, K-Drama & C-Drama, Music & Movies, Learning Japanese\n\n**Movement** - Karate, Walking, Cycling, Skateboarding & skating\n\nGames, Thinking",
    primaryActionLabel: "See recommendations",
    primaryActionUrl: "/recommendations",
    primaryActionInternal: true,
    order: 2
  },
  {
    id: "card_3",
    title: "Programming",
    subtitle: "Building, thinking, refining",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
    description: "Programming is both my profession and a thinking tool. I enjoy shaping systems, questioning assumptions, and optimizing flows; not just making things work, but making them feel right.",
    primaryActionLabel: "View Projects",
    primaryActionUrl: "https://projects.nalamzap.dev", // Using subdomain as requested
    order: 3
  },
  {
    id: "card_4",
    title: "Author",
    subtitle: "Blogging for fun, authoring a novel",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    description: "Writing is how I let thoughts exist outside my head. Blogging is casual and exploratory; a place to think out loud without pressure.\n\nLonger writing is different. Working on a novel is slower, more deliberate, and more personal. It's less about output and more about staying with an idea long enough to understand it.",
    primaryActionLabel: "Read Blog",
    primaryActionUrl: "https://blog.nalamzap.dev",
    secondaryActionLabel: "Read Book",
    secondaryActionUrl: "https://books.nalamzap.dev",
    order: 4
  }
];
