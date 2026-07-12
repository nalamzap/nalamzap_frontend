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
    // Suffix checks to withstand dynamic hosting offsets (e.g. cloud run paths)
    if (currentPath.endsWith('/know-me')) {
      return <KnowMeView navigate={navigate} />;
    }
    if (currentPath.endsWith('/trace-me')) {
      return <TraceMeView />;
    }
    if (currentPath.endsWith('/hire-me')) {
      return <HireMeView />;
    }
    if (currentPath.endsWith('/find-me')) {
      return <FindMeView />;
    }
    if (currentPath.endsWith('/recommendations')) {
      return <RecommendationsView onBack={() => navigate('/know-me')} />;
    }
    return <HomeView />;
  };

  return (
    <Layout currentPath={currentPath} navigate={navigate}>
      {renderActiveView()}
    </Layout>
  );
}
