import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";
import animationData from "../../images/lotties/man.json";
import { HTMLIcon, CodeBracesIcon, WebIcon } from "../../images/icons/icons";

const AboutPage = () => {
  return (
    <section className="about-page">
      <header className="about-page__header">
        <h1 className="about-page__heading about-page__heading--main">
          Godswill Edet
        </h1>
      </header>
      <div className="about-page__body">
        <div className="about-page__content">
          <div className="about-page__content-left">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              style={{ maxWidth: 300 }}
              height="auto"
            />
          </div>

          <div className="about-page__content-right">
            <Fade bottom>
              <p className="about-page__text about-page__text--restricted">
                <strong className="about-page__text--bold"> Who am I? </strong>
                <ul className="about-page__list">
                  <li className="about-page__list-item">
                    Godswill is a dedicated and solution-oriented Fullstack
                    Software Developer with 2+ years of experience in designing
                    and creating clean, responsive, and interactive websites and
                    web applications. He is a Udacity certified Fullstack
                    Javascript Developer, React Developer and Currently
                    transitioning into the Cloud/DevOps Engineering Field
                  </li>
                </ul>
              </p>

              <p className="about-page__text about-page__text--restricted">
                <strong className="about-page__text--bold">
                  {" "}
                  How do I think ? (My Mindset){" "}
                </strong>
                <ul className="about-page__list">
                  <li className="about-page__list-item">
                    Anyone can fix a problem or develop a solution but my 2+
                    years of experience as a "Fullstack Developer" has taught me
                    beyond this, Don't just build a solution but design the BEST
                    solution which is Futuristic, Scalable, Reliable, Handy, Low
                    maintenance, No complexity, Open to Interoperability and
                    longstanding. This is always my mindset when building apps.
                    I bring creative and innovative ideas to life through unique
                    software solutions to solve problems.
                  </li>
                </ul>
              </p>

              <p className="about-page__text about-page__text--restricted">
                <strong className="about-page__text--bold">
                  {" "}
                  Where Do I Work ?{" "}
                </strong>
                <ul className="about-page__list">
                  <li className="about-page__list-item">
                    Current displaying my expertise as a Fullstack Developer at
                    a startup DegX.
                  </li>
                </ul>
              </p>

              <div className="about-page__text">
                <strong className="about-page__text--bold"> What I do? </strong>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="about-page__services">
                    <a
                      href="https://www.udacity.com/course/react-nanodegree--nd019"
                      target="_blank"
                      className="about-page__services-link"
                    >
                      <HTMLIcon className="about-page__services-icon" />
                      <span className="about-page__services-text">
                        Frontend Development
                      </span>
                    </a>
                  </div>
                  <div className="about-page__services">
                    <a
                      href="https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067"
                      target="_blank"
                      className="about-page__services-link"
                    >
                      <CodeBracesIcon className="about-page__services-icon" />
                      <span className="about-page__services-text">
                        Backend Development
                      </span>
                    </a>
                  </div>
                  <div className="about-page__services">
                    <a
                      href="https://www.udacity.com/course/cloud-developer-nanodegree--nd9990"
                      target="_blank"
                      className="about-page__services-link"
                    >
                      <WebIcon className="about-page__services-icon" />
                      <span className="about-page__services-text">
                        Cloud Development
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <p className="about-page__text about-page__text--restricted">
                I'm super excited you're here. Feel free to{" "}
                <Link to="/contact" className="about-page__link">
                  <b>reach out to me </b>
                </Link>
                with any project ideas you have or to just say hello!
              </p>
            </Fade>{" "}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutPage;
