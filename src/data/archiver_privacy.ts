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

export const archiverPrivacyData: PrivacyPolicyData = {
  appName: "Archiver",
  developerName: "Sk Nazibul Alam",
  packageName: "dev.nalamzap.archiver",
  contactEmail: "nazibul@nalamzap.dev",
  effectiveDate: "November 15, 2026",
  sections: [
    {
      title: "1. Local File Processing & Privacy",
      content: [
        "Archiver (\"we\", \"our\", or \"us\") respects your privacy. This Privacy Policy outlines how dev.nalamzap.archiver handles data when you use the Archiver mobile application for Android.",
        "Archiver is a utility application designed for local file management, file compression (ZIP, 7Z, TAR), archive extraction (ZIP, 7Z, RAR, TAR), and archive contents inspection.",
        "• Local Storage Only: All file creation, archive extraction, file manipulation, and file inspection occur locally on your Android device.",
        "• Zero Cloud File Access: We do NOT collect, read, upload, transfer, or store your personal files, file names, archive contents, or file metadata on any external server or cloud service."
      ]
    },
    {
      title: "2. Information Collected by Third-Party Services",
      content: [
        "Archiver integrates third-party services for advertisement delivery.",
        "Google AdMob (Google LLC)",
        "• We use Google AdMob to display banner and interstitial advertisements within the app.",
        "• AdMob may collect and process certain non-personally identifiable technical information to serve contextual or personalized advertisements and analyze ad performance.",
        "• Types of data collected by AdMob may include:",
        "  - Advertising ID (AAID / GAID)",
        "  - IP Address & coarse location data",
        "  - Device diagnostics, model, operating system version, and performance logs",
        "  - Interaction data with displayed advertisements",
        "• For more details on Google's privacy practices, please refer to Google's Privacy Policy:",
        "  https://policies.google.com/privacy"
      ]
    },
    {
      title: "3. Permissions Required by the App",
      content: [
        "Archiver requests minimal system permissions necessary for its functionality:",
        "• INTERNET & ACCESS_NETWORK_STATE: Required to fetch and display advertisements via Google AdMob, and to check network availability.",
        "• Storage / File Management Permissions: Required to read and write files on your device so that you can create archives and extract files as requested."
      ]
    },
    {
      title: "4. Children's Privacy",
      content: [
        "Archiver is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe child data has been inadvertently processed, please contact us immediately so we can take appropriate measures."
      ]
    },
    {
      title: "5. Data Security",
      content: [
        "Because your files remain entirely on your device, you retain complete ownership and physical control of your data. We recommend keeping your device software up to date and secured with appropriate device passcodes."
      ]
    },
    {
      title: "6. Your Rights & Ad Preferences",
      content: [
        "• You can reset or opt out of personalized advertising at any time through your Android device settings (Settings > Google > Ads).",
        "• You can disable advertisements entirely within the app by activating Pro Mode (Ad-Free)."
      ]
    },
    {
      title: "7. Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time. Any changes will be updated within this document with a revised \"Last Updated\" date."
      ]
    },
    {
      title: "8. Contact Us",
      content: [
        "If you have any questions or concerns regarding this Privacy Policy, please contact us at:",
        "Email: nazibul@nalamzap.dev",
        "Package Name: dev.nalamzap.archiver"
      ]
    }
  ]
};
