import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "View Full Projects",
      description: "Explore more on Behance →",
      imgUrl: projImg1,
      behanceUrl: "https://www.behance.net/jubymthomas",
    },
  ];

  const handleBehanceClick = (url) => {
    window.open(url, "_blank");
  };

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
                    As a UI/UX Designer, I craft intuitive digital experiences that blend aesthetics with functionality. Below are highlights of my recent work.
                  </p>

                  <Row className="project-grid justify-content-center">
                    {projects.map((project, index) => (
                      <Col key={index} xs={12} sm={6} md={6} lg={4} className="mb-4">
                        <div
                          style={styles.card}
                          onClick={() => project.behanceUrl && handleBehanceClick(project.behanceUrl)}
                        >
                          <div style={styles.cardContent}>
                            <img src={project.imgUrl} alt={project.title} style={styles.img} />
                            <div style={styles.overlay}>
                              <p style={styles.overlayText}>{project.title}</p>
                              <p style={styles.overlayDescription}>{project.description}</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div className="background-glitter"></div>
      <img className="background-image-right" src={colorSharp2} alt="Decoration" style={styles.backgroundImage} />
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    padding: "40px 0", // Reduced padding for a more compact background
    textAlign: "center",
    backgroundColor: "#121212", 
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #9b4dff", // Purple border at the bottom for contrast
    position: "relative",
    animation: "sectionFadeIn 1s ease-in-out", // Animation for section fade-in
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#fff",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    animation: "titleSlideIn 1s ease-out", // Slide-in effect for title
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#bbb",
    maxWidth: "600px",
    margin: "0 auto",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)",
    animation: "descriptionFadeIn 1s ease-out", // Fade-in effect for description
  },
  card: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, filter 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px", // Increased padding for a larger card
    maxWidth: "550px", // Increased max-width for larger cards
    margin: "0 auto",
    backgroundColor: "#2A2A2A",
    border: "2px solid #9b4dff",
    animation: "cardZoom 0.5s ease-in-out",
    transition: "transform 0.5s ease-in-out", // More pronounced hover zoom
    "&:hover": {
      transform: "scale(1.05)", // Slight zoom effect on hover
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.35)", // Increase shadow on hover
    },
  },
  cardContent: {
    position: "relative",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease-in-out",
  },
  img: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "15px",
    transition: "transform 0.3s ease-in-out",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0",
    transition: "opacity 0.3s ease-in-out",
    borderRadius: "15px",
    "&:hover": {
      opacity: "1", // Show overlay on hover
    },
  },
  overlayText: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "10px",
    letterSpacing: "1px",
    color: "#9b4dff",
    transition: "color 0.3s ease-in-out", // Interactive color change
  },
  overlayDescription: {
    fontSize: "1.2rem",
    marginTop: "10px",
    lineHeight: "1.4",
    maxWidth: "80%",
    color: "#ddd",
  },
  backgroundImage: {
    position: "absolute",
    bottom: "0",
    right: "0",
    zIndex: "-1",
    width: "50%",
    opacity: "0.15",
    transition: "opacity 0.3s ease-in-out",
    animation: "backgroundZoom 3s infinite ease-in-out",
  },
  backgroundGlitter: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "url('https://cdn.pixabay.com/photo/2017/10/10/17/17/beautiful-2833051_960_720.jpg') repeat",
    backgroundSize: "cover",
    opacity: "0.2",
    animation: "glitterAnimation 1.5s infinite",
    zIndex: "-2",
  },
};

// Keyframe Animations

const keyframes = `
  @keyframes sectionFadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes titleSlideIn {
    0% { transform: translateY(-30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes descriptionFadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes cardZoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
  }

  @keyframes backgroundZoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }

  @keyframes glitterAnimation {
    0% { opacity: 0.2; }
    50% { opacity: 0.4; }
    100% { opacity: 0.2; }
  }
`;

export default Projects;
