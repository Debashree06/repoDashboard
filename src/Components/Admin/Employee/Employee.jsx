import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FaPlus } from "react-icons/fa"; // For the "Add" icon
import BorderColorIcon from "@mui/icons-material/BorderColor";

// Some Other Dependency For Search bar and also card

import {
  Box,
  Select,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Some Other Dependency For Search bar and also card

const Employee = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    officialEmail: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",

    joiningDate: null,
    aadhaar: "",
    panCard: "",
    dob: null,

    fatherName: "",
    fatherPhone: "",
    motherName: "",
    address: "",

    bloodGroup: "",
    company: "",
    department: "",
    role: "",
    emergencyContact: "",
    avatar: null, // For storing avatar image
  });

  const [errors, setErrors] = useState({});

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const companies = ["Company A", "Company B", "Company C"];
  const departments = ["HR", "Engineering", "Sales"];
  const roles = ["Manager", "Developer", "Analyst"];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateChange = (key, date) => {
    setFormValues({ ...formValues, [key]: date });
  };

  // Image size upload code
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024) {
        // Check file size (50 KB limit)
        setErrors((prevErrors) => ({
          ...prevErrors,
          avatar: "Image size must be less than 50KB",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, avatar: null })); // Clear error
        setFormValues((prevValues) => ({
          ...prevValues,
          avatar: file,
        }));
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {};

    // Validate all fields except non-mandatory ones
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key] && !["joiningDate", "dob", "avatar"].includes(key)) {
        newErrors[key] = "This field is required";
      }
    });

    // Check if password and confirm password match
    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Show errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form
      console.log("Form Submitted:", formValues);
      setOpen(false); // Close the dialog
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        officialEmail: "",
        password: "",
        confirmPassword: "",
        phone: "",
        employeeId: "",
        username: "",
        joiningDate: null,
        company: "",
        department: "",
        role: "",
        aadhaar: "",
        panCard: "",
        dob: null,
        bloodGroup: "",
        fatherName: "",
        fatherPhone: "",
        motherName: "",
        address: "",
        emergencyContact: "",
        avatar: null, // For storing avatar image
      });
      setErrors({}); // Clear any previous errors
    }
  };

  // Search Employee Logic

  const [designation, setDesignation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const employees = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Designer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Richard Miles",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Jeffrey Warden",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "John Smith",
      role: "Android Developer",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Bernardo Galaviz",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Lesley Grauer",
      role: "Team Leader",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 7,
      name: "Loren Gatlin",
      role: "Android Developer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 8,
      name: "Tarah Shropshire",
      role: "Android Developer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 9,
      name: "Catherine Manseau",
      role: "Android Developer",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
    // Implement search logic
  };

  // Search Employee Logic

  // ! Function to handle opening the edit dialog=============================================
  const [editFormValues, setEditFormValues] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    email: "",
    officialEmail: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    joiningDate: null,
    aadhaar: "",
    panCard: "",
    dob: null,
    fatherName: "",
    fatherPhone: "",
    motherName: "",
    bloodGroup: "",
    address: "",
    company: "",
    department: "",
    role: "",
    emergencyContact: "",
  });

  const [editFormErrors, setEditFormErrors] = useState({});
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEmployeeData = async (employeeId) => {
    // Simulated API fetch
    const fetchedData = {
      employeeId: "EMP12345",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      officialEmail: "john.doe@company.com",
      username: "johndoe",
      password: "Password@123",
      confirmPassword: "Password@123",
      phone: "9876543210",
      joiningDate: "2023-06-15",
      aadhaar: "123456789012",
      panCard: "ABCDE1234F",
      dob: "1990-04-25",
      fatherName: "Robert Doe",
      fatherPhone: "9123456789",
      motherName: "Linda Doe",
      bloodGroup: "B+",
      address: "1234 Elm Street, Springfield, IL, 62704",
      company: "ABC Corp",
      department: "Development",
      role: "Software Engineer",
      emergencyContact: "9876543210",
    };

    setEditFormValues({
      ...editFormValues,
      ...fetchedData,
      joiningDate: new Date(fetchedData.joiningDate),
      dob: new Date(fetchedData.dob),
    });
    setIsEditOpen(true);
  };

  const handleEditOpen = (employeeId) => {
    fetchEmployeeData(employeeId);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
    setEditFormErrors({});
  };

  const handleEditChange = (key, value) => {
    setEditFormValues((prevValues) => ({ ...prevValues, [key]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!editFormValues.firstName.trim()) {
      errors.firstName = "First name is required.";
    } else if (!/^[a-zA-Z]+$/.test(editFormValues.firstName)) {
      errors.firstName = "First name must contain only alphabetic characters.";
    }

    if (!editFormValues.lastName.trim()) {
      errors.lastName = "Last name is required.";
    } else if (!/^[a-zA-Z]+$/.test(editFormValues.lastName)) {
      errors.lastName = "Last name must contain only alphabetic characters.";
    }

    // Email validation
    if (!editFormValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editFormValues.email)) {
      errors.email = "Enter a valid email address.";
    }

    // Phone number validation
    if (!editFormValues.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(editFormValues.phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }

    // Aadhaar validation
    if (editFormValues.aadhaar && !/^\d{12}$/.test(editFormValues.aadhaar)) {
      errors.aadhaar = "Aadhaar must be exactly 12 digits.";
    }

    // PAN card validation
    if (
      editFormValues.panCard &&
      !/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(editFormValues.panCard)
    ) {
      errors.panCard = "Enter a valid PAN card number (e.g., ABCDE1234F).";
    }

    // Password validation
    if (editFormValues.password) {
      if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
          editFormValues.password
        )
      ) {
        errors.password =
          "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
      }

      if (editFormValues.password !== editFormValues.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }

    // Date validation
    if (!editFormValues.dob) {
      errors.dob = "Date of birth is required.";
    } else if (editFormValues.dob > new Date()) {
      errors.dob = "Date of birth cannot be in the future.";
    }

    if (!editFormValues.joiningDate) {
      errors.joiningDate = "Joining date is required.";
    }

    return errors;
  };

  const handleEditSubmit = async () => {
    setIsSubmitting(true);
    const errors = validateForm();
    setEditFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    console.log("Submitting edited data:", editFormValues);

    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 2000)
    );

    if (response.success) {
      console.log("Data updated successfully:", editFormValues);
      setIsEditOpen(false);
    } else {
      console.log("Error updating data.");
    }

    setIsSubmitting(false);
  };

  //! Edit Employee Logic End  here ===============================================

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        {/* Button to Open Dialog */}
        <div className="rounded-md flex justify-between px-9 py-8 mb-6 border-solid">
          <h6 className="text-2xl font-semibold text-gray-700">
            Employee
            <div className="text-[14px]">
              <p>Dashboard / Employee</p>
            </div>
          </h6>
          <button
            className="
    font-medium 
    py-2 px-4 sm:px-6 
    bg-[#b17f27] 
    text-white 
    rounded-full 
    flex 
    justify-center 
    items-center 
    gap-2 
    h-[40px] 
    text-sm sm:text-base 
    hover:bg-[#a56f23] 
    transition-all 
    duration-200 
    w-full sm:w-auto
    w-[175px]
    sm:flex-wrap

  "
            onClick={handleOpen}
          >
            <FaPlus className="text-sm sm:text-base" />
            <span className=" sm:inline ">Add Employee</span>
          </button>
        </div>

        {/* Dialog start add Employee */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>Add Employee</DialogTitle>
          <DialogContent>
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Employee ID"
                name="employeeId"
                value={formValues.employeeId}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.employeeId}
                helperText={errors.employeeId}
              />

              <TextField
                label="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Official Email"
                name="officialEmail"
                type="email"
                value={formValues.officialEmail}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.officialEmail}
                helperText={errors.officialEmail}
              />
              <TextField
                label="Username"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.username}
                helperText={errors.username}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
              <TextField
                label="Phone No."
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone}
              />

              <DatePicker
                label="Joining Date"
                value={formValues.joiningDate}
                onChange={(date) => handleDateChange("joiningDate", date)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth required />
                )}
              />
              <TextField
                label="Aadhaar"
                name="aadhaar"
                value={formValues.aadhaar}
                onChange={handleChange}
                fullWidth
                error={!!errors.aadhaar}
                helperText={errors.aadhaar}
              />
              <TextField
                label="Pan Card"
                name="panCard"
                value={formValues.panCard}
                onChange={handleChange}
                fullWidth
                error={!!errors.panCard}
                helperText={errors.panCard}
              />
              <DatePicker
                label="Date of Birth"
                value={formValues.dob}
                onChange={(date) => handleDateChange("dob", date)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth required />
                )}
              />
              <TextField
                label="Father's Name"
                name="fatherName"
                value={formValues.fatherName}
                onChange={handleChange}
                fullWidth
                error={!!errors.fatherName}
                helperText={errors.fatherName}
              />
              <TextField
                label="Father's Phone"
                name="fatherPhone"
                value={formValues.fatherPhone}
                onChange={handleChange}
                fullWidth
                error={!!errors.fatherPhone}
                helperText={errors.fatherPhone}
              />
              <TextField
                label="Mother's Name"
                name="motherName"
                value={formValues.motherName}
                onChange={handleChange}
                fullWidth
                error={!!errors.motherName}
                helperText={errors.motherName}
              />

              <TextField
                label="Address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                fullWidth
                error={!!errors.address}
                helperText={errors.address}
              />

              <FormControl fullWidth required error={!!errors.company}>
                <InputLabel>Company</InputLabel>
                <TextField
                  select
                  name="company"
                  value={formValues.company}
                  onChange={handleChange}
                  helperText={errors.company}
                >
                  {companies.map((company) => (
                    <MenuItem key={company} value={company}>
                      {company}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              {/* Text Input Fields for Role and Department */}
              <FormControl fullWidth required error={!!errors.department}>
                <InputLabel>Department</InputLabel>
                <TextField
                  select
                  name="department"
                  value={formValues.department}
                  onChange={handleChange}
                  helperText={errors.department}
                >
                  {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <FormControl fullWidth required error={!!errors.role}>
                <InputLabel>Role</InputLabel>
                <TextField
                  select
                  name="role"
                  value={formValues.role}
                  onChange={handleChange}
                  helperText={errors.role}
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <FormControl fullWidth required error={!!errors.bloodGroup}>
                <InputLabel>Blood Group</InputLabel>
                <TextField
                  select
                  name="bloodGroup"
                  value={formValues.bloodGroup}
                  onChange={handleChange}
                  helperText={errors.bloodGroup}
                >
                  {bloodGroups.map((bloodGroup) => (
                    <MenuItem key={bloodGroup} value={bloodGroup}>
                      {bloodGroup}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <TextField
                label="Emergency Contact"
                name="emergencyContact"
                value={formValues.emergencyContact}
                onChange={handleChange}
                fullWidth
                error={!!errors.emergencyContact}
                helperText={errors.emergencyContact}
              />

              {/* Avatar Image Upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
                style={{ display: "none" }}
                id="avatar-upload"
              />
              <label htmlFor="Profile-upload">
                <Button component="span" variant="contained" fullWidth>
                  Upload Avatar
                </Button>
              </label>
              {errors.avatar && <span>{errors.avatar}</span>}
            </div>
          </DialogContent>

          {/* Dialog Actions */}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        {/* Employee Search section  */}
        <Box sx={{ padding: 5 }}>
          {/* Search Section */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={3}
            gap={2} // Add spacing between items
          >
            <Box sx={{ flex: "1 1 calc(25% - 16px)", minWidth: "200px" }}>
              <TextField
                fullWidth
                label="Employee ID"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
            <Box sx={{ flex: "1 1 calc(25% - 16px)", minWidth: "200px" }}>
              <TextField
                fullWidth
                label="Employee Name"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
            <Box sx={{ flex: "1 1 calc(25% - 16px)", minWidth: "200px" }}>
              <FormControl fullWidth>
                <InputLabel>Designation</InputLabel>
                <Select
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  label="Designation"
                >
                  <MenuItem value="">Select Designation</MenuItem>
                  <MenuItem value="Web Developer">Web Developer</MenuItem>
                  <MenuItem value="Android Developer">
                    Android Developer
                  </MenuItem>
                  <MenuItem value="Team Leader">Team Leader</MenuItem>
                  <MenuItem value="Web Designer">Web Designer</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: "1 1 calc(25% - 16px)", minWidth: "200px" }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<SearchIcon />}
                onClick={handleSearch}
                sx={{
                  height: "50px",
                  backgroundColor: "#b17f27",
                  "&:hover": {
                    backgroundColor: "#b17f27",
                  },
                }}
              >
                Search
              </Button>
            </Box>
          </Box>

          {/* Employee Cards */}
          <Box
  display="flex"
  flexWrap="wrap"
  justifyContent="space-between"
  gap={3} // Increased gap for spacing between cards
>
  {employees
    .filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (designation ? employee.role === designation : true)
    )
    .map((employee) => (
      <Box
        key={employee.id}
        sx={{
          flex: "1 1 calc(30% - 16px)", // Responsive card layout
          minWidth: "280px", // Adjusted for better appearance on smaller screens
          marginBottom: 3,
        }}
      >
        <Card
          sx={{
            transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover animation
            "&:hover": {
              transform: "scale(1.05)", // Slight zoom effect
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", // Stronger shadow
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              height="140px"
              sx={{ padding: "10px" }} // Improved padding for better spacing
            >
              <Avatar
                alt={employee.name}
                src={employee.image}
                sx={{
                  width: 64,
                  height: 64,
                  border: "2px solid #A56F23", // Highlighted border
                }}
              />
              <div style={{ textAlign: "left", flex: 1, marginLeft: "16px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {employee.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {employee.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {employee.id}
                </Typography>
              </div>
              <IconButton
                onClick={() => handleEditOpen(employee)}
                sx={{
                  backgroundColor: "#FFEFD5", // Light background for the icon
                  "&:hover": { backgroundColor: "#FFD39B" }, // Hover effect
                }}
              >
                <BorderColorIcon sx={{ color: "#A56F23" }} />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    ))}
</Box>
        </Box>
        {/* Employee Search section  */}

        {/* Edit Employee Start Here  */}

        <Dialog open={isEditOpen} onClose={handleEditClose} fullWidth maxWidth="md">
  <DialogTitle>Edit Employee</DialogTitle>
  <DialogContent>
    {/* Personal Details */}
    <Typography variant="h6" gutterBottom>
      Personal Details
    </Typography>
    <TextField
  label="Employee ID"
  value={editFormValues.employeeId}
  fullWidth
  margin="dense"
  InputProps={{
    readOnly: true,
    style: { backgroundColor: "#f5f5f5" }, // Adjust to preferred color
  }}
  sx={{
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#000", // Text color for disabled
      backgroundColor: "#f5f5f5", // Background for disabled field
    },
  }}
/>
    <TextField
      label="First Name"
      value={editFormValues.firstName}
      onChange={(e) => handleEditChange("firstName", e.target.value)}
      error={!!editFormErrors.firstName}
      helperText={editFormErrors.firstName}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Last Name"
      value={editFormValues.lastName}
      onChange={(e) => handleEditChange("lastName", e.target.value)}
      error={!!editFormErrors.lastName}
      helperText={editFormErrors.lastName}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Email"
      value={editFormValues.email}
      onChange={(e) => handleEditChange("email", e.target.value)}
      error={!!editFormErrors.email}
      helperText={editFormErrors.email}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Phone"
      value={editFormValues.phone}
      onChange={(e) => handleEditChange("phone", e.target.value)}
      error={!!editFormErrors.phone}
      helperText={editFormErrors.phone}
      fullWidth
      margin="dense"
    />
    <DatePicker
      label="Date of Birth"
      value={editFormValues.dob}
      onChange={(date) => handleEditChange("dob", date)}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          margin="dense"
          error={!!editFormErrors.dob}
          helperText={editFormErrors.dob}
        />
      )}
    />
    <TextField
      label="Father's Name"
      value={editFormValues.fatherName}
      onChange={(e) => handleEditChange("fatherName", e.target.value)}
      error={!!editFormErrors.fatherName}
      helperText={editFormErrors.fatherName}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Father's Phone"
      value={editFormValues.fatherPhone}
      onChange={(e) => handleEditChange("fatherPhone", e.target.value)}
      error={!!editFormErrors.fatherPhone}
      helperText={editFormErrors.fatherPhone}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Mother's Name"
      value={editFormValues.motherName}
      onChange={(e) => handleEditChange("motherName", e.target.value)}
      error={!!editFormErrors.motherName}
      helperText={editFormErrors.motherName}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Blood Group"
      value={editFormValues.bloodGroup}
      onChange={(e) => handleEditChange("bloodGroup", e.target.value)}
      error={!!editFormErrors.bloodGroup}
      helperText={editFormErrors.bloodGroup}
      fullWidth
      margin="dense"
    />

    {/* Employment Details */}
    <Typography variant="h6" gutterBottom>
      Employment Details
    </Typography>
    <TextField
      label="Official Email"
      value={editFormValues.officialEmail}
      onChange={(e) => handleEditChange("officialEmail", e.target.value)}
      error={!!editFormErrors.officialEmail}
      helperText={editFormErrors.officialEmail}
      fullWidth
      margin="dense"
    />
    <DatePicker
      label="Joining Date"
      value={editFormValues.joiningDate}
      onChange={(date) => handleEditChange("joiningDate", date)}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          margin="dense"
          error={!!editFormErrors.joiningDate}
          helperText={editFormErrors.joiningDate}
        />
      )}
    />
    <TextField
      label="Company"
      value={editFormValues.company}
      onChange={(e) => handleEditChange("company", e.target.value)}
      error={!!editFormErrors.company}
      helperText={editFormErrors.company}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Department"
      value={editFormValues.department}
      onChange={(e) => handleEditChange("department", e.target.value)}
      error={!!editFormErrors.department}
      helperText={editFormErrors.department}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Role"
      value={editFormValues.role}
      onChange={(e) => handleEditChange("role", e.target.value)}
      error={!!editFormErrors.role}
      helperText={editFormErrors.role}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Emergency Contact"
      value={editFormValues.emergencyContact}
      onChange={(e) => handleEditChange("emergencyContact", e.target.value)}
      error={!!editFormErrors.emergencyContact}
      helperText={editFormErrors.emergencyContact}
      fullWidth
      margin="dense"
    />

    {/* Security Details */}
    <Typography variant="h6" gutterBottom>
      Security Details
    </Typography>
    <TextField
      label="Aadhaar"
      value={editFormValues.aadhaar}
      onChange={(e) => handleEditChange("aadhaar", e.target.value)}
      error={!!editFormErrors.aadhaar}
      helperText={editFormErrors.aadhaar}
      fullWidth
      margin="dense"
    />
    <TextField
      label="PAN Card"
      value={editFormValues.panCard}
      onChange={(e) => handleEditChange("panCard", e.target.value)}
      error={!!editFormErrors.panCard}
      helperText={editFormErrors.panCard}
      fullWidth
      margin="dense"
    />
     {/* Password Section */}
     <Typography variant="h6" gutterBottom>
      Security
    </Typography>
    <TextField
      label="Password"
      type="password"
      value={editFormValues.password}
      onChange={(e) => handleEditChange("password", e.target.value)}
      error={!!editFormErrors.password}
      helperText={editFormErrors.password || "Must be at least 8 characters, include numbers and special characters."}
      fullWidth
      margin="dense"
    />
    <TextField
      label="Confirm Password"
      type="password"
      value={editFormValues.confirmPassword}
      onChange={(e) => handleEditChange("confirmPassword", e.target.value)}
      error={!!editFormErrors.confirmPassword}
      helperText={editFormErrors.confirmPassword || "Must match the password above."}
      fullWidth
      margin="dense"
    />

    {/* Address Details */}
    <Typography variant="h6" gutterBottom>
      Address Details
    </Typography>
    <TextField
      label="Address"
      value={editFormValues.address}
      onChange={(e) => handleEditChange("address", e.target.value)}
      error={!!editFormErrors.address}
      helperText={editFormErrors.address}
      fullWidth
      multiline
      rows={3}
      margin="dense"
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleEditClose} color="secondary">
      Cancel
    </Button>
    <Button onClick={handleEditSubmit} color="primary" variant="contained" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  </DialogActions>
</Dialog>

        {/* Edit Employee End  Here  */}
      </div>
      
    </LocalizationProvider>
  );
};

export default Employee;
