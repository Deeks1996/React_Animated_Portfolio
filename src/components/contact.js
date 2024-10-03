import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container" id="contact">
        <h1> CONTACT ME </h1>

        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.instagram.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="items">
            <FaFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="items">
            <FaXTwitter className="icons" />
          </a>
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="https://gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact