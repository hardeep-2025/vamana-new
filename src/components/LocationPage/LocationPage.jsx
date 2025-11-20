import { useLocation } from "react-router-dom";
import MetaData from "../Layouts/MetaData"
import Connectivity from "../Home/Connectivity/Connectivity";

const LocationPage = () => {

    const location = useLocation();

    return( 
        <>

            <MetaData 
                title={"Vamana Group Location Map"}
                description={"Discover the prime location of Vamana Flat. Strategically situated on National Highway with excellent connectivity, enjoy easy access to schools, hospitals, shopping centers, and more."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <Connectivity />
        </>
        
    )
}

export default LocationPage