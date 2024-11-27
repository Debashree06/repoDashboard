import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

const Reimbursement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [expenseData, setExpenseData] = useState({
    employeeId: "",
    employeeName: "",
    purpose: "",
    date: "",
    status: "Pending",
    projectName: "",
    amount: "",
    paidBy: "",
    receipt: null, // Added receipt field for file upload
  });

  const [data, setData] = useState([
    {
      employeeId: "KM12345",
      employeeName: "Debashree",
      purpose: "Petrol Reimbursement",
      date: "2023-09-12",
      projectName: "drtyuihjb",
      amount: "$10000",
      paidBy: "Cash",
      status: "Pending",
      receipt: null,
    },
    {
      employeeId: "KM12345",
      employeeName: "Debashree",
      purpose: "Petrol Reimbursement",
      date: "2023-07-15",
      projectName: "drtyuihjb",
      amount: "$2000",
      paidBy: "Upi",
      status: "Approved",
      receipt: null,
    },
  ]);

  const handleOpenModal = (index = null) => {
    if (index !== null) {
      setExpenseData(data[index]);
    } else {
      setExpenseData({
        employeeId: "",
        employeeName: "",
        purpose: "",
        date: "",
        status: "Pending",
        projectName: "",
        amount: "",
        paidBy: "",
        receipt: null, // Reset receipt field when adding
      });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenDeleteModal = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setExpenseData((prevData) => ({ ...prevData, status: value }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setExpenseData((prevData) => ({ ...prevData, receipt: files[0] }));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between pb-8">
        <div>
          <h1 className="font-semibold text-2xl">Reimbursement</h1>
          <h2 className="text-md">
            Dashboard / <span>Reimbursement</span>
          </h2>
        </div>
      </div>
      <div className="grid xl:grid-cols-6  md:grid-cols-2 grid-cols-1 place-items-center mb-4 gap-6">
        <TextField
          label="Employee Name"
          variant="outlined"
          size="small"
          className="w-48"
        />
        <Select
          className="w-48"
          size="small"
          displayEmpty
          defaultValue=""
          variant="outlined"
        >
          <MenuItem value="">Purpose</MenuItem>
          <MenuItem value="Petrol Allowance">Petrol Allowance</MenuItem>
          <MenuItem value="Cab Reimbursement">Cab Reimbursement</MenuItem>
          <MenuItem value="Others">Others</MenuItem>
        </Select>
        <Select
          className="w-48"
          size="small"
          displayEmpty
          defaultValue=""
          variant="outlined"
        >
          <MenuItem value="">Paid By</MenuItem>
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="Cheque">Upi</MenuItem>
        </Select>
        <TextField
          label="Date From"
          type="date"
          variant="outlined"
          size="small"
          className="w-48"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
        <TextField
          label="Date To"
          type="date"
          variant="outlined"
          size="small"
          className="w-48"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
        <div>
          <button className="bg-green-600 py-2 px-16 rounded-md text-white font-semibold text-md">
            Search
          </button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Purpose</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Paid By</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.employeeId}</TableCell>
                <TableCell>{row.employeeName}</TableCell>
                <TableCell>{row.purpose}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.projectName}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.paidBy}</TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={row.status}
                      onChange={(e) => {
                        const newData = [...data];
                        newData[index].status = e.target.value;
                        setData(newData);
                      }}
                      label="Status"
                    >
                      <MenuItem value="Pending">
                        <span className="text-red-500 mr-2">●</span> Pending
                      </MenuItem>
                      <MenuItem value="Approved">
                        <span className="text-green-500 mr-2">●</span> Approved
                      </MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleOpenModal(index)}
                      className="mr-2"
                    >
                      <BsEye className="text-3xl text-blue-500" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Viewing Expense */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">Employee Data</h5>
              <div className="bg-red-500 flex items-center justify-center h-8 w-8 rounded-full text-white">
                <button
                  onClick={handleCloseModal}
                  className="text-xl font-semibold text-white"
                >
                  <CgClose />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Employee ID: </p>
                <p>{expenseData.employeeId}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Employee Name: </p>
                <p>{expenseData.employeeName}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Purpose: </p>
                <p>{expenseData.purpose}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Date: </p>
                <p>{expenseData.date}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Project Name: </p>
                <p>{expenseData.projectName}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Amount: </p>
                <p>{expenseData.amount}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Paid By: </p>
                <p>{expenseData.paidBy}</p>
              </div>
              <div className="flex gap-2 flex-row lg:flex col">
                <p className="font-semibold">Status: </p>
                <p>{expenseData.status}</p>
              </div>
              <div>
                <p className="font-semibold">Receipt: </p>
                {expenseData.receipt ? (
                  <a
                    href={URL.createObjectURL(expenseData.receipt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View Receipt
                  </a>
                ) : (
                  <p>No receipt uploaded</p>
                )}
              </div>
            </div>

            {/* <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-green-500 text-white rounded-md"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reimbursement;
