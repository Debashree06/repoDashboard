import profile from "../../../../assets/admin/profile.jpg"; // Replace with the correct path for profile images

const RightContent = () => {
  // Define the profiles of people on leave
  const peopleOnLeave = [
    {
      name: "John Doe",
      image: profile, // Replace with actual image URL if necessary
    },
    {
      name: "Jane Smith",
      image: profile, // Replace with actual image URL if necessary
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Card 1 */}
      <div className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="p-4 text-center text-gray-800 text-lg font-bold">🎉 Today’s John’s Birthday! 🎂</h2>
        <div>
          <img
            src={profile}
            alt="Birthday Celebration"
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <button className="bg-golden text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Send Wishes
          </button>
        </div>
      </div>

      {/* Card 2 - People on leave */}
      <div className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden p-4">
        <h2 className="text-gray-800 text-lg font-bold text-center">On Leave Today</h2>
        <div className="space-y-4 mt-4">
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
      </div>
    </div>
  );
};

export default RightContent;
