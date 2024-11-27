import React, { useState } from "react";
import { Dialog, TextField, Button, MenuItem } from "@mui/material";

const AddSalaryModal = ({
  isModalOpen,
  setIsModalOpen,
  onAddEmployeeSalary,
}) => {
  const [formData, setFormData] = useState({
    employeeId:"",
    department: "",
    salary: "",
    taxDeduction: "",
    specialAllowance: "",
    employeeStateInsurance: "",
    houseRentAllowance: "",
    providentFund: "",
    grossSalary: "",
    employeeProvidentFund: "",
    otherAllowance: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    onAddEmployeeSalary(formData);
    setIsModalOpen(false); // Close modal after submission
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
          Add Employee Salary
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit}>
        <TextField
            fullWidth
            label="Employee Id"
            type="text"
            variant="outlined"
            required
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          />
          {/* Select department */}
          <TextField
            fullWidth
            label="Select department"
            select
            variant="outlined"
            required
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          >
            <MenuItem value="department1">Developer</MenuItem>
            <MenuItem value="department2">Content</MenuItem>
            <MenuItem value="department3">Sale</MenuItem>
            {/* Add dynamic options as needed */}
          </TextField>

          {/* Salary Fields */}
          <TextField
            fullWidth
            label="Set Salary"
            type="number"
            variant="outlined"
            required
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="TDS"
              type="number"
              name="taxDeduction"
              value={formData.taxDeduction}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="SA"
              type="number"
              name="specialAllowance"
              value={formData.specialAllowance}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="ESI"
              type="number"
              name="employeeStateInsurance"
              value={formData.employeeStateInsurance}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="HRA"
              type="number"
              name="houseRentAllowance"
              value={formData.houseRentAllowance}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="PF"
              type="number"
              name="providentFund"
              value={formData.providentFund}
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              label="Gross Salary"
              type="number"
              name="grossSalary"
              value={formData.grossSalary}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              label="Other Allowance"
              type="number"
              name="otherAllowance"
              value={formData.otherAllowance}
              onChange={handleInputChange}
            />
             <TextField
              fullWidth
              label="Prof. Tax"
              type="number"
              name="employeeProvidentFund"
              value={formData.employeeProvidentFund}
              onChange={handleInputChange}
            />
          </div>

         

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="contained"
              color="error"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default AddSalaryModal;
