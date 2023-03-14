import { Link } from "react-router-dom";
const blogPosts = [
  {
    id: 1,
    course: "10days",
    title: "Become a knowledgeable tourist guide in just 10 days",
    href: "#",
    category: { name: "Course", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Our 10-day course is designed for those who are new to the industry and want to get started quickly. In this course, you will learn the basics of guiding, including customer service, communication skills, and safety guidelines.",
  },
  {
    id: 2,
    course: "30days",
    title: "Become a professional tourist guide in 30 days",
    href: "#",
    category: { name: "Course", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Our 30-day course is a more comprehensive program that goes into greater depth on the topics covered in the 10-day course. In addition to the basics, you will also learn about more specialized areas such as ecotourism, adventure tourism, and cultural tourism. ",
  },
];

export default function Course() {
  return (
    <main>
      {/* Blog section */}

      <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
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
            {blogPosts.map((post) => (
              <div
                key={post.id}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </main>
  );
}


