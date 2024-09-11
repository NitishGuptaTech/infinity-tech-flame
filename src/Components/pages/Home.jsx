import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { FaArrowDown } from 'react-icons/fa';

//  data for course cards
const courseData = [
  { title: 'Web Development', description: 'Learn HTML, CSS, JavaScript, and more.', imgSrc: '/Web-Development-Course-.jpg' },
  { title: 'Python', description: 'Master Python for web development, data science, and more.', imgSrc: '/Python-course1.png' },
  { title: 'DSA', description: 'Deep dive into Data Structures and Algorithms.', imgSrc: '/Dsa-course.png' },
];

const Home = () => {
  const [currentTopic, setCurrentTopic] = useState('Web Development');
  const topics = ['DSA', 'Python', 'Web Development','API Development','AI','IOT'];

  // eslint-disable-next-line no-undef
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic(prev => {
        const nextIndex = (topics.indexOf(prev) + 1) % topics.length;
        return topics[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [topics]);

  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-20">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to Infinity Tech Flame</h1>
        <p className="text-xl text-gray-600">Learn <span className="font-bold text-blue-500">{currentTopic}</span> and more</p>
      </header>

      {/* Animated Line Section */}
      <div className="text-center mb-8">
        <p className="text-lg font-semibold text-gray-700">Confused about your next course? Spark your future with the perfect path forward!</p>
        <p className="text-md text-gray-600 mt-2">
        Discover the perfect course for you—completely free! Infinity Tech Flame is dedicated to helping you master essential coding skills and techniques that took years to learn, now streamlined for fast, effective learning. </p>
        <Link to="./Courses">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300">View Recommended Courses</button></Link>
      </div>

      {/* Recommended Courses Section */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={course.imgSrc} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
