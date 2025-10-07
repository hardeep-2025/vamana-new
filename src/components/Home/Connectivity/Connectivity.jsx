import { Col, Container, Row } from "react-bootstrap";
import "./Connectivity.css";
import connectivityBg from "../../../assests/images/location_bg.jpg";
import transport from "../../../assests/images/connectivity/public-transport.png";
import malls from "../../../assests/images/connectivity/malls.png";
import golf from "../../../assests/images/connectivity/golf.png";
import itService from "../../../assests/images/connectivity/it-service.png";
import hospitals from "../../../assests/images/connectivity/hospital.png";
import weekend from "../../../assests/images/connectivity/map.png";

const Connectivity = () => {

    const locations = [
        {
            title: "Public Transportation",
            icon: transport,
            values: [
                "Bus Stand - 5 mins", 
                "International Airport – 7 mins",
                "Railway Station – 12 mins",
            ]
        },
        {
            title: "Malls & Multiplexes",
            icon: malls,
            values: [
                "Paras Downtown - 5 mins", 
                "Cosmo Plaza - 4 mins",
                "Elante Mall - 15 mins",
                "Metro/Best Price – 4 mins",
                "Inox Cinemas - 3 mins",
            ]
        },
        {
            title: "Golf Course & Clubs",
            icon: golf,
            values: [
                "Panchkula Golf Course - 10 mins", 
                "Chandigarh Golf Club - 20 mins",
                "Golf Range - 15 mins",
                "Devi Lal Sports Complex - 8 mins",
                "Mohali Club - 15 mins",
            ]
        },
        {
            title: "IT/Industrial Area",
            icon: itService,
            values: [
                "Panchkula Industrial Area – 8 mins", 
                "IT Park, Panchkula - 10 mins",
                "Chandigarh IT Park – 15 mins",
                "Chandigarh Industrial Area – 12 mins",
            ]
        },
        {
            title: "Hospitals",
            icon: hospitals,
            values: [
                "GMCH, Sector 32, Chandigarh - 15 mins", 
                "Alchemist, Panchkula - 15 mins",
                "Fortis Mohali – 15 mins",
                "Amcare - 3 mins",
                "Mehar - 2 mins",
            ]
        },
        {
            title: "Weekend Gateways",
            icon: weekend,
            values: [
                "Kasauli – 60 mins", 
                "Pinjore Garden – 30 mins",
                "Morni Hills - 30 mins",
                "Timber Trail - 30 mins",
                "Shimla - 150 mins",
            ]
        }
    ]

    return(
        <div className="connectivity_section padding-top padding-bottom" id="location">
            <img src={connectivityBg} alt="Connectivity" className="connectivity_section_bg" />
            <Container>
                <Row>
                    <Col>
                        <p className="main_heading">Zirakpur Patiala Highway</p>
                        <h2 className="large_heading">Excellent Location & Connectivity!</h2>
                        <div className="connectivity_grid">
                            {locations.map((item,i) => (
                                <div className="connectivity_grid_item" key={i}>
                                    <img src={item.icon} alt={item.title} className="connectivity_icon" />
                                    <div className="connectivity_text_block">
                                        <h3 className="connectivity_title">{item.title}</h3>
                                        {item.values.map((subitem,i) => (
                                            <p className="connectivity_text" key={i}>{subitem}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Connectivity