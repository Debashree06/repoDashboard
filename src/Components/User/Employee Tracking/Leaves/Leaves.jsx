import React from "react";
import { FaPlus } from "react-icons/fa";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useMediaQuery } from "@mui/material";
import {  useEffect } from 'react';
// dialog box start decency

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// dialog box end decency


// Leave type dependency
import { Box, Card, CardContent, Typography } from '@mui/material';

// Leave type dependency

function Leaves() {

// Leave type dependency start here


const fetchLeaveData = async (empId) => {
  // Simulating an API call to fetch leave data
  const mockApiData = {
    1: [
      { label: 'Casual Leave', count: 10 },
      { label: 'Sick Leave', count: 5 },
      { label: 'Paid Leave', count: 8 },
      { label: 'Total Leave', count: 23 },
      { label: 'Remaining Leave', count: 5 },
    ],
    2: [
      { label: 'Casual Leave', count: 7 },
      { label: 'Sick Leave', count: 3 },
      { label: 'Paid Leave', count: 6 },
      { label: 'Total Leave', count: 20 },
      { label: 'Remaining Leave', count: 4 },
    ],
  };

  // Return mock data based on employee ID or default empty array
  return mockApiData[empId] || [];
};


  const [leaves, setLeaves] = useState([]);
  const empId = 1; // Example employee ID

  useEffect(() => {
    const loadLeaveData = async () => {
      const data = await fetchLeaveData(empId);
      setLeaves(data);
    };

    loadLeaveData();
  }, [empId]);


// Leave type dependency End  here




// Leaves table dependency  start here 




const columns = [
  { id: "leaveType", label: "Leave Type", minWidth: 150 },
  { id: "fromDate", label: "From", minWidth: 100 },
  { id: "toDate", label: "To", minWidth: 100 },
  { id: "days", label: "No. of Days", minWidth: 100, align: "center" },
  { id: "reason", label: "Reason", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "approvedBy", label: "Approved By", minWidth: 150 },
];

// Mock API function
const mockApiFetchLeaves = (empId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = [
        {
          leaveType: "Casual Leave",
          fromDate: "13 Jan 2023",
          toDate: "14 Jan 2023",
          days: "2 days",
          reason: "Going to Hospital",
          status: "Approved",
          approvedBy: "Richard Miles",
        },
        {
          leaveType: "Sick Leave",
          fromDate: "20 Feb 2023",
          toDate: "22 Feb 2023",
          days: "3 days",
          reason: "Fever and Rest",
          status: "Pending",
          approvedBy: "N/A",
        },
        {
          leaveType: "Annual Leave",
          fromDate: "1 Mar 2023",
          toDate: "5 Mar 2023",
          days: "5 days",
          reason: "Vacation",
          status: "Approved",
          approvedBy: "Emma Watson",
        },
      ];
      resolve(mockData);
    }, 1000); // Simulate API delay
  });
};


const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Fetch leave data when the component mounts
  useEffect(() => {
    const empId = "EMP123"; // Replace with dynamic employee ID if needed
    mockApiFetchLeaves(empId).then((data) => {
      setRows(data);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  // Leaves table dependency end here

  // apply leaves start here

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    email: "",
    leaveType: "",
    fromDate: null,
    toDate: null,
    reason: "",
    approval: "",
    noOfDays: 0,
  });

  const [errors, setErrors] = useState({});

  const leaveTypes = ["Casual Leave", "Sick Leave", "Emergency Leave"];
  const approvals = ["HR", "Manager", "Team Leader"];

  const calculateDays = () => {
    if (formData.fromDate && formData.toDate) {
      const difference =
        Math.ceil(
          (new Date(formData.toDate) - new Date(formData.fromDate)) /
            (1000 * 60 * 60 * 24)
        ) + 1;
      setFormData({ ...formData, noOfDays: difference });
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" }); // Clear error on input change
    if (field === "fromDate" || field === "toDate") calculateDays();
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Employee name is required.";
    if (!formData.empId) newErrors.empId = "Employee ID is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.leaveType) newErrors.leaveType = "Select a leave type.";
    if (!formData.fromDate) newErrors.fromDate = "From date is required.";
    if (!formData.toDate) newErrors.toDate = "To date is required.";
    if (formData.fromDate && formData.toDate && formData.toDate < formData.fromDate)
      newErrors.toDate = "To date cannot be earlier than From date.";
    if (!formData.reason) newErrors.reason = "Reason is required.";
    if (!formData.approval) newErrors.approval = "Select an approver.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted: ", formData);
      handleClose();
    }
  };

  // apply leaves End here

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      

      {/* Leave Summary */}
      <div className="p-4 mb-6   flex justify-between items-center">
        <h6 className="text-2xl font-semibold text-gray-700">
          Leaves
          <div className="text-sm text-gray-500">Dashboard / Leaves</div>
        </h6>
        <Button
          variant="contained"
          color="error"
          startIcon={<FaPlus />}
          onClick={handleOpen}
          sx={{
            textTransform: "capitalize",
            borderRadius: "20px",
            height: "40px",
          }}
        >
          Apply Leave
        </Button>




     



        {/* Dialog Box */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Apply for Leave</DialogTitle>
        <DialogContent>
          <TextField
            label="Employee Name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Employee ID"
            fullWidth
            margin="normal"
            value={formData.empId}
            onChange={(e) => handleChange("empId", e.target.value)}
            error={!!errors.empId}
            helperText={errors.empId}
          />
          <TextField
            label="Employee Email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            select
            label="Leave Type"
            fullWidth
            margin="normal"
            value={formData.leaveType}
            onChange={(e) => handleChange("leaveType", e.target.value)}
            error={!!errors.leaveType}
            helperText={errors.leaveType}
          >
            {leaveTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="From Date"
              value={formData.fromDate}
              onChange={(date) => handleChange("fromDate", date)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={!!errors.fromDate}
                  helperText={errors.fromDate}
                />
              )}
            />
            <DatePicker
              label="To Date"
              value={formData.toDate}
              onChange={(date) => handleChange("toDate", date)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={!!errors.toDate}
                  helperText={errors.toDate}
                />
              )}
            />
          </LocalizationProvider>
          <TextField
            label="Number of Days"
            fullWidth
            margin="normal"
            value={formData.noOfDays}
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="Reason"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={formData.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            error={!!errors.reason}
            helperText={errors.reason}
          />
          <TextField
            select
            label="Approval"
            fullWidth
            margin="normal"
            value={formData.approval}
            onChange={(e) => handleChange("approval", e.target.value)}
            error={!!errors.approval}
            helperText={errors.approval}
          >
            {approvals.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="success">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      {/* Leave Summary */}

      {/* type of Leaves  start here  */}


               {/* Leave type Start here  */}
               <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={2}
      marginTop={4}
      marginBottom={4}
    >
      {leaves.map((leave, index) => (
        <Box
          key={index}
          flex="1 1 calc(25% - 16px)" // Adjusts the width and allows wrapping
          minWidth="250px" // Ensures minimum size for small screens
        >
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" align="center">
                {leave.label}
              </Typography>
              <Typography variant="h3" component="div" align="center">
                {leave.count}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
     {/* Leave type Start here  */}    


      {/* Type Of  Leaves  end  */}
      {/* table data start here  */}

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          padding: isMobile ? 2 : 3, // Adjust padding for mobile
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 440,
            overflowX: "auto", // Enable horizontal scrolling for smaller screens
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                    sx={{
                      minWidth: isMobile ? 100 : column.minWidth,
                      fontSize: isMobile ? "0.75rem" : "1rem",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align || "left"}
                            sx={{
                              fontSize: isMobile ? "0.7rem" : "0.9rem",
                            }}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* table End  here  */}
    </div>
  );
}

export default Leaves;
