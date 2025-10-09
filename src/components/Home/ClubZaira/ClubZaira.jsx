import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import EnquireForm from "../../Layouts/EnquireForm/EnquireForm";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./ClubZaira.css";
import clubzairaBg from "../../../assests/images/clubzaira/clubziara_bg.png";
import logoIcon from "../../../assests/images/clubzaira/logo-icon.png";
import whiteLogo from "../../../assests/images/clubzaira/white_logo_group.png";

const ClubZaira = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <section className="home-ClubZaira-section padding-top padding-bottom" id="clubzaira">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='main_heading'>Club Zaira - Live the Moment</h2>
                            <p className="paragraph"><b>Vamana Arvindam Zirakpur</b> proudly introduces Club Zaira, the premier clubhouse in the area, boasting an impressive 30,000 square feet of space designed for relaxation and recreation.</p>
                            <p className="paragraph">Club Zaira is equipped with an array of modern amenities that cater to a luxurious lifestyle. The state-of-the-art gym features the latest fitness equipment, ensuring you can maintain your workout routine with ease. For those looking to unwind, the grand rooftop swimming pool offers stunning views and a serene atmosphere, perfect for relaxation and leisure.</p>
                            <p className="paragraph">In addition to these facilities, Club Zaira includes a variety of other luxurious features, such as a spa, a multipurpose lounge, and dedicated spaces for social gatherings and events. Residents can also enjoy activities like yoga classes, indoor games, and more, providing a well-rounded experience that promotes both fitness and social interaction.</p>
                            <p className="paragraph">With its thoughtful design and comprehensive amenities, including the magnificent swimming pool, Club Zaira truly brings comfort and luxury to its users, creating an unparalleled environment for leisure and community engagement.</p>

                            <div className="clubzaira_rounded_section">
                                <img src={clubzairaBg} alt="Club Zaira at Vamana Arvindam Zirakpur featuring modern clubhouse, recreation areas, and luxury lifestyle amenities" className="club_zaira_bg" />
                                <div className="clubzaira_rounded_inner">
                                    <div className="clubzaira_content_div">
                                        <p className="rera_number">PBRERA-SAS79-PR1018</p>
                                        <div className="includge_content">
                                            <p className="includge_text">SHEER</p>
                                            <p className="includge_text white">INDULGENCE</p>
                                        </div>
                                        <p className="biggest_text paragraph">The Biggest Clubhouse in the Vicinity </p>
                                        <p className="paragraph">SPPER OVER 30,000 SQ FT</p>
                                        <img src={logoIcon} alt="Logo" className="logo_icon" />
                                        <p className="sensation_text club_text">CLUB ZAIRA</p>
                                        <p className="sensation_text">LIVE THE MOMENT</p>
                                        <img src={whiteLogo} alt="Vamana Arvindam" className="vamana_logo_white" />
                                        <p className="paragraph">3, 3+1, 4+1 Lifestyle Residencies</p>
                                    </div>
                                </div>
                            </div>

                            <Button className="btn-yellow-border" onClick={handleOpen}>Enquire For free site visit</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Dialog
                open={open}
                onClose={handleClose}
                className="form_popup"
                aria-hidden="false"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "450px",
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                            border: '1px solid #644630',
                            padding: "15px",
                        },
                    },
                }}
                aria-modal="true"
            >
                <div className="flex flex-col popup-form">
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
                    </div>
                    <EnquireForm title="Request for Free Site Visit" setOpen={setOpen} formId={"club"} />
                </div>
            </Dialog>
        </>
    )
}

export default ClubZaira