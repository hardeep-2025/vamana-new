import './BannerSlider.css';
import { useState } from 'react';

import banner1 from '../../../assests/images/banner/banner-1.webp';
import banner2 from '../../../assests/images/banner/banner-2.webp';
import banner3 from '../../../assests/images/banner/banner-3.jpg';
import banner4 from '../../../assests/images/banner/banner-4.webp';
import banner5 from '../../../assests/images/banner/banner-5.webp';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const BannerSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // const settings = {
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     dots: true,
    //     infinite: true,
    //     arrows: false,
    //     speed: 800,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    };


    const slides = [
        {
            title: "Discover Serene Living with 3 BHK Luxury Flats in Zirakpur",
            subtitle: (
                <>
                    {/* Discover Vamana, where your home is a serene escape from urban life. Imagine a gated, green enclave with pathways crafted for peace and relaxation. Our <strong>luxurious 3BHK flats in Zirakpur and 4BHK apartments in Zirakpur</strong> offer a distinctive synthesis of quietude and modern luxury. */}
                    Vamana Residences blends nature, comfort, and elegance to offer the most tranquil flats for sale in
                    Zirakpur.
                </>
            ),

            image: banner1,
            alt: "Vamana Group - Modern 3BHK & 4BHK Flats in Zirakpur",

        },
        {
            title: "Your Dream Home Awaits at Vamana Residences",
            subtitle: (
                <>
                    {/* Vamana isn't just an address; it's a serene sanctuary away from the bustle of city life. Imagine stepping into a secure, gated community where lush greenery and thoughtfully designed walkways create a tranquil atmosphere. Vamana promises a lifestyle where peace and comfort seamlessly blend with modern luxury with our <strong>3 BHK flats in Zirakpur and 4 BHK flats in Zirakpur</strong>. */}
                    Explore 3 BHK luxury flats in Zirakpur crafted for those who value peace, space, and sophistication.
                </>
            ),
            image: banner2,
            alt: "Vamana Residences - Modern apartment buildings in Zirakpur",
        },
        {
            title: "Where Every Day Feels Like a Retreat",
            subtitle: (
                <>
                    {/* Vamana offers an exceptional lifestyle, transforming your residence into a peaceful retreat from city noise. Picture a secure, green community with artfully designed walkways enhancing your relaxation. Our <strong>luxury flats Zirakpur</strong> uniquely combine tranquility with upscale living */}
                    Discover the perfect blend of comfort and convenience in our 3 BHK luxury flats in Zirakpur.
                </>
            ),
            image: banner3,
            alt: "Vamana Residences - Luxurious 3 BHK Apartment Interior",
        },
        {
            title: "Vamana Residences – Redefining Flats for Sale in Zirakpur.",
            subtitle: (
                <>
                    {/* Discover Vamana, where your home is a serene escape from urban life. Imagine a gated, green enclave with pathways crafted for peace and relaxation. Our <strong>luxurious 3BHK flats in Zirakpur and 4BHK apartments in Zirakpur</strong> offer a distinctive synthesis of quietude and modern luxury. */}
                    Modern architecture, spacious designs, and scenic beauty come together in our 3 BHK luxury flats in Zirakpur.

                </>
            ),

            image: banner4,
            alt: "Vamana Residence Apartment Exterior",

        },
        {
            title: "Upgrade to Elevated Living in Zirakpur",
            subtitle: (
                <>
                    {/* Discover Vamana, where your home is a serene escape from urban life. Imagine a gated, green enclave with pathways crafted for peace and relaxation. Our <strong>luxurious 3BHK flats in Zirakpur and 4BHK apartments in Zirakpur</strong> offer a distinctive synthesis of quietude and modern luxury. */}
                    Embrace spacious 3 BHK luxury flats at Vamana Residences with modern comforts and green surroundings.
                </>
            ),

            image: banner5,
            alt: "Vamana Residence Apartment Exterior",

        }
    ];

    return (
        <section className="overflow-hidden">
            <Slider {...settings}>
                {slides.map((el, i) => (
                    <div className='w-full content-center h-screen relative overflow-hidden' key={i}>
                        <div className='max-w-6xl mr-auto ml-0 flex relative banner-slider text-white px-2.5 py-3 z-10'>
                            <div className="flex flex-col items-center">
                                <div md={12} xl={10} className='w-full md:w-4/5 m-auto'>
                                    <div className='flex   h-full flex-col gap-4 text-left'>
                                        {activeSlide === i ? (
                                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]'>{el.title}</h1>
                                        ) : (
                                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]'>{el.title}</h2>
                                        )}

                                        <h2 className='text-md sm:text-[26px] font-medium tracking-wider'>{el.subtitle}</h2>
                                        <p className='text-[13px] sm:text-[16px] md:text-[20px] font-medium bg-[#FF0500]  w-fit luxary'>Exclusive flats starting from ₹ 1.5 Cr. Onwards</p>
                                        <div className='w-72 h-px bg-white mt-8'></div>
                                        <ul className='flex flex-col md:flex-row gap-4'>
                                            <li className='flex gap-2 items-center text-sm font-medium'><FontAwesomeIcon icon={faHome} /> 3 BHK Apartments</li>
                                            <li className='flex gap-2 items-center text-sm font-medium'><FontAwesomeIcon icon={faHome} /> 3+1 BHK Apartments</li>
                                            <li className='flex gap-2 items-center text-sm font-medium'><FontAwesomeIcon icon={faHome} /> 4+1 BHK Apartments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LazyLoadImage
                            src={el.image}
                            alt={el.alt}
                            className="w-full object-cover object-center absolute top-0 h-full banner-slider-bg"
                            style={{ zIndex: "-1" }}
                        />
                        <div className='w-full absolute top-0 h-full' style={{ backgroundColor: "#00000080" }}></div>
                        <p className='text-xs font-semibold p-1 absolute mx-auto bottom-0.5 right-3 text-white w-max'>*Image shown is for illustration purposes only</p>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default BannerSlider