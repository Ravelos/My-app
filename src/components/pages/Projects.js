import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

import styles from "./Projects.module.css";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

function Projects() {
  const [projects, setProject] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(()=>{
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProject(data);
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
    },300)
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My projects</h1>
        <LinkButton to="/newproject" text="Create a project" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 (
            <p>There are not projects registered!</p>
            )
          }
      </Container>
    </div>
  );
}

export default Projects;
