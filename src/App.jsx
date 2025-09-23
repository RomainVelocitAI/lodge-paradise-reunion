import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RealEstateApp from './RealEstateApp';
import NosProjets from './pages/NosProjets';
import VillasPremium from './pages/VillasPremium';
import Maisons3Facades from './pages/Maisons3Facades';
import BatimentsMultiples from './pages/BatimentsMultiples';
import CatalogueLodges from './pages/CatalogueLodges';
import MateriauxNobles from './pages/MateriauxNobles';
import ZonesImplantation from './pages/ZonesImplantation';
import InvestissementDefiscalisation from './pages/InvestissementDefiscalisation';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import MentionsLegales from './pages/MentionsLegales';
import CGV from './pages/CGV';
import RGPD from './pages/RGPD';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        {/* Page d'accueil - RealEstateApp reste intacte */}
        <Route path="/" element={<RealEstateApp />} />

        {/* Pages dédiées pour chaque section */}
        <Route path="/nos-projets" element={<NosProjets />} />
        <Route path="/villas-premium" element={<VillasPremium />} />
        <Route path="/maisons-3-facades" element={<Maisons3Facades />} />
        <Route path="/batiments-multiples" element={<BatimentsMultiples />} />
        <Route path="/catalogue-lodges" element={<CatalogueLodges />} />
        <Route path="/materiaux-nobles" element={<MateriauxNobles />} />
        <Route path="/zones-implantation" element={<ZonesImplantation />} />
        <Route path="/investissement-defiscalisation" element={<InvestissementDefiscalisation />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/rgpd" element={<RGPD />} />
      </Routes>
    </Router>
  );
}

export default App;