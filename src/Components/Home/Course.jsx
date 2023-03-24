import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseAdd from './CourseAdd';
import CourseDelete from './CourseDelete';
import axios from "axios";

export default function Course() {
  const [courses, setCourses] = useState({ data: [] });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get("http://localhost:3000/course/courseGet");

        if (response.status === 200) {
          setCourses(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchCourse();
  }, []);

  return (
    <main>
      {/* Blog section */}
      <div class="flex justify-center p-8">
    <CourseAdd />
</div>


 
  
      <div className="relative bg-gray-50 pb-8 sm:pb-12 lg:pb-24">
        <div className="relative">

          <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Become a Professional Tourist Guide in Laos
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              Discover Laos with our Tourist Guide Courses! Our courses 10-day
              and 30-day will transform you into a professional guide, equipped
              with in-depth knowledge about Laos' rich culture and history.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            {courses.data.map((post) => (
              <div
                key={post.course_id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
              <Link to={`/Course/${post.course}`}>
                <div className="flex-shrink-0">
                  <img
                    className="h-80 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                </Link>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <Link to={`/Course/${post.course}`}>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.preview}
                      </p>
                    </a>
                  </div>
                  </Link>
           
                  <div className="mt-6 flex items-center">
                    <Link
                      to={`/Course/${post.course}`}
                      className="flex w-full items-center justify-center rounded-md border border-transparent text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      <button type="submit">Regeister now!</button>
                      
                    </Link>
               
                  </div>
                  <div className="mt-6 flex items-center">
            <CourseDelete courseId={post.course_id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </main>
  );
}


