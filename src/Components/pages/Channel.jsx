const Channel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-6">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center">
          <svg 
            className="w-12 h-12 text-red-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 6v6l4 2m0 0l-4 2m0-2V6m0 6L8 10m0 0l4 2m-4-2h8m0 0L8 10m8 0l-4 2" 
            />
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          If you have any questions, feel free to reach out to us at 
          <a 
            href="mailto:infinityflame143@gmail.com" 
            className="text-red-500 underline"
          >
            infinityflame143@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Channel;
