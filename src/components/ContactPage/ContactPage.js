import React from "react";
import "./ContactPage.css";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "../../images/icons/icons";
import data from "../../data.json";
import Fade from "react-reveal/Fade";
import { useForm } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvoykezd");

  return (
    <section className="contact-page">
      <header className="contact-page__header">
        <h1 className="contact-page__heading contact-page__heading--main">
          Get In Touch
        </h1>
        <p className="contact-page__subheading">
          I’m always interested in hearing about new projects and opportunities.
        </p>
      </header>

      <div className="contact-page__body">
        <Fade bottom>
          <div className="contact-page__content">
            <div className="contact-page__content-left">
              <h2 className="contact-page__heading">
                Let's talk about everything!
              </h2>
              <p>
                Don't like forms? Send me an{" "}
                <a
                  href={"mailto:" + data.social.email}
                  className="contact-page__link"
                >
                  <b>email</b>
                </a>
                . 👋
              </p>
            </div>
            <div className="contact-page__content-right">
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <input
                  className="contact-page__input"
                  placeholder="Your name"
                  name="name"
                  id="name"
                  aria-label="Your name"
                  required
                />

                <input
                  className="contact-page__input"
                  placeholder="Email address"
                  aria-label="Email address"
                  name="email"
                  id="email"
                  type="email"
                  required
                />

                <input
                  className="contact-page__input contact-page__input--full"
                  placeholder="Subject"
                  aria-label="Subject"
                  name="subject"
                  id="subject"
                />

                <textarea
                  className="contact-page__input contact-page__textarea"
                  placeholder="Message"
                  aria-label="Message"
                  name="message"
                  id="message"
                  required
                ></textarea>

                <div style={{ textAlign: "right" }}>
                  <button
                    type="submit"
                    className="contact-page__send-btn"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="contact-page__content">
            <div className="contact-page__content-left">
              <h2 className="contact-page__heading">
                Reach out on social media!
              </h2>
            </div>
            <div className="contact-page__content-right">
              <ul className="social">
                <li className="social__item">
                  <a
                    href={data.social.github}
                    target="_blank"
                    className="social__link"
                  >
                    <GithubIcon className="social__icon" fill="black" />
                    Github
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href={data.social.linkedIn}
                    className="social__link"
                    target="_blank"
                  >
                    <LinkedinIcon
                      className="social__icon"
                      fill="#0072b1"
                      width={27}
                    />
                    LinkedIn
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href={data.social.twitter}
                    className="social__link"
                    target="_blank"
                  >
                    <TwitterIcon className="social__icon" fill="#1DA1F2" />
                    Twitter
                  </a>
                </li>
                <li className="social__item">
                  <a
                    href={data.social.instagram}
                    className="social__link"
                    target="_blank"
                  >
                    <InstagramIcon className="social__icon" fill="#E1306C" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Fade>{" "}
      </div>
    </section>
  );
};

export default ContactPage;
