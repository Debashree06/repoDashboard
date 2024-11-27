import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FaPlus } from "react-icons/fa";

// After Dialog box Search and display leaves dependency here

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Avatar,
  Box,
  Typography,
  Select,
} from "@mui/material";

// After Dialog box Search and display leaves dependency here

const Leaves=()=> {
  // State Management
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

  // Leave Types and Approval Options
  const leaveTypes = ["Casual Leave", "Sick Leave", "Emergency Leave"];
  const approvals = ["HR", "Manager", "Team Leader"];

  // Calculate Number of Days
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

  // Handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrors({});
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (field === "fromDate" || field === "toDate") calculateDays();
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Employee name is required.";
    if (!formData.empId.trim()) newErrors.empId = "Employee ID is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.leaveType) newErrors.leaveType = "Leave type is required.";
    if (!formData.fromDate) newErrors.fromDate = "From date is required.";
    if (!formData.toDate) newErrors.toDate = "To date is required.";
    if (
      formData.fromDate &&
      formData.toDate &&
      formData.fromDate > formData.toDate
    ) {
      newErrors.toDate = "To date cannot be earlier than From date.";
    }
    if (!formData.reason.trim()) newErrors.reason = "Reason is required.";
    if (!formData.approval) newErrors.approval = "Approval is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted: ", formData);
      handleClose();
    } else {
      console.log("Validation Errors: ", errors);
    }
  };

  // After Dialog box Search and disply leaves dependency here

  const leaveStatuses = ["Pending", "Approved", "Rejected"];

  const [filters, setFilters] = React.useState({
    empId: "",
    leaveType: "",
    leaveStatus: "",
    fromDate: null,
    toDate: null,
  });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleSearch = () => {
    console.log("Filters Applied:", filters);
  };
  // After Dialog box Search and disply leaves dependency end here
  // After Dialog box Search and  leaves Table dependency  start here

  // Define the table columns
  const columns = [
    { id: "employee", label: "Employee", minWidth: 170 },
    { id: "leaveType", label: "Leave Type", minWidth: 100 },
    { id: "from", label: "From", minWidth: 120 },
    { id: "to", label: "To", minWidth: 120 },
    { id: "noOfDays", label: "No of Days", minWidth: 100 },
    { id: "reason", label: "Reason", minWidth: 170 },
    { id: "status", label: "Status", minWidth: 100 },
  ];

  // Define the initial table data
  const initialRows = [
    {
      employee: {
        id: "E101",
        name: "John Doe",
        role: "Web Designer",
        avatar: "/path/to/avatar1.jpg",
      },
      leaveType: "Medical Leave",
      from: "27 Feb 2019",
      to: "27 Feb 2019",
      noOfDays: "1 day",
      reason: "Going to Hospital",
      status: "Approved",
    },
    {
      employee: {
        id: "E102",
        name: "Buster Wigton",
        role: "Web Developer",
        avatar: "/path/to/avatar2.jpg",
      },
      leaveType: "Hospitalisation",
      from: "15 Jan 2019",
      to: "25 Jan 2019",
      noOfDays: "10 days",
      reason: "Going to Hospital",
      status: "Pending",
    },
  ];

  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Handle status change
  const handleStatusChange = (rowIndex, newStatus) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].status = newStatus; // Update the status
    setRows(updatedRows);
    console.log("Row Updated:", updatedRows[rowIndex]); // Log updated row
  };
  // After Dialog box Search and  leaves Table dependency start here

  return (
    <div className="p-4">
      {/* Leave Summary */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h6 className="text-2xl font-semibold text-gray-700">Leaves</h6>
          <div className="text-sm text-gray-500">Dashboard / Leaves</div>
        </div>

        <Button
          variant="contained"
          startIcon={<FaPlus />}
          onClick={handleOpen}
          sx={{
            textTransform: "capitalize",
            borderRadius: "20px",
            height: "40px",
            backgroundColor: "#b17f27",
            color: "#fff", // Ensure the text is visible against the background
            "&:hover": {
              backgroundColor: "#a76e24", // Slightly darker shade for hover effect
            },
          }}
        >
          Apply Leave
        </Button>
      </div>

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
            InputProps={{
              readOnly: true,
            }}
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
      {/* Dialog Box */}

      {/* // After Dialog box Search and disply leaves dependency here */}
      <Box p={3}>
  {/* Metrics Section */}
  <Box
    display="flex"
    flexWrap="wrap"
    gap={2}
    justifyContent="space-between"
    mb={3}
  >
    {[
      { label: "Today Presents", value: "12 / 60" },
      { label: "Planned Leaves", value: "8 Today" },
      { label: "Unplanned Leaves", value: "0 Today" },
      { label: "Pending Requests", value: "12" },
    ].map((metric, index) => (
      <Box
        key={index}
        flex="1 1 calc(25% - 16px)" // Adjust for responsiveness
        p={3}
        borderRadius={2}
        bgcolor="#f5f5f5"
        textAlign="center"
        boxShadow={3}
        sx={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)", // Subtle zoom effect on hover
            boxShadow: 6, // Increase shadow on hover
          },
        }}
      >
        <Typography variant="subtitle2" color="textSecondary" sx={{ fontWeight: "bold" }}>
          {metric.label}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: "bold",color:"#b17f27" }}>
          {metric.value}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* Filters Section */}
  <Box
    display="flex"
    flexWrap="wrap"
    gap={2}
    alignItems="center"
    justifyContent="space-between"
    mb={2}
  >
    {/* Employee ID Filter */}
    <TextField
      label="Employee ID"
      variant="outlined"
      size="small"
      value={filters.empId}
      onChange={(e) => handleFilterChange("empId", e.target.value)}
      sx={{ flex: "1 1 200px" }}
      InputProps={{
        sx: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            padding: "8px 14px",
             
          },
        },
      }}
    />

    {/* Leave Type Filter */}
    <TextField
      select
      label="Leave Type"
      variant="outlined"
      size="small"
      value={filters.leaveType}
      onChange={(e) => handleFilterChange("leaveType", e.target.value)}
      sx={{ flex: "1 1 200px" }}
      InputProps={{
        sx: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            padding: "8px 14px",
          },
        },
      }}
    >
      {leaveTypes.map((type) => (
        <MenuItem key={type} value={type}>
          {type}
        </MenuItem>
      ))}
    </TextField>

    {/* Leave Status Filter */}
    <TextField
      select
      label="Leave Status"
      variant="outlined"
      size="small"
      value={filters.leaveStatus}
      onChange={(e) => handleFilterChange("leaveStatus", e.target.value)}
      sx={{ flex: "1 1 200px" }}
      InputProps={{
        sx: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            padding: "8px 14px",
          },
        },
      }}
    >
      {leaveStatuses.map((status) => (
        <MenuItem key={status} value={status}>
          {status}
        </MenuItem>
      ))}
    </TextField>

    {/* From Date Filter */}
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="From"
        value={filters.fromDate}
        onChange={(date) => handleFilterChange("fromDate", date)}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" size="small" sx={{ borderRadius: "20px" }} />
        )}
        sx={{ flex: "1 1 200px" }}
      />
    </LocalizationProvider>

    {/* To Date Filter */}
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="To"
        value={filters.toDate}
        onChange={(date) => handleFilterChange("toDate", date)}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" size="small" sx={{ borderRadius: "20px" }} />
        )}
        sx={{ flex: "1 1 200px" }}
      />
    </LocalizationProvider>

    {/* Search Button */}
    <Button
      variant="contained"
      color="success"
      size="large"
      onClick={handleSearch}
      sx={{
        flex: "1 1 200px",
        maxWidth: "150px",
        borderRadius: "20px",
        textTransform: "capitalize",
        padding: "8px 20px",
        backgroundColor: "#b17f27", // Change the background color to match the theme
        "&:hover": {
          backgroundColor: "#b17f27", // Darker shade on hover
        },
      }}
    >
      Search
    </Button>
  </Box>
</Box>
      {/* // After Dialog box Search and disply leaves dependency here */}
      {/* // Table data and  leaves  here */}

      <Paper  sx={{ width: "100%", overflow: "hidden" , }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="leave table">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "employee") {
                        // Render employee column with avatar and ID
                        return (
                          <TableCell key={column.id}>
                            <Box display="flex" alignItems="center">
                              <Avatar
                                src={value.avatar}
                                alt={value.name}
                                sx={{ mr: 2 }}
                              />
                              <Box>
                                <Typography fontWeight="bold">
                                  {value.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  {value.role}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="textSecondary"
                                  fontStyle="italic"
                                >
                                  ID: {value.id}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                        );
                      } else if (column.id === "status") {
                        // Render status as a dropdown
                        return (
                          <TableCell key={column.id}>
                            <Select
                              value={value}
                              size="small"
                              onChange={(event) =>
                                handleStatusChange(rowIndex, event.target.value)
                              }
                              sx={{
                                backgroundColor:
                                  value === "Approved"
                                    ? "#e7f5e9"
                                    : value === "Declined"
                                    ? "#fce4e4"
                                    : value === "Pending"
                                    ? "#fff3cd"
                                    : "#f0f4ff",
                                color:
                                  value === "Approved"
                                    ? "green"
                                    : value === "Declined"
                                    ? "red"
                                    : value === "Pending"
                                    ? "orange"
                                    : "blue",
                                borderRadius: "8px",
                                fontWeight: "bold",
                              }}
                            >
                              <MenuItem value="Approved">Approved</MenuItem>
                              <MenuItem value="Pending">Pending</MenuItem>
                              <MenuItem value="Declined">Declined</MenuItem>
                            </Select>
                          </TableCell>
                        );
                      }
                      return <TableCell key={column.id}>{value}</TableCell>;
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
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

      {/* // Table data  and  leaves here */}
    </div>
  );
}

export default Leaves;
