import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import MetaData from "../Layouts/MetaData";
import "./BlogPage.css";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import BlogSidebar from "./BlogSidebar";

const defaultImage = `${process.env.REACT_APP_API_URL}/assests/images/placeholder-image.webp`;

const BlogPage = () => {

    const location = useLocation();
    const blogRef = useRef();

    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState();
    const [loading, setLoading] = useState(true);
    const n = 12;

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
        blogRef.current.scrollIntoView();
    }

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/api/blog-list.php`)
        .then(res => {
            setData(res.data);
            setFilterData(
                res.data.filter((item, index) => {
                  return (index >= page * n) & (index < (page + 1) * n);
                })
            );
        })
        .catch(() => {
            console.log('Error')
        })
        .finally(() => {
            setLoading(false);
        })
    }, [page]);

    return(
        <>

            <MetaData 
                title={"Blogs - Vamana Arvindam"}
                description={"Experience unmatched luxury and convenience with the premium blogs at Vamana Group."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <div className="blog_page_section sidebar_layout padding-top padding-bottom"  ref={blogRef}>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h2 className='main_heading'>Blogs</h2>
                            
                            {
                                loading ?
                                <>
                                    <div className="blog_spinner text-center">
                                        <Spinner as="span" animation="border" size="xl" role="status" aria-hidden="true" />
                                    </div>
                                </>
                                : 
                                data && data.length >=1 ?
                                    <>
                                        <div className="blogs_cards_grid">
                                            {filterData && filterData.map((item, index) => 
                                        
                                                <Card key={item.id} className="blog_grid_card_item">
                                                    <a key={index} href={"/blog/"+item.url}>
                                                        <Card.Img variant="top" src={item.image ? `${process.env.REACT_APP_API_URL}/uploads/${item.image}` : defaultImage} alt={item.image_alt ? item.image_alt : item.title} />
                                                    </a>
                                                    
                                                    <Card.Body>
                                                        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>

                                                        <a key={index} href={"/blog/"+item.url}>
                                                            <Card.Title>{item.title}</Card.Title>
                                                        </a>
                                                        
                                                        <Card.Text>
                                                            {item.description}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            )}

                                        
                                        </div>

                                        {data.length > n &&

                                            <ReactPaginate
                                                containerClassName={"pagination"}
                                                pageClassName={"page-item"}
                                                activeClassName={"active"}
                                                onPageChange={(event) => handlePageClick(event.selected)}
                                                pageCount={Math.ceil(data.length / n)}
                                                breakLabel="..."
                                                previousLabel={
                                                    <FontAwesomeIcon icon={faChevronLeft} />
                                                }
                                                nextLabel={
                                                    <FontAwesomeIcon icon={faChevronRight} />
                                                }
                                            />
                                        }
                                    </>
                                : 
                                    <p className="paragraph text-center">No Blog Found.</p>
                            }
                            
                        </Col>

                        <Col lg={4}>
                            <BlogSidebar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BlogPage