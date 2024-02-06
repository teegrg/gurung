// import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import About from "../component/About";

import "../style/home.css";
import project1 from "./pic/project1.png";
import project2 from "./pic/splitz.png";
import project3 from "./pic/namastecard.png";
import project4 from "./pic/curator.png";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Home() {
  const [role, setRole] = useState("Developer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole((prevRole) =>
        prevRole === "Developer" ? "Engineer" : "Developer"
      );
    }, 3000); // Change role every 2000 milliseconds (2 seconds)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run this effect once when the component mounts

  return (
    <>
      <div className="home__container" id="home">
        <div className="home__text">Tshering Gurung</div>
        <div className="home__text">
          FullStack Software <span className="changing-word">{role}</span>
        </div>
        <div className="home__text__last">Made in New York, US</div>
      </div>
      <About />
      <div className="project">
        <div className="project__1">
          <img className="img" src={project1} alt="pic" />
          <div className="project__text">
            <a href="https://keepssake.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="title">
                <div className="title__text keepsake__text">KEEPSAKE</div>
                <ArrowOutwardIcon className="arrow keepsake__arrow" />
              </div>
            </a>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            ipsam nisi aperiam quod itaque consectetur culpa, rerum aliquam vel
            excepturi molestiae quas suscipit dolore eum maiores unde
            exercitationem totam cum.
          </div>
        </div>
        <div className="project__2">
          <img className="img" src={project2} alt="pic" />
          <div className="project__text">
            <a href="https://splitzer.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="title">
                <div className="title__text">SPLITZ</div>
                <ArrowOutwardIcon className="arrow" />
              </div>
            </a>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae
            ex voluptatum culpa hic eaque in sed. Ad in quas placeat distinctio
            cumque nobis molestias delectus. Itaque voluptas cumque tenetur?
          </div>
        </div>
        <div className="project__3">
          <img className="img" src={project3} alt="pic" />
          <div className="project__text">
            <a href="https://namastecards.onrender.com/" target="_blank" rel="noopener noreferrer">
              <div className="title">
                <div className="title__text card__text">NAMASTE CARDS</div>
                <ArrowOutwardIcon className="arrow card__arrow" />
              </div>
            </a>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae
            ex voluptatum culpa hic eaque in sed. Ad in quas placeat distinctio
            cumque nobis molestias delectus. Itaque voluptas cumque tenetur?
          </div>
        </div>
        <div className="project__4">
          <img className="img" src={project4} alt="pic" />
          <div className="project__text">
            <a href="https://teegrg.github.io/portfolioProject/index.html" target="_blank" rel="noopener noreferrer">
              <div className="title">
                <div className="title__text">THE CURATOR</div>
                <ArrowOutwardIcon className="arrow" />
              </div>
            </a>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae
            ex voluptatum culpa hic eaque in sed. Ad in quas placeat distinctio
            cumque nobis molestias delectus. Itaque voluptas cumque tenetur?
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
