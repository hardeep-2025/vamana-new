import "./Amenities.css";
import { Col, Container, Row } from "react-bootstrap";

const amenitiesBg = `${process.env.REACT_APP_API_URL}/assests/images/amnities/amnities-bg.webp`;
const gate = `${process.env.REACT_APP_API_URL}/assests/images/amnities/gate.webp`;
const road = `${process.env.REACT_APP_API_URL}/assests/images/amnities/road.webp`;
const carriageway = `${process.env.REACT_APP_API_URL}/assests/images/amnities/carriageway.webp`;
const gateSecurity = `${process.env.REACT_APP_API_URL}/assests/images/amnities/security-gate.webp`;
const security = `${process.env.REACT_APP_API_URL}/assests/images/amnities/security.webp`;
const garden = `${process.env.REACT_APP_API_URL}/assests/images/amnities/garden.webp`;
const genGarden = `${process.env.REACT_APP_API_URL}/assests/images/amnities/gen-garden.webp`;
const herbs = `${process.env.REACT_APP_API_URL}/assests/images/amnities/herbs.webp`;
const meditation = `${process.env.REACT_APP_API_URL}/assests/images/amnities/meditation.webp`;
const club = `${process.env.REACT_APP_API_URL}/assests/images/amnities/club.webp`;
const swimmingPool = `${process.env.REACT_APP_API_URL}/assests/images/amnities/swimming-pool.webp`;
const playground = `${process.env.REACT_APP_API_URL}/assests/images/amnities/playground.webp`;
const party = `${process.env.REACT_APP_API_URL}/assests/images/amnities/party.webp`;
const fitness = `${process.env.REACT_APP_API_URL}/assests/images/amnities/fitness.webp`;
const meditationForest = `${process.env.REACT_APP_API_URL}/assests/images/amnities/meditation-forest.webp`;
const treeSeating = `${process.env.REACT_APP_API_URL}/assests/images/amnities/tree-seating.webp`;
const greenWall = `${process.env.REACT_APP_API_URL}/assests/images/amnities/green-wall.webp`;
const cycle = `${process.env.REACT_APP_API_URL}/assests/images/amnities/cycle.webp`;
const basketball = `${process.env.REACT_APP_API_URL}/assests/images/amnities/basketball.webp`;
const badminton = `${process.env.REACT_APP_API_URL}/assests/images/amnities/badminton.webp`;
const tennisCourt = `${process.env.REACT_APP_API_URL}/assests/images/amnities/tennis-court.webp`;
const cricket = `${process.env.REACT_APP_API_URL}/assests/images/amnities/cricket.webp`;
const theater = `${process.env.REACT_APP_API_URL}/assests/images/amnities/theater.webp`;
const cinemaAuditorium = `${process.env.REACT_APP_API_URL}/assests/images/amnities/cinema-auditorium.webp`;
const jogging = `${process.env.REACT_APP_API_URL}/assests/images/amnities/jogging.webp`;
const basement = `${process.env.REACT_APP_API_URL}/assests/images/amnities/basement.webp`;
const camera = `${process.env.REACT_APP_API_URL}/assests/images/amnities/security-camera.webp`;
const carParking = `${process.env.REACT_APP_API_URL}/assests/images/amnities/car-parking.webp`;

const Amenities = () => {

    const amenities = [
        {
            title: "Entrance Plaza With Trellis",
            icon: gate,
        },
        {
            title: "Pathway (1.2 M Wide)",
            icon: road,
        },
        {
            title: "Carriageway (5.7 M Wide)",
            icon: carriageway,
        },
        {
            title: "Gate Complex & Security Cabin",
            icon: gateSecurity,
        },
        {
            title: "Terrace Garden",
            icon: garden,
        },
        {
            title: "Zen Garden",
            icon: genGarden,
        },
        {
            title: "Healing Garden (Herbs & Aromatic Plants)",
            icon: herbs,
        },
        {
            title: "Yoga & Meditation Lawn",
            icon: meditation,
        },
        {
            title: "Luxury Amenities Club House",
            icon: club,
        },
        {
            title: "Swimming Pool",
            icon: swimmingPool,
        },
        {
            title: "Kids Play Zone",
            icon: playground,
        },
        {
            title: "Party/events Lawn",
            icon: party,
        },
        {
            title: "Outdoor Fitness Center",
            icon: fitness,
        },
        {
            title: "Outdoor Meditation Forest",
            icon: meditationForest,
        },
        {
            title: "Tree Court With Seatings",
            icon: treeSeating,
        },
        {
            title: "Vertical Green Wall",
            icon: greenWall,
        },
        {
            title: "Cycling Track",
            icon: cycle,
        },
        {
            title: "Basketball Court",
            icon: basketball,
        },
        {
            title: "Badminton Court",
            icon: badminton,
        },
        {
            title: "Tennis Court",
            icon: tennisCourt,
        },
        {
            title: "Cricket Practice Area",
            icon: cricket,
        },
        {
            title: "Amphitheater",
            icon: theater,
        },
        {
            title: "Mutipurpose Lawn",
            icon: cinemaAuditorium,
        },
        {
            title: "Jogging Track",
            icon: jogging,
        },
        {
            title: "Basement Entry/exit",
            icon: basement,
        },
        {
            title: "3 Tier Security",
            icon: security,
        },
        {
            title: "CCTV Surveillance",
            icon: camera,
        },
        {
            title: "Abundant Car Parking",
            icon: carParking,
        },
    ]

    return (
        <section className="home-amenities-section padding-top padding-bottom" id="amenities">
            <img src={amenitiesBg} alt="Modern amenities at Vamana Arvindam Zirakpur including clubhouse, gym, landscaped gardens, and luxury lifestyle features" className="amenities_section_bg" />
            <Container>
                <Row>
                    <Col>
                        <h2 className='main_heading'>Amenities</h2>
                        <div className="amenities_grid">
                            {amenities.map((item, i) => (
                                <div className="amenities_grid_item aminities-group" key={i}>
                                    <img src={item.icon} alt={item.title} className="amenities_icon animate-wobble" />
                                    <p className="amenities_text">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Amenities