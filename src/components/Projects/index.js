import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/medical-portal.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Medical Portal project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Medical Portal</h3>
                            <p className="card-text">
                                Project 2: A CMS-style user login portal, where patients can secure access 
                                to view personal health information from anywhere with an Internet connection. 
                                Using a secure username and password, patients can view health information 
                                such as: Recent doctor visits. Discharge summaries including chat message.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node.js, MySQL, npm packages: bcrypt, connect-session-sequelize, dotenv
                                    express, express-handlebars, express-session, mysql2, sequelize, moment, socket.io
                                </small>
                            </p>

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://medicalportalgroup2.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/jak3ster/Medical-Portal/" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/my-tech-blog.png`} className="card-img-top border-bottom"
                                alt="Screenshot of My Tech Blog project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>My Tech Blog</h3>
                            <p className="card-text">
                                A CMS-style blog site similar to a Wordpress site, where developers 
                                can publish their blog posts and comment on other developers’ posts as 
                                well. Site is built completely from scratch and deployed on Heroku and 
                                follows the MVC paradigm in its architectural structure, using Handlebars.js 
                                as the templating language, Sequelize as the ORM, and the express-session 
                                npm package for authentication.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node.js, MySQL, npm packages: bcrypt, connect-session-sequelize, 
                                    dotenv, express, express-handlebars, express-session, mysql2, sequelize
                            </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://jak3ster-techblog.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/jak3ster/My-Tech-Blog/" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/my-orm-back-end.png`} className="card-img-top border-bottom"
                            alt="Screenshot of My ORM Back End project" />
                        <div className="card-body mb-5 pl-0">
                            <h3>My ORM Back End</h3>
                            <p className="card-text">
                                A back-end for an e-commerce site using a modifying starter code 
                                and configure a working Express.js API that uses Sequelize to interact 
                                with a MySQL database.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node.js, MySQL, npm packages: express, sequelize, mysql2, dotenv
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://drive.google.com/file/d/147SxgXKnWxBOA2dynKkdv-qzDa37urxc/view?usp=sharing/" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/jak3ster/My-ORM-Back-End" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/my-employee-management-system.png`} className="card-img-top border-bottom"
                                alt="Screenshot of My Employee Management System project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>My Employee Management System</h3>
                            <p className="card-text">
                                A console application Content Management Systems for 
                                managing a company's employees where it can view and 
                                manage the departments, roles, and employees.
                            </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node.js, MySQL, npm packages: Inquirer, Figlet, mysql
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://drive.google.com/file/d/1aEthJy32mQkgJQb6WPvvUp8xnub3h3DK/view?usp=sharing/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/jak3ster/my-employee-management-system/" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/my-note-taker.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Note Taker project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>My Note Taker</h3>
                                <p className="card-text">
                                    This is for users that need to keep track of a lot of information, 
                                    it’s easy to forget or be unable to recall something important. Being 
                                    able to take persistent notes allows users to have written information 
                                    available when needed. The application can be used to write, save, and 
                                    delete notes using an express backend and save and retrieve notes data 
                                    from a JSON file.
                                </p>
                            <p className="card-text">
                                <small>
                                    Features: JavaScript, Node.js, Express
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://warm-mountain-90845.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/jak3ster/My-Note-Taker/" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/my-updated-portfolio-page.png`} className="card-img-top border-bottom"
                                alt="Screenshot of Updated Portfolio #1 project" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Updated Portfolio #1</h3>
                                <p className="card-text">
                                    This is an updated portfolio as part of building toward being employer-competitive..
                                </p>
                            <p className="card-text">
                                <small>
                                    Features: HTML, CSS, Bootstrap, JavaScript
                                </small>
                            </p>
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://jak3ster.github.io/My-Updated-Porfolio-Page/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/jak3ster/My-Updated-Porfolio-Page/" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
