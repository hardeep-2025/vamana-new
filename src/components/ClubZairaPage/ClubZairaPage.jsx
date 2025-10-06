import { useLocation } from "react-router-dom";
import ClubZaira from "../Home/ClubZaira/ClubZaira"
import MetaData from "../Layouts/MetaData"

const ClubZairaPage = () => {

    const location = useLocation();

    return (
        <> 
            <MetaData 
                title={" Club Zaira - World - Class Luxurious Amenities at Vamana Group Club"}
                description={"Discover Club Zaira, the social hub at Vamana.Enjoy state - of - the - art facilities and amenities designed for luxury, relaxation, fitness, and entertainment."} 
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
                        
            <ClubZaira />
        </>

    )
}

export default ClubZairaPage
