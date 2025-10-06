import { useLocation } from "react-router-dom";
import Gallery from "../Home/Gallery/Gallery"
import MetaData from "../Layouts/MetaData"

const GalleryPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Photo Gallery - Experience the Beauty of Vamana Group Flats"}
                description={"Browse through our stunning photo gallery to get a glimpse of the luxurious lifestyle at Vamana Arvindam. Explore beautiful interiors, lush landscapes, and world-class amenities at Vamana Group Zirakpur."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <Gallery />
        </>
    )
}

export default GalleryPage