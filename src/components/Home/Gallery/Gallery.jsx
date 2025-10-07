import './Gallery.css';
import Lightbox from "yet-another-react-lightbox";
import { Counter, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useState } from "react";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';

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
            title: "Vamana",
            rows: 1,
            cols: 1,
        },
        {
            src: exterior2,
            title: "Vamana",
            rows: 1,
            cols: 2,
        },
        {
            src: exterior3,
            title: "Vamana",
            rows: 2,
            cols: 1,
        },
        {
            src: exterior4,
            title: "Vamana",
        },
        {
            src: exterior5,
            title: "Vamana",
        },
        {
            src: exterior6,
            title: "Vamana",
        },
        {
            src: exterior7,
            title: "Vamana",
            cols: 4,
            rows: 2,
        }
    ]

    // Interior Images
    const [interiorIndex, setInteriorIndex] = useState(-1);

    const interiorImages = [
        {
            src: interior1,
            title: "Vamana",
            rows: 1,
            cols: 1,
        },
        {
            src: interior2,
            title: "Vamana",
            rows: 1,
            cols: 2,
        },
        {
            src: interior3,
            title: "Vamana",
            rows: 2,
            cols: 1,
        },
        {
            src: interior4,
            title: "Vamana",
        },
        {
            src: interior5,
            title: "Vamana",
        },
        {
            src: interior6,
            title: "Vamana",
        },
        {
            src: interior7,
            title: "Vamana",
            cols: 4,
            rows: 2,
        }
    ]

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return(
        <section className="gallery_section padding-top padding-bottom" id="gallery">
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
                                    cols={4}
                                    gap={8}
                                    rowHeight={250}
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
                                    cols={4}
                                    gap={8}
                                    rowHeight={250}
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