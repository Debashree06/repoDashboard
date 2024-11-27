// import {
//   MenuItem,
//   Paper,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TextField
// } from "@mui/material";
// import React, { useState } from "react";
// import { BiPlus } from "react-icons/bi";
// import { CiMenuKebab } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import AddSalaryModal from "./AddSalaryModal";
// import EditSalaryModal from "./EditSalaryModal";
// import PayslipDoc from "../payslipData/PayslipDoc";

// const EmployeeTable = () => {
//   const employeeData = [
//     {
//       id: "FT-0007",
//       name: "Bernardo Galaviz",
//       email: "bernardogalaviz@example.com",
//       department: "Web Developer",
//       joinDate: "2014-01-01",
//       salary: "$38400",
//     },
//     {
//       id: "FT-0009",
//       name: "Jeffery Lalor",
//       email: "jefferylalor@example.com",
//       department: "Team Leader",
//       joinDate: "2013-01-01",
//       salary: "$73550",
//     },
//     {
//       id: "FT-0006",
//       name: "Jeffrey Warden",
//       email: "jeffreywarden@example.com",
//       department: "Web Developer",
//       joinDate: "2013-01-01",
//       salary: "$45000",
//     },
//     {
//       id: "FT-0001",
//       name: "John Doe",
//       email: "johndoe@example.com",
//       department: "Web Designer",
//       joinDate: "2013-01-01",
//       salary: "$59698",
//     },
//     {
//       id: "FT-0003",
//       name: "John Smith",
//       email: "johnsmith@example.com",
//       department: "Android Developer",
//       joinDate: "2013-01-01",
//       salary: "$48200",
//     },
//     {
//       id: "FT-0008",
//       name: "Lesley Grauer",
//       email: "lesleygrauer@example.com",
//       department: "Team Leader",
//       joinDate: "2015-06-01",
//       salary: "$75500",
//     },
//     {
//       id: "FT-0010",
//       name: "Loren Gatlin",
//       email: "lorengatlin@example.com",
//       department: "Android Developer",
//       joinDate: "2013-01-01",
//       salary: "$55000",
//     },
//     {
//       id: "FT-0012",
//       name: "Sarah Taylor",
//       email: "sarahtaylor@example.com",
//       department: "Web Designer",
//       joinDate: "2015-01-15",
//       salary: "$43000",
//     },
//   ];

//   const [employees, setEmployees] = useState(employeeData);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [openDropdowns, setOpenDropdowns] = useState({});
//   const [dateFrom, setDateFrom] = useState("");
//   const [dateTo, setDateTo] = useState("");
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false);

//   const handleUpdateSalary = (updatedData) => {
//     console.log("Updated Salary Data:", updatedData);
//   };

 

//   const toggleDropdown = (employeeId) => {
//     setOpenDropdowns((prevState) => ({
//       ...prevState,
//       [employeeId]: !prevState[employeeId],
//     }));
//   };
//   const handleAddEmployeeSalary = (newSalaryData) => {
//     console.log("New Salary Data Added:", newSalaryData);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedData = employeeData.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );



 
//   const handleDelete = (id) => {
//     const updatedEmployees = employees.filter((employee) => employee.id !== id);
//     setEmployees(updatedEmployees);
//   };

//   return (
//     <div className="">
//       <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
//         <div className="mb-4 lg:mb-0">
//           <h1 className="font-semibold text-2xl">Employee Salary</h1>
//           <h2 className="text-md">
//             Dashboard / <span className="text-gray-600">Salary</span>
//           </h2>
//         </div>
//         <button
//           onClick={() => setIsAddModalOpen(true)}
//           className="px-4 py-2 bg-[#b17f27] text-white rounded-lg flex items-center space-x-2"
//         >
//           <BiPlus className="text-xl" />
//           <span>Add Salary</span>
//         </button>
//       </div>
//       {/* Modals */}
//       <AddSalaryModal
//         isModalOpen={isAddModalOpen}
//         setIsModalOpen={setIsAddModalOpen}
//         onAddEmployeeSalary={handleAddEmployeeSalary}
//       />

//       <EditSalaryModal
//         isModalOpen={isEditModalOpen}
//         setIsModalOpen={setIsEditModalOpen}
//         selectedEmployeeData={selectedEmployeeData}
//         onUpdateSalary={handleUpdateSalary}
//       />
//       {/* 
    

//       {/* Delete Confirmation Modal */}
//       {deleteModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-8 rounded-lg lg:w-1/3 w-3/5">
//             <h5 className="text-xl font-semibold">
//               Are you sure you want to delete this data?
//             </h5>
//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setDeleteModalOpen(false)}
//                 className="bg-gray-300 text-black px-4 py-2 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDelete(editIndex)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
//         <TextField
//           label="Employee Name"
//           variant="outlined"
//           size="small"
//           className="w-full"
//         />
//         <Select
//           className="w-full"
//           size="small"
//           displayEmpty
//           defaultValue=""
//           variant="outlined"
//         >
//           <MenuItem value="">department</MenuItem>
//           <MenuItem value="Web Developer">Developer</MenuItem>
//           <MenuItem value="Team Leader">Content</MenuItem>
//           <MenuItem value="Android Developer">Sales</MenuItem>
//         </Select>
//         <Select
//           className="w-full"
//           size="small"
//           displayEmpty
//           defaultValue=""
//           variant="outlined"
//         >
//           <MenuItem value="">Leave Status</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//         </Select>
//         <TextField
//           label="Date From"
//           type="date"
//           variant="outlined"
//           size="small"
//           className="w-full"
//           value={dateFrom}
//           onChange={(e) => setDateFrom(e.target.value)}
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           label="Date To"
//           type="date"
//           variant="outlined"
//           size="small"
//           className="w-full"
//           value={dateTo}
//           onChange={(e) => setDateTo(e.target.value)}
//           InputLabelProps={{ shrink: true }}
//         />
//         <button className="bg-golden w-full py-2 rounded-md text-white font-semibold text-md">
//           Search
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead className="bg-gray-100">
//               <TableRow>
//                 <TableCell>Employee</TableCell>
//                 <TableCell>Employee ID</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Join Date</TableCell>
//                 <TableCell>department</TableCell>
//                 <TableCell>Salary</TableCell>
//                 <TableCell>Payslip</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((employee) => (
//                 <TableRow key={employee.id}>
//                   <TableCell>
//                     <div className="flex items-center space-x-2">
//                       <div className=" ">
//                         <img src="./avatar-02.jpg" className="h-10 w-10 rounded-full" alt="" />
//                       </div>
//                       <div>
//                         <p>{employee.name}</p>
//                         <p className="text-gray-500 text-sm">{employee.department}</p>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell>{employee.id}</TableCell>
//                   <TableCell>{employee.email}</TableCell>
//                   <TableCell>{employee.joinDate}</TableCell>
//                   <TableCell>
//                   {employee.department}
//                   </TableCell>
//                   <TableCell>{employee.salary}</TableCell>
//                   <TableCell>
//                   <Link
//                       to="/payslip/document"
//                       element={<PayslipDoc />}
//                       className="bg-[#b17f27] text-white py-2 px-2 rounded-lg lg:text-md text-sm"
//                     >
//                       Generate
//                     </Link>
//                   </TableCell>
//                   <TableCell className="text-right">
//                     <div className="relative">
//                       <button
//                         className="action-icon flex items-center justify-center p-2 text-gray-700 hover:bg-gray-200 rounded-full"
//                         onClick={() => toggleDropdown(employee.id)}
//                       >
//                         <CiMenuKebab className="text-xl" />
//                       </button>
//                       {openDropdowns[employee.id] && (
//                         <div className="dropdown-menu absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
//                           <div
//                             onClick={() => {
//                               setSelectedEmployeeData(employee); // Set employee data for editing
//                               setIsEditModalOpen(true);
//                             }}
//                             className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                           >
//                             Edit
//                           </div>
//                           <div
//                              onClick={() => {
//                               setDeleteModalOpen(true);
//                               setEditIndex(index); // Store index for deletion
//                             }}
//                             className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                           >
//                             Delete
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>

//       {/* Pagination */}
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={employeeData.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

// export default EmployeeTable;


import {
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import AddSalaryModal from "./AddSalaryModal";
import EditSalaryModal from "./EditSalaryModal";

const EmployeeTable = () => {
  const employeeData = [
    {
      id: "FT-0007",
      name: "Bernardo Galaviz",
      email: "bernardogalaviz@example.com",
      department: "Web Developer",
      joinDate: "2014-01-01",
      salary: "$38400",
    },
    {
      id: "FT-0009",
      name: "Jeffery Lalor",
      email: "jefferylalor@example.com",
      department: "Team Leader",
      joinDate: "2013-01-01",
      salary: "$73550",
    },
    {
      id: "FT-0006",
      name: "Jeffrey Warden",
      email: "jeffreywarden@example.com",
      department: "Web Developer",
      joinDate: "2013-01-01",
      salary: "$45000",
    },
    {
      id: "FT-0001",
      name: "John Doe",
      email: "johndoe@example.com",
      department: "Web Designer",
      joinDate: "2013-01-01",
      salary: "$59698",
    },
    {
      id: "FT-0003",
      name: "John Smith",
      email: "johnsmith@example.com",
      department: "Android Developer",
      joinDate: "2013-01-01",
      salary: "$48200",
    },
    {
      id: "FT-0008",
      name: "Lesley Grauer",
      email: "lesleygrauer@example.com",
      department: "Team Leader",
      joinDate: "2015-06-01",
      salary: "$75500",
    },
    {
      id: "FT-0010",
      name: "Loren Gatlin",
      email: "lorengatlin@example.com",
      department: "Android Developer",
      joinDate: "2013-01-01",
      salary: "$55000",
    },
    {
      id: "FT-0012",
      name: "Sarah Taylor",
      email: "sarahtaylor@example.com",
      department: "Web Designer",
      joinDate: "2015-01-15",
      salary: "$43000",
    },
  ];

  const [employees, setEmployees] = useState(employeeData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleUpdateSalary = (updatedData) => {
    console.log("Updated Salary Data:", updatedData);
  };

  const toggleDropdown = (employeeId) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [employeeId]: !prevState[employeeId],
    }));
  };

  const handleAddEmployeeSalary = (newSalaryData) => {
    console.log("New Salary Data Added:", newSalaryData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = employeeData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
        <div className="mb-4 lg:mb-0">
          <h1 className="font-semibold text-2xl">Employee Salary</h1>
          <h2 className="text-md">
            Dashboard / <span className="text-gray-600">Salary</span>
          </h2>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-[#b17f27] text-white rounded-lg flex items-center space-x-2"
        >
          <BiPlus className="text-xl" />
          <span>Add Salary</span>
        </button>
      </div>

      {/* Modals */}
      <AddSalaryModal
        isModalOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
        onAddEmployeeSalary={handleAddEmployeeSalary}
      />

      <EditSalaryModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        selectedEmployeeData={selectedEmployeeData}
        onUpdateSalary={handleUpdateSalary}
      />

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg lg:w-1/3 w-3/5">
            <h5 className="text-xl font-semibold">
              Are you sure you want to delete this data?
            </h5>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(selectedEmployeeData.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
        <TextField
          label="Employee Name"
          variant="outlined"
          size="small"
          className="w-full"
        />
        <Select
          className="w-full"
          size="small"
          displayEmpty
          defaultValue=""
          variant="outlined"
        >
          <MenuItem value="">Department</MenuItem>
          <MenuItem value="Web Developer">Developer</MenuItem>
          <MenuItem value="Team Leader">Content</MenuItem>
          <MenuItem value="Android Developer">Sales</MenuItem>
        </Select>
        <Select
          className="w-full"
          size="small"
          displayEmpty
          defaultValue=""
          variant="outlined"
        >
          <MenuItem value="">Leave Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </Select>
        <TextField
          label="Date From"
          type="date"
          variant="outlined"
          size="small"
          className="w-full"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Date To"
          type="date"
          variant="outlined"
          size="small"
          className="w-full"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <button className="bg-golden w-full py-2 rounded-md text-white font-semibold text-md">
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Employee ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Join Date</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Payslip</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className=" ">
                        <img src="./avatar-02.jpg" className="h-10 w-10 rounded-full" alt="" />
                      </div>
                      <div>
                        <p>{employee.name}</p>
                        <p className="text-gray-500 text-sm">{employee.department}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.joinDate}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.salary}</TableCell>
                  <TableCell>
                    <Link
                      to={`/payslip/document/${employee.id}`}
                      className="bg-[#b17f27] text-white py-2 px-2 rounded-lg lg:text-md text-sm"
                    >
                      Generate
                    </Link>
                  </TableCell>


                  <TableCell className="text-right">
                    <div className="relative">
                      <button
                        className="action-icon flex items-center justify-center p-2 text-gray-700 hover:bg-gray-200 rounded-full"
                        onClick={() => toggleDropdown(employee.id)}
                      >
                        <CiMenuKebab className="text-xl" />
                      </button>
                      {openDropdowns[employee.id] && (
                        <div className="dropdown-menu absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                          <div
                            onClick={() => {
                              setSelectedEmployeeData(employee); 
                              setIsEditModalOpen(true);
                            }}
                            className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Edit
                          </div>
                          <div
                             onClick={() => {
                              setDeleteModalOpen(true);
                              setSelectedEmployeeData(employee); 
                            }}
                            className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Delete
                          </div>
                        </div>
                      )}
                    </div>
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
        count={employeeData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default EmployeeTable;

