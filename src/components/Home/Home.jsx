import MetaData from "../Layouts/MetaData"
import AboutSection from "./AboutSection/AboutSection"
import Amenities from "./Amenities/Amenities"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import MasterPlan from "./MasterPlan/MasterPlan"
import PriceList from "./PriceList/PriceList"
import ClubZaira from "./ClubZaira/ClubZaira"
import Banner from "./Banner/Banner"
import Connectivity from "./Connectivity/Connectivity"
import DigitalTour from "./DigitalTour/DigitalTour"
import ProjectOverview from "./ProjectOverview/ProjectOverview"
import SlideBlog from "../BlogPage/SlideBolg"

const Home = () => {
    const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "vamanaresidences",
  "image": "https://vamanaresidences.com/assests/images/logo.png",
  "@id": "https://vamanaresidences.com/#realestateagent",
  "url": "https://vamanaresidences.com/",
  "telephone": "+91-7339903423",
  "priceRange": "Rs1.5Cr - Rs2Cr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "High Ground Lights, Patiala Rd",
    "addressLocality": "Zirakpur, Punjab",
    "postalCode": "140603",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  } 
}


    return (
        <>
            <MetaData 
                title={"Vamana Arvindam | Buy Luxury Flats in Zirakpur"} 
                description={"Vamana Arvindam Group Zirakpur offers 3BHK & 4BHK luxury flats with modern amenities and prime connectivity. Discover premium residential flats for sale in the heart of Zirakpur."} 
                keywords={"Vamana Group, Vamana Arvindam, 3 BHK flats Zirakpur, 3+1 BHK flats Zirakpur, 4+1 BHK flats Zirakpur, Flats near Patiala Road Zirakpur, Luxury apartments Zirakpur, Luxury Flats in Zirakpur, Premium Property in Zirakpur, New Residential Project in Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                            localSchema={localSchema}
            />

            <Banner />
            <ProjectOverview></ProjectOverview>
            <AboutSection />
            <Amenities />
            <SlideBlog />
            <FloorPlan />
            <MasterPlan />
            <DigitalTour />
            <ClubZaira/>
            <Connectivity />
            <Gallery />
            <PriceList />
        </>
    )
}

export default Home