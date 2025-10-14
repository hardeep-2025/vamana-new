import "./Banner.css";
import banner1 from "../../../assests/images/banner/newbanner1.jpg";
import banner2 from "../../../assests/images/banner/newbanner2.jpg";
import banner3 from "../../../assests/images/banner/newbanner3.png";
import logoBlack from "../../../assests/images/logo-black.png";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { useFormContext } from "../../FormContext";

const slides = [
    {
        image: banner1,
        imageAlt: "New residential projects in Zirakpur featuring Vamana Arvindam’s modern apartments with premium amenities and elegant design."
    },
    {
        image: banner2,
        imageAlt: "Vamana Arvindam Group Zirakpur offering premium 3BHK and 4BHK luxury apartments with modern amenities and prime location."
    },
    {
        image: banner3,
        imageAlt: "Green garden area at Zirakpur flats 3BHK in Vamana Arvindam offering lush landscapes and a peaceful luxury living environment."
    }
]

const Banner = () => {

    const { openPriceForm } = useFormContext();

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <>
            <div className="banner_slider">
                <Slider {...settings}>
                    {slides.map((el, i) => (
                        <div className="banner_slider_item" key={i}>
                            <img src={el.image} alt={el.imageAlt} className="banner_slider_bg" />
                        </div>
                    ))}
                </Slider>
                <div className="banner_slider_text">
                    <div className="banner_slider_text_inner">
                        <div className="bannner_slider_white_box">
                            <p className="booking_text">Booking Open</p>
                            <div className="logo_location">
                                <img src={logoBlack} alt="Vamana Arvindam Zirakpur" className="logo_image" />
                                <p className="logo_location_text">At Zirakpur chandigarh</p>
                            </div>
                            <div className="points_block">
                                <p className="points_block_text">Land Parcel : 7.7 Acres</p>
                                <p className="points_block_text">ARV SC in Flats</p>
                                <p className="points_block_text">Dual Core Open Floors</p>
                                <p className="points_block_text">Fully Loaded Kitchens</p>
                                <p className="points_block_text">Complete Wooden work</p>
                                <p className="points_block_text">10 Ft Wide Sun Deck</p>
                            </div>
                            <div className="banner_gradient_block">
                                <p className="banner_gradient_text">Limited Time Period Offer</p>
                                <p className="banner_gradient_text">Beautiful Floor Lobbies</p>
                                <p className="banner_gradient_text">High Speed Elevators</p>
                            </div>
                            <div className="banner_bottom_text">
                                <p className="starting_price_text">Luxurious 3, 3+1 & 4+1 BHK Apartments <br/>Starting Price</p>
                                <p className="banner_price">₹1.5 Cr* Onwards</p>
                                <Button className="banner_enquire_btn" onClick={openPriceForm}>Enquire Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Banner