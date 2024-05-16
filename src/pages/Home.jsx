import React, { useState, useEffect } from "react";
import About from "../component/About";

import "../style/home.css";
import project1 from "./pic/project1.png";
import project2 from "./pic/splitz.png";
import project3 from "./pic/namastecard.png";
import project4 from "./pic/curator.png";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from '@mui/icons-material/GitHub';


function Home() {
  const [role, setRole] = useState("Developer");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole((prevRole) =>
        prevRole === "Developer" ? "Engineer" : "Developer"
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpandProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "... ";
    } else {
      return text;
    }
  };

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
        {/* Project 1 */}
        <div className="project__1">
          <div className="img-container">
            <img className="img" src={project1} alt="pic" />
            <div className="modal">
              <a
                className="github-link"
                href="https://github.com/teegrg/keepsake-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="giticon">
                <GitHubIcon className="github-icon" style={{ fontSize: 60, color: 'white' }} />
                <div className="git__icon__text">Code</div>
                </div>

              </a>
            </div>
          </div>
          <div className="project__text">
            <a
              href="https://keepssake.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className="title">
                <div className="title__text keepsake__text">KEEPSAKE</div>
                <ArrowOutwardIcon className="arrow keepsake__arrow" />
              </div>
            </a>
            <div className="project__icon__wrapper">
              <div className="project__icon">HTML</div>
              <div className="project__icon">CSS</div>
              <div className="project__icon">JAVASCRIPT</div>
              <div className="project__icon">REACT</div>
              <div className="project__icon">TAILWIND</div>
              <div className="project__icon">REDUX</div>
              <div className="project__icon">STRIPE</div>
              <div className="project__icon">GOOGLEAPI</div>
              <div className="project__icon">FIREBASE</div>
            </div>
            {expandedProject === 1 ? (
              <p>
                Developed a dynamic web application named Keepsake, a
                peer-to-peer platform that revolutionizes storage solutions. The
                application connects individuals in need of storage space with
                those who have extra space to spare.{" "}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(1)}
                >
                  See less
                </span>
              </p>
            ) : (
              <p>
                {truncateText(
                  "Developed a dynamic web application named Keepsake, a peer-to-peer platform that revolutionizes storage solutions. The application connects individuals in need of storage space with those who have extra space to spare.",
                  150
                )}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(1)}
                >
                  See more
                </span>
              </p>
            )}
          </div>
        </div>
        {/* Project 2 */}
        <div className="project__2">
        <div className="img-container">
    <img className="img" src={project2} alt="pic" />
    <div className="modal modal__phone">
      <a
        className="github-link"
        href="https://github.com/teegrg/splitz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="giticon">
        <GitHubIcon className="github-icon" style={{ fontSize: 60, color: 'white' }} />
        <div className="git__icon__text">Code</div>
        </div>

      </a>
    </div>
  </div>
          <div className="project__text">
            <a
              href="https://splitzer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="title">
                <div className="title__text">SPLITZ</div>
                <ArrowOutwardIcon className="arrow" />
              </div>
            </a>
            <div className="project__icon__wrapper">
              <div className="project__icon">HTML</div>
              <div className="project__icon">CSS</div>
              <div className="project__icon">JAVASCRIPT</div>
              <div className="project__icon">REACT</div>
              <div className="project__icon">NODE.JS</div>
              <div className="project__icon">GITHUB</div>
            </div>
            {expandedProject === 2 ? (
              <p>
                Created an application designed to streamline the division of
                rent and expenses among housemates. Drawing from my personal
                experience with the monthly challenges of settling accounts,
                this app replaces the outdated method of tracking debts on paper
                with a digital solution that simplifies bill management and
                payment responsibilities.{" "}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(2)}
                >
                  See less
                </span>
              </p>
            ) : (
              <p>
                {truncateText(
                  "Created an application designed to streamline the division of rent and expenses among housemates. Drawing from my personal experience with the monthly challenges of settling accounts, this app replaces the outdated method of tracking debts on paper with a digital solution that simplifies bill management and payment responsibilities.",
                  150
                )}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(2)}
                >
                  See more
                </span>
              </p>
            )}
          </div>
        </div>
        {/* Project 3 */}
        <div className="project__3">
        <div className="img-container">
    <img className="img" src={project3} alt="pic" />
    <div className="modal">
      <a
        className="github-link"
        href="https://github.com/teegrg/namastecards"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="giticon">
        <GitHubIcon className="github-icon" style={{ fontSize: 60, color: 'white' }} />
        <div className="git__icon__text">Code</div>
        </div>

      </a>
    </div>
  </div>
          <div className="project__text">
            <a
              href="https://namastecards.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="title">
                <div className="title__text card__text">NAMASTE CARDS</div>
                <ArrowOutwardIcon className="arrow card__arrow" />
              </div>
            </a>
            <div className="project__icon__wrapper">
              <div className="project__icon">HTML</div>
              <div className="project__icon">CSS</div>
              <div className="project__icon">JAVASCRIPT</div>
              <div className="project__icon">REACT</div>
              <div className="project__icon">NODE.JS</div>
              <div className="project__icon">GITHUB</div>
            </div>
            {expandedProject === 3 ? (
              <p>
                Built an application that empowers individuals and small
                businesses to create their own business cards instantly. There’s
                no more waiting for deliveries or being constrained by minimum
                order quantities. This app helps craft professional business
                cards from the comfort of your home, saving both time and money.{" "}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(3)}
                >
                  See less
                </span>
              </p>
            ) : (
              <p>
                {truncateText(
                  "Built an application that empowers individuals and small businesses to create their own business cards instantly. There’s no more waiting for deliveries or being constrained by minimum order quantities. This app helps craft professional business cards from the comfort of your home, saving both time and money.",
                  150
                )}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(3)}
                >
                  See more
                </span>
              </p>
            )}
          </div>
        </div>
        {/* Project 4 */}
        <div className="project__4">
        <div className="img-container">
    <img className="img" src={project4} alt="pic" />
    <div className="modal modal__phone2">
      <a
        className="github-link"
        href="https://github.com/teegrg/tsheringgurung"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="giticon">
        <GitHubIcon className="github-icon" style={{ fontSize: 60, color: 'white' }} />
        <div className="git__icon__text">Code</div>
        </div>

      </a>
    </div>
  </div>
          <div className="project__text">
            <a
              href="https://github.com/teegrg/portfolioProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="title">
                <div className="title__text">THE CURATOR</div>
                <ArrowOutwardIcon className="arrow" />
              </div>
            </a>
            <div className="project__icon__wrapper">
              <div className="project__icon">HTML</div>
              <div className="project__icon">CSS</div>
              <div className="project__icon">JAVASCRIPT</div>
              <div className="project__icon">GITHUB</div>
            </div>
            {expandedProject === 4 ? (
              <p>
                The very first application I created with the mission to promote
                the art of talented artists and bring their work to a global
                audience. It will take you on a journey to explore the world of
                art!{" "}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(4)}
                >
                  See less
                </span>
              </p>
            ) : (
              <p>
                {truncateText(
                  "The very first application I created with the mission to promote the art of talented artists and bring their work to a global audience. It will take you on a journey to explore the world of art!",
                  150
                )}
                <span
                  className="see-more"
                  onClick={() => toggleExpandProject(4)}
                >
                  See more
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
