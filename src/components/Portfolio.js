import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

const projects = [{
    id: '1',
    name: 'Sneaker Webshop',
    stack: ["React", "CommerceJS", "Material-UI"],
    status: 'WIP'
    },
    {
    id: '2',
    name: 'Verktyg för lantbrukare',
    stack: 'React, Firebase, Material-UI,',
    status: 'WIP'
    }

]

const profileURL = "https://api.github.com/users/octocat/repos";

const Portfolio = () => {

    const [repos, setRepos] = useState([])
    
    useEffect(() => {
        axios.get(profileURL).then((response) => {
          setRepos(response.data);
        });
      }, []);
    
      if (!repos) return null;

      console.log(repos);

    return (
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    <p>Hej, mitt namn är</p>
                    <h1>Max</h1>
                    <p>Jag är en utvecklare med fler sidor än bara kod</p>
                </Col>
            </Row>
            <Row>
                <h4>Projekt</h4>
                <CardGroup>
                {projects.map((project) => (
                    <Card key={project} className="projectCard">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>{project.desc}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                ))}
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Portfolio
