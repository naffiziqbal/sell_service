import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from './CourseItem/CourseItem';

const Home = () => {
    const {courses} = useLoaderData();
    console.log(courses);
    
    return (
        <div>
            {
                courses.map(course =><CourseItem key={course.id} course={course}/> )
            }
        </div>
    );
};

export default Home;
