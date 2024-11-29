import React from "react";

const CourseCard = ({
  title,
  tag,
  description,
  image,
  link,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden mx-auto lg:max-w-md h-[26rem] mb-6">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
          {tag}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-[10rem]">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Start Button */}
        <button
          onClick={() => (window.location.href = link)}
          className="font-medium py-2 px-4 sm:px-6 bg-[#b17f27] text-white rounded-md flex justify-center items-center gap-2 h-[40px] text-sm lg:text-lg hover:bg-[#a56f23] transition-all duration-200 w-full sm:flex-wrap"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
