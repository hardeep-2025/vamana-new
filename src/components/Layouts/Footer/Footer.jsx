
import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo from '../../../assests/images/logo.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {

    const menuLinks = [
        {
          name: "Amenities",
          redirect: "/amenitie",
          id: "amenitie",
        },
        {
          name: "Floor Plan",
          redirect: "/floor-plan",
          id: "floor-plan",
        },
        {
          name: "Master Plan",
          redirect: "/master-plan",
          id: "master-plan",
        },
        {
          name: "Club Zaira",
          redirect: "/club-zaira",
          id: "club-zaira",
        },
        {
          name: "Location",
          redirect: "/location-map",
          id: "location-map",
        },
        {
          name: "Gallery",
          redirect: "/galleries",
          id: "galleries",
        },
        {
          name: "Price List",
          redirect: "/price-list",
          id: "price-list",
        },

    ];

    const social = [
        {
            icon: faFacebookF,
        },
        {
            icon: faTwitter,
        },
        {
            icon: faYoutube,
        },
    ]

    return(
        <section className="bg-primary-bg footer_main py-4 text-sm pt-16">
            <Container>
                <Row>
                    <Col>
                   

                        <div className="flex flex-col md:flex-row gap-[20px] justify-between pb-8 mt:pb-16">
                            <div className="w-full flex flex-col gap-[15px] md:border-r border-primary-yellow footer-columns column-first">
                                <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
                                <LazyLoadImage
                                    src={logo}
                                    alt="Vamana Arvindam"
                                    className='header-logo w-40'
                                />
                                </NavLink>
                                <p className="text-sm">Discover your dream home in this remarkable new residential project in Zirakpur today, and take the first step towards a life of comfort, convenience, and serenity.</p>
                                <p className='text-sm text-primary-yellow font-semibold '>RERA Number : PBRERA-SAS79-PR1018</p>
                                <p className="text-sm text-primary-yellow font-semibold">Contact Number : +919609600074</p>
                            </div>

                            <div className="w-full flex flex-col md:flex-row gap-[20px] footer-columns justify-between">

                                <div className="w-full md:w-auto flex flex-col gap-[15px] overflow-hidden items-start md:items-center md:ml-auto">
                                    <h6 className="text-lg font-bold text-center">Useful Links</h6>
                                    <ul className="grid grid-cols-[auto,auto] md:grid-cols-[auto] lg:grid-cols-[auto,auto] justify-center gap-x-[20px]">
                                        <li><NavLink smooth="true" to='/flats' className="text-sm font-medium hover:text-primary-yellow" ><FontAwesomeIcon icon={faAngleRight} className="text-primary-yellow pr-1.5"/> About Us</NavLink></li>
                                        {menuLinks.map((item, i) => (
                                            <li key={i}><NavLink smooth="true" to={item.redirect} className="text-sm font-medium hover:text-primary-yellow" target="_blank"><FontAwesomeIcon icon={faAngleRight} className="text-primary-yellow pr-1.5"/> {item.name}</NavLink></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full md:w-auto flex flex-col gap-[15px] md:ml-auto">
                                    <h6 className="text-lg font-bold">Follow Us On</h6>
                                    <ul className="flex flex-row gap-[20px]">
                                        {social.map((item, i) =>(
                                            <li key={i} className="bg-primary-yellow rounded-full size-[30px] flex items-center justify-center"><FontAwesomeIcon icon={item.icon} className="text-base text-white"/></li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>

                            
                        </div>
                        
                        <div className="flex flex-col items-center text-center gap-1.5 px-2.5 pt-6 pb-2.5">
                        
                            <p className='text-md hidden'>Channel Partner RERA Number : Coming Soon</p>
                            
                            
                            <p className='text-lg font-semibold md:mt-5 text-primary-yellow'>Disclaimer:</p>
                            <p className="text-[10px]"><b>1.</b> The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                            <p className='mt-1.5 text-[10px]'><b>2.</b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.</p>
                            <p className="text-[10px]">All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                            <p className='mt-1.5 text-[10px]'><b>3.</b> We are the Authorized Channel Partner of 'Vamana Group'. All rights for logo & images are reserved to developer.</p>
                            <p className='mt-1.5 text-[10px]'><NavLink to='/terms-conditions' target='_blank' className='text-primary-yellow font-semibold'>Terms & Conditions</NavLink> and <NavLink to='/privacy-policy' target='_blank' className='text-primary-yellow font-semibold'>Privacy Policy</NavLink></p>
                            <p className='mt-1.5 text-[10px]'>Crafted By: <NavLink to='https://iosandweb.net/' target='_blank' className='hover:text-primary-yellow'>IosAndWeb Technologies</NavLink></p>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer