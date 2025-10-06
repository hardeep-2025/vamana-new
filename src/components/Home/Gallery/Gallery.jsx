import './Gallery.css';
import Lightbox from "yet-another-react-lightbox";
import image1 from '../../../assests/images/gallery/gallery-1.webp';
import image2 from '../../../assests/images/gallery/gallery-2.webp';
import image3 from '../../../assests/images/gallery/gallery-3.webp';
import image4 from '../../../assests/images/gallery/gallery-4.webp';
import image5 from '../../../assests/images/gallery/gallery-5.webp';
import image6 from '../../../assests/images/gallery/gallery-6.webp';
import image7 from '../../../assests/images/gallery/gallery-7.webp';
import image8 from '../../../assests/images/gallery/gallery-8.webp';
// import image9 from '../../../assests/images/gallery/gallery-9.webp';
import { Counter, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useState } from "react";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = () => {

    const [index, setIndex] = useState(-1);

    const images = [
        {
            src: image1,
            title: "Kids playing in the garden infront of the Vamana apartments",
            rows: 2,
            cols: 2,
        },
        {
            src: image2,
            title: "Vamana Arvindam exterior",
        },
        {
            src: image3,
            title: "Bird's eye view of Vamana Arvindam exterior",
            rows: 2,
        },
        {
            src: image4,
            title: "An overview of Vamana Group",
            
        },
        {
            src: image5,
            title: " Entry gate to Vamana Flats",
            rows: 2,
        },
        {
            src: image6,
            title: "Vamana apartments bottom to top view",
            rows: 2,
            cols: 2,
        },
        {
            src: image7,
            title: "Garden and swimming pool amenities close to the Vamana Flats",
        },
        {
            src: image8,
            title: "Overview of the Vamana Group",
        },
        // {
        //     src: image9,
        //     title: "Car entering into the lavish Vamana Arvindam",
        // },
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
        <section className="home-gallery-section py-8 md:py-16 px-2.5" id="gallery">
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col gap-5">
                    <h3 className="text-2xl sm:text-4xl font-semibold text-center mb-3">Gallery</h3>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tab grid-flow-row gap-5 p-2.5"> */}
                        {/* {images.map((item, i) => (
                            <div className='relative effect-one effect overflow-hidden rounded-md gallery-image w-full h-full' key={i}>
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className='rounded-md  object-cover cursor-pointer'
                                    onClick={() => setIndex(i)}
                                /> */}
                                {/* <p className='text-xs font-semibold p-1 absolute bottom-2.5 right-2.5 left-auto text-white w-auto'>*Image shown is for illustration purposes only</p> */}
                            {/* </div>
                        ))} */}
                        {/* <Lightbox
                            index={index}
                            slides={images}
                            open={index >= 0}
                            styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                            controller={{ closeOnBackdropClick: true }}
                            close={() => setIndex(-1)}
                            // slides={advancedSlides}
                            plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                            counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                        /> */}
                    {/* </div> */}

                    <ImageList
                        variant="quilted"
                        cols={4}
                        rowHeight={200}
                        className='gallery-images-list'
                        >
                        {images.map((item,i) => (
                            <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className='w-full relative effect-one effect overflow-hidden rounded-md gallery-image'>
                            <img
                                {...srcset(item.src, 121, item.rows, item.cols)}
                                alt={item.title}
                                onClick={() => setIndex(i)}
                                className='rounded-md  object-cover cursor-pointer'
                            />
                            </ImageListItem>
                        ))}

                        <Lightbox
                            index={index}
                            slides={images}
                            open={index >= 0}
                            styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                            controller={{ closeOnBackdropClick: true }}
                            close={() => setIndex(-1)}
                            // slides={advancedSlides}
                            plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                            counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                        />
                    </ImageList>

                </div>
            </div>
        </section>
    )
}

export default Gallery