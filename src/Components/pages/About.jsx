const About = () => {
  return (
    <div className="container mx-auto p-6 mt-20 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg mb-6">
        Discover a world of technology with our in-depth tutorials and resources designed for all skill levels. From Web Development and programming languages like Java, Python, and C++ to practical solutions for Data Structures and Algorithms (DSA) problems, we have got you covered.
      </p>
      <p className="text-lg mb-6">
        Curated by <strong>Nitish Gupta</strong> and <strong>Rajeev Chaudhary</strong>, our channel aims to make tech education both engaging and accessible. Our hands-on projects and expert tips will help you master essential skills.
      </p>
      <p className="text-lg mb-6">
        Got issues or questions? We’re here to assist! Reach out with any errors, bugs, or tech-related queries, and we’ll help you find solutions to keep your learning smooth and productive.
      </p>
      <p className="text-lg mb-6">
        While we touch on Internet of Things (IoT), our primary focus is on delivering valuable insights and practical knowledge across various tech domains.
      </p>
      <p className="text-lg mb-6">
        Subscribe to <strong>Infinity Tech Flame</strong> today and start your journey to becoming a tech expert! 🚀
      </p>
      <div className="text-center">
        <a 
          href="https://www.youtube.com/@infinitytechflame" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-500 hover:text-red-700 text-xl font-bold underline"
        >
          Visit Our Channel
        </a>
      </div>
    </div>
  );
};

export default About;
