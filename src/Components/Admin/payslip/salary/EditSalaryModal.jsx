import React, { useState, useEffect } from "react";
import { Dialog, TextField, Button, MenuItem } from "@mui/material";

const EditSalaryModal = ({ isModalOpen, setIsModalOpen, onUpdateSalary }) => {
  const initialEmployeeData = {
    employeeId: "EMP123",
    department: "Developer",
    salary: 50000,
    taxDeduction: 2000,
    specialAllowance: 5000,
    employeeStateInsurance: 1000,
    houseRentAllowance: 3000,
    providentFund: 2500,
    grossSalary: 60000,
    employeeProvidentFund: 1000,
    otherAllowance: 1500,
  };

  const [formData, setFormData] = useState(initialEmployeeData);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      setFormData(initialEmployeeData);
      setDateFrom("");
      setDateTo("");
    }
  }, [isModalOpen]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: parseFloat(value) || 0 };

      // Automatically update Gross Salary
      updatedForm.grossSalary =
        updatedForm.salary +
        updatedForm.specialAllowance +
        updatedForm.houseRentAllowance +
        updatedForm.otherAllowance;

      // Calculate Net Salary (Gross Salary - Deductions)
      updatedForm.netSalary =
        updatedForm.grossSalary -
        (updatedForm.taxDeduction +
          updatedForm.providentFund +
          updatedForm.employeeStateInsurance +
          updatedForm.employeeProvidentFund);

      return updatedForm;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure date validation
    if (new Date(dateFrom) > new Date(dateTo)) {
      alert("Invalid date range: 'Date From' cannot be after 'Date To'.");
      return;
    }

    onUpdateSalary({ ...formData, dateFrom, dateTo });
    setIsModalOpen(false);
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      fullWidth
      maxWidth="md"
    >
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4 flex justify-center items-center">
          Edit Employee Salary
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Employee ID"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Select Department"
            name="department"
            select
            value={formData.department}
            onChange={handleInputChange}
            variant="outlined"
            required
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Content">Content</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Set Salary"
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            variant="outlined"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "TDS", name: "taxDeduction" },
              { label: "Special Allowance", name: "specialAllowance" },
              { label: "ESI", name: "employeeStateInsurance" },
              { label: "HRA", name: "houseRentAllowance" },
              { label: "PF", name: "providentFund" },
              { label: "EPF", name: "employeeProvidentFund" },
              { label: "Other Allowance", name: "otherAllowance" },
            ].map((field) => (
              <TextField
                fullWidth
                key={field.name}
                label={field.label}
                type="number"
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                variant="outlined"
              />
            ))}
             <TextField
              fullWidth
              label="Gross Salary"
              value={formData.grossSalary}
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
          </div>


          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="contained" color="error" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default EditSalaryModal;
