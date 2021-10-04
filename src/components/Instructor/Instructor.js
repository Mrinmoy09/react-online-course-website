import React from 'react';
import { Card } from 'react-bootstrap';

const Instructor = (props) => {
    const {name , expirience, img} = props.instructor;
    return (
        
            <div className="col-md-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                   <h4>Experience:{expirience}</h4>
                  </Card.Text>
                  
                </Card.Body>
            </Card>
            </div>
        
    );
};

export default Instructor;