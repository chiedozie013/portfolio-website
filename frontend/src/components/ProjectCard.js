import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import classes from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, image }) {
  return (
    <article className={classes.card}>
      <div className={classes.cardImageContainer}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className={classes.cardText}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href="https://www.github.com/chiedozie013"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </div>
    </article>
  );
}
