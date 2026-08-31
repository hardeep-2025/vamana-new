import "./Banner.css";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { useFormContext } from "../../FormContext";
import EnquireForm from "../../Layouts/EnquireForm/EnquireForm";
import { useState } from "react";
import verif from "./verified.png"
import rigth from "./right.png"
const telephone = `${process.env.REACT_APP_API_URL}/assests/images/telephone.webp`;
const appIcon = `${process.env.REACT_APP_API_URL}/assests/images/app-icon.webp`;
const rupee = `${process.env.REACT_APP_API_URL}/assests/images/rupee.webp`;
const business = `${process.env.REACT_APP_API_URL}/assests/images/businessman.webp`;
const operator = `${process.env.REACT_APP_API_URL}/assests/images/operator.webp`;
const carIcon = `${process.env.REACT_APP_API_URL}/assests/images/car-icon.webp`;

const logoBlack = `${process.env.REACT_APP_API_URL}/assests/images/logo-black.png`;
const banner1 = `${process.env.REACT_APP_API_URL}/assests/images/banner/newbanner1.webp`;
const banner2 = `${process.env.REACT_APP_API_URL}/assests/images/banner/newbanner2.webp`;
const banner3 = `${process.env.REACT_APP_API_URL}/assests/images/banner/newbanner3.webp`;

const weGetOptions = [
    {
        icon: telephone,
        text: "Expert Assistance",
    },
   
    {
        icon: appIcon,
        text: "Project Details Via Whatsapp",
    },
    {
        icon: rupee,
        text: "Exclusive Developer Pricing Guaranteed",
    },

    {
        icon: operator,
        text: "Home Loan Assistance",
    }
]

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
const [isOpen, setIsOpen] = useState(true);
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
                <div className="banner_slider_text mainBannerDivSection">
                  <div className="headingSectionBanner">
                    <div className="BookingSection">
                        Booking Open
                </div> 
                </div>
                    <div className="bannerHeading">
                        <h1 className="mainBannerHeading">
                            Vamana Arvindam Luxury Apartments
                        </h1>
                        <p className="mainHeadingSubSection">ARV SC in Flats | Dual Core Open Floors | Fully Loaded Kitchens | Complete Wooden work | 10 Ft Wide Sun Deck</p>
                    </div>


                    <div className="bannerPiontSection">
                        <span className="Reragreen"><img src={verif} alt="" /> RERA Approved</span>
                        <span className="premBrown">Premium Residences</span>
                        <span className="Sqblue">30K Sq.ft. Clubhouse</span>
                        <span className="AcresGreen">7.7 Acres</span>
                        <span className="hoemBlack">Home Loan Available</span>
                    </div>

                    <div className="bannerSubParaSection">
                        <span>Live Inspired - Premium Luxury Apartments on Patiala Road, Zirakpur</span>
                    </div>
                  

                  <div className="priceSectionBanner">
                    <span>
                        <span className="price">
                           ₹ 1.8 Cr* Onwards
                        </span>
                        <span>2.325 sq.ft.  </span><span>| </span> <span>3, 3+1 & 4+1 BHK  </span><span>|  </span> <span>RERA PBRERA-SAS79-PR1018</span>
                    </span>
                    </div>
                    <div className="banner_bottom_text">
                         <Button className="banner_enquire_btn" onClick={() => openPriceForm("Schedule Your Free Site Visit at Vamana Residences", "Experience luxury living firsthand and get personalized guidance from our expert team.", "Schedule Visit", "schedule")}>Schedule a Free Site Visit</Button>
                    </div>
                  </div>

                    {/* <div className="banner_slider_text_inner">
                        <div className="bannner_slider_white_box">
                            <p className="booking_text">Booking Open</p>
                            <div className="logo_location">
                                <h2 className="bannerHeading">Vamana Arvindam</h2>
                                <p className="logo_location_text">Luxury Apartments</p>
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
                                <p className="banner_gradient_text">
                                    <span>Limited Time Period Offer</span>
                                </p>
                                <p className="banner_gradient_text">
                                    <span>Beautiful Floor Lobbies</span>
                                </p>
                                <p className="banner_gradient_text">
                                    <span>High Speed Elevators</span>
                                </p>
                            </div>
                            <div className="banner_bottom_text">
                                <p className="starting_price_text">Luxurious 3, 3+1 & 4+1 BHK Apartments <br/>Starting Price</p>
                                <p className="banner_price">₹ 1.7 Cr* Onwards</p>
                                <Button className="banner_enquire_btn" onClick={() => openPriceForm("Schedule Your Free Site Visit at Vamana Residences", "Experience luxury living firsthand and get personalized guidance from our expert team.", "Schedule Visit", "schedule")}>Schedule a Free Site Visit</Button>
                            </div>
                        </div>
                    </div> */}
                </div>

                        <div className={`right_fixed_sidebar  ${!isOpen ? "closed" : ""}`}>
                              <button
                                className={`sidebar_handle_btn  ${!isOpen ? "goright" : ""}`}
                                onClick={() => setIsOpen(!isOpen)}
                                >
                                {isOpen ? <img src={rigth} alt="" srcset="" />: <img src={rigth} alt="" srcset="" />}
                                </button>
                        <div className="bottom_fixed_sidebar ">

                        <p className="price_list_heading">Vamana Exclusive Price List</p>
                        <p className="price_list_subtext">Explore Comprehensive and Updated Price Information for Vamana Residences</p>
                        <EnquireForm formId={"fixed"} title="Ultra-Luxurious 3, 3+1, and 4+1 BHK Flats & Penthouses/Duplexes | Starting at ₹1.5 Cr*" button="Download Price List" />
                        <div className="py-2 form-row we_get_row">
                            <p className='form_label'>What You Get</p>
                            <div className='we_get_div_grid'>
                                {weGetOptions.map((item,i) => (
                                    <div className='we_get_div_item flex items-center w-full gap-3 ' key={i}>
                                        <img src={item.icon} alt={item.text} className='we_get_icon w-[14px]' />
                                        <p className='we_get_tex font-medium'>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )

}

export default Banner