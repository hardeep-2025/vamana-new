import { Button, Col, Container, Row } from "react-bootstrap";
import "./MasterPlan.css";
import { useFormContext } from "../../FormContext";

const masterplanBg = `${process.env.REACT_APP_API_URL}/assests/images/location_bg.webp`;
const masterplan = `${process.env.REACT_APP_API_URL}/assests/images/masterplan/gate-view.webp`;
const masterplan1 = `${process.env.REACT_APP_API_URL}/assests/images/masterplan/masterplan1.webp`;
const masterplan2 = `${process.env.REACT_APP_API_URL}/assests/images/masterplan/masterplan2.webp`;

const MasterPlan = () => {

    const { openPriceForm } = useFormContext();
    
    return (
        <>
            <section className="home-masterplan-section padding-top padding-bottom" id="masterplan">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='main_heading'>Master Plan</h2>
                            <div className="master_plan_images_flex">
                                <div className="masterplan_images_col">
                                    <img src={masterplan1} alt="Master plan of luxury flats in Zirakpur at Vamana Arvindam showcasing well-planned layout, green spaces, and premium residential design" className="masterplan_images" />
                                </div>
                                <div className="masterplan_images_col">
                                    <img src={masterplan2} alt="Master plan of Vamana Arvindam Group Zirakpur showcasing well-planned layout, green spaces, and premium residential design" className="masterplan_images" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="masterplan_bottom_block padding-bottom">
                    <img src={masterplanBg} alt="Master Plan" className="master_plan_bg" />
                    <Container>
                        <Row>
                            <Col>
                                <div className="master_plan_texts_flex">
                                    <div className="master_plan_texts_col">
                                        <div className="masterplan_left_img">
                                            <div className="masterplan_left_border"></div>
                                            <img src={masterplan} alt="Entrance gate view of luxury flats for sale in Zirakpur at Vamana Arvindam offering modern architecture and premium living." className="masterplan_left" />
                                        </div>
                                    </div>
                                    <div className="master_plan_texts_col">
                                        <p className="paragraph">Nestled amidst 7.77 acres of lush greenery on the vibrant NH-7,  Patiala Highway, Vamana Residences offers a unique blend of modern living and natural serenity with its luxurious <b>3bhk flats in Zirakpur</b> and <b>4bhk flats in Zirakpur</b>. With 350 thoughtfully designed units, this meticulously planned community provides an idyllic escape from the city's hustle and bustle.</p>
                                        <p className="paragraph">Experience the perfect harmony of nature and luxury as you step into a world of well-defined residential clusters. Enjoy a plethora of world-class amenities, from state-of-the-art fitness centers to tranquil recreational spaces. Vamana's prime location, coupled with dedicated parking and top-tier security, ensures a convenient and secure lifestyle for its residents.</p>
                                        <p className="paragraph">Indulge in the epitome of comfortable living at <b>Vamana Residences.</b></p>
                                        <Button className="btn-yellow-border" onClick={() => openPriceForm("Get the Complete Vamana Residences Brochure", "Unlock all details about our 3, 3+1 & 4+1 BHK luxury residences.", "Get Brochure", "brochure")}>Request For Brochure</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>     
                </div>
            </section>
        </>
    )
}

export default MasterPlan