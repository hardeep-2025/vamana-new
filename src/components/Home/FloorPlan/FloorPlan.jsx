import { useState } from 'react';
import './floorplan.css';
import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useFormContext } from '../../FormContext';

const floor1 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/4+1BHK.webp`;
const floor2 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/3+1BHK.webp`;
const floor3 = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/3-BHK.webp`;
const penthouse = `${process.env.REACT_APP_API_URL}/assests/images/floorplan/penthouse.webp`;
const openIcon = `${process.env.REACT_APP_API_URL}/assests/images/open-icon.png`;

const FloorPlan = () => {

    const { openPriceForm } = useFormContext();

    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    return(
        <>
            <section className="home-floorplan-section padding-top" id="floorplan">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='main_heading'>Floor Plan</h2>
                            <Tab.Container id="floor_plans_tabs" defaultActiveKey="3BHK">
                                <Nav variant="pills" className="flex-row floor_plans_nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="3BHK">3 BHK Apartment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3+1BHK">3 + 1 BHK Apartments</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="4+1BHK">4 + 1 BHK Apartments</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="penthouse">Penthouse / Duplex</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="4+1BHK">
                                        <div className="floor_blans_image">
                                            <img src={floor1} alt="Floor plan of 4+1BHK luxury apartments in Zirakpur by Vamana Arvindam offering spacious interiors, modern design, and premium lifestyle amenities" className="floor_plan_img" onClick={() => setOpenPlan1(true)} />
                                            <Lightbox
                                                open={openPlan1}
                                                close={() => setOpenPlan1(false)}
                                                slides={[
                                                    { src: floor1 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title">4+1 BHK APARTMENT</h3>
                                                <p className="floor_text_content">Super Area - 2325 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Request More Details About Vamana Residences", "Share your information, and our team will provide all the details you need to make an informed decision.", "Enquire Now", "request")}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* 3BKH + 1 */}
                                    <Tab.Pane eventKey="3+1BHK">
                                        <div className="floor_blans_image">
                                            <img src={floor2} alt="Floor plan of 3 + 1BHK luxury apartments in Zirakpur by Vamana Arvindam featuring elegant interiors, modern architecture, and top-class amenities" className="floor_plan_img" onClick={() => setOpenPlan2(true)} />
                                            <Lightbox
                                                open={openPlan2}
                                                close={() => setOpenPlan2(false)}
                                                slides={[
                                                    { src: floor2 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title">3+1 BHK APARTMENT</h3>
                                                <p className="floor_text_content">Super Area - 2690 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Request More Details About Vamana Residences", "Share your information, and our team will provide all the details you need to make an informed decision.", "Enquire Now", "request")}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* 3BHK */}
                                    <Tab.Pane eventKey="3BHK">
                                        <div className="floor_blans_image">
                                            <img src={floor3} alt="Floor plan of 3 BHK luxury flats in Zirakpur at Vamana Arvindam showcasing spacious layout and modern design" className="floor_plan_img" onClick={() => setOpenPlan3(true)} />
                                            <Lightbox
                                                open={openPlan3}
                                                close={() => setOpenPlan3(false)}
                                                slides={[
                                                    { src: floor3 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title">3 BHK APARTMENT</h3>
                                                <p className="floor_text_content">Super Area - 2325.00 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Request More Details About Vamana Residences", "Share your information, and our team will provide all the details you need to make an informed decision.", "Enquire Now", "request")}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* Penthouse */}
                                    <Tab.Pane eventKey="penthouse">
                                        <div className="floor_blans_image">
                                            <img src={penthouse} alt="Floor plan of Penthouse luxury flats in Zirakpur at Vamana Arvindam showcasing spacious layout and modern design" className="floor_plan_img" onClick={() => openPriceForm("Request More Details About Vamana Residences", "Share your information, and our team will provide all the details you need to make an informed decision.", "Enquire Now", "request")} />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title blur">Penthouse / Duplex</h3>
                                                <p className="floor_text_content blur">Super Area - 2325 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => openPriceForm("Request More Details About Vamana Residences", "Share your information, and our team will provide all the details you need to make an informed decision.", "Enquire Now", "request")}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FloorPlan