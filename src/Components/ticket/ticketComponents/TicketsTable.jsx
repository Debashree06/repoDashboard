import { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Menu,
  IconButton,
  Modal,
  Box,
} from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TicketTable = ({ tickets }) => {
  const [ticketData, setTicketData] = useState(tickets);
  const [anchorEl, setAnchorEl] = useState(null);  // State to manage the menu anchor
  const [selectedTicket, setSelectedTicket] = useState(null);  // To store selected ticket for actions
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Effect to update ticketData when tickets prop changes
  useEffect(() => {
    setTicketData(tickets);
  }, [tickets]);

  const handlePriorityChange = (id, newPriority) => {
    setTicketData((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, priority: newPriority } : ticket
      )
    );
  };

  const handleStatusChange = (id, newStatus) => {
    setTicketData((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "black";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
      case "Open":
      case "Reopened":
        return "blue";
      case "On Hold":
      case "Cancelled":
        return "red";
      case "Closed":
      case "In Progress":
        return "green";
      default:
        return "black";
    }
  };

  const handleRowClick = (id) => {
    navigate(`/ticket/${id}`);
  };

  const handleClickMenu = (event, ticket) => {
    setAnchorEl(event.currentTarget);
    setSelectedTicket(ticket); // Set selected ticket for Edit/Delete actions
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedTicket(null);
  };

  const handleEdit = () => {
    console.log("Edit Ticket:", selectedTicket);
    handleCloseMenu();
    // Open Edit Modal or navigate to edit page
  };

  const handleDelete = () => {
    console.log("Delete Ticket ID:", selectedTicket.id);
    handleCloseMenu();
    // Perform delete operation
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Ticket ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Assigned Staff</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketData.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell
                onClick={() => handleRowClick(ticket.id)}
                style={{ cursor: "pointer" }}
              >
                {ticket.id}
              </TableCell>
              <TableCell
                onClick={() => handleRowClick(ticket.id)}
                style={{ cursor: "pointer" }}
              >
                {ticket.ticketId}
              </TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={ticket.staff || "/default-avatar.jpg"}
                    alt={ticket.employeeName || "Unknown"}
                    style={{ marginRight: 8 }}
                  />
                  <Typography>{ticket.employeeName || "Unknown"}</Typography>
                </div>
              </TableCell>
              <TableCell>{ticket.date}</TableCell>
              <TableCell>
                <FormControl size="small" fullWidth>
                  <Select
                    value={ticket.priority}
                    onChange={(e) => handlePriorityChange(ticket.id, e.target.value)}
                    style={{
                      color: getPriorityColor(ticket.priority),
                      fontWeight: "bold",
                    }}
                  >
                    <MenuItem value="High" style={{ color: "red" }}>
                      High
                    </MenuItem>
                    <MenuItem value="Medium" style={{ color: "orange" }}>
                      Medium
                    </MenuItem>
                    <MenuItem value="Low" style={{ color: "green" }}>
                      Low
                    </MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl size="small" fullWidth>
                  <Select
                    value={ticket.status}
                    onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                    style={{
                      color: getStatusColor(ticket.status),
                      fontWeight: "bold",
                    }}
                  >
                    <MenuItem value="New" style={{ color: "blue" }}>
                      New
                    </MenuItem>
                    <MenuItem value="Open" style={{ color: "blue" }}>
                      Open
                    </MenuItem>
                    <MenuItem value="Reopened" style={{ color: "blue" }}>
                      Reopened
                    </MenuItem>
                    <MenuItem value="On Hold" style={{ color: "red" }}>
                      On Hold
                    </MenuItem>
                    <MenuItem value="Closed" style={{ color: "green" }}>
                      Closed
                    </MenuItem>
                    <MenuItem value="In Progress" style={{ color: "green" }}>
                      In Progress
                    </MenuItem>
                    <MenuItem value="Cancelled" style={{ color: "red" }}>
                      Cancelled
                    </MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="more"
                  onClick={(e) => handleClickMenu(e, ticket)}  // Open menu for the clicked ticket
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={handleOpen}><EditIcon/> Edit</MenuItem>
                  <MenuItem onClick={handleDelete}><DeleteIcon/> Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    className="fixed inset-0 flex items-center justify-center px-4 py-6"
    style={{ zIndex: 1000 }}
  >
    <div
      id="edit_ticket"
      className="modal relative bg-white border border-gray-200 shadow-lg rounded-lg w-full max-w-lg sm:max-w-3xl md:max-w-5xl h-auto max-h-screen overflow-y-auto p-4"
      role="dialog"
    >
      <div className="modal-content">
        <div className="modal-header flex justify-between items-center p-4  border-b border-gray-200">
          <h5 className="modal-title text-lg font-medium">Edit Ticket</h5>
         
          <div className="h-8 w-8 rounded-full flex items-center  justify-center bg-red-500">
              
          <button
            type="button"
            className="close text-white hover:text-gray-800 text-xl"
            data-dismiss="modal"
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">
            <RxCross1 />
            </span>
          </button>
          </div>
        </div>
        <div className="modal-body p-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="block mb-1">Employee ID</label>
                <input
                  className="form-control w-full border border-gray-300 rounded p-2"
                  type="text"
                  defaultValue="E001"
                />
              </div>
              <div className="form-group">
                <label className="block mb-1">Employee Name</label>
                <input
                  className="form-control w-full border border-gray-300 rounded p-2"
                  type="text"
                  defaultValue="Swati P"
                />
              </div>
              <div className="form-group">
                <label className="block mb-1">Ticket Subject</label>
                <input
                  className="form-control w-full border border-gray-300 rounded p-2"
                  type="text"
                  defaultValue="Laptop Issue"
                />
              </div>
              <div className="form-group">
                <label className="block mb-1">Ticket Id</label>
                <input
                  className="form-control w-full border border-gray-300 rounded p-2"
                  type="text"
                  readOnly
                  defaultValue="TKT-0001"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="form-group">
                <label className="block mb-1">Priority</label>
                <select className="form-control w-full border border-gray-300 rounded p-2">
                  <option>High</option>
                  <option selected>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div className="form-group">
                <label className="block mb-1">Status</label>
                <select className="form-control w-full border border-gray-300 rounded p-2">
                  <option>New</option>
                  <option selected>Solved</option>
                  <option>Pending</option>
                  <option>Reject</option>
                </select>
              </div>
            </div>
            <div className="form-group mt-4">
              <label className="block mb-1">Description</label>
              <textarea className="form-control w-full border border-gray-300 rounded p-2"></textarea>
            </div>
            <div className="form-group mt-4">
              <label className="block mb-1">Upload Files</label>
              <input
                className="form-control w-full border border-gray-300 rounded p-2"
                type="file"
              />
            </div>
            <div className="submit-section mt-6">
              <button
                type="submit"
                className="btn w-full py-2 px-4 text-white font-medium rounded bg-golden text-xl"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Box>
</Modal>

    </TableContainer>
  );
};

export default TicketTable;
