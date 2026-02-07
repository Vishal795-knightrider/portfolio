import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", lineHeight: "1.8em" }}>
            Hi everyone! I’m <span className="purple">Vishal Kashyap</span>.
          </p>

          <p style={{ textAlign: "left", lineHeight: "1.8em" }}>
            I’m a <span className="purple">Computer Science student</span> with a
            strong interest in building practical and user-friendly software.
          </p>

          <p style={{ textAlign: "left", lineHeight: "1.8em" }}>
            I’m currently focused on improving my skills in{" "}
            <span className="purple">
              programming, data structures, and web development
            </span>
            , while learning modern technologies used in the industry.
          </p>

          <p style={{ textAlign: "left", lineHeight: "1.8em" }}>
            Outside of coding, I enjoy activities that keep me motivated and
            creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies & building projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistent learning and small improvements every day lead to big
            results."
          </p>
          <footer className="blockquote-footer">Vishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
