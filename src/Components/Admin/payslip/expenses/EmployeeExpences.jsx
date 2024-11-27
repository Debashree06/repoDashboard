

import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import axios from "axios";


const EmployeeExpenses = () => {
   const [dateFrom, setDateFrom] = useState("");
const [dateTo, setDateTo] = useState("");
  const [errors, setErrors] = useState({});
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [expenseData, setExpenseData] = useState({
    item: "",
    purposeForm: "",
    employeeName: "",
    employeeId: "",
    date: "",
    amount: "",
    paidBy: "",
    receipt: null,
  });

  const [data, setData] = useState([
    {
      item: "Dell Laptop",
      purposeForm: "Amazon",
      employeeName: "Bhumika",
      employeeId: "Km@5678",
      date: "2023-09-12",
      amount: "$10000",
      paidBy: "Cash",
      receipt: null,
    },
    {
      item: "Monitor",
      purposeForm: "Flipkart",
      employeeName: "Debashree",
      employeeId: "KM-@45",
      date: "2023-07-15",
      amount: "$2000",
      paidBy: "UPI",
      receipt: null,
    },
  ]);

  // Modal handlers
  const handleOpenAddModal = (isEdit = false, index = null) => {
    setIsEditing(isEdit);
    if (isEdit && index !== null) {
      setExpenseData(data[index]);
    } else {
      setExpenseData({
        item: "",
        purposeForm: "",
        employeeName: "",
        employeeId: "",
        date: "",
        amount: "",
        paidBy: "",
        receipt: null,
      });
    }
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const handleOpenViewModal = (index) => {
    setSelectedExpense(data[index]);
    setViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setViewModalOpen(false);
  };

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     // Check file type (PDF) and size (< 50KB)
  //     const fileType = file.type;
  //     const fileSize = file.size;

  //     if (fileType !== "application/pdf") {
  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         receipt: "Only PDF files are allowed.",
  //       }));
  //       return;
  //     }

  //     if (fileSize > 50 * 1024) { // 50KB = 50 * 1024 bytes
  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         receipt: "File size must be less than 50KB.",
  //       }));
  //       return;
  //     }

  //     setFormData((prevData) => ({ ...prevData, receipt: file }));
  //     setPreviewImage(null); // Clear any previous preview
  //     setErrors((prevErrors) => ({ ...prevErrors, receipt: null }));
  //   }
  // };


  // Input handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({ ...prevData, [name]: value }));
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   if (isEditing) {
  //     const updatedData = data.map((expense) =>
  //       expense.item === expenseData.item ? expenseData : expense
  //     );
  //     setData(updatedData);
  //     console.log("Edited expense details:", expenseData);
  //   } else {
  //     setData([...data, expenseData]);
  //     console.log("New expense added:", expenseData);
  //   }
  
  //   handleCloseAddModal();
  // };


  

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    item: expenseData.item,
    purposeForm: expenseData.purposeForm,
    employeeName: expenseData.employeeName,
    employeeId: expenseData.employeeId,
    date: expenseData.date,
    amount: expenseData.amount,
    paidBy: expenseData.paidBy,
    receipt: expenseData.receipt,
  };

  try {
    const response = await axios.post("http://localhost:5173/expence", payload);
    setData([...data, response.data]);
    console.log("Expense submitted:", response.data);
    handleCloseAddModal();
  } catch (error) {
    console.error("Error submitting expense:", error);
  }
};

  

  return (
    <div className="p-8">
     <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-8 space-y-4 md:space-y-0">
  <h1 className="font-semibold text-xl md:text-2xl">Employee Expenses</h1>
  <button
    onClick={() => handleOpenAddModal(false)}
    className="px-4 py-2 bg-[#b17f27] text-white rounded-lg flex items-center justify-center md:justify-start"
  >
    <BiPlus className="text-lg md:text-xl mr-2" />
    Add Expense
  </button>
</div>

      <div className="grid lg:grid-cols-6  md:grid-cols-2 grid-cols-1 place-items-center mb-4 gap-6">
      <TextField
          label="Item Name"
          variant="outlined"
          size="small"
          className="w-48"
        />
        <TextField
          label="Employee Name"
          variant="outlined"
          size="small"
          className="w-48"
        />
       <TextField
          label="Employee Id"
          variant="outlined"
          size="small"
          className="w-48"
        />
       
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

        {/* Date To Picker */}
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
          <button className="bg-golden py-2 px-16 rounded-md text-white font-semibold text-md">
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Purchase From</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Employee Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Paid By</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.purposeForm}</TableCell>
                <TableCell>{row.employeeName}</TableCell>
                <TableCell>{row.employeeId}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.paidBy}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleOpenViewModal(index)}
                    className="text-golden"
                  >
                   
                   <FaEye className="text-2xl" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Modal */}
      {addModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 md:p-8 rounded-lg w-[70%] md:w-3/4 lg:w-1/2 xl:w-1/3 max-h-[70vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-semibold">
          {isEditing ? "Edit Expense" : "Add Expense"}
        </h5>
        <button
          onClick={handleCloseAddModal}
          className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center text-white"
        >
          <CgClose />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <TextField
            label="Item Name"
            name="item"
            value={expenseData.item}
            onChange={handleInputChange}
            required
            fullWidth
          />
          <TextField
            label="Purchase From"
            name="purposeForm"
            value={expenseData.purposeForm}
            onChange={handleInputChange}
            required
            fullWidth
          />
          <TextField
            label="Employee Name"
            name="employeeName"
            value={expenseData.employeeName}
            onChange={handleInputChange}
            required
            fullWidth
          />
          <TextField
            label="Employee Id"
            name="employeeId"
            value={expenseData.employeeId}
            onChange={handleInputChange}
            required
            fullWidth
          />
          <TextField
            label="Date"
            type="date"
            name="date"
            value={expenseData.date}
            onChange={handleInputChange}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Amount"
            name="amount"
            value={expenseData.amount}
            onChange={handleInputChange}
            required
            fullWidth
          />
          {/* <div className="flex flex-col">
            <label htmlFor="receipt">Upload Receipt (PDF, Max 50KB)</label>
            <input
              type="file"
              accept="application/pdf"
              id="receipt"
              onChange={handleFileUpload}
              className="mt-2"
            />
            {errors.receipt && (
              <span className="text-sm text-red-600">{errors.receipt}</span>
            )}
          </div> */}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-golden text-white rounded-md w-full md:w-auto"
          >
            {isEditing ? "Save Changes" : "Add Expense"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* View Modal */}
      {viewModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg lg:w-1/2 w-[60%]">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-semibold">View Expense</h5>
              <button
                onClick={handleCloseViewModal}
                className="bg-red-500 h-8 w-8 rounded-full flex items-center justify-center text-white"
              >
                <CgClose />
              </button>
            </div>
            <div>
              <p>
                <strong>Item:</strong> {selectedExpense?.item}
              </p>
              <p>
                <strong>Purchase From:</strong> {selectedExpense?.purposeForm}
              </p>
              <p>
                <strong>Employee Name:</strong> {selectedExpense?.employeeName}
              </p>
              <p>
                <strong>Date:</strong> {selectedExpense?.date}
              </p>
              <p>
                <strong>Amount:</strong> {selectedExpense?.amount}
              </p>
              <p>
                <strong>Paid By:</strong> {selectedExpense?.paidBy}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeExpenses;

