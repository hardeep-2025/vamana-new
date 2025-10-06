import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layouts/Layout';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layouts/PageNotFound';
// import CookieConsent from "react-cookie-consent";
import Thankyou from './components/Thankyou';
import FloorPlanPage from './components/Floorplan/FloorPlanPage';
import MasterPlanPage from './components/MasterPlanPage/MasterPlanPage';
import ClubZairaPage from './components/ClubZairaPage/ClubZairaPage';
import LocationPage from './components/LocationPage/LocationPage';
import PriceListPage from './components/PriceListPage/PriceListPage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import AmenitiesPage from './components/AmenitiesPage/AmenitiesPage';

function App() {
  return (
    <>

      {/* <CookieConsent
        location="top"
        buttonText="Okay, Got It"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", color: "#000", padding: "0 20px", alignItems: "center", flexDirection: "column" }}
        buttonStyle={{ color: "#fff", fontSize: "16px", backgroundColor: "#C27C00", padding: "10px 30px" }}
        expires={150}
        overlay={true}
        containerClasses="cookie-banner"
        contentStyle={{textAlign: "center", flex: 1}}
        overlayStyle={{backgroundColor: "#00000099"}}
      >
        <p className='font-semibold text-xl mb-2'>Important</p> 'Vamana Residences' serves solely as a platform for online advertising services and does not facilitate sales between developers and website users. The information displayed does not guarantee that a developer or project is registered or compliant with the Real Estate (Regulation and Development) Act, 2016. Please exercise caution and independently verify all project information before making any purchase or decision.
      </CookieConsent> */}

      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/thankyou' element={<Thankyou />} />
            <Route path='/masterplan' element={<Home />} />
            <Route path='/floorplan' element={<Home />} />
            <Route path='/pricelist' element={<Home />} />
            <Route path='/gallery' element={<Home />} />
            <Route path='/location' element={<Home />} />
            <Route path='/clubzaira' element={<Home />} />
            <Route path='/amenities' element={<Home />} />
            <Route path='/flats' element={<Home />} />
            <Route path='/luxuryflats/3+1bhk' element={<Home />} />

            <Route path='/floor-plan' element={<FloorPlanPage />} />
            <Route path='/master-plan' element={<MasterPlanPage />} />
            <Route path='/club-zaira' element={<ClubZairaPage />} />
            <Route path='/location-map' element={<LocationPage />} />
            <Route path='/price-list' element={<PriceListPage />} />
            <Route path='/galleries' element={<GalleryPage />} />
            <Route path='/amenitie' element={<AmenitiesPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
