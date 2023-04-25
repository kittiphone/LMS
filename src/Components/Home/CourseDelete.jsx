import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function CourseDelete({ courseId, courses, setCourses }) {
  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`http://localhost:3000/course/courseDelete/${courseId}`);
        console.log(response);

        // Update courses state to remove the deleted course
        setCourses(prevCourses => ({
          ...prevCourses,
          data: prevCourses.data.filter(course => course.course_id !== courseId)
        }));
        
        await Swal.fire({
          title: "Deleted!",
          text: "The course has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the course.",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
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
