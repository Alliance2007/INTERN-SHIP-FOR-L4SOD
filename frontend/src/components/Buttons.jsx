import React, { useState } from "react";

function Buttons() {
  const [likes, setLikes] = useState(0);
  const [follows, setFollows] = useState(false);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleFollow = () => {
    setFollows(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 p-6 rounded-2xl shadow-lg text-center w-80">

        <h1 className="text-3xl font-bold mb-4 text-white">
          💖 Like System
        </h1>

        {/* LIKE */}
        <button
          onClick={handleLike}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-full mb-4 "
        >
          💖 Like ({likes})
        </button>

        {/* FOLLOW */}
        <h1 className="text-2xl font-bold mb-3 text-white">
          Follow
        </h1>

        <button
          onClick={handleFollow}
          className={`px-4 py-2 rounded-lg transition w-full ${
            follows
              ? "bg-green-700 text-white"
              : "bg-gray-300 text-black font-bold"
          }`}
        >
          {follows ? "Following 🙌" : "Follow ➕"}
        </button>

      </div>
    </div>
  );
}

export default Buttons;