import React from "react";
import { useState } from "react";
import dataArticles from "./dataArticles";

function Blog() {
    const [name] = useState(dataArticles);

    const [showText, setShowText] = useState(false);

    const showTextClick = (item) => {
        item.showMore = !item.showMore;
        setShowText(!showText);
    };

    return (
        <div className="blog-component">
            <h2>Blog</h2>

            {name.map((item) => {
                const { id, image, title, content, showMore } = item;

                return (
                    <div key={id} className="article-container">
                        <div className="container">
                            <img className="article-image" src={image} alt="article"/>
                        </div>

                        <div className="blog-container">
                            <div className="article-title">
                                <h6>{title}</h6>
                            </div>

                            <p className="text">
                                {showMore ? content : content.substring(0, 600) + "..."}
                                <button className="btn-show" onClick={() => showTextClick(item)}>
                                    {showMore ? "Show less" : "Show more"}
                                </button>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Blog;
