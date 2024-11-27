// import React from 'react';

// const EmployeeDashboard = () => {
//   return (
//     <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className=" rounded-lg p-6">
//           <div className="flex items-center space-x-4 mb-6 bg-white p-6">
//             <img
//               className="w-16 h-16 rounded-full"
//               src="https://randomuser.me/api/portraits/men/32.jpg" // Placeholder image URL
//               alt="User"
//             />
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800">Welcome, John Doe</h2>
//               <p className="text-gray-500">Monday, 20 May 2019</p>
//             </div>
//           </div>

//           {/* Today's Status Section */}
//           <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
//             {/* Today Section */}
//        <div className='flex flex-col gap-3'>
//             <h3 className="text-xl font-semibold text-gray-800">Today</h3>
//              <div className='flex justify-between bg-white rounded-md p-2'>
//               <div className='flex gap-2'>
//                 <span className="mr-2">🕒</span>
//                  <p>Richard Miles is off sick today</p>
//               </div>
//               <div>
//                 y
//               </div>
//             </div>
//             <div className='flex justify-between bg-white rounded-md p-2'>
//               <div className='flex gap-2'>
//                 <span className="mr-2">🕒</span>
//                  <p>Richard Miles is off sick today</p>
//               </div>
//               <div>
//                 y
//               </div>
//             </div>
//             <div className='flex justify-between bg-white rounded-md p-2'>
//               <div className='flex gap-2'>
//                 <span className="mr-2">🕒</span>
//                  <p>Richard Miles is off sick today</p>
//               </div>
//               <div>
//                 y
//               </div>
//             </div>
           
//               </div>

//             {/* Tomorrow Section */}
//               <h3 className="text-xl font-semibold text-gray-800">Tomorrow</h3>
//           <div className='flex justify-between bg-white rounded-md p-2'>
//               <div className='flex gap-2'>
//                 <span className="mr-2">🕒</span>
//                  <p>Richard Miles is off sick today</p>
//               </div>
//               <div>
//                 y
//               </div>
//         </div>
           

//             {/* Next 7 Days Section */}
//               <h3 className="text-xl font-semibold text-gray-800">Next Seven Days</h3>
//               <div className='flex justify-between bg-white rounded-md p-2'>
//               <div className='flex gap-2'>
//                 <span className="mr-2">🕒</span>
//                  <p>Richard Miles is off sick today</p>
//               </div>
//               <div>
//                 y
//               </div>
//         </div>
//           </div>

          

//           {/* Upcoming Holiday Section */}
//           {/* <div className="mt-12 bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Holiday</h3>
//             <div className="text-gray-600">
//               <p>Mon 20 May 2019 - Ramzan</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;

// ;



import React from "react";
import { FaBriefcase, FaHome, FaCalendarAlt, FaUser } from "react-icons/fa";

const EmployeeDashboard = () => {


  const today = [
    { icon: <FaBriefcase className="text-blue-500" />, text: "You are away today", image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { icon: <FaHome className="text-green-500" />, text: "You are working from home today", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  ];

  const tomorrow = [
    { icon: <FaBriefcase className="text-orange-500" />, text: "2 people will be away tomorrow", images: ["https://randomuser.me/api/portraits/men/47.jpg", "https://randomuser.me/api/portraits/women/48.jpg"] },
  ];

  const nextSevenDays = [
    { icon: <FaBriefcase className="text-blue-500" />, text: "2 people are going to be away", images: ["https://randomuser.me/api/portraits/men/49.jpg", "https://randomuser.me/api/portraits/women/50.jpg"] },
    { icon: <FaUser className="text-purple-500" />, text: "Your first day is going to be on Thursday",image: "https://randomuser.me/api/portraits/men/46.jpg"  },
    { icon: <FaCalendarAlt className="text-red-500" />, text: "It's Spring Bank Holiday on Monday" },
  ];

    // Function to render a section
    const renderSection = (title, items) => (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="text-golden text-xl">{item.icon}</div>
                <p className="text-gray-700">{item.text}</p>
              </div>
              <div className="flex space-x-2">
                {item.image && (
                  <img
                    src={item.image}
                    alt="avatar"
                    className="w-8 h-8 rounded-full border-2 border-gray-200"
                  />
                )}
                {item.images &&
                  item.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`avatar-${idx}`}
                      className="w-8 h-8 rounded-full border-2 border-gray-200"
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
  return (
    <div className="min-h-screen  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="rounded-lg p-6 bg-white shadow-md">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg" // Placeholder image URL
              alt="User"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800">Welcome, John Doe</h2>
              <p className="text-gray-500">Monday, 20 May 2019</p>
            </div>
          </div>

          {/* Today's Status Section */} 
        </div>
        <div className="">
        {/* Today Section */}
        {renderSection("Today", today)}

        {/* Tomorrow Section */}
        {renderSection("Tomorrow", tomorrow)}

        {/* Next Seven Days Section */}
        {renderSection("Next Seven Days", nextSevenDays)}
      </div>

      </div>
    </div>
  );
};

export default EmployeeDashboard;

