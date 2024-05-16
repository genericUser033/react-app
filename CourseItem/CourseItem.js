import React    from "react";
import template from "./CourseItem.jsx";

class CourseItem extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CourseItem;
