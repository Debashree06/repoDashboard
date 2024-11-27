import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import AddReimbursementModal from "./AddReimbursementModal";

const ReimbursementOfEmployee = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    purpose: "",
    date: "",
    projects: [],
    amount: "",
    receipt: null,
  });
  const [data, setData] = useState([
    {
      employeeId: "101",
      employeeName: "John Doe",
      purpose: "Petrol",
      date: "2023-09-12",
      projects: [{ project: "Sritam Project", distance: 10 }],
      amount: 500,
      receipt: null,
    },
    {
      employeeId: "102",
      employeeName: "Jane Smith",
      purpose: "Petrol",
      date: "2023-09-15",
      projects: [
        { project: "Godrej Project", distance: 15 },
        { project: "XYZ Project", distance: 20 },
      ],
      amount: 800,
      receipt: null,
    },
  ]);

  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownRefs = useRef({});

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      for (let index in dropdownRefs.current) {
        if (
          dropdownRefs.current[index] &&
          !dropdownRefs.current[index].contains(e.target)
        ) {
          setOpenDropdowns((prev) => ({
            ...prev,
            [index]: false,
          }));
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleOpenModal = (edit = false, index = null) => {
    setIsEditing(edit);
    setEditIndex(index);
    if (edit && index !== null) {
      const { projects, ...rest } = data[index];
      setFormData({
        ...rest,
        projects: projects.map((p) => p.project),
        distances: projects.map((p) => p.distance),
      });
    } else {
      setFormData({
        employeeId: "",
        employeeName: "",
        purpose: "",
        date: "",
        projects: [],
        distances: [],
        amount: "",
        receipt: null,
      });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (preparedData) => {
    if (isEditing && editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = preparedData;
      setData(updatedData);
      console.log("Edited reimbursement details:", preparedData);
    } else {
      setData([...data, preparedData]);
      console.log("New reimbursement added:", preparedData);
    }
    handleCloseModal();
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setDeleteModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-4 pb-8">
  {/* Title Section */}
  <div>
    <h1 className="font-semibold text-2xl">Reimbursement</h1>
    <h2 className="text-md text-gray-600">
      Dashboard / <span className="text-gray-800">Reimbursement</span>
    </h2>
  </div>

  {/* Button Section */}
  <button
    onClick={() => handleOpenModal(false)}
    className="w-full md:w-auto px-4 py-2 bg-[#b17f27] text-white rounded-lg flex items-center justify-center md:justify-start"
  >
    <BiPlus className="lg:text-xl text-sm mr-2" />
    Add Reimbursement
  </button>
</div>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Purpose</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Projects</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.employeeId}</TableCell>
                <TableCell>{row.employeeName}</TableCell>
                <TableCell>{row.purpose}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  {row.projects
                    .map((p) => `${p.project} (${p.distance} km)`)
                    .join(", ")}
                </TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell className="text-right">
                  <div className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                    <button
                      className="action-icon flex items-center justify-center p-2 text-gray-700 hover:bg-gray-200 rounded-full"
                      onClick={() => toggleDropdown(index)}
                    >
                      <CiMenuKebab className="text-xl" />
                    </button>
                    {openDropdowns[index] && (
                      <div className="dropdown-menu absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <div
                          onClick={() => handleOpenModal(true, index)}
                          className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Edit
                        </div>
                        <div
                          onClick={() => {
                            setDeleteModalOpen(true);
                            setEditIndex(index); // Store index for deletion
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

      {/* Modal for Add/Edit */}
      {modalOpen && (
        <AddReimbursementModal
          isEditing={isEditing}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          handleCloseModal={handleCloseModal}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white lg:p-8 p-4 rounded-lg lg:w-1/3 w-1/2">
            <h5 className="lg:text-xl text-sm font-semibold">
              Are you sure you want to delete this entry?
            </h5>
            <div className="flex lg:justify-between mt-6 gap-2 ">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(editIndex)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReimbursementOfEmployee;
