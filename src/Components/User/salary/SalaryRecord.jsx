import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeSalarySlip from "../salarySlip/EmployeeSalarySlip";

function SalaryRecord() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const salaryRecordData = [
    {
      id: "KM-2024-Deba",
      name: "Debashree Jena",
      email: "debashree@example.com",
      form: "1/06/24",
      to: "1/07/24",
      salary: "$38400",
    },
    {
      id: "KM-2024-Deba",
      name: "Debashree Jena",
      email: "debashree@example.com",
      form: "1/07/24",
      to: "1/08/24",
      salary: "$38400",
    },
    {
      id: "KM-2024-Deba",
      name: "Debashree Jena",
      email: "debashree@example.com",
      form: "1/08/24",
      to: "1/09/24",
      salary: "$38400",
    },
    {
      id: "KM-2024-Deba",
      name: "Debashree Jena",
      email: "debashree@example.com",
      form: "1/09/24",
      to: "1/10/24",
      salary: "$38400",
    },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = salaryRecordData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="p-6">
      <div className="flex justify-between pb-8">
        <div>
          <h1 className="font-semibold text-2xl">Employee Salary</h1>
          <h2 className="text-md">
            Dashboard / <span>Salary</span>
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Employee ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Form</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Payslip</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div>
                        <p>{employee.name}</p>
                        <p className="text-gray-500 text-sm">{employee.role}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.form}</TableCell>
                  <TableCell>{employee.to}</TableCell>

                  <TableCell>{employee.salary}</TableCell>
                  <TableCell>
                    <Link
                      to="employeeSalarySlip"
                      element={<EmployeeSalarySlip />}
                      className="bg-[#b17f27] text-white py-2 px-2 rounded-lg lg:text-md text-sm"
                    >
                      Generate
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={salaryRecordData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default SalaryRecord;
