import React from 'react';

import ServicesHero from '../components/ServicesHero';
import TopProfessionals from '../components/TopProfessionals';
import OtherProviders from '../components/OtherProviders';
import GalleryCTA from '../components/GalleryCTA';
import SearchBarSection from '../components/Searchbar';
import Professionals from '../components/Professionals';


const ServicesPage = () => {
  return (
    <div className="font-sans">
     
      <ServicesHero />
      <SearchBarSection />
      <Professionals />
      <OtherProviders />
      <GalleryCTA />
      
    </div>
  );
};

export default ServicesPage;
