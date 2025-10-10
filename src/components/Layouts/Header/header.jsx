import './Header.css';
import logo from '../../../assests/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
import EnquireForm from '../EnquireForm/EnquireForm';
import popupImg from '../../../assests/images/popup-img.jpg';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import menuIcon from "../../../assests/images/menu.png";
import phoneIcon from "../../../assests/images/phone.png";
import whatsappIcon from "../../../assests/images/whatsapp.png"; 

const Header = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [scrollClass, setScrollClass] = useState('scroll');
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleOpenClose = () => setOpen(false);
    const [showPopupNew, setShowPopupNew] = useState(false);
    const [showsidePopup, setshowsidePopup] = useState(false);
    const [locationPath, setLocationPath] = useState(false);
    
    const handleEnquireClick = () => {

        handleOpen()
    };
  const newSidePopUpClose  = (e) => {
    e.preventDefault();
    setshowsidePopup(false)
  }

  const handleNewClose = (e) => {
    e.preventDefault();
    setShowPopupNew(false);
    setshowsidePopup(true);
  }

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

  useEffect(() => {
    setTimeout(() => {
      setshowsidePopup(true);
      setOpen(false);
    }, 5000);

  }, [])

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
                            <Link to={"tel:+919736338888"} className="header_call">
                                <img src={phoneIcon} alt="Phone" className="phone_icon" />
                                +91 9736338888
                            </Link>
                            <Button className="header_request_btn" onClick={handleEnquireClick}>Request Details</Button>
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

        <div className={`popup-modal-dialog ${showPopupNew ? 'block' : 'hidden'}`}>
            <button className='btn-icon' onClick={(e) => handleNewClose(e)}>
                <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" />
            </button>

            <div className='img-popup'>
                <img src={popupImg} alt='PoupImg' className='w-full' />
            </div>
        </div>

        {/* Popup */}
        <Dialog
            open={open}
            onClose={handleOpenClose}
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
            <div className="flex justify-end ">
                <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleOpenClose} />
            </div>
            <EnquireForm title="Request For Brochure" button="Submit Now" setOpen={setOpen} formId={"request"} />
            </div>
        </Dialog>

        {/* Side Popup for form*/}
        {/* <div className={` side-popup-form ${showsidePopup ? 'flex' : 'hidden'} border-4 border-primary-yellow `}>

          <div className="price_list_heading_block">
            <img src={logo} alt="Vamana Residences Logo" className="form_logo" />
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={newSidePopUpClose} />
          </div>     
          
          <div className="price_list_form_flex">
            <p className="price_list_heading">Vamana Residence Exclusive Price List!</p>
            <p className="price_list_subtext">Explore Comprehensive and Updated Price Information for Vamana Residences</p>
            <div className="price_list_form_col">
              <EnquireForm title="Download Price List" button="Check Latest Pricing" setshowsidePopup={setshowsidePopup} formId={"download"} />
            </div>
          </div>
            
        </div> */}

        {/* Price List Popup */}
          <Dialog
                open={showsidePopup}
                onClose={(event, reason) => {
                  // Prevent closing when clicking outside or pressing Esc
                  if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
                    newSidePopUpClose();
                  }
                }}
                className="price_list_popup_dialog"
                aria-hidden="false"
                sx={{
                  "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                      width: "100%",
                      borderRadius: "8px",
                      borderColor:'#fff',
                      backgroundColor: "#fff",
                      boxShadow: '0px 0px 4px 0px #644630'
                    },
                  },
                }}
                aria-modal="true"
              >
                <div className="price_list_heading_block">
                  <img src={logo} alt="Ananta Aspire Logo" className="form_logo" />
                  <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={newSidePopUpClose} />
                </div>
                <div className="price_list_form_flex">
                  <p className="price_list_heading">Vamana Residence Exclusive Price List!</p>
                  <p className="price_list_subtext">Explore Comprehensive and Updated Price Information for Vamana Residences</p>
                  <div className="price_list_form_col">
                    <EnquireForm  formId={"download"} title="Download Price List" button="Check Latest Pricing" setshowsidePopup={setshowsidePopup} />
                  </div>
                </div>
              </Dialog>
    </>
  );
};

export default Header;
