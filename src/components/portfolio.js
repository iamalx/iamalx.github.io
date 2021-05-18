import '../App.css';
// import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const projects = [
    {
        title: 'My Portfolio ',
        text: 'Responsive web app build with React + Bootsrap for a great UX.',
        link: 'https://github.com/iamalx/react-portfolio',
        linkName: 'Repo'
    },
    {
        title: 'Machine Learning',
        text: 'Engineered data model to predict sales success',
        link: 'https://github.com/iamalx/machine-learning',
        linkName: 'Repo'
    },
    {
        title: 'Data Analytics',
        text: 'Digital Analytics for Google & Facebook Ads to provide insights.',
        link: 'https://github.com/iamalx/digital_analytics_python',
        linkName: 'Repo'
    },
    {
        title: 'Project Automation',
        text: 'Asana API script to automate tasks for a smooth project management',
        link: 'https://github.com/iamalx/asana_api_automation',
        linkName: 'Repo'
    },
    {
        title: 'Restful API Backend',
        text: 'End-points using Node, Express, MongoDb, + to facilitate shopping.',
        link: 'https://github.com/iamalx/node_app',
        linkName: 'Repo'
    },
    {
        title: 'Hybrid App Apprenticeship',
        text: 'App built with Ionic + Angular to help Veterans.',
        link: 'https://github.com/iamalx/reboot-frontend',
        linkName: 'Repo'
    },
    
]

const Portfolio = () => {

    return (
        <div className='error-bar pb-5' >
            <h2 className='sub-font mb-4'><u>Portfolio</u></h2>
            <Container>
                <Row>
                    {projects.map(elem => (
                        <Col key={elem.title} xs={12} sm={6} md={4} className='mb-5'>
                            <Card style={{ width: '100%' }} className='card-effects'>
                                <Card.Body>
                                    <Card.Title>{elem.title}</Card.Title>
                                        <Card.Text>
                                            {elem.text}
                                        </Card.Text>
                                    <Card.Link target='_blank' href={elem.link}>{elem.linkName}</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}                  
                </Row>
            </Container>

            
        </div>
    );
}

export default Portfolio;
