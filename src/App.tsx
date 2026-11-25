/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HomeView from './components/HomeView';
import KnowMeView from './components/KnowMeView';
import TraceMeView from './components/TraceMeView';
import HireMeView from './components/HireMeView';
import FindMeView from './components/FindMeView';
import RecommendationsView from './components/RecommendationsView';
import PrintResumeView from './components/PrintResumeView';
import PrivacyPolicyView from './components/PrivacyPolicyView';
import DeleteAccountView from './components/DeleteAccountView';
import { comigPrivacyData } from './data/comig_privacy';
import { archiverPrivacyData } from './data/archiver_privacy';
import { apkExtractorPrivacyData } from './data/apk_extractor_privacy';
import { asuStaysPrivacyData } from './data/asustays_privacy';
import { deenosPrivacyData } from './data/deenos_privacy';
import { testConnection } from './firebase';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Run safe connectivity handshake on load
    testConnection();

    // Listen to tab/browser history state mutations
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderActiveView = () => {
    // Check for DeenOS privacy route specifically
    if (currentPath.includes('/deenos/privacy')) {
      return <PrivacyPolicyView data={deenosPrivacyData} navigate={navigate} />;
    }

    // Check for privacy policy & account deletion routes
    if (currentPath.includes('/privacy-policy/')) {
      const appSlug = currentPath.split('/privacy-policy/')[1]?.toLowerCase().replace(/\/$/, '');
      if (appSlug === 'comig') {
        return <PrivacyPolicyView data={comigPrivacyData} navigate={navigate} />;
      }
      if (appSlug === 'archiver') {
        return <PrivacyPolicyView data={archiverPrivacyData} navigate={navigate} />;
      }
      if (appSlug === 'extractor' || appSlug === 'apk-extractor' || appSlug === 'apkextractor') {
        return <PrivacyPolicyView data={apkExtractorPrivacyData} navigate={navigate} />;
      }
      if (appSlug === 'asustays') {
        return <PrivacyPolicyView data={asuStaysPrivacyData} navigate={navigate} />;
      }
      if (appSlug === 'asustays-delete') {
        return <DeleteAccountView navigate={navigate} />;
      }
      if (appSlug === 'deenos') {
        return <PrivacyPolicyView data={deenosPrivacyData} navigate={navigate} />;
      }
      return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-2xl font-bold mb-2">Privacy Policy Not Found</h1>
          <p className="text-zinc-400 mb-6">The privacy policy for "{appSlug}" could not be found.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl text-white font-medium cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      );
    }

    // Suffix checks to withstand dynamic hosting offsets (e.g. cloud run paths)
    if (currentPath.endsWith('/know-me')) {
      return <KnowMeView navigate={navigate} />;
    }
    if (currentPath.endsWith('/trace-me')) {
      return <TraceMeView />;
    }
    if (currentPath.endsWith('/hire-me')) {
      return <HireMeView navigate={navigate} />;
    }
    if (currentPath.endsWith('/find-me')) {
      return <FindMeView />;
    }
    if (currentPath.endsWith('/recommendations')) {
      return <RecommendationsView onBack={() => navigate('/know-me')} />;
    }
    if (currentPath.endsWith('/print-resume')) {
      return <PrintResumeView onBack={() => navigate('/hire-me')} />;
    }
    return <HomeView />;
  };

  const isPrintView = currentPath.endsWith('/print-resume');

  if (isPrintView) {
    return renderActiveView();
  }

  return (
    <Layout currentPath={currentPath} navigate={navigate}>
      {renderActiveView()}
    </Layout>
  );
}
