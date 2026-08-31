import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import { useState } from 'react';
import './Connectivity.css';
import { Col, Container, Row } from 'react-bootstrap';
import golf from './golf-course.png';
import ith from './it-service.png';
import publictra from './public-transport.png';
import shopping from './shopping-center.png';
import star from './star.png';
import hospital from './hospital.png';
import map from './map.png';
import plan from "./plane.png"
const locationimg = `${process.env.REACT_APP_API_URL}/assests/images/location-img.webp`;
const locationOverlay = `${process.env.REACT_APP_API_URL}/assests/images/location-overlay.webp`;
const connectivityBg = `${process.env.REACT_APP_API_URL}/assests/images/location_bg.webp`;



const Location = () => {

    const [openMaster, setOpenMaster] = useState(false);

   const locations = [
  {
    title: "Public Transportation",
    icon: plan,
    values: [
     
      { name: "International Airport", time: "7 mins" },
      { name: "Railway Station", time: "12 mins" },
       { name: "Bus Stand", time: "5 mins" },
    ],
  },
  {
    title: "Malls & Multiplexes",
    icon: shopping,
    values: [
      { name: "Paras Downtown", time: "5 mins" },
      { name: "Cosmo Plaza", time: "4 mins" },
      { name: "Elante Mall", time: "15 mins" },
      { name: "Metro/Best Price", time: "4 mins" },
      { name: "Inox Cinemas", time: "3 mins" },
    ],
  },
  {
    title: "Golf Course & Clubs",
    icon: golf,
    values: [
      { name: "Panchkula Golf Course", time: "10 mins" },
      { name: "Chandigarh Golf Club", time: "20 mins" },
      { name: "Golf Range", time: "15 mins" },
      { name: "Devi Lal Sports Complex", time: "8 mins" },
      { name: "Mohali Club", time: "15 mins" },
    ],
  },
  {
    title: "IT/Industrial Area",
    icon: ith,
    values: [
      { name: "Mohali Industrial Area", time: "15 mins" },
      { name: "Chandigarh IT Park", time: "15 mins" },
      { name: "Panchkula Industrial Area", time: "10 mins" },
      { name: "Chandigarh Industrial Area", time: "12 mins" },
    ],
  },
  {
    title: "Hospitals",
    icon: hospital,
    values: [
      { name: "GMCH, Sector 32, Chandigarh", time: "15 mins" },
      { name: "Alchemist, Panchkula", time: "15 mins" },
      { name: "Fortis Mohali", time: "15 mins" },
      { name: "Amcare", time: "3 mins" },
      { name: "Mehar", time: "2 mins" },
    ],
  },
  {
    title: "Weekend Gateways",
    icon: map,
    values: [
      { name: "Kasauli", time: "60 mins" },
      { name: "Pinjore Garden", time: "30 mins" },
      { name: "Morni Hills", time: "30 mins" },
      { name: "Timber Trail", time: "30 mins" },
      { name: "Shimla", time: "150 mins" },
    ],
  },
];

    return(
        <section
            className="home-location-section bg-black text-white padding-top padding-bottom  relative bg-cover bg-center bg-no-repeat"
            id="location"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${locationOverlay})`,
            }}
        >

            <img
                src={connectivityBg}
                alt="Connectivity"
                className="connectivity_section_bg"
            />

<Container>
    <Row>
        <Col><div className='w-full m-auto z-10 relative'>

                <div className="flex items-center gap-4">
                    <img  src={star} alt=''/>
                    <p className=' font-semibold text-[18px]'>Zirakpur Patiala Highway</p>
                </div>

                <h3 className="text-[30px] sm:text-4xl font-semibold text-left !mt-5 !mb-12">
                    Excellent Location &amp; Connectivity!
                </h3>

                <div className="flex flex-col">
                    {locations.map((loc, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-start !justify-between md:flex-row  gap-4 md:gap-10 py-10 ${i !== 0 ? "border-t border-white" : ""
                                }`}
                        >
                            <div className="flex items-center gap-3 w-[30%] shrink-0 max-[640px]:w-full">
                               <img src={loc.icon} alt="game" srcset="" />
                                <h4 className="text-[20px] font-semibold">{loc.title}</h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8 flex-1">
                                {loc.values.map((subitem, vi) => (
                                    <p className="text-[16px] text-[#FFFFFF]" key={vi}>{subitem.name}
                                    <br /> {subitem.time}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Master plan / location image — not shown in the new layout,
                    kept here (hidden trigger removed) in case you still need
                    it linked from elsewhere on the page. */}
                <Lightbox
                    open={openMaster}
                    close={() => setOpenMaster(false)}
                    slides={[
                        { src: locationimg }
                    ]}
                    styles={{ slide: { marginTop: "20px" }, toolbar: { background: '#00000054', width: '100%' }, icon: { color: '#fff' } }}
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
        
        </Col>
    </Row>
</Container>
            
        </section>
    )
}

export default Location