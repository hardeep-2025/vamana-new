import { Card, Container, Spinner } from "react-bootstrap";
import MetaData from "../Layouts/MetaData";
import "./BlogPage.css";
import "./SlideBlog.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const defaultImage = `${process.env.REACT_APP_API_URL}/assests/images/placeholder-image.webp`;

const SlideBlog = () => {
    const location = useLocation();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // const blogSchema = {
    //     "@context": "https://schema.org",
    //     "@type": "BlogPosting",
    //     "mainEntityOfPage": {
    //         "@type": "WebPage",
    //         "@id": "https://vamanaresidences.com/blog"
    //     },
    //     "headline": "Blogs - Vamana Arvindam",
    //     "description":
    //         "Experience unmatched luxury and convenience with the premium blogs at Vamana Group.",
    //     "image":
    //         "https://media.istockphoto.com/id/1049277550/photo/retro-blog-bulb-sign-with-leather-armchair.jpg",
    //     "author": {
    //         "@type": "Organization",
    //         "name": "vamanaresidences",
    //         "url": "https://vamanaresidences.com/"
    //     },
    //     "publisher": {
    //         "@type": "Organization",
    //         "name": "Vamana Residences"
    //     },
    //     "datePublished": "2025-11-19",
    //     "dateModified": "2026-04-14"
    // };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/blog-list.php`)
            .then((res) => {
                // Only take first 5 blogs
                setData(res.data.slice(0, 5));
            })
            .catch(() => {
                console.log("Error");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "ease-in-out",

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
    return (
        <>
            {/* <MetaData
                title={"Blogs - Vamana Arvindam"}
                description={
                    "Experience unmatched luxury and convenience with the premium blogs at Vamana Group."
                }
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
                blogSchema={blogSchema}
            /> */}

            <div className="blog_page_section padding-top ">
                <Container>
                    <h2 className="main_heading">Blogs</h2>

                    {loading ? (
                        <div className="blog_spinner text-center">
                            <Spinner
                                as="span"
                                animation="border"
                                role="status"
                                aria-hidden="true"
                            />
                        </div>
                    ) : data.length > 0 ? (
                        <div className="blogs_slider">
                            <Slider {...sliderSettings}>
                                {data.map((item) => (
                                    <div
                                        className="blog_slider_item"
                                        key={item.id}
                                    >
                                        <Card className="blog_grid_card_item">
                                            <a href={`/blog/${item.url}`}>
                                                <Card.Img
                                                    variant="top"
                                                    src={
                                                        item.image
                                                            ? `${process.env.REACT_APP_API_URL}/uploads/${item.image}`
                                                            : defaultImage
                                                    }
                                                    alt={
                                                        item.image_alt ||
                                                        item.title
                                                    }
                                                />
                                            </a>

                                            <Card.Body>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    {item.date}
                                                </Card.Subtitle>

                                                <a
                                                    href={`/blog/${item.url}`}
                                                >
                                                    <Card.Title>
                                                        {item.title}
                                                    </Card.Title>
                                                </a>

                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <p className="paragraph text-center">
                            No Blog Found.
                        </p>
                    )}
                </Container>
            </div>
        </>
    );
};

export default SlideBlog;