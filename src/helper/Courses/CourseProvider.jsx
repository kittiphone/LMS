import React, { createContext, useState } from 'react';

// Create the context
export const CourseContext = createContext();

// Create a provider component
const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
