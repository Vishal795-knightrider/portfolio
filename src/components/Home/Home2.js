import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Computer Science student with a strong interest in building
              practical and user-friendly software. I enjoy turning ideas into
              real applications and understanding how things work behind the
              scenes.
              <br />
              <br />
              I mainly work with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java, C++, and Python{" "}
                </b>
              </i>
              and I’m comfortable working on both frontend and backend parts of
              a project.
              <br />
              <br />
              My interests include developing
              <i>
                <b className="purple"> Web Applications </b>
              </i>
              and learning how scalable and efficient systems are designed.
              <br />
              <br />
              I enjoy building projects using
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              , and I’m always eager to learn new technologies and improve my
              skills.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
