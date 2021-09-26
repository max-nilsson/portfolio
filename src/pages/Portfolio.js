import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

const Portfolio = () => {

    return (
        <Container>
            <Row className="align-items-center vh-100">
                <Col xs={12} sm={6}>
                    <p>Hej, mitt namn är</p>
                    <h1>Max</h1>
                    <p>Jag är en utvecklare med fler sidor än bara kod.</p>
                </Col>
                <Col xs={12} sm={6}>
                <Technologies/>
                </Col>
            </Row>
            <Row>
                <h4 className="sectionTitle">Projekt</h4>
                <Projects />
            </Row>
        </Container>
    )
}

export default Portfolio
