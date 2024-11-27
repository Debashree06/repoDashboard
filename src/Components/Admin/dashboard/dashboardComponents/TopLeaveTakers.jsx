// import React from "react";

const TopLeaveTakers = () => {
  // Sample employee data with names and leave counts (1-5)
  const employees = [
    { name: "Aarav Kumar", leaves: 1 },
    { name: "Vidhya Patel", leaves: 2 },
    { name: "Arjun Rao", leaves: 4 },
    { name: "Priya Sharma", leaves: 2 },
    { name: "Ravi Singh", leaves: 1 },
    { name: "Neha Gupta", leaves: 3 },
    { name: "Ishaan Verma", leaves: 2 },
    { name: "Meera Reddy", leaves: 1 },
    { name: "Yash Joshi", leaves: 1 },
    { name: "Saanvi Agarwal", leaves: 2 },
  ];

  // Filter employees who have taken 2 or more leaves
  const topLeaveTakers = employees
    .filter(employee => employee.leaves >= 2)
    .sort((a, b) => b.leaves - a.leaves) // Sort in descending order of leaves taken
    .slice(0, 5); // Get the top 3 leave takers

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Top 5 Leave Takers</h2>
      <ul className="space-y-2">
        {topLeaveTakers.map((employee, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-[#f1f9fe] rounded-md">
            <span className="text-gray-700">{employee.name}</span>
            <span className="font-semibold text-gray-900">{employee.leaves} Leaves</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopLeaveTakers;
