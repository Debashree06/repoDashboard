
import profile from "../../../assets/admin/profile.jpg";
import { FaCheck } from "react-icons/fa";

const RightContent = () => {
  const peopleOnLeave = [
    { name: "John Doe", image: profile },
    { name: "Jane Smith", image: profile },
  ];

  const pendingLeave = [
    { noLeave:"4.5",title: "LEAVE TAKEN"},
    {noLeave:"12",title: "REMAINING" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Birthday Card */}
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="p-4 text-center text-gray-800 text-lg font-bold">🎉 John’s Birthday! 🎂</h2>
        <div>
          <img src={profile} alt="Birthday Celebration" className="w-full h-[200px] object-cover" />
        </div>
        <div className="p-4 text-center">
          <button className="bg-golden text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2">
            Send Wishes
          </button>
        </div>
      </div>

      {/* On Leave Card */}
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="p-4 text-center text-gray-800 text-lg font-bold">On Leave Today</h2>
        <div className=" p-3 space-y-2">
          {peopleOnLeave.map((person, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={person.image}
                alt={person.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-800 font-semibold">{person.name}</h3>
                <p className="text-sm text-gray-500">On Leave Today</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-center text-gray-800 text-lg font-bold">Your Leave</h2>
        <div className=" p-3 space-y-2 flex justify-between">
        <div>
        { pendingLeave.map((person, index) => (
            <div key={index} className="flex items-center space-x-4">
             <div className="h-10 w-10 flex rounded-full items-center justify-center bg-gray-100 text-[#b17f27] ">
              <FaCheck  className="text-xl"/>
             </div>
              <div>
                <h3 className="text-gray-800 font-semibold">{person.noLeave}</h3>
                <p className="text-sm text-gray-500">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
         <button className="bg-golden text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2">Apply now</button>
         </div>
        </div>
       
      </div>
        
        
    </div>
  );
};

export default RightContent;

