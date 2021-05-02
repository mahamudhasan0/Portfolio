import React from 'react';
import BlogData from './BlogData';
import Tittle from '../Tittle/Tittle'

const Blogs = () => {
    return (
        <div >
        <div className="b-title">
            <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
        </div>
        <div className="blog-Page">
            {
                BlogData.map((blog)=>{
                    return <div className="blogs" key={blog.id}>
                        <div className="blogs-content">
                            <img src={blog.image} alt=""/>
                            <a href={blog.link} className="blogs-link">
                                {blog.title}
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
        
    </div>
    );
};

export default Blogs;