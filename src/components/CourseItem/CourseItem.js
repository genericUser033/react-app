import React from 'react';
import { CourseItemWrapper } from './CourseItem.styled';
import {Image} from "../ReactElement/ReactElement.styled";

const CourseItem = ({course, onClick}) => {
     // UI render but not logic
     return (
         <CourseItemWrapper>
          <Image src={course.image_url} alt={course.image} onClick={() => {onClick({course})}} />
          <h2 className="post-title">{course.title}</h2>
          <p className="post-desc">{course.description}</p>
          <p className="post-published">{course.published_at}</p>
         </CourseItemWrapper>
     )
};

export default CourseItem;
