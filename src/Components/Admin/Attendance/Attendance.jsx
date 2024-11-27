import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  CircularProgress,
} from "@mui/material";

const Attendance=()=> {
  // Form state for search filters
  const [formValues, setFormValues] = useState({ month: "", year: "" });
  const [errors, setErrors] = useState({});

  // Dropdown options
  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    // Add all months here
  ];
  const years = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formValues.month) newErrors.month = "Please select a month.";
    if (!formValues.year) newErrors.year = "Please select a year.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Filtered data state
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  // Fetch dummy data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const dummyData = [
        {
          employeeName: "John Doe",
          employeeId: "EMP001",
          month: "January",
          year: "2023",
          attendance: [
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
          ],
        },
        {
          employeeName: "Richard Miles",
          employeeId: "EMP002",
          month: "February",
          year: "2023",
          attendance: [
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
            "✗",
            "✓",
            "✓",
            "✓",
          ],
        },
      ];
      setData(dummyData);
      setFilteredData(dummyData); // Set the initial filtered data
      setLoading(false);
    };
    fetchData();
  }, []);

  // Handle search based on month and year
  const handleSearch = () => {
    if (validateForm()) {
      const { month, year } = formValues;
      const result = data.filter(
        (row) => row.month === month && row.year === year
      );
      setFilteredData(result);
    }
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-6 border-solid">
        <div className="text-center md:text-left">
          <h6 className="text-2xl font-semibold text-gray-700">Attendance</h6>
          <div className="text-sm text-gray-500">
            <p>Dashboard / Attendance</p>
          </div>
        </div>
      </div>

      {/* Search Functionality */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          marginTop: "20px",
          width: "100%",
          alignItems: "center", // Align items vertically
          justifyContent: "flex-end",
          padding: 2, // Add padding to create space around the form
        }}
      >
        {/* Select Month */}
        <TextField
          select
          label="Select Month"
          name="month"
          variant="outlined"
          size="small"
          value={formValues.month}
          onChange={handleInputChange}
          error={!!errors.month}
          helperText={errors.month}
          sx={{
            width: "300px", // Slightly smaller width for better alignment
            bgcolor: "whitesmoke",
            borderRadius: "8px", // Rounded corners for a softer look
            boxShadow: 1, // Add subtle shadow to lift the element
          }}
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Select Year */}
        <TextField
          select
          label="Select Year"
          name="year"
          variant="outlined"
          size="small"
          value={formValues.year}
          onChange={handleInputChange}
          error={!!errors.year}
          helperText={errors.year}
          sx={{
            width: "300px", // Consistent width
            bgcolor: "whitesmoke",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          {years.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Search Button */}
        <Button
          variant="contained"
          
          onClick={handleSearch}
          sx={{
            height: "40px",
            minWidth: "120px",
            borderRadius: "20px",
            textTransform: "capitalize",
            boxShadow: 1, // Add shadow for depth
            backgroundColor: "#b17f27",
            "&:hover": {
              backgroundColor: "#b17f27", // Darker shade on hover
            },
          }}
        >
          SEARCH
        </Button>
      </Box>

      {/* Attendance Table */}
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Employee Name</TableCell>
                  <TableCell>Employee ID</TableCell>
                  {daysInMonth.map((day) => (
                    <TableCell key={day} align="center">
                      {day}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.employeeName}</TableCell>
                      <TableCell>{row.employeeId}</TableCell>
                      {row.attendance.map((status, idx) => (
                        <TableCell
                          key={idx}
                          align="center"
                          sx={{
                            color: status === "✓" ? "green" : "red",
                            fontWeight: "bold",
                          }}
                        >
                          {status}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Attendance;
