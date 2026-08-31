import { useState } from 'react';
import './floorplan.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useFormContext } from '../../FormContext';
import headingIcon from "./blueprint.png"
const floor1 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/4+1BHK.webp`;
const floor2 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/3+1BHK.webp`;
const floor3 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/3-BHK.webp`;
const penthouse = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/penthouse.webp`;
const openIcon = `${process.env.REACT_APP_API_URL}/assests/images/open-icon.png`;
const floorPlanIcon = `${process.env.REACT_APP_API_URL}/assests/images/floorplan-icon.png`;

// All the plan data lives here now that every card renders at once
// instead of being switched between with tabs.
const floorPlans = [
    {
        key: "3BHK",
        badge: "3BHK Apartment",
        active: true, // gets the filled/dark badge, matches the new design
        image: floor3,
        alt: "Floor plan of 3 BHK luxury flats in Zirakpur at Vamana Arvindam showcasing spacious layout and modern design",
        title: "3 BHK APARTMENT",
        area: "Super Area - 2325.00 sq.ft.",
        cta: "Explore More",
    },
    {
        key: "3+1BHK",
        badge: "3 + 1 BHK Apartment",
        active: false,
        image: floor2,
        alt: "Floor plan of 3 + 1BHK luxury apartments in Zirakpur by Vamana Arvindam featuring elegant interiors, modern architecture, and top-class amenities",
        title: "3+1 BHK APARTMENT",
        area: "Super Area - 2690 sq.ft.",
        cta: "Explore More",
    },
    {
        key: "4+1BHK",
        badge: "4 +1 BHK Apartment",
        active: false,
        image: floor1,
        alt: "Floor plan of 4+1BHK luxury apartments in Zirakpur by Vamana Arvindam offering spacious interiors, modern design, and premium lifestyle amenities",
        title: "4 +1 BHK Apartment",
        // Update if 2325 sq.ft. from the old copy is the correct figure —
        // the new mock shows 3,685 sq.ft.
        area: "Super Area - 3,685 sq.ft.",
        cta: "Explore More",
    },
    {
        key: "penthouse",
        badge: "Penthouse / Duplex",
        active: false,
        image: penthouse,
        alt: "Floor plan of Penthouse luxury flats in Zirakpur at Vamana Arvindam showcasing spacious layout and modern design",
        title: "Penthouse / Duplex",
        area: "Super Area - 2325.00 sq.ft.",
        cta: "Sent Request",
        blurred: true, // locked/teaser card, image + text are blurred
    },
];

const FloorPlan = () => {
    const { openPriceForm } = useFormContext();

    // Tracks which card's lightbox is open (null = closed)
    const [openIndex, setOpenIndex] = useState(null);

    const handleEnquire = () => {
        openPriceForm(
            "Request More Details About Vamana Residences",
            "Share your information, and our team will provide all the details you need to make an informed decision.",
            "Enquire Now",
            "request"
        );
    };

    return (
        <>
            <section className="home-floorplan-section padding-top" id="floorplan">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="main_heading floorplan_heading">
                                <img src={headingIcon} alt="" className="floorplan_heading_icon" />
                                Floor Plan
                            </h2>

                            <div className="floorplan_grid">
                                {floorPlans.map((plan, i) => (
                                    <div
                                        key={plan.key}
                                        className={`floorplan_card ${plan.active ? "is-active" : ""}`}
                                    >
                                        <span className={`floorplan_badge  `}>
                                            {plan.badge}
                                        </span>

                                        <div className="floorplan_card_image">
                                            <img
                                                src={plan.image}
                                                alt={plan.alt}
                                                className={`floor_plan_img ${plan.blurred ? "blur" : ""}`}
                                                onClick={() =>
                                                    plan.blurred ? handleEnquire() : setOpenIndex(i)
                                                }
                                            />
                                            {!plan.blurred && (
                                                <Lightbox
                                                    open={openIndex === i}
                                                    close={() => setOpenIndex(null)}
                                                    slides={[{ src: plan.image }]}
                                                    plugins={[Fullscreen, Zoom]}
                                                    carousel={{ finite: 1 }}
                                                    render={{ buttonPrev: undefined, buttonNext: undefined }}
                                                    className="single-lightbox"
                                                />
                                            )}
                                        </div>

                                        <div className="floorplan_card_footer">
                                            <div className="floorplan_card_text">
                                                <h3 className={`floor_text_title ${plan.blurred ? "blur" : ""}`}>
                                                    {plan.title}
                                                </h3>
                                                <p className={`floor_text_content ${plan.blurred ? "blur" : ""}`}>
                                                    {plan.area}
                                                </p>
                                            </div>
                                            <Button className="floor_plans_btn" onClick={handleEnquire}>
                                                {plan.cta}
                                                <img src={openIcon} alt="open" className="open_icon" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default FloorPlan;