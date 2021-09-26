import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

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

const Projects = () => {
    return (
        <>
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
                </>
    )
}

export default Projects
