import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { CgClose } from "react-icons/cg";

const AddReimbursementModal = ({
  isEditing,
  formData,
  setFormData,
  handleSubmit,
  handleCloseModal,
}) => {
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null); // For previewing the uploaded image
  const projectOptions = [
    { name: "Shriram Smash Hit", distance: 20 },
   
    { name: "Vajram codename KGF", distance: 10 },  
    { name: "Bhartiya Nikoo homes 6", distance: 9 },
    { name: "Godrej Yashwanthpur", distance: 9 },

    { name: "Provident Ecopolitin", distance: 21 },  
    { name: "Vajram Newtown", distance: 10 },
    { name: "Ajmera Lakeside", distance: 13 },
    
    { name: "Lodha Mirabelle", distance: 7 },  
    { name: "Concored Mayfair", distance: 7 },
    { name: "Concorde New", distance: 12 },

    { name: "Shriram codename Poem", distance: 12 },  
    { name: "Shriram Solitaire", distance: 13 },
    { name: "Century Liva", distance: 15 },

    { name: "Century Built Rare", distance: 21 },  
   
  ]; 

  // Validate Inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.employeeId) newErrors.employeeId = "Employee ID is required.";
    if (!formData.employeeName) newErrors.employeeName = "Employee Name is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.purpose) newErrors.purpose = "Purpose is required.";
    if (formData.purpose === "Petrol") {
      if (formData.projects.length === 0) newErrors.projects = "Project is required.";
      if (!formData.amount || formData.amount <= 0) newErrors.amount = "Amount is required.";
    }
    if (formData.purpose === "Cab") {
      if (!formData.amount || formData.amount <= 0) newErrors.amount = "Amount is required.";
      if (!formData.receipt) newErrors.receipt = "Receipt file is required.";
    }
    if (formData.purpose === "Others") {
      if (!formData.amount || formData.amount <= 0) newErrors.amount = "Amount is required.";
      if (!formData.reason) newErrors.reason = "Reason is required.";
      if (!formData.receipt) newErrors.receipt = "Receipt file is required.";
    }
    return newErrors;
  };

  // Handle Submit with Validation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Map selected project names to their respective distances
    const selectedProjectDistances = formData.projects.map((projectName) => {
      const project = projectOptions.find((p) => p.name === projectName);
      return project ? project.distance : 0; // default to 0 if project not found
    });

    // Prepare data for submission with project distances
    const dataToSubmit = {
      ...formData,
      projects: selectedProjectDistances,  // Send distances instead of project names
    };
    console.log("Form Data Submitted: ", dataToSubmit);

    handleSubmit(dataToSubmit);
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "projects") {
      // For multiple project selection, ensure the value is an array
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  // Handle File Upload (PDF validation + size check)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type (PDF) and size (< 50KB)
      const fileType = file.type;
      const fileSize = file.size;

      if (fileType !== "application/pdf") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          receipt: "Only PDF files are allowed.",
        }));
        return;
      }

      if (fileSize > 50 * 1024) { // 50KB = 50 * 1024 bytes
        setErrors((prevErrors) => ({
          ...prevErrors,
          receipt: "File size must be less than 50KB.",
        }));
        return;
      }

      setFormData((prevData) => ({ ...prevData, receipt: file }));
      setPreviewImage(null); // Clear any previous preview
      setErrors((prevErrors) => ({ ...prevErrors, receipt: null }));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-semibold">
            {isEditing ? "Edit Reimbursement" : "Add Reimbursement"}
          </h5>
          <button
            onClick={handleCloseModal}
            className="bg-red-500 text-white p-2 rounded-full"
          >
            <CgClose />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee ID */}
            <TextField
              label="Employee ID"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              placeholder="Enter Employee ID"
              error={!!errors.employeeId}
              helperText={errors.employeeId}
              required
            />

            {/* Employee Name */}
            <TextField
              label="Employee Name"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              placeholder="Enter Employee Name"
              error={!!errors.employeeName}
              helperText={errors.employeeName}
              required
            />

            {/* Date */}
            <TextField
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              error={!!errors.date}
              helperText={errors.date}
              required
            />

            {/* Purpose */}
            <FormControl required error={!!errors.purpose} fullWidth>
              <InputLabel className="text-sm">Purpose</InputLabel>
              <Select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                label="Purpose"
              >
                <MenuItem value="" disabled>
                  Select Purpose
                </MenuItem>
                <MenuItem value="Petrol">Petrol Allowance</MenuItem>
                <MenuItem value="Cab">Cab Reimbursement</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
              {errors.purpose && (
                <span className="text-sm text-red-600">{errors.purpose}</span>
              )}
            </FormControl>

            {/* Conditional Fields */}
            {formData.purpose === "Petrol" && (
              <>
                {/* Projects (Multiple selection) */}
                <FormControl required error={!!errors.projects} fullWidth>
                  <InputLabel className="text-sm">Projects</InputLabel>
                  <Select
                    name="projects"
                    value={formData.projects}
                    onChange={handleInputChange}
                    multiple
                    label="Projects"
                  >
                    {projectOptions.map((project) => (
                      <MenuItem key={project.name} value={project.name}>
                        {project.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.projects && (
                    <span className="text-sm text-red-600">{errors.projects}</span>
                  )}
                </FormControl>

                {/* Amount */}
                <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleInputChange}
                  error={!!errors.amount}
                  helperText={errors.amount}
                />
              </>
            )}

            {formData.purpose === "Cab" && (
              <>
                {/* Amount */}
                <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleInputChange}
                  error={!!errors.amount}
                  helperText={errors.amount}
                />

                {/* Upload Receipt (PDF) */}
                <div className="flex flex-col ">
                  <label htmlFor="receipt">Upload Receipt (PDF, Max 50KB)</label>
                  <input
                    type="file"
                    accept="application/pdf"
                    id="receipt"
                    onChange={handleFileUpload}
                  />
                  {errors.receipt && (
                    <span className="text-sm text-red-600">{errors.receipt}</span>
                  )}
                </div>
              </>
            )}

            {formData.purpose === "Others" && (
              <>
                {/* Amount */}
                <TextField
                  label="Amount"
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleInputChange}
                  error={!!errors.amount}
                  helperText={errors.amount}
                />

                {/* Reason */}
                <TextField
                  label="Reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  error={!!errors.reason}
                  helperText={errors.reason}
                />

                {/* Upload Receipt (PDF) */}
                <div className="flex flex-col">
                  <label htmlFor="receipt">Upload Receipt (PDF, Max 50KB)</label>
                  <input
                    type="file"
                    accept="application/pdf"
                    id="receipt"
                    onChange={handleFileUpload}
                  />
                  {errors.receipt && (
                    <span className="text-sm text-red-600">{errors.receipt}</span>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-golden text-white px-4 py-2 rounded-md"
            >
              {isEditing ? "Save Changes" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReimbursementModal;
