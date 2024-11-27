import { useState } from "react";
import TicketCount from "./ticketComponents/TicketCount";
import TicketSearch from "./ticketComponents/TicketSearch";
import TicketTable from "./ticketComponents/TicketsTable";
import AddTicketModal from "./ticketComponents/AddTiicketModal";

const Tickets = () => {
  const initialTickets = [
    { id: 1, ticketId: "#TKT-0001", subject: "Laptop Issue", priority: "High", status: "Open", employeeName: "John", date: "2024-10-01", description:"lorem50" },
    { id: 2, ticketId: "#TKT-0002", subject: "Internet Issue", priority: "Medium", status: "Reopened", employeeName: "Jane", date: "2024-10-02" },
    { id: 3, ticketId: "#TKT-0003", subject: "Software Bug", priority: "Low", status: "Closed", employeeName: "Jim", date: "2024-10-03" },
    { id: 4, ticketId: "#TKT-0004", subject: "Network Error", priority: "High", status: "In Progress", employeeName: "Jake", date: "2024-10-04" },
    { id: 5, ticketId: "#TKT-0005", subject: "Server Down", priority: "Medium", status: "On Hold", employeeName: "Jill", date: "2024-10-05" },
    { id: 6, ticketId: "#TKT-0006", subject: "Database Error", priority: "Low", status: "Cancelled", employeeName: "Joe", date: "2024-10-06" }
  ];

  const [tickets, setTickets] = useState(initialTickets);
  const [filteredTickets, setFilteredTickets] = useState(initialTickets);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  const handleSearch = (filtered) => {
    setFilteredTickets(filtered);
  };

  return (
    <>
      <div className="page-header mb-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Tickets</h3>
            <ul className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <a href="/admin-dashboard" className="hover:text-blue-600">
                  Dashboard
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-800">Tickets</li>
            </ul>
          </div>
          <div>
            <button
              className="btn add-btn flex items-center font-semibold space-x-2 bg-golden text-white py-2 px-4 rounded hover:bg-white hover:text-golden border border-transparent hover:border-golden transition duration-300"
              onClick={() => setIsModalOpen(true)} // Open modal
            >
              <i className="fa fa-plus"></i>
              <span>Add Ticket</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <TicketCount />
      </div>
      <div className="mb-6">
        <TicketSearch tickets={tickets} onSearch={handleSearch} />
      </div>
      <div>
        <TicketTable tickets={filteredTickets} />
      </div>

      <AddTicketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> {/* Modal component */}
    </>
  );
};

export default Tickets;
