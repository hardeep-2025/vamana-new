import axios from "axios";
import "./BlogPage.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const defaultImage = `${process.env.REACT_APP_API_URL}/assests/images/placeholder-image.webp`;

const BlogSidebar = () => {

    const [latestBlogs, setLatestBlogs] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/api/blog-category-lists.php`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(res => {
            setLatestBlogs(res?.data?.posts);
            setCategories(res?.data?.categories);
        })
        .catch(() => {
            console.log('Error')
        })
    }, [])

    return(
        <div className="blog_sidebar_block">
            <div className="blog_sidebar_cols">
                <p className="blog_sidebar_heading">Popular Posts</p>
                <div className="latest_blogs_flex">
                    {latestBlogs && latestBlogs.length >= 1 ?
                        latestBlogs.map((item,i) => (
                            <div className="latest_blogs_div" key={i}>
                                <a key={i} href={"/blog/"+item.url}>
                                    <img src={item.image ? `${process.env.REACT_APP_API_URL}/uploads/${item.image}` : defaultImage} alt={item.image_alt ? item.image_alt : item.title} className="blog_lists_image" />
                                </a>
                                <div className="blog_lists_contents">
                                    <a key={i} href={"/blog/"+item.url}>
                                        <p className="blog_list_title">{item.title}</p>
                                    </a>
                                    <p className="blog_list_date">{item.date}</p>
                                </div>
                            </div>
                        ))
                    :
                        <p className="paragraph">No Post Found!</p>
                    }
                </div>
            </div>

            <div className="blog_sidebar_cols">
                <p className="blog_sidebar_heading">Categories</p>
                <div className="categories_lists_block">
                    {categories && categories.length >= 1 ?
                        categories.map((item,i) => (
                            <div className="categories_lists_item" key={i}>
                                <a href={`/category/${item.slug}`} className="categories_lists_title"><FontAwesomeIcon icon={faCircleDot} /> {item.name}</a>
                            </div>
                        ))
                    :
                        <p className="paragraph">No Category Found!</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar