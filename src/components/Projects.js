import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { motion } from "framer-motion";
import { useState } from "react";
import 'animate.css';

export const Projects = () => {
  const [hovered, setHovered] = useState(false);

  const projects = [
    {
      title: "Visit Projects",
      description: "Explore more on Behance →",
      imgUrl: projImg1,
      behanceUrl: "https://www.behance.net/jubymthomas",
    },
  ];

  return (
    <section className="project" id="projects" style={styles.section}>
      <Container>
        <Row className="justify-content-center">
          <Col size={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 style={styles.title}> Featured Work </h2>
              <p style={styles.description}>
                As a UI/UX Designer, I craft intuitive digital experiences that blend aesthetics with functionality.
              </p>

              <Row className="project-grid justify-content-center">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="interactive-box"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => window.open(project.behanceUrl, "_blank")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      ...styles.box,
                      backgroundImage: `url(${project.imgUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: hovered
                        ? "linear-gradient(135deg, rgba(155, 77, 255, 0.9), rgba(106, 0, 244, 0.9))"
                        : "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <motion.div
                      initial={{ rotateX: 0, rotateY: 0 }}
                      animate={{ rotateX: hovered ? 10 : 0, rotateY: hovered ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={styles.textOverlay} // Apply overlay here
                    >
                      <h4 style={styles.boxTitle}>{project.title}</h4>
                      <span style={styles.boxDescription}>{project.description}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <div className="background-glitter"></div>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Decoration"
        style={styles.backgroundImage}
      />
    </section>
  );
};

// **Styles**
const styles = {
  section: {
    position: "relative",
    padding: "80px 0",
    textAlign: "center",
    backgroundColor: "#121212",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #9b4dff",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#bbb",
    maxWidth: "600px",
    margin: "0 auto",
  },
  box: {
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "350px",
    height: "220px",
    margin: "20px auto",
    boxShadow: "0px 10px 30px rgba(155, 77, 255, 0.3)",
    position: "relative",
    overflow: "hidden",
  },
  textOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px", // Same border radius for smooth corners
    padding: "10px", // Padding inside overlay
    zIndex: 1, // Make sure overlay stays above the background image
  },
  boxTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#fff",
    zIndex: 2, // Ensure the title text stays on top
  },
  boxDescription: {
    fontSize: "1rem",
    marginTop: "10px",
    color: "#ddd",
    zIndex: 2, // Ensure the description stays on top
  },
  backgroundImage: {
    position: "absolute",
    bottom: "0",
    right: "0",
    zIndex: "-1",
    width: "50%",
    opacity: "0.15",
    transition: "opacity 0.3s ease-in-out",
  },
};

export default Projects;
