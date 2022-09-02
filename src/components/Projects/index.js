import React from 'react';
// import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './data.js'

const CardListItem = props => {
    console.log("props", props)
    console.log("props.image", props.Data.image)
    const marginBottom = { marginBottom: "1.5rem" };
    return (
        <Col xs={12} sm={12} lg={4} mb={4} style={ marginBottom }>
            <div>
                <div className="imageBox">
                    <img src={props.Data.image} className="card-img-top border-bottom" alt={props.Data.alt} />
                </div>
                <div className="card-body mb-5 pl-0">
                    <h3>{props.Data.project_name}</h3>
                    <p className="card-text">
                        {props.Data.description}
                    </p>
                    <p className="card-text">
                        <small>
                            Features: {props.Data.features}
                        </small>
                    </p>
                    <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                        <a href={props.Data.demo_link} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={props.Data.github_link} target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </Col>
        // <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
        //     <div>
        //         <div className="imageBox">
        //             <img src={`${process.env.PUBLIC_URL}` + props.Data.image} className="card-img-top border-bottom" alt={props.Data.alt} />
        //         </div>
        //         <div className="card-body mb-5 pl-0">
        //             <h3>{props.Data.project_name}</h3>
        //             <p className="card-text">
        //                 {props.Data.description}
        //             </p>
        //             <p className="card-text">
        //                 <small>
        //                     Features: {props.Data.features}
        //                 </small>
        //             </p>
        //             <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
        //                 <a href={props.Data.demo_link} target="_blank" className="btn mr-2" rel="noreferrer">
        //                     <i className="fas fa-laptop-code"></i></a>
        //                 <a href={props.Data.github_link} target="_blank" className="btn" rel="noreferrer">
        //                     <i className="fab fa-github"></i></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

const CardList = () => {
    return (
        <Row className="justify-content-center">
            {Data.map(data => {
                return <CardListItem Data={data} key={data.id} />;
            })}
        </Row>
        // <div className="row justify-description-center">
        //     {Data.map(data => {
        //         return <CardListItem Data={data} key={data.id} />;
        //     })}
        // </div>
    );
};

export default function Projects() {
    return (
        <Container>
            <CardList />
        </Container>
        // <div className="container" id="portfolio">
        //     <CardList />
        // </div>
    );
}

// export default Projects;
