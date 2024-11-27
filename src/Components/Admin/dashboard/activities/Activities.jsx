import { FaRegCheckCircle, FaRegEdit, FaCalendarCheck, FaCreditCard } from 'react-icons/fa'; // Importing icons from react-icons

const Activities = () => {
  // Array of user activities
  const activities = [
    { id: 1, icon: <FaRegCheckCircle />, description: "Applied for leave", time: "2 hours ago" },
    { id: 2, icon: <FaRegEdit />, description: "Updated expenses", time: "4 hours ago" },
    { id: 3, icon: <FaRegEdit />, description: "Edited profile", time: "1 day ago" },
    { id: 4, icon: <FaCalendarCheck />, description: "Approved leave request", time: "1 day ago" },
    { id: 5, icon: <FaCreditCard />, description: "Paid bills", time: "2 days ago" },
    { id: 6, icon: <FaRegCheckCircle />, description: "Completed training", time: "3 days ago" },
    { id: 7, icon: <FaRegEdit />, description: "Updated contact information", time: "4 days ago" },
    { id: 8, icon: <FaRegCheckCircle />, description: "Completed task", time: "5 days ago" },
    { id: 9, icon: <FaCalendarCheck />, description: "Scheduled meeting", time: "1 week ago" },
    { id: 10, icon: <FaCreditCard />, description: "Processed reimbursement", time: "1 week ago" }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg space-y-4">
      <h2 className="text-g ray-800 text-lg font-bold text-center">Recent Activities</h2>
      <div className="space-y-2">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-center space-x-4">
            <div className="text-golden text-xl">
              {activity.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-700">{activity.description}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
