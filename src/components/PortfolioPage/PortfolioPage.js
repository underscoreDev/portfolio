import React from "react";
import "./PortfolioPage.css";
import { Link } from "react-router-dom";
import { AboutIcon } from "../../images/icons/icons";
import data from "../../data.json";
import Fade from "react-reveal/Fade";
import Grid from "@mui/material/Unstable_Grid2";

const PortfolioPage = () => {
  return (
    <section className="portfolio-page">
      <header className="portfolio-page__header">
        <h1 className="portfolio-page__heading portfolio-page__heading--main">
          Recent Works
        </h1>
        <p className="portfolio-page__subheading">
          Portfolio showcase of some of my work.
        </p>
      </header>
      <Fade bottom cascade>
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {Object.keys(data.projects).map((slug, i) => {
            const project = data.projects[slug];
            return (
              <Grid
                xs={6}
                sm={4}
                key={i}
                className="portfolio-page__img-wrapper"
              >
                <Link to={`/portfolio/${slug}`}>
                  <img
                    src={project.image_url}
                    alt={project.name}
                    className="portfolio-page__img"
                  />
                  <div className="portfolio-page__desc">
                    <h3> {project.name} </h3>
                    <div className="portfolio-page__actions">
                      <button
                        className="portfolio-page__img-btn"
                        aria-label="View details"
                        title="View details"
                      >
                        <AboutIcon
                          width={40}
                          className="portfolio-page__img-icon"
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Fade>
    </section>
  );
};

export default PortfolioPage;
