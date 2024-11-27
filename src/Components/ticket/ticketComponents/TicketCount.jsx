// import React from "react";

const TicketCount = () => {
  const ticketsData = [
    {
      title: "New Tickets",
      count: 112,
      change: "+10%",
      changeColor: "text-green-500",
      progress: 70,
    },
    {
      title: "Solved Tickets",
      count: 70,
      change: "+12.5%",
      changeColor: "text-green-500",
      progress: 70,
    },
    {
      title: "Open Tickets",
      count: 100,
      change: "-2.8%",
      changeColor: "text-red-500",
      progress: 70,
    },
    {
      title: "Pending Tickets",
      count: 125,
      change: "-75%",
      changeColor: "text-red-500",
      progress: 70,
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {ticketsData.map((ticket, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">{ticket.title}</span>
              <span className={`font-medium ${ticket.changeColor}`}>
                {ticket.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{ticket.count}</h3>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                style={{ width: `${ticket.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketCount;
