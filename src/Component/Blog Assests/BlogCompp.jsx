import React from "react";
import PhotoBlog1 from "./BlogPhoto-1.png";
import PhotoBlog2 from "./Blog Photo 2.png";
import PhotoIcon from "./Icon.jpg";
import "../Blog Assests/Blog.css";

const BlogCompp = () => {
  return (
    <div className="blog__section">
      <div className="blog__section__1">
        <div className="blog__section__header">
          <div className="blog__sub__section__header">
            <h4 className="blog__section__small__header">Our Blog</h4>
            <h1 className="blog__section__big__header">Our Latest News</h1>
          </div>
        </div>
        <div className="blog__sub__section__1">
          <div className="blog__sub__image__1">
            <img className="blog__sub__real__image__1" src={PhotoBlog1} />
          </div>
          <div className="blog__sub__icon__1">
            <img src={PhotoIcon} />
            <p className="blog__sub__day__1">08</p>
            <p className="blog__sub__month__1">January</p>
          </div>
          <div className="blog__sub__section__para__1">
            <div className="blog__sub__section__para__header__1">
              <h2 className="blog__sub__section__para__real__header__1">
                Inland freight a worthy solution for your business
              </h2>
            </div>
            <div className="blog__sub__section__para__para__1">
              <p className="blog__sub__section__para__para__real__1">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
            </div>
            <div className="blog__sub__section__lists__1">
              <ul className="blog__sub__section__real__lists__1">
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="blog__section__1">
        <div className="blog__sub__section__1">
          <div className="blog__sub__image__1">
            <img className="blog__sub__real__image__1" src={PhotoBlog2} />
          </div>
          <div className="blog__sub__icon__1">
            <img src={PhotoIcon} />
            <p className="blog__sub__day__1">20</p>
            <p className="blog__sub__month__1">February</p>
          </div>
          <div className="blog__sub__section__para__1">
            <div className="blog__sub__section__para__header__1">
              <h2 className="blog__sub__section__para__real__header__1">
                Five things you should have ready for your broker
              </h2>
            </div>
            <div className="blog__sub__section__para__para__1">
              <p className="blog__sub__section__para__para__real__1">
                We are dedicated in creating added value for our customers by
                implementing modern technology in our work.
              </p>
            </div>
            <div className="blog__sub__section__lists__1">
              <ul className="blog__sub__section__real__lists__1">
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
                <li>Urgent transport solutions</li>
                <li>Reliable & experienced staffs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="button__blog__1">
          <button className="blog__button__real">More Blog</button>
      </div>
    </div>
  );
};

export default BlogCompp;
