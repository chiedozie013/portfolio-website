import React from "react";
import image from "../images/my-photo.jpeg";
import classes from "./LandingSection.module.css";

const greeting = "Hello, I am James Chiedozie James!";
const bio1 = "A Full-Stack/Software Engineer and Product Designer";
const bio2 = "Specialised in React, Django and Figma";

export default function LandingSection() {
  return (
    <section className={classes.landingSection}>
      <div className={`fluidContainer ${classes.landingContainer}`}>
        <div className={classes.imageContainer}>
          <img src={image} alt="Profile-pix" />
        </div>
        <div className={classes.greeting}>{greeting}</div>
        <div className={classes.bio1}>{bio1}</div>
        <div className={classes.bio2}>{bio2}</div>
      </div>
    </section>
  );
}
