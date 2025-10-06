import { useLocation } from "react-router-dom";
import FloorPlan from "../Home/FloorPlan/FloorPlan.jsx"
import MetaData from "../Layouts/MetaData"

const FloorPlanPage = () => {

    const location = useLocation();

    return (
        <>
            <MetaData 
                title={"Vamana Group Floor Plans - Vamana Arvindam"}
                description={"Explore a variety of spacious and thoughtfully designed floor plans at Vamana Group Flats."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <FloorPlan />
        </>

    )
}

export default FloorPlanPage