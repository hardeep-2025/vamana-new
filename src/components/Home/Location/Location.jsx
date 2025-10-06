import { LazyLoadImage } from 'react-lazy-load-image-component';
import locationimg from '../../../assests/images/location-img.webp';
import locationOverlay from '../../../assests/images/location-overlay.png';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { useState } from 'react';

const Location = () => {

    const [openMaster, setOpenMaster] = useState(false);

    const locations = [
        {
            title: "Public Transportation",
            values: [
                "Bus Stand - 5 mins", 
                "International Airport – 7 mins",
                "Railway Station – 12 mins",
            ]
        },
        {
            title: "Malls & Multiplexes",
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
            values: [
                "Panchkula Industrial Area – 8 mins", 
                "IT Park, Panchkula - 10 mins",
                "Chandigarh IT Park – 15 mins",
                "Chandigarh Industrial Area – 12 mins",
            ]
        },
        {
            title: "Hospitals",
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
        <section className="home-location-section bg-black text-white py-8 md:py-16 px-2.5 relative" id="location">
            <div className='max-w-6xl m-auto z-10 relative'>
                <div className="flex flex-col md:flex-row gap-7 lg:gap-14">
                    <div className="w-full md:1/2 lg:w-3/5 flex flex-col gap-5">
                        <p className='text-gray-300 font-semibold text-lg'>Zirakpur Patiala Highway</p>
                        <h3 className="text-2xl sm:text-4xl font-semibold text-left">Excellent Location & Connectivity!</h3>
                        <div className='flex flex-row flex-wrap mt-10 gap-y-10'>
                            {locations.map((index, i) => (
                                <div className='flex flex-col pr-10 w-full lg:w-1/2 gap-2' key={i}>
                                    <h4 className='text-lg font-semibold mb-3'>{index.title}</h4>
                                    {index.values.map((subitem,i) => (
                                        <p className='text-sm text-gray-300' key={i}>{subitem}</p>
                                    ))}
                                </div>
                            ))} 
                        </div>
                        
                    </div>
                    <div className="w-full md:1/2 lg:w-2/5 pt-12 md:pt-0 relative overflow-hidden">
                        <img
                            src={locationimg}
                            alt='Location'
                            className='h-full object-cover object-center w-full cursor-pointer'
                            onClick={() => setOpenMaster(true)}
                        />
                        <p className='text-xs font-semibold p-1 absolute bottom-2.5 right-2.5 left-auto text-white w-auto'>*Image shown is for illustration purposes only</p>
                        <Lightbox
                                open={openMaster}
                                close={() => setOpenMaster(false)}
                                slides={[
                                    { src: locationimg }
                                ]}
                                styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                controller={{ closeOnBackdropClick: true }}
                                plugins={[Fullscreen, Zoom]}
                                carousel={{ finite: 1 }}
                                render={{
                                    buttonPrev: undefined,
                                    buttonNext: undefined,
                                }}
                                className="single-lightbox"
                            />
                    </div>
                </div>
            </div>
            <LazyLoadImage
                src={locationOverlay}
                alt='Location Overlay'
                className='h-full object-cover object-center w-full absolute top-0 left-0 opacity-15'
            />
        </section>
    )
}

export default Location