import './Gallery.css';
import Lightbox from "yet-another-react-lightbox";
import { Counter, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useEffect, useState } from "react";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import galleryBG from "../../../assests/images/new-gallery/gallery_bg.jpg";
import arvindamLogo from "../../../assests/images/new-gallery/arvindam_logo.png";

import exterior1 from "../../../assests/images/new-gallery/exterior1.png";
import exterior2 from "../../../assests/images/new-gallery/exterior2.png";
import exterior3 from "../../../assests/images/new-gallery/exterior3.png";
import exterior4 from "../../../assests/images/new-gallery/exterior4.png";
import exterior5 from "../../../assests/images/new-gallery/exterior5.png";
import exterior6 from "../../../assests/images/new-gallery/exterior6.png";
import exterior7 from "../../../assests/images/new-gallery/exterior7.png";

import interior1 from "../../../assests/images/new-gallery/interior1.jpg";
import interior2 from "../../../assests/images/new-gallery/interior2.png";
import interior3 from "../../../assests/images/new-gallery/interior3.jpg";
import interior4 from "../../../assests/images/new-gallery/interior4.png";
import interior5 from "../../../assests/images/new-gallery/interior5.png";
import interior6 from "../../../assests/images/new-gallery/interior6.png";
import interior7 from "../../../assests/images/new-gallery/interior7.jpg";

const Gallery = () => {

    const [key, setKey] = useState('exterior');

    const [exterior, setExterior] = useState(-1);
    
    const exteriorImages = [
        {
            src: exterior1,
            title: "Vamana Arvindam Zirakpur exterior view showcasing modern architecture, premium design, and luxurious residential living",
            rows: 2,
            cols: 3,
        },
        {
            src: exterior4,
            title: "Luxury flats in Zirakpur at Vamana Arvindam featuring green garden, basketball ground, and swimming pool for premium lifestyle",
            rows: 2,
            cols: 2,
        },
        {
            src: exterior3,
            title: "Night view of 3BHK and 4BHK luxury apartments in Zirakpur at Vamana Arvindam featuring elegant lighting and modern architecture",
            rows: 4,
            cols: 3,
            logo: arvindamLogo,
        },
        {
            src: exterior2,
            title: "People walk in garden area of new residential projects in Zirakpur at Vamana Arvindam featuring lush greenery and modern living",
            rows: 1,
            cols: 3,
        },
        {
            src: exterior5,
            title: "3 BHK luxury flats in Zirakpur at Vamana Arvindam featuring modern architecture, spacious interiors, and premium lifestyle amenities",
            cols: 2,
        },
        {
            src: exterior7,
            title: "Exterior view of Vamana Arvindam Zirakpur showcasing modern architecture, landscaped surroundings, and premium residential design",
            cols: 5,
            rows: 3,
        },
        {
            src: exterior6,
            title: "Top view of Zirakpur flats 3BHK at Vamana Arvindam showing building exterior, landscaped grounds, and green plants",
            rows: 2,
            cols: 3,
        }
    ]

    // Interior Images
    const [interiorIndex, setInteriorIndex] = useState(-1);

    const interiorImages = [
        {
            src: interior1,
            title: "Luxury flats in Zirakpur living room with elegant sofa set, wall painting, and stunning mountain view from balcony",
            rows: 2,
            cols: 3,
        },
        {
            src: interior2,
            title: "Modern interior view of luxury flats for sale in Zirakpur featuring stylish living space and contemporary design",
            rows: 2,
            cols: 2,
        },
        {
            src: interior3,
            title: "Modern bedroom with elegant bed design in Zirakpur flats 3BHK at Vamana Arvindam offering luxury and comfort",
            rows: 4,
            cols: 3,
            logo: arvindamLogo,
        },
        {
            src: interior4,
            title: "Interior view of new residential projects in Zirakpur at Vamana Arvindam featuring modern design and premium furnishings",
            rows: 1,
            cols: 3,
        },
        {
            src: interior5,
            title: "Balcony view from Vamana Arvindam Group Zirakpur apartments showcasing scenic surroundings and modern lifestyle",
            cols: 2,
        },
        {
            src: interior7,
            title: "Interior view of 3 BHK luxury flats in Zirakpur at Vamana Arvindam featuring modern furnishings, spacious layout, and premium design",
            cols: 5,
            rows: 3,
        },
        {
            src: interior6,
            title: "People enjoying by the swimming pool at flats for sale in Zirakpur, Vamana Arvindam featuring leisure and luxury amenities",
            rows: 2,
            cols: 3,
        },
    ]

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <section className="gallery_section padding-top padding-bottom" id="gallery">
            <img src={galleryBG} alt='Gallery' className='gallery_bg_image' />
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Gallery</h2>

                        <Tabs
                            id="gallery_tabs"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="gallery_tabs"
                        >
                            {/* Exterior Tab */}
                            <Tab eventKey="exterior" title="Exterior">
                                <ImageList
                                    variant="quilted"
                                    cols={8}
                                    gap={10}
                                    rowHeight={isMobile ? 100 : 180}
                                    className='gallery-images-list'
                                >
                                    {exteriorImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setExterior(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                            {item.logo && <img src={item.logo} alt='Logo' className='gallery_logo_img' />}
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={exterior}
                                        slides={exteriorImages}
                                        open={exterior >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setExterior(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Interior */}
                            <Tab eventKey="interior" title="Interior">
                                <ImageList
                                    variant="quilted"
                                    cols={8}
                                    gap={10}
                                    rowHeight={200}
                                    className='gallery-images-list'
                                >
                                    {interiorImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setInteriorIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                            {item.logo && <img src={item.logo} alt='Logo' className='gallery_logo_img' />}
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={interiorIndex}
                                        slides={interiorImages}
                                        open={interiorIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setInteriorIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Gallery