/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="akki.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Akhila</h6>
            <h3>Web3 Frontend Developer</h3>
            <p>
            1+ year experienced React JS Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts. Writing application interface code via JavaScript, TypeScript and ReactJS workflows.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
