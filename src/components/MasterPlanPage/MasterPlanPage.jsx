import { useLocation } from "react-router-dom";
import MasterPlan from "../Home/MasterPlan/MasterPlan"
import MetaData from "../Layouts/MetaData"

const MasterPlanPage = () => {

    const location = useLocation();

    return(

        <>
            <MetaData 
                title={"Master Plan - Strategic Design & Layout - Vamana Group"}
                description={"View the master plan of Vamana Arvindam Flats. Our strategic design and layout ensure seamless integration of residential spaces, amenities, and open areas for a holistic living experience."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <MasterPlan />
        </>
        
    )
}

export default MasterPlanPage