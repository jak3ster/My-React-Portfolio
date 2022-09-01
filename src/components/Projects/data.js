const Data = [
    {
        id: 1,
        project_name: "Medical Portal",
        description: `Project 2: A CMS-style user login portal, where patients can secure access 
            to view personal health information from anywhere with an Internet connection. 
            Using a secure username and password, patients can view health information 
            such as: Recent doctor visits. Discharge summaries including chat message.`,
        features: `Features: JavaScript, Node.js, MySQL, npm packages: bcrypt, connect-session-sequelize, dotenv
            express, express-handlebars, express-session, mysql2, sequelize, moment, socket.io`,
        demo_link: "https://medicalportalgroup2.herokuapp.com/",
        github_link: "https://github.com/jak3ster/Medical-Portal/",
        image: `${process.env.PUBLIC_URL}/assets/images/medical-portal.png`,
        alt: "Screenshot of Medical Portal project"
    },
    {
        id: 2,
        project_name: "My Tech Blog",
        description: `A CMS-style blog site similar to a Wordpress site, where developers 
            can publish their blog posts and comment on other developers’ posts as 
            well. Site is built completely from scratch and deployed on Heroku and 
            follows the MVC paradigm in its architectural structure, using Handlebars.js 
            as the templating language, Sequelize as the ORM, and the express-session 
            npm package for authentication.`,
        features: `Features: JavaScript, Node.js, MySQL, npm packages: bcrypt, connect-session-sequelize, 
            dotenv, express, express-handlebars, express-session, mysql2, sequelize`,
        demo_link: "https://jak3ster-techblog.herokuapp.com/",
        github_link: "https://github.com/jak3ster/My-Tech-Blog/",
        image: `${process.env.PUBLIC_URL}/assets/images/my-orm-back-end.png`,
        alt: "Screenshot of My Tech Blog project"
    },
    {
        id: 3,
        project_name: "My ORM Back End",
        description: `A back-end for an e-commerce site using a modifying starter code 
            and configure a working Express.js API that uses Sequelize to interact 
            with a MySQL database.`,
        features: `Features: JavaScript, Node.js, MySQL, npm packages: express, sequelize, mysql2, dotenv`,
        demo_link: "https://drive.google.com/file/d/147SxgXKnWxBOA2dynKkdv-qzDa37urxc/view?usp=sharing/",
        github_link: "https://github.com/jak3ster/My-ORM-Back-End",
        image: `${process.env.PUBLIC_URL}/assets/images/my-tech-blog.png`,
        alt: "Screenshot of My ORM Back End project"
    },
    {
        id: 4,
        project_name: "My Employee Management System",
        description: ` A console application Content Management Systems for 
            managing a company's employees where it can view and 
            manage the departments, roles, and employees.`,
        features: `Features: JavaScript, Node.js, MySQL, npm packages: Inquirer, Figlet, mysql`,
        demo_link: "https://drive.google.com/file/d/1aEthJy32mQkgJQb6WPvvUp8xnub3h3DK/view?usp=sharing/",
        github_link: "https://github.com/jak3ster/my-employee-management-system/",
        image: `${process.env.PUBLIC_URL}/assets/images/my-employee-management-system.png`,
        alt: "Screenshot of My Employee Management System project"
    },
    {
        id: 5,
        project_name: "My Note Taker",
        description: `This is for users that need to keep track of a lot of information, 
            it’s easy to forget or be unable to recall something important. Being 
            able to take persistent notes allows users to have written information 
            available when needed. The application can be used to write, save, and 
            delete notes using an express backend and save and retrieve notes data 
            from a JSON file.`,
        features: `Features: JavaScript, Node.js, Express`,
        demo_link: "https://warm-mountain-90845.herokuapp.com/",
        github_link: "https://github.com/jak3ster/My-Note-Taker/",
        image: `${process.env.PUBLIC_URL}/assets/images/my-note-taker.png`,
        alt: "Screenshot of Note Taker  project"
    },
    {
        id: 6,
        project_name: "Updated Portfolio #1",
        description: `This is an updated portfolio as part of building toward being employer-competitive.`,
        features: `Features: HTML, CSS, Bootstrap, JavaScript`,
        demo_link: "https://jak3ster.github.io/My-Updated-Porfolio-Page/",
        github_link: "https://github.com/jak3ster/My-Updated-Porfolio-Page/",
        image: `${process.env.PUBLIC_URL}/assets/images/my-updated-portfolio-page.png`,
        alt: "Screenshot of Updated Portfolio #1 project"
    }
];

export default Data;