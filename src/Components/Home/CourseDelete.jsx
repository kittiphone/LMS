import { useState } from "react";
import axios from "axios";

export default function CourseDelete({ courseId, courses, setCourses }) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/course/courseDelete/${courseId}`);
      console.log(response);
      
      // Update courses state to remove the deleted course
      setCourses(prevCourses => ({
        ...prevCourses,
        data: prevCourses.data.filter(course => course.course_id !== courseId)
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className="btn w-full" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
