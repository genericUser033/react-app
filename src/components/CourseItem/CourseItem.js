import React from 'react';
import { CourseItemWrapper } from './CourseItem.styled';
import {Image} from "../ReactElement/ReactElement.styled";

const CourseItem = ({image_url, image, title, description, published_at}) => {
     return (
         <CourseItemWrapper>
          <Image src={image_url} alt={image} />
          <h2 className="post-title">{title}</h2>
          <p className="post-desc">{description}</p>
          <p className="post-published">{published_at}</p>
         </CourseItemWrapper>
     )
};

export default CourseItem;
