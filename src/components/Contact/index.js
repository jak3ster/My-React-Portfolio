import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './contact-form';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import '../App.css';

function Contact() {
    return (
        <div className='container'>
            <Jumbotron fluid className="p-5 mb-0">
                <Container className="text-center">
                    <div className="p-md-5">
                        <h1>Get in Touch</h1>
                    </div>
                </Container>
            </Jumbotron>

            <Container fluid className="shadow bg-light mb-5">
                <Container className="p-4">
                    <Row>
                        <Col>
                            <Container>
                                <h4 style={{ color: "#F06543" }}>Contact Info</h4>
                                <p>
                                    <a href="mailto:priyaravi23@gmail.com">
                                        <span className="pr-3">
                                            <FaEnvelope />
                                        </span>
                                        priyaravi23@gmail.com
                                    </a>
                                </p>

                                <p>
                                    <a href="https://github.com/priyaravi23" target='_blank'>
                                        <span className="pr-3">
                                            <FaGithub />
                                        </span>
                                        priyaravi23
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/in/priya-ravi-4508437b/" target='_blank'>
                                        <span className="pr-3">
                                            <FaLinkedin />
                                        </span>
                                        priya-ravi-4508437b
                                    </a>
                                </p>
                            </Container>
                        </Col>

                        <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                            <Container>
                                <h4 style={{ color: "#F06543" }}>Send a Message</h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact;

// import React from 'react';
// // import resume from "../../../public/assets/resume/jautus2022.pdf"
// import './style.css';

// const Contact = () => {
//     return (
//         <div className="contact">
//             <h1>Let's Connect!</h1>
//             <iframe
//                 title="location"
//                 src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaVd28PH424AR6oHG6KfZ8Ww&key=..."
//                 frameBorder="0"
//                 allowFullScreen=""
//                 aria-hidden="false"
//                 tabIndex="0">
//             </iframe>
//             <div className="social">
//                 <h4>LinkedIn</h4>
//                 <p>
//                     <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jautus/">
//                         https://www.linkedin.com/in/jautus/
//                     </a>
//                 </p>

//                 <h4>GitHub</h4>
//                 <p>
//                     <a target="_blank" rel="noopener noreferrer" href="https://github.com/jak3ster">
//                         https://github.com/jak3ster
//                     </a>
//                 </p>

//                 <h4>Email</h4>
//                 <p>
//                     <a target="_blank" rel="noopener noreferrer" href="mailto:jautus@hotmail.com">
//                         jautus@hotmail.com
//                 </a>
//                 </p>

//                 <h4>Resume</h4>
//                 <p>
//                     <a target="_blank" rel="noopener noreferrer" href="/assets/resume/jautus2022.pdf">
//                         JayAutus_Resume
//                 </a>
//                 </p>

//                 <h4>Phone</h4>
//                 <p>
//                     <a target="_blank" rel="noopener noreferrer" href="tel:858-336-2984">
//                         858-336-2984
//                     </a>
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Contact;
