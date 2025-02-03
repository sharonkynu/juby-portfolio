import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

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
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={styles.title}>Featured Work</h2>
                  <p style={styles.description}>
                    As a UI/UX Designer, I craft intuitive digital experiences that blend aesthetics with functionality. Below are highlights of my recent works.
                  </p>

                  <Row className="project-grid justify-content-center">
                    {/* Mapping over projects and rendering ProjectCard component */}
                    {projects.map((project, index) => (
                      <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.imgUrl}
                        behanceUrl={project.behanceUrl} // Pass behanceUrl as a prop if necessary
                      />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
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

const styles = {
  section: {
    position: "relative",
    padding: "40px 0",
    textAlign: "center",
    backgroundColor: "#121212", 
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #9b4dff", 
    position: "relative",
    animation: "sectionFadeIn 1s ease-in-out",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    animation: "titleSlideIn 1s ease-out",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#bbb",
    maxWidth: "600px",
    margin: "0 auto",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
    animation: "descriptionFadeIn 1s ease-out",
  },
  backgroundImage: {
    position: "absolute",
    bottom: "0",
    right: "0",
    zIndex: "-1",  // Make sure the background image stays behind other content
    width: "50%",
    opacity: "0.15",
    transition: "opacity 0.3s ease-in-out",
    animation: "backgroundZoom 3s infinite ease-in-out",
    cursor: "pointer",  // Make the image clickable
  },
};

export default Projects;
