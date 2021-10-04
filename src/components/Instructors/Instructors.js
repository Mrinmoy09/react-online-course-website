import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors , setInstructors] = useState([])
    useEffect(()=>{
        fetch('/instructor.JSON')
        .then(res => res.json())
        .then(data => setInstructors(data));
    },[])
    return (
        <div className="container bg-dark pb-5 mb-5 mt-3 p-5">
            <div className="row">
                {
                    instructors.map(instructor => <Instructor
                    key={instructor.name}
                    instructor ={instructor}
                    ></Instructor>)
                }
            </div>
            
        </div>
    );
};

export default Instructors;