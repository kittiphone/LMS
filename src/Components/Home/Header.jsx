import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Typed from 'react-typed';
const supportLinks = [
    {
      name: 'Regular assessments and feedback to track progress',
      href: '#',
      description:
        'Regular assessments and feedback help track your progress and improve your learning experience',
      icon: PhoneIcon,
    },
    {
      name: 'Certification upon successful completion of the course',
      href: '#',
      description:
        'Successful completion of the course leads to certification, which can enhance your career prospects in the tourism industry',
      icon: LifebuoyIcon,
    },
    {
      name: 'Opportunities for practical training and hands-on experience',
      href: '#',
      description:
        'Opportunities for practical training and hands-on experience allow you to apply what you are learned in real-world situations',
      icon: NewspaperIcon,
    },
  ]
export default function Header(){
    return(
        <div className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-500 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://www.8booking.la/assets/img/about_us/Untitled-7-03.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"> <Typed strings={['8booking.la','LMS']} typeSpeed={70} backSpeed={90} loop /></h1>
         
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Our Learning Management System (LMS) is designed to provide you with a seamless and effective learning experience. With a user-friendly interface and easy navigation, you can access course materials and resources anytime, anywhere. Our LMS allows you to interact with fellow learners, participate in discussions and exchange ideas, and receive feedback and guidance from experienced instructors and industry experts. You can track your progress, monitor your performance, and access your grades and assessments at your convenience. Join our Lao Tourist Guild Course and take advantage of our innovative LMS to enhance your knowledge, skills, and career prospects in the tourism industry.
            </p>
          </div>
        </div>
  
        {/* Overlapping cards */}
        <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className="mt-4 text-base text-gray-500">{link.description}</p>
                </div>

              </div>
            ))}
          </div>
        </section>
      </div>
    );
}