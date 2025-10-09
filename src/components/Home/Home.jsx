import MetaData from "../Layouts/MetaData"
import AboutSection from "./AboutSection/AboutSection"
import Amenities from "./Amenities/Amenities"
// import BannerSlider from "./BannerSlider/BannerSlider"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import MasterPlan from "./MasterPlan/MasterPlan"
import PriceList from "./PriceList/PriceList"
import ClubZaira from "./ClubZaira/ClubZaira"
import Banner from "./Banner/Banner"
import Connectivity from "./Connectivity/Connectivity"
import DigitalTour from "./DigitalTour/DigitalTour"

const Home = () => {
    return (
        <>
            <MetaData 
                title={"Vamana Arvindam Group Zirakpur - 3BHK, 3+1BHK & 4BHK Luxury Flats for Sale in Zirakpur"} 
                description={"Vamana Arvindam Group Zirakpur offers 3BHK & 4BHK luxury flats with modern amenities and prime connectivity. Discover premium residential flats for sale in the heart of Zirakpur."} 
                keywords={"Vamana Group, Vamana Arvindam, 3 BHK flats Zirakpur, 3+1 BHK flats Zirakpur, 4+1 BHK flats Zirakpur, Flats near Patiala Road Zirakpur, Luxury apartments Zirakpur, Luxury Flats in Zirakpur, Premium Property in Zirakpur, New Residential Project in Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
            />

            <Banner />
            {/* <BannerSlider /> */}
            <AboutSection />
            <Amenities />
            <FloorPlan />
            <MasterPlan />
            <DigitalTour />
            <ClubZaira/>
            <Connectivity />
            {/* <Clubhouse /> */}
            <Gallery />
            <PriceList />
        </>
    )
}

export default Home