import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa'; // Importing social icons from react-icons

export const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '40px 0', backgroundColor: '#333' }}>
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col size={12} sm={6} className="text-center text-sm-start mb-3">
            <img src={logo} alt="Logo" style={{ maxWidth: '150px' }} />
          </Col>

          {/* Social Icons and Copyright Section */}
          <Col size={12} sm={6} className="text-center text-sm-end mb-3">
            <div className="social-icon" style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/ju0_o5?igsh=MXMwMnl5NjlsazRtdg==" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: '#E4405F', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginRight: '20px', // Space between icons
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaInstagram size={24} style={{ color: '#fff' }} />
              </a>

              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/juby-mary-thomas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: '#0077B5', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginRight: '20px', // Space between icons
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaLinkedin size={24} style={{ color: '#fff' }} />
              </a>

              {/* Behance Icon */}
              <a 
                href="https://www.behance.net/jubymthomas" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: '#1769FF', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <FaBehance size={24} style={{ color: '#fff' }} />
              </a>
            </div>
            {/* Copyright Text */}
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '0.9rem', color: '#fff', marginTop: '0', marginBottom: '0' }}>
              ©Copyright 2025. All Rights Reserved kynu
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Hover Effects */}
      <style>{`
        .social-icon a:hover {
          transform: scale(1.1);
          box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </footer>
  );
}
