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

export const asuStaysPrivacyData: PrivacyPolicyData = {
  appName: "AsuStays",
  developerName: "Sk Nazibul Alam",
  packageName: "dev.nalamzap.asustays",
  contactEmail: "nazibul@nalamzap.dev",
  effectiveDate: "November 20, 2026",
  sections: [
    {
      title: "1. Overview & Service Purpose",
      content: [
        "AsuStays (\"we\", \"our\", or \"us\") respects your privacy. This Privacy Policy outlines how dev.nalamzap.asustays collects, uses, and protects information when you use the AsuStays mobile application for Android.",
        "AsuStays is a PG (Paying Guest) residence discovery, co-living booking, property management, and resident ledger application designed to connect residents with verified properties, streamline bed reservations, track rent ledgers, and manage maintenance support requests."
      ]
    },
    {
      title: "2. Information Collected by AsuStays",
      content: [
        "To provide property booking, resident ledgers, and account management, we collect the following information:",
        "• Account & Profile Information: When you register or sign in (via Google Sign-In or Email & Password), we collect your Name, Email Address, Phone Number, Profile Photo, KYC document type/number (text input), and Emergency Contact details.",
        "• Residence & Booking Data: Selected PG properties, room preferences, move-in dates, bed allocations, and visit request schedules.",
        "• Ledger & Financial Records: Rent invoices, security deposit records, payment modes (such as UPI, Cash, or Bank Transfer reference numbers recorded for receipt generation), and ledger summaries.",
        "• Support Tickets & Photos: Title, description, priority, and optional photos you choose to attach when raising maintenance or housekeeping support requests."
      ]
    },
    {
      title: "3. Third-Party Services & Analytics",
      content: [
        "AsuStays integrates trusted third-party SDKs for authentication, cloud storage, crash reporting, and advertisement delivery:",
        "• Google Firebase (Google LLC)",
        "  - Firebase Authentication: Manages secure user sign-in.",
        "  - Cloud Firestore & Storage: Stores user profiles, property data, rent ledgers, and support ticket attachments with encryption in transit (HTTPS/TLS).",
        "  - Firebase Cloud Messaging (FCM): Delivers push notifications for booking confirmations, payment receipts, and ticket status updates.",
        "  - Firebase Crashlytics & Analytics: Collects anonymized crash logs and app interaction metrics to maintain app stability and performance.",
        "• Google AdMob (Google LLC)",
        "  - We use Google AdMob to display banner, native, and interstitial advertisements.",
        "  - AdMob may process device identifiers (Advertising ID / AAID), IP address, coarse location data, and ad interaction logs to serve contextual advertisements.",
        "• For more details, please review Google's Privacy Policy: https://policies.google.com/privacy"
      ]
    },
    {
      title: "4. System Permissions Required",
      content: [
        "AsuStays requests minimal Android permissions necessary for service delivery:",
        "• INTERNET & ACCESS_NETWORK_STATE: Required to communicate with Firebase cloud databases, synchronize ledgers, and load AdMob ads.",
        "• POST_NOTIFICATIONS: Required to send real-time notification updates regarding bed reservations, digital payment receipts, and maintenance ticket progress."
      ]
    },
    {
      title: "5. Data Usage & Security",
      content: [
        "• Data Encryption: All network communications are encrypted in transit using industry-standard TLS/HTTPS encryption.",
        "• Purpose Limitation: Your personal data is strictly used for authentication, booking verification, ledger tracking, and customer support. We do NOT sell, rent, or trade your personal information to third-party marketers."
      ]
    },
    {
      title: "6. Children's Privacy",
      content: [
        "AsuStays is intended for adult co-living and property management (ages 18 and older) and is not directed to children under the age of 13. We do not knowingly collect personal information from children."
      ]
    },
    {
      title: "7. Your Rights & Account Deletion",
      content: [
        "• You can view and update your profile information directly within the app under the Profile tab.",
        "• You can reset or opt out of personalized ads at any time via your device settings (Settings > Google > Ads).",
        "• Account & Data Deletion: You can request complete deletion of your account, personal data, and associated records by visiting our Account Deletion page at https://nalamzap.dev/privacy-policy/asustays-delete or contacting us at nazibul@nalamzap.dev."
      ]
    },
    {
      title: "8. Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy periodically. Any modifications will be updated within this document with an updated \"Last Updated\" date."
      ]
    },
    {
      title: "9. Contact Us",
      content: [
        "If you have any questions, privacy concerns, or data deletion requests regarding AsuStays, please contact us at:",
        "Email: nazibul@nalamzap.dev",
        "Developer: Sk Nazibul Alam",
        "Package Name: dev.nalamzap.asustays"
      ]
    }
  ]
};
