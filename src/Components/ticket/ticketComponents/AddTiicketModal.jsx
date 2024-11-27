import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const AddTicketForm = () => {
  const [ticketTitle, setticketTitle] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [assignStaff, setAssignStaff] = useState("");
  const [client, setClient] = useState("");
  const [priority, setPriority] = useState("");
  const [cc, setCc] = useState("");
  const [assign, setAssign] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImages, setUploadedImages] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      ticketTitle,
      client,
      priority,
      assign,
      description,
    };
    console.log("New Ticket Created: ", newTicket);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Ticket Title */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ticket Title
            </label>
            <input
              className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={ticketTitle}
              onChange={(e) => setticketTitle(e.target.value)}
              required
            />
          </div>
          {/* Priority */}
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          {/* Description */}
          <div className="form-group sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* Upload Images */}
          <div className="form-group sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Images
            </label>
            <input
              className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setUploadedImages(e.target.files)}
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="btn bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const AddTicketModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-2xl p-4 sm:p-6 lg:p-8 relative shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h5 className="text-xl font-semibold">Add Ticket</h5>
              <div className="h-8 w-8 rounded-full flex items-center  justify-center bg-red-500">
              
              <button
                type="button"
                className="text-white hover:text-gray-900 text-xl"
                onClick={onClose}
                aria-label="Close"
              >
                <RxCross1 />
              </button>
              </div>
            </div>
            {/* Form */}
            <AddTicketForm />
          </div>
        </div>
      )}
    </>
  );
};

export default AddTicketModal;
