import { useState } from "react";

const TicketDetails = () => {
  const [ticket, setTicket] = useState({
    ticketId: "TKT-0001",
    employeeId: "EMP-123",
    employeeName: "John Doe",
    title: "Laptop Issue",
    description: "The laptop is not booting properly.",
    priority: "Medium",
    status: "Open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prevTicket) => ({
      ...prevTicket,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Ticket Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ticket ID */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Ticket ID</label>
          <input
            type="text"
            name="ticketId"
            value={ticket.ticketId}
            onChange={handleChange}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Employee ID */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={ticket.employeeId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Employee Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={ticket.employeeName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={ticket.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
        <textarea
          name="description"
          value={ticket.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Priority */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Priority</label>
          <select
            name="priority"
            value={ticket.priority}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
          <select
            name="status"
            value={ticket.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
      <button
        className="px-6 py-2 mt-6 text-white bg-golden rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        onClick={() => alert("Ticket details saved!")}
      >
        Save Ticket
      </button>
    </div>
  );
};

export default TicketDetails;
