import React, { useEffect, useState } from 'react';
import MainCourse from '../MainCourse/MainCourse';

const MainCourses = () => {
    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        fetch('/mainCourses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div className="container mb-4 mt-5 bg-dark mx-auto">
        <div className="row p-3 mt-2 mx-auto">
            
            {
                courses.map(course => <MainCourse
                key={course.key}
                course = {course}
                ></MainCourse>)
            }
            </div>
            
        </div>
    );
};

export default MainCourses;