import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./AboutSection.css";

const AboutSection = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <section className="home-about-section padding-top padding-bottom" id="flats">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='main_heading'>About Us</h2>
                            <p className='paragraph'>Experience unparalleled luxury and tranquility at <a href="/" className="text-primary-yellow font-semibold">Vamana Residences</a>, a <b>new residential project in Zirakpur</b>—a gated oasis nestled amidst lush greenery and designed for those who seek the perfect balance between modern living and serene surroundings. Our thoughtfully crafted apartments not only provide a comfortable living space but also offer breathtaking views that transform your everyday routine into a peaceful retreat.</p>
                            <p className="paragraph">Imagine waking up each morning to the gentle sounds of nature and enjoying a cup of coffee on your balcony, soaking in the beauty of your surroundings. At Vamana, we prioritize your well-being, offering world-class amenities just steps from your door. From state-of-the-art fitness centers and refreshing swimming pools to beautifully landscaped gardens and dedicated play areas for children, every detail is designed to enhance your lifestyle</p>
                            <p className="paragraph">We believe that home is more than just a place to live; it's a sanctuary where you
                            can truly unwind and flourish. Our spacious and luxurious <b>3 BHK and 4 BHK apartments in Zirakpur</b> are meticulously designed to provide a seamless blend of comfort and elegance. With modern finishes and thoughtful layouts, these apartments cater to your every need, whether you're hosting a gathering or enjoying a quiet evening in.</p>
                            <p className="paragraph">As a premier option for those seeking an <b>apartment for sale in Zirakpur, Vamana Arvindam Group Zirakpur</b> offers an exceptional living experience that you won't find anywhere else. The strategic location provides easy access to nearby shopping, dining, and entertainment, ensuring that you're always connected to the vibrant life of the city while returning to the tranquility of your home.</p>
                            <p className="paragraph">At Vamana, your peace of mind is our priority. With 24/7 security and a dedicated
                            management team, you can relax knowing that you're living in a safe and well-maintained environment.</p>
                            <p className="paragraph">Embrace a lifestyle where luxury meets tranquility. Discover your dream <b>luxury flat in Zirakpur</b> in one of the best and most remarkable <b>new residential projects in Zirakpur</b> today, and take the first step towards a life of comfort, convenience, and serenity.</p>
                            <h3 className="paragraph"> Your sanctuary awaits at Vamana Arvindam Zirakpur!</h3>
                            <Button tabIndex='-1' className="btn-yellow-border" onClick={handleOpen}>Request For Brochure</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Popup */}
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
                            borderRadius: "30px",
                            backgroundColor: "#f7f7f7",
                            padding: "15px",
                        },
                    },
                }}
                aria-modal="true"
            >
                <div className="flex flex-col px-2.5 popup-form">
                    <div className="flex justify-end">
                        <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
                    </div>
                    <EnquireForm title="Request For Brochure" setOpen={setOpen} />
                </div>
            </Dialog>
        </>
    )
}

export default AboutSection