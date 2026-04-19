import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ✅ Image path correct
import pollify from "../../Assets/Projects/pollify.png";
import resume from "../../Assets/Projects/Resume.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I have built.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ✅ Pollify Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollify}
              isBlog={false}
              title="Pollify"
              description="Pollify is a real-time polling web application where users can create polls and vote instantly. The project is built using React and Firebase, providing live updates and a smooth user experience."
              ghLink="https://github.com/Vishal795-knightrider/Pollify"
              demoLink="https://pollify-e197f.web.app" 
            />
          </Col>

          <Col md={4} className="project-card">
           <ProjectCard
             imgPath={resume}
            isBlog={false}
            title="Resume Scoring System"
            description="An intelligent web application that evaluates how well a candidate's resume matches a job description using Machine Learning techniques like TF-IDF and Cosine Similarity."
            ghLink="https://github.com/Vishal795-knightrider/nlp-resume-scoring-system"
            demoLink="https://nlp-resume-scoring-system.onrender.com/"
           />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;