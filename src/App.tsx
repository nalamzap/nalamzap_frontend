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
import { testConnection, getPortfolioData } from './firebase';
import { PortfolioData } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    // Run safe connectivity handshake on load
    testConnection();

    // Fetch initial portfolio data
    getPortfolioData().then(data => {
      if (data) setPortfolioData(data);
    });

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
      return <KnowMeView />;
    }
    if (currentPath.endsWith('/trace-me')) {
      return <TraceMeView externalData={portfolioData?.traceMe} />;
    }
    if (currentPath.endsWith('/hire-me')) {
      return <HireMeView externalData={portfolioData?.hireMe} />;
    }
    if (currentPath.endsWith('/find-me')) {
      return <FindMeView externalData={portfolioData?.findMe} />;
    }
    return <HomeView />;
  };

  return (
    <Layout currentPath={currentPath} navigate={navigate}>
      {renderActiveView()}
    </Layout>
  );
}
