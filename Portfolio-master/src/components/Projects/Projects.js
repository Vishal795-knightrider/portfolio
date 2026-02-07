import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 👉 Apne restaurant project ki image yaha add karo
// Example: ../../Assets/Projects/restaurant.png
import restaurant from "../../Assets/Projects/restaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here is a project I built during my first semester.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Website"
              description="A basic restaurant website built using HTML and CSS as part of my first semester project. The website includes multiple pages such as menu categories (appetizers, beverages, desserts) with a clean layout and simple styling."
              ghLink="https://github.com/Vishal795-knightrider/Techy-Web"
              // demoLink=""  // demo tab add karna jab deploy ho jaye
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
