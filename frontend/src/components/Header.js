import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStackOverflow,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
// import { Box, HStack } from "@chakra-ui/react";
import classes from "./Header.module.css";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://www.github.com/chiedozie013",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/chiedozie013/",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/edoziey",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21482273/chiedozie-james",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@chiedozie013",
  },
];

/**
 * This component illustrates the use of both the useRef hook and useEffect hook.
 * The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation.
 * The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted.
 * Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements.
 */
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  //
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevValue) => !prevValue);
  };
  return (
    <header className={classes.header}>
      <div className={`fluidContainer ${classes.headerContainer}`}>
        <div
          className={`${classes.mainNavigation} ${
            isOpen ? classes.mainNavigationOpen : ""
          }`}
        >
          <nav className={classes.headerIcon}>
            {socials.map(({ icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="2x" key={url} />
              </a>
            ))}
          </nav>
          <button className={classes.toggleButton} onClick={toggleMenu}>
            {isOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        <nav className={classes.headerText}>
          <a href="#projects" onClick={handleClick("projects")}>
            Projects
          </a>
          <a href="#contactme" onClick={handleClick("contactme")}>
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
