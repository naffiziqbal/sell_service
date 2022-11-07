import React from 'react';

const CourseItem = ({course}) => {
    return (
        <div>
            <p>Title: {course.title}</p>
        </div>
    );
};

export default CourseItem;
