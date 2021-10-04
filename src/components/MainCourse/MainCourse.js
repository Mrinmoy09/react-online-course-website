
import React from 'react';
import { Card , Button } from 'react-bootstrap';

const MainCourse = (props) => {
    const {title , instructor , type , img} = props.course;
    return (
        
            <div className="col-md-3 p-2">
                
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

export default MainCourse;