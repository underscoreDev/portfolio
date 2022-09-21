import React from "react";
import "./ResumePage.css";
import Fade from "react-reveal/Fade";
import data from "../../data.json";
import git from "../../images/tech/git.svg";
import html5 from "../../images/tech/html5.svg";

const ResumePage = () => {
  return (
    <section className="resume-page">
      <header className="resume-page__header">
        <h1 className="resume-page__heading resume-page__heading--main">
          Resume
        </h1>
        <p className="resume-page__subheading">
          Learn more about my skills, qualifications and experiences.
        </p>
      </header>
      <div className="resume-page__body">
        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Work Experience</h2>
            <p className="resume-page__subheading--body">
              PRESENT & PREVIOUS JOBS
            </p>
          </div>
          <div className="resume-page__content-right">
            <div className="work-wrapper">
              <Fade bottom>
                {data.work.map((work, i) => (
                  <div className="work" key={i}>
                    <p className="work__timeline">
                      {work.timeline.from} - {work.timeline.to}
                    </p>
                    <h3 className="work__role">{work.role}</h3>
                    <p className="work__company">{work.company}</p>
                    <p className="work__summary">{work.summary} </p>
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>

        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Education</h2>
            <p className="resume-page__subheading--body">ACADEMIC CAREER</p>
          </div>
          <div className="resume-page__content-right">
            <div className="education-wrapper">
              {data.education.map((edu, i) => (
                <Fade bottom>
                  <div className="education" key={i}>
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__school">{edu.school}</p>
                    <p className="education__timeline">
                      {edu.timeline.from} - {edu.timeline.to}
                    </p>
                    <p className="education__summary">{edu.summary} </p>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-page__content">
          <div className="resume-page__content-left">
            <h2 className="resume-page__heading">Tech Stack</h2>
            <p className="resume-page__subheading--body">
              TOOLS & TECHNOLOGIES
            </p>
          </div>
          <div className="resume-page__content-right">
            <Fade bottom>
              <div className="tech">
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                  alt="Typescript"
                  title="Typescript"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  alt="Javascript"
                  title="Javascript"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                  alt="NodeJs"
                  title="NodeJs"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
                  alt="ExpressJs"
                  title="ExpressJs"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  alt="ReactJs"
                  title="ReactJs"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
                  alt="Redux"
                  title="Redux"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png"
                  alt="AWS"
                  title="AWS"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                  alt="MongoDb"
                  title="MongoDb"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                  alt="PostgreSQL"
                  title="PostgreSQL"
                  className="tech__logo"
                />
                <img
                  src={html5}
                  alt="HTML5"
                  title="HTML5"
                  className="tech__logo"
                />
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
                  alt="SASS"
                  title="SASS"
                  className="tech__logo"
                />
                <img src={git} alt="Git" title="Git" className="tech__logo" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
