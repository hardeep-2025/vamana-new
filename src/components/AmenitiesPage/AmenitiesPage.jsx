import { useLocation } from "react-router-dom";
import Amenities from "../Home/Amenities/Amenities"
import MetaData from "../Layouts/MetaData"

const AmenitiesPage = () => {

    const location = useLocation();

    return( 
        <>
            <MetaData 
                title={"Top-Notch Amenities - Vamana Arvindam"}
                description={"Experience unmatched luxury and convenience with the premium amenities at Vamana Group. From fitness centers to recreation zones, Vamana provide everything to elevate your living experience."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <Amenities />
        </>
       
    )
}

export default AmenitiesPage