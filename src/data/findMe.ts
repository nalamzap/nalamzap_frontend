export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface FindMeData {
  email: string;
  mobile: string;
  location: string;
  socialLinks: SocialLink[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const findMeData: FindMeData = {
  email: "nazibul@nalamzap.dev",
  mobile: "+91 79082 91640",
  location: "Coimbatore, Tamil Nadu, India",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/nalamzap" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nalamzap/" }
  ],
  coordinates: {
    lat: 11.0296665,
    lng: 77.0029841
  }
};
