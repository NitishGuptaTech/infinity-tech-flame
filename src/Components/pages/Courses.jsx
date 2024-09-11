//import React from 'react';

// Data for course cards with 'watch' property added to all
const courseData = [
    { title: 'Web Development', description: 'Learn HTML, CSS, JavaScript, and more.', imgSrc: '/Web-Development-Course-.jpg', watch: 'https://www.youtube.com/@infinitytechflame/playlists' },
    { title: 'Python', description: 'Master Python for web development, data science, and more.', imgSrc: '/Python-course1.png', watch: 'https://www.youtube.com/@infinitytechflame/playlists' },
    { title: 'DSA', description: 'Deep dive into Data Structures and Algorithms.', imgSrc: '/Dsa-course.png', watch: 'https://www.youtube.com/@infinitytechflame/playlists' },
    { title: 'DSA', description: 'Deep dive into Data Structures and Algorithms.', imgSrc: '/Dsa-course.png', watch: 'https://www.youtube.com/@infinitytechflame/playlists' },
    { title: 'DSA', description: 'Deep dive into Data Structures and Algorithms.', imgSrc: '/Dsa-course.png', watch: 'https://www.youtube.com/@infinitytechflame/playlists' },
    { title: 'DSA', description: 'Deep dive into Data Structures and Algorithms.', imgSrc: '/Dsa-course.png', watch: 'https://www.youtube.com/@infinitytechflame/playlists' },
];

// Function to handle button click
const handleClick = (url) => {
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('No link available for this course.');
    }
};

const Courses = () => {
    return (
        <div className="flex justify-center mt-20">
            {/* Recommended Courses Section */}
            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseData.map((course, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={course.imgSrc} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <p className="text-gray-600 mt-2">{course.description}</p>
                            <button 
                                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 focus:outline-none"
                                onClick={() => handleClick(course.watch)}
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Courses;
