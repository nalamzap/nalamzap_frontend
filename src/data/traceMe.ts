export interface LifeMoment {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  order: number;
}

export const lifeMoments: LifeMoment[] = [
    {
        id: "home_coimbatore",
        title: "First property!",
        description: "Purchased my first property in Coimbatore.",
        date: "31th of March, 2026",
        imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
        order: 28000
        },
    {
        id: "coimbatore",
        title: "Arrived at Coimbatore!",
        description: "At around 5:30 in the morning, I get off at Nava India bus stop in Coimbatore. Now, to find a nearby stay at a Zolo PG...",
        date: "6th of July, 2025",
        order: 30000
        },
    {
        id: "webvio_walk",
        title: "Taking a stroll into an unknown territory..",
        description: "After work - Mum said [OK] - I guess I'm really an adult!",
        date: "December, 2020",
        order: 36000
        },
    {
        id: "webvio",
        title: "First Job as an Android Developer!",
        description: "I moved to Kolkata for my first Job!",
        date: "November, 2020",
        order: 38000
        },
    {
        id: "icse",
        title: "ICSE was easier thanks to my awesome tutors!",
        description: "From 57% to 81.4% in 6 months is crazy. I believe it though - Had to study an extra 2 hours, making it a whole 2 hours of studying daily. I knew I could make it!",
        date: "Summer, 2017",
        order: 46500
        },
    {
        id: "sketch",
        title: "Sketching!",
        description: "I've recently taken a liking to drawing face portraits!",
        date: "Late Autumn, 2016",
        order: 46800
        },
    {
        id: "close_friends",
        title: "I failed in Chemistry in 10th's Half yearly - My friends stayed!",
        description: "After avoiding my friends for a while, I was confronted about my behaviour. I opened up to realise I shouldn't have closed myself like that.",
        date: "Late Autumn, 2016",
        order: 46900
        },
    {
        id: "failed_half_yearly",
        title: "I failed in Chemistry in 10th's Half yearly(More like boards' mock)!",
        description: "With every student from all sections of the class present, I got a lecture from the principal as she declares my score - 57%?! Not that I didn't see it coming, I didn't think it was going to be declared like that. Am I going to lose my close friends? They all score too well!",
        date: "Autumn, 2016",
        order: 47000
        },
    {
        id: "karate",
        title: "Got my white belt - Kyokushin Karate",
        description: "I have been meaning to learn for a long time!",
        date: "Summer, 2015",
        order: 48000
        },
    {
        id: "vsn",
        title: "Transfer to VSN. A new beginning?",
        description: "A lot of students for sure. It's overwhelming!",
        date: "April, 2013",
        order: 50000
        },
    {
        id: "cricket",
        title: "I joined a cricket academy/club!",
        description: "Trying my hands on the bat...",
        date: "2010",
        order: 55000
        },
    {
        id: "compaq_dual_core",
        title: "My(Dad's) first laptop!",
        description: "The hardcore laptop - HP Compaq dual core - First computer for programming, games, and much more.",
        date: "2010",
        order: 56000
        },
    {
        id: "anisha",
        title: "I'm an uncle!",
        description: "Baby Anisha was born! She makes me want to make a into a potato mash😭 She's so adorably cute!!",
        date: "20th Of May, 2009",
        order: 65000
        },
    {
        id: "computer_lab",
        title: "Computers exists?!",
        description: "Love at first sight in a computer lab.",
        date: "April, 2008",
        order: 70000
        },
    {
        id: "walk_to_remember",
        title: "A walk to remember!",
        description: "I walked to my elder Auntie's place all alone with Biryani. Mum and dad were worried looking for me everywhere! My cousin told me not to cross the main road because there are [tigers and bears]. Who would even believe that? What am I? A 3 years old?",
        date: "30th of June, 2003",
        order: 95000
        },
    {
        id: "hello",
        title: "Hello, World!",
        date: "30th of June, 2000",
        order: 99000
        },

];
