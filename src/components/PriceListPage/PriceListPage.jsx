import { useLocation } from "react-router-dom";
import PriceList from "../Home/PriceList/PriceList"
import MetaData from "../Layouts/MetaData"

const PriceListPage = () => {

    const location = useLocation();

    return(

        <>
            <MetaData 
                title={"Price List - Vamana Group Price List"}
                description={"Check out the price list of the luxurious flats at Vamana Group. Choose from various options available as per your budget, affordability and premium living."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <PriceList />
        </>
        
    )
}

export default PriceListPage