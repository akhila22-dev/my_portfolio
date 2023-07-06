import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-thumbs-up",
      title: "DESIGN",
      desc: "Module.css, Inline Style, Bootstrap.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "REACT JS",
      desc: "React.jsx & React.tsx ",
      active: true,
    },
    {
      icon: "fa-thumbs-up",
      title: "3rd PARTY LIBRARY",
      desc: " Formik, Yup & Toastify",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1.2</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>IT 1+ Year Experience</h4>
              <p>React JS Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;