import React from 'react';

import ProvidersHero from '../components/ProvidersHero';
import SearchResults from '../components/SearchResults';
import LatestProjects from '../components/LatestProjects';
import Partners from '../components/Partners';
import SearchBarSection from '../components/Searchbar';


const ProvidersPage = () => {
  return (
    <div className="font-sans">
     
      <ProvidersHero />
      <SearchBarSection />
      <Partners />
      <SearchResults />
      <LatestProjects />
     
    </div>
  );
};

export default ProvidersPage;
