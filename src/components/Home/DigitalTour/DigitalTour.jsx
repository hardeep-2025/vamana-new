import { Col, Container, Row } from "react-bootstrap";
import "./DigitalTour.css";
const digitalVideo = `${process.env.REACT_APP_API_URL}/video/Vamana.mp4`;

const DigitalTour = () => {
    return(
        <section className="digital_tour_section padding-top">
            <Container>
                <Row>
                    <Col>
                        <h2 className='main_heading'>Digital Tour</h2>
                        <div className="digital_tour_bg">
                            <video 
                                width="100%" 
                                muted 
                                loop 
                                playsInline 
                                autoPlay
                            >
                                <source src={digitalVideo} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DigitalTour