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

export const deenosPrivacyData: PrivacyPolicyData = {
  appName: "DeenOS: Islamic Launcher & Prayer",
  developerName: "Sk Nazibul Alam",
  packageName: "dev.nalamzap.deenos",
  contactEmail: "nazibul@nalamzap.dev",
  effectiveDate: "November 20, 2026",
  sections: [
    {
      title: "1. Introduction",
      content: [
        "Welcome to DeenOS (\"we\", \"our\", or \"us\"). We respect your privacy and are committed to protecting any information processed when you use our mobile application DeenOS (the \"Application\").",
        "This Privacy Policy explains how information is handled when you download, install, and use DeenOS as your Islamic-first home launcher and daily companion."
      ]
    },
    {
      title: "2. Information Collection and Use",
      content: [
        "DeenOS is designed as a local-first Islamic home launcher and utility suite.",
        "a) Personal Data",
        "We do not collect, store, or require any personally identifiable information (PII) such as your real name, phone number, physical address, or account credentials. You can use the Application without registering or creating an account.",
        "b) Location Data",
        "The Application utilizes device location permissions strictly to calculate accurate local Prayer Times, Qibla direction, and to discover Nearby Mosques. Location data is processed locally on your device or via standard on-device location APIs. We do not sell, store, transmit, or share your precise location coordinates with external servers.",
        "c) Local Preferences and History",
        "Your reading progress, bookmarks, custom Dhikr sessions, prayer notification preferences, and launcher settings are stored securely on your local device using Android's encrypted local database (Room) and DataStore. We do not upload or back up your personal data to any external servers."
      ]
    },
    {
      title: "3. Third-Party Services and Advertisements",
      content: [
        "To support ongoing development and keep the app free, the Application incorporates third-party advertising services, specifically Google AdMob (Google Play Services).",
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
        "• LOCATION (ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION): Used locally to calculate accurate Prayer Times, Qibla bearing, and find nearby mosques.",
        "• NOTIFICATIONS & EXACT ALARMS (POST_NOTIFICATIONS / SCHEDULE_EXACT_ALARM): Used to trigger timely Azaan prayer notifications and audio reminders.",
        "• VIBRATE (VIBRATE): Used for haptic feedback and gentle azaan vibration alerts.",
        "• RECEIVE BOOT COMPLETED: Reschedules prayer alarms automatically after device reboots.",
        "• ACCESSIBILITY SERVICE / DEVICE ADMINISTRATOR: Optionally used to allow locking the device screen via double-tap gestures on empty space.",
        "• INTERNET: Required to load advertisements, optional donation QR codes, and fetch open-source prayer/mosque data."
      ]
    },
    {
      title: "5. Voluntary Donations",
      content: [
        "The Application includes a voluntary support/donation section featuring UPI and PayPal QR code images. Contributions are entirely optional and processed externally through your preferred banking, UPI, or PayPal application. We do not collect, process, or store any financial or payment card information."
      ]
    },
    {
      title: "6. Children's Privacy",
      content: [
        "The Application is not directed toward children under the age of 13. We do not knowingly collect personal information from children. If you believe third-party services have inadvertently collected information from a child, please contact us immediately."
      ]
    },
    {
      title: "7. Changes to This Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time. Any changes will be published in the application documentation or repository with an updated effective date."
      ]
    },
    {
      title: "8. Contact Us",
      content: [
        "If you have any questions or suggestions regarding this Privacy Policy, please contact us:",
        "Developer: Sk Nazibul Alam",
        "Email: nazibul@nalamzap.dev"
      ]
    }
  ]
};
