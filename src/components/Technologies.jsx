import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

import firestorelogo from '../lib/firestore.png'
import muilogo from '../lib/mui.png'
import reactlogo from '../lib/react.png'

const techs = [{
        id: '1',
        name: 'React',
        imgurl: reactlogo
    },
    {
        id: '2',
        name: 'Firestore',
        imgurl: firestorelogo
    },
    {
        id: '3',
        name: 'Material-UI',
        imgurl: muilogo
    },
    {
        id: '4',
        name: 'JS',
        imgurl: ''
    }

]

const Technologies = () => {
    return (
        <>
                <CardGroup>
                {techs.map((tech) => (
                    <Card key={tech} className="techCard">
                        <Card.Img variant="top" src={tech.imgurl} className="techLogo" />
                        <Card.Body>
                            <Card.Title>{tech.name}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
                </CardGroup>
                </>
    )
}

export default Technologies