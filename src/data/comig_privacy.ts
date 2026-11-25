export interface PrivacyPolicyData {
  appName: string;
  developerName: string;
  packageName: string;
  contactEmail: string;
  effectiveDate: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

export const comigPrivacyData: PrivacyPolicyData = {
  appName: "ComiG Manga",
  developerName: "Sk Nazibul Alam",
  packageName: "dev.nalamzap.comig",
  contactEmail: "nazibul@nalamzap.dev",
  effectiveDate: "November 7, 2026",
  sections: [
    {
      title: "1. Introduction",
      content: [
        "Welcome to ComiG Manga (\"we\", \"our\", or \"us\"). We respect your privacy and are committed to protecting any information processed when you use our mobile application ComiG Manga (the \"Application\").",
        "This Privacy Policy explains how information is handled when you download, install, and use ComiG Manga."
      ]
    },
    {
      title: "2. Information Collection and Use",
      content: [
        "ComiG Manga is designed as a local-first offline document and comic reader.",
        "a) Personal Data",
        "We do not collect, store, or require any personally identifiable information (PII) such as your name, email address, phone number, physical address, or account credentials. You can use the Application without registering or creating an account.",
        "b) Local Files and Content",
        "All comic archives (.cbz, .zip), PDF documents, image files, reading history, bookmarks, library metadata, and preferences remain strictly stored on your local device. We do not upload, host, transmit, or back up your personal files or reading history to any external servers or cloud services."
      ]
    },
    {
      title: "3. Third-Party Services and Advertisements",
      content: [
        "To support ongoing development, the Application incorporates third-party advertising services, specifically Google AdMob (Google Play Services).",
        "Google AdMob may collect and process certain non-personally identifiable technical information to serve personalized or non-personalized advertisements, perform analytics, and prevent fraud. This information may include:",
        "• Advertising ID (Google Advertising ID / GAID)",
        "• IP address",
        "• Device model, system version, and display specifications",
        "• Ad interaction and performance data (views, clicks, diagnostics)",
        "Google's use of data is governed by Google's Privacy Policy:",
        "• https://policies.google.com/privacy",
        "• https://policies.google.com/technologies/partner-sites"
      ]
    },
    {
      title: "4. Device Permissions",
      content: [
        "The Application requests only the minimal permissions required to provide its core features:",
        "• INTERNET PERMISSION (android.permission.INTERNET): Required to load and serve advertisements provided by Google AdMob.",
        "• STORAGE / STORAGE ACCESS FRAMEWORK (SAF): Allows you to select and import local comic files (.cbz, .zip, .pdf) or image folders from your device storage into your library. File access is strictly limited to the specific files or folders you explicitly grant permission for."
      ]
    },
    {
      title: "5. Data Security",
      content: [
        "Because your library metadata, reading progress, and bookmarks are stored locally on your device using Android's encrypted local database (Room), your data security relies on your device's security settings. We recommend protecting your device with a PIN, password, or biometric lock."
      ]
    },
    {
      title: "6. Children's Privacy",
      content: [
        "The Application is not directed toward children under the age of 13 (or 16 depending on applicable local laws). We do not knowingly collect personal information from children. If you believe third-party services have inadvertently collected information from a child, please contact us immediately."
      ]
    },
    {
      title: "7. Intellectual Property Disclaimer",
      content: [
        "ComiG Manga is a standalone local file viewer application. The Application does not host, stream, distribute, or provide any copyrighted manga, comic, or text content. Users are solely responsible for ensuring they have the legal right to store and view any files opened within the Application."
      ]
    },
    {
      title: "8. Changes to This Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time. Any changes will be published in the application documentation or repository with an updated \"Last Updated\" date."
      ]
    },
    {
      title: "9. Contact Us",
      content: [
        "If you have any questions or suggestions regarding this Privacy Policy, please contact us:",
        "Developer: Sk Nazibul Alam",
        "Email: nazibul@nalamzap.dev"
      ]
    }
  ]
};
