import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBehance } from "react-icons/fa"; 
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect" style={{ padding: '60px 0', backgroundColor: '#f8f8f8' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us" 
                  style={{ width: '100%', borderRadius: '10px' }}
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="contact-heading" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#333', marginBottom: '30px', textAlign: 'center' }}>
                    Contact Details
                  </h2>
                  <div className="contact-info">
                    <Row>
                      {/* Email */}
                      <Col size={12} sm={6} className="px-1">
                        <div className="contact-item" 
                             style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                          <FaEnvelope size={30} style={{ color: '#4CAF50', marginRight: '15px' }} />
                          <div>
                            <h5 style={{ fontWeight: '500', fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Email</h5>
                            <p style={{ fontSize: '1rem', color: '#FFFFFF' }}>jubymt135@gmail.com</p>
                          </div>
                        </div>
                      </Col>
                      {/* Phone */}
                      <Col size={12} sm={6} className="px-1">
                        <div className="contact-item" 
                             style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                          <FaPhone size={30} style={{ color: '#4CAF50', marginRight: '15px' }} />
                          <div>
                            <h5 style={{ fontWeight: '500', fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Phone</h5>
                            <p style={{ fontSize: '1rem', color: '#FFFFFF' }}>+91 9895525598</p>
                          </div>
                        </div>
                      </Col>
                      {/* Address */}
                      <Col size={12} sm={6} className="px-1">
                        <div className="contact-item" 
                             style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                          <FaMapMarkerAlt size={30} style={{ color: '#FFFFFF', marginRight: '15px' }} />
                          <div>
                            <h5 style={{ fontWeight: '500', fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Address</h5>
                            <p style={{ fontSize: '1rem', color: '#FFFFFF' }}>Thiruvalla, Pathanamthitta, India</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      {/* Behance Link */}
                      <Col size={12} sm={6} className="px-1">
                        <div className="contact-item" 
                             style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                          <FaBehance size={30} style={{ color: '#FFFFFF', marginRight: '15px' }} />
                          <div>
                            <h5 style={{ fontWeight: '500', fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Behance</h5>
                            <p style={{ fontSize: '1rem', color: '#555' }}>
                              <a href="https://www.behance.net/jubymthomas" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Visit my Behance</a>
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* Email Button */}
                    <div className="button-container" style={{ textAlign: 'center', marginTop: '30px' }}>
                      <button 
                        className="contact-btn" 
                        onClick={() => window.location = 'mailto:jubymt135@gmail.com'} 
                        style={{
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          padding: '15px 40px',
                          border: 'none',
                          borderRadius: '30px',
                          fontSize: '1.1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                          textTransform: 'uppercase'
                        }}
                      >
                        Email Me
                      </button>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Add some inline styles for hover and other effects */}
      <style>{`
        .contact-item:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .contact-item:hover .contact-icon {
          color: #007BFF; /* Change icon color on hover */
        }

        .contact-btn:hover {
          background-color: #45a049;
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .contact-btn:focus {
          outline: none;
          background-color: #45a049;
          box-shadow: 0 0 5px #45a049;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-info {
            text-align: center;
          }

          .contact-info .contact-item {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
