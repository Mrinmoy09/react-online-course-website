import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const {title , instructor , type , img} = props.service;
    return (
        
              <div className="col-md-4 pb-5">
                
                <Card className="h-100">
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      <p>Instructor: {instructor}</p>
                      <p>{type}</p>
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
                
                
            </div>
        
    );
};

export default Service;