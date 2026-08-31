import React from 'react';
import "./ProjectOverview.css"
import { Col, Container, Row } from 'react-bootstrap';
import bg from "./bg.png"
import sideImage from "./sideimage.png"
import check from "./checked.png"
const overviewPoints = [
    "Vamana Arvindam by Vamana Group — premium luxury apartments on Patiala Road / High Ground Lights, Zirakpur, Punjab.",
    "Spread across 7.7 acres with direct highway approach on NH-7 / Patiala Highway.",
    "Features 30,000 sq. ft. Club Zaira clubhouse — a world-class recreational facility.",
    "Gated complex with 4-tier security system for complete peace of mind.",
    "Sports amenities include jogging track, badminton court, cycling track, tennis court and cricket practice area.",
    "Swimming pool with landscaped green zones for serene outdoor living.",
    "Basement and stilt parking available for all residents. Close to Chandigarh, Mohali, Panchkula and Chandigarh International Airport."
];

const ProjectOverview = () => {
    return (
        <div className='projectOverview'>
            <img src={bg} className='bgimage' alt="imge" />
            <Container>
                <Row>
                    <Col>
                        <div className='NumberSectionOverView'>
                            <span className='listNumberSpan'>
                                <span className='listNoYelllow'>
                                    300+
                                </span>
                                <span className='listpara'>Premium Units</span>
                            </span>
                             <span className='listNumberSpan'>
                                <span className='listNoYelllow'>
                                    30+
                                </span>
                                <span className='listpara'>World-Class Amenities</span>
                            </span>
                             <span className='listNumberSpan'>
                                <span className='listNoYelllow'>
                                    10 Min
                                </span>
                                <span className='listpara'>To Airport</span>
                            </span>
                             <span className='listNumberSpan'>
                                <span className='listNoYelllow'>
                                    3
                                </span>
                                <span className='listpara'>Configuration Types</span>
                            </span>
                             <span className='listNumberSpan'>
                                <span className='listNoYelllow'>
                                    Rera
                                </span>
                                <span className='listpara'>Approved Project</span>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='ProjectOverviewSection'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} className='mb-4 mb-lg-0'>
                            <div className='overviewImageWrap'>
                                <img
                                    src={sideImage}
                                    alt="Project Overview"
                                    className='overviewImage'
                                />
                            </div>
                        </Col>

                        <Col lg={6} md={12}>
                            <h2 className='overviewHeading max-[767px]:pt-12'>Project Overview</h2>

                            <ul className='overviewList'>
                                {overviewPoints.map((point, index) => (
                                    <li className='overviewListItem' key={index}>
                                        <span className='overviewTickIcon'>
                                            <img src={check} alt="tick" />
                                        </span>
                                        <span className='overviewListText'>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProjectOverview;
