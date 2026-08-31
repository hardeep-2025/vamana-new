import "./Amenities.css";
import { Col, Container, Row } from "react-bootstrap";
import img3 from "./building2.png"
import img1 from "./measurement.png"
import img2 from "./verified.png"
import img4 from "./building.png"
import img5 from "./golf-club.png"
import img6 from "./parking.png"
import img7 from "./highway.png"
import img8 from "./home.png"
import check from "./check.png"




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
    const specs = [
  {
    icon: img1,
    label: "Project Size",
    value: "7.7 Acres",
  },
  {
    icon: img2,
    label: "Clubhouse",
    value: "30,000 sq.ft. Club Zaira",
  },
  {
    icon: img3,
    label: "Security",
    value: "4 Tire Security System",
  },
  {
    icon: img4,
    label: "Parking",
    value: "Basement + Stilt Parking",
  },
  {
    icon: img5,
    label: "Structure",
    value: "Stilt + 14/15 Floors",
  },
  {
    icon: img6,
    label: "Highway Access",
    value: "Direct NH-7 / Patiala Hiway Approch",
  },
  {
    icon: img7,
    label: "Total Units",
    value: "330 Luxury Apartments",
  },
  {
    icon: img8,
    label: "Configuration",
    value: "3 BHK, 3+1 BHK, 4+1 BHK",
  },
];


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
                          <div className="specifications_full">
                               
                            <div className="mx-auto bg-white rounded-3xl shadow-xl p-[43px] max-[767px]:px-[20px]">
                            {/* Header */}
                            <div className="flex items-center !gap-3 mb-8">
                                <img src={check} alt=""/>
                                <h2 className="!text-[30px]  font-semibold text-gray-900">
                                Specifications
                                </h2>
                            </div>
                        
                            {/* Grid */}
                            <div className="grid grid-cols-2 max-[767px]:grid-cols-1 gap-x-10 gap-y-7 px-3">
                                {specs.map((spec, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <img
                                    src={spec.icon}
                                    alt={spec.label}
                                    className="w-6 h-6 mt-0.5 shrink-0 object-contain"
                                    />
                                    <div>
                                    <p className="text-[16px] text-[#686868] font-light mb-1">
                                        {spec.label}
                                    </p>
                                    <p className="text-[16px] font-bold text-[#000000]">{spec.value}</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Amenities