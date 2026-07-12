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
        order: 5999
        },
    {
        id: "computer_lab",
        title: "Computers exists?!",
        description: "Love at first sight in a computer lab.",
        date: "April, 2008",
        imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
        order: 8999
        },
    {
        id: "hello",
        title: "Hello, World!",
        date: "30th of June, 2000",
        imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
        order: 9999
        },

];
