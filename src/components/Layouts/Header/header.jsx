import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import RequestDetailsForm from '../RequestDetailsForm/RequestDetailsForm';
import PriceDetailsForm from '../PriceDetailsForm/PriceDetailsForm';
import { useFormContext } from '../../FormContext';

const logo = `${process.env.REACT_APP_API_URL}/assests/images/logo.png`;
const menuIcon = `${process.env.REACT_APP_API_URL}/assests/images/menu.png`;
const phoneIcon = `${process.env.REACT_APP_API_URL}/assests/images/phone.png`;
const whatsappIcon = `${process.env.REACT_APP_API_URL}/assests/images/whatsapp.png`; 

const Header = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scrollClass, setScrollClass] = useState('scroll');

  const [locationPath, setLocationPath] = useState(false);

  const menuLinks = [
    {
      name: "About Us",
      redirect: "/flats",
      id: "flats",
    },
    {
      name: "Amenities",
      redirect: "/amenities",
      id: "amenities",
    },
    {
      name: "Floor Plan",
      redirect: "/floorplan",
      id: "floorplan",
    },
    {
      name: "Master Plan",
      redirect: "/masterplan",
      id: "masterplan",
    },
    {
      name: "Club Zaira",
      redirect: "/clubzaira",
      id: "clubzaira",
    },
    {
      name: "Location",
      redirect: "/location",
      id: "location",
    },
    {
      name: "Gallery",
      redirect: "/gallery",
      id: "gallery",
    },
    {
      name: "Price List",
      redirect: "/pricelist",
      id: "pricelist",
    },
  ];

  const {
    openPriceForm,
    isPriceFormOpen,
    priceFormOpenedManually,
    priceFormAutoOpened,
  } = useFormContext();

  useEffect(() => {
    const checkAndAutoOpen = () => {
      if (
        window.innerWidth < 992 &&
        !isPriceFormOpen &&
        !priceFormOpenedManually &&
        !priceFormAutoOpened
      ) {
        openPriceForm(
          "Vamana Residences Exclusive Price List!",
          "Explore Comprehensive and Updated Price Information for Vamana Residences",
          "Download Price List",
          "fixed",
          true // fromAuto
        );
      }
    };

    // Auto open after 5 seconds
    const timer = setTimeout(checkAndAutoOpen, 5000);

    // Auto open on resize below 992px
    window.addEventListener("resize", checkAndAutoOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkAndAutoOpen);
    };
  }, [isPriceFormOpen, priceFormOpenedManually, priceFormAutoOpened, openPriceForm]);

  // handle menu click
  const handleMenuClick = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;

    const element = document.getElementById(id);
    if (element) {
      element.style.scrollMarginTop = '50px';
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  }

  useEffect(() => {
    const listenScrollEvent = () => {
      if (locationValue[1] === "" ||  menuLinks.some(item => item.id === locationValue[1])) {
        const newScrollClass = window.scrollY > 50 ? '' : 'scroll';
        setScrollClass(newScrollClass);
      } else {
        setScrollClass('scroll');
      }
    };

    window.addEventListener("scroll", listenScrollEvent);

    if (location.hash && location.hash.slice(1) !== locationPath) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setLocationPath(location.hash.slice(1))
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // console.log(location.pathname.split("/"))

    if(menuLinks.some(item => item.id === location.pathname.split("/")[1]) && location.pathname.split("/")[1] !== locationPath){
      const path = location.pathname.split("/")[1];
      const element = document.getElementById(path);

      if (element) {
        setLocationPath(path)
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
        
      }
    }

    // eslint-disable-next-line
  }, [location, locationValue, locationPath]);

  return (
    <>
      {/* Header */}
      <div className={`main_header ${scrollClass} ${locationValue[1] === "" ||  menuLinks.some(item => item.id === locationValue[1]) ? "home_header" : ""}`}>
        <Navbar key={"lg"} expand={"lg"}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`header_offcanvas`} onClick={handleShow}>
              <img src={menuIcon} alt="menu" className="menu_icon" />
            </Navbar.Toggle>

            <Navbar.Brand href="/">
              <img src={logo} alt="Vamana Residences Logo" className="logo_header" />
            </Navbar.Brand>
                        
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id={`header_offcanvas`}
              aria-labelledby={`header_label_offcanvas`}
              placement="end"
              className="header_offcanvas"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="flex-grow-1">

                    {locationValue[1] === "" ?

                      menuLinks.map((item, i) => (
                        <Link
                          to={item.redirect}
                          key={i}
                          onClick={(e) => handleMenuClick(e)}
                          smooth="true" 
                          data-id={item.id}
                          className="nav-link"
                        >
                          {item.name}
                        </Link>
                      ))
                    :
                      menuLinks.map((item, i) => (
                        <Link
                          to={item.redirect}
                          key={i}
                          onClick={handleClose}
                          smooth="true" 
                          className="nav-link"
                        >
                          {item.name}
                        </Link>
                                            
                      ))
                                    
                    }
                  </Nav>
                                
                </Offcanvas.Body>
              </Navbar.Offcanvas>

              <div className="header_right">
                <div className="header_right_top">
                  <Link to={"tel:+919915841204"} className="header_call blink">
                    <img src={phoneIcon} alt="Phone" className="phone_icon" />
                    +91 9915841204
                  </Link>
                  <Button className="header_request_btn" onClick={() => openPriceForm("Request More Details About Vamana Residences", "Share your information, and our team will provide all the details you need to make an informed decision.", "Enquire Now", "request")}>Request Details</Button>
                </div>
                <p className="header_rera_number">PBRERA-SAS79-PR1018</p>
              </div>

            </Container>
        </Navbar>
      </div>

      {/* Whatsapp Icon */}
      <div className="fixed_btns_header z-20">
        <a href="https://wa.me/+919736338888" rel="noreferrer" target="_blank">
          <img src={whatsappIcon} alt="Whatsapp" className="header_btns_float whatsapp" />
        </a>
      </div>

      {/* Popup */}
      <RequestDetailsForm />
      <PriceDetailsForm />

    </>
  );
};

export default Header;
