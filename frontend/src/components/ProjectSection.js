import ProjectCard from "./ProjectCard";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import classes from "./ProjectSection.module.css";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    image: photo1,
  },
  {
    title: "Little Lemon",
    description:
      "A website/web application for a restaurant that allows customers to make reservations.",
    image: photo2,
  },
  {
    title: "Event Planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps.",
    image: photo3,
  },
];

export default function ProjectSection() {
  return (
    <section className={classes.projectSection} id="projects">
      <div className={`fluidContainer ${classes.projectContainer}`}>
        <div className="sectionTitle">
          <h2>Featured Projects</h2>
        </div>
        <div className={classes.projectCatlog}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
