import { useEffect, useState } from "react";
import "./BlogPage.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import MetaData from "../Layouts/MetaData";
import defaultImage from "../../assests/images/placeholder-image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faHashtag } from "@fortawesome/free-solid-svg-icons";

const BlogDetail = () => {
    const url = useParams().url;

    const location = useLocation();
    const [blogId, setBlogId] = useState(null);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/api/blog-details.php`,
            data: JSON.stringify({
                post_url: url
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(res => {
            for (var i = 0; i < res.data.length; i++) {
                var obj = res.data[i];
                if (obj.url === url) {
                    setBlogId(obj.id);
                    setTitle(obj.title);
                    setImage(obj.image);
                    setDate(obj.date);
                    setContent(obj.content);
                    setSeoTitle(obj.seo_title);
                    setSeoDescription(obj.seo_description);
                    setCategory(obj.category);
                    setTags(obj.tags);
                }
            }
        })
        .catch(() => {
            console.log('Error')
        })
        .finally(() => {
            setLoading(false);
        })

    }, [url, blogId]);

    return(
        <>
            {
                loading ?
                <>
                    <div className="blog-detail-content padding-top padding-bottom">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="blog_spinner text-center">
                                        <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
                :
                <>
                    <MetaData
                        title={seoTitle}
                        description={seoDescription}
                        canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
                    />

                    <div className="blog-detail-page padding-top padding-bottom">
                        
                        <Container>
                            <Row>
                                <Col>
                                    <h1 className="main_heading blog_details_heading">{title}</h1>
                                    <p className="paragraph">Posted On: {date}</p>

                                    <div className="thumbnail-img padding-top">
                                        <img src={image ? `${process.env.REACT_APP_API_URL}/admin/uploads/${image}` : defaultImage} alt={title} className="blog-details-image border" />
                                    </div>

                                    <div className="blog-detail-content padding-top padding-bottom">
                                        <div className="blog-details-content-div" dangerouslySetInnerHTML={{ __html: content }}></div>
                                    </div>

                                    <div className="blog-category-block">
                                        <div className="blog-category-flex">
                                            <FontAwesomeIcon icon={faFolderOpen} />
                                            <div className="blog-category-text">
                                                {category.map((item,i) => (
                                                    <a key={i} href="/blog">{item.name}</a>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="blog-category-flex">
                                            <FontAwesomeIcon icon={faHashtag} />
                                            <div className="blog-category-text tags">
                                                {tags.map((item,index) => (
                                                    <span key={index}>
                                                        <a href="/blog">{item.name}</a>
                                                        {index < tags.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                    </div>

                </>
            }
        </>
    )
}

export default BlogDetail