import React, { useState, useEffect } from "react";
import { Dialog, TextField, Button, MenuItem, Menu } from "@mui/material";
import image from "./images/images.png";

import axios from "axios";

function TerminationPage() {
  const [addTermination, setaddTermination] = useState(false);

  let [editTermination, seteditTermination] = useState(false);
  let [deleteTermination, setdeleteTermination] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  let [data, setData] = useState([]);

  const [status, setStatus] = useState("");

  let TerminationData = async () => {
    try {
      let { data } = await axios.get("http://localhost:3001/terminations");
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  let { id } = data;
  console.log(id);

  let deleteTerminationOfEmployee = async (id) => {};

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    TerminationData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Termination
            </h3>
            <ul className="flex items-center space-x-2 text-gray-600 text-sm mt-1">
              <li>
                <a href="/admin-dashboard" className="hover:text-gray-900">
                  Dashboard
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-800 font-medium">Termination</li>
            </ul>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#b17f27",
                color: "#000000",
              }}
              onClick={() => setaddTermination(true)}
              startIcon={<i className="fa fa-plus" />}
            >
              <b>Add Termination</b>
            </Button>
          </div>
        </div>

        {/* Table */}

        <div className="mt-6 bg-white rounded shadow overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Terminated Employee</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Termination Type</th>
                <th className="py-3 px-4">Termination Date</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4">Notice Date</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            {data.map((employee, index) => {
              return (
                <tbody key={index}>
                  <tr className="border-b">
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 flex items-center space-x-2">
                      <img
                        src={image}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <a
                        href="/profile"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {employee.employeeName}
                      </a>
                    </td>
                    <td className="py-3 px-4">{employee.department}</td>
                    <td className="py-3 px-4"> {employee.terminationType}</td>
                    <td className="py-3 px-4">{employee.terminationDate}</td>
                    <td className="py-3 px-4">{employee.reason}</td>
                    <td className="py-3 px-4">{employee.noticeDate}</td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        className="py-1 px-3 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={openMenu}
                        sx={{
                          bgcolor: "#b17f27",
                          color: "#000000",
                        }}
                      >
                        <b>Actions</b>
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                      >
                        <MenuItem
                          onClick={() => {
                            seteditTermination(true);
                            closeMenu();
                          }}
                        >
                          Edit
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            setdeleteTermination(true);

                            closeMenu();
                          }}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>

      {/* Add Termination Modal */}
      <Dialog open={addTermination} onClose={() => setaddTermination(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Add Termination</h3>
          <form className="space-y-4">
            <TextField
              fullWidth
              label="Terminated Employee Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              select
              label="Termination Type"
              variant="outlined"
              value={status}
              onChange={handleChange}
            >
              <MenuItem value="Misconduc">Misconduct</MenuItem>
              <MenuItem value="misconduct">Not follow the policy</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Termination Date"
              type="date"
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Reason"
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              label="Notice Date"
              type="date"
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
            />
            <div className="flex justify-end space-x-2">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#CD5C5C",
                }}
                onClick={() => setaddTermination(false)}
              >
                <b>Cancel</b>
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#b17f27",
                  color: "#000000",
                }}
              >
                <b>Submit</b>
              </Button>
            </div>
          </form>
        </div>
      </Dialog>

      {/* Edit Termination Modal */}
      <Dialog
        open={editTermination}
        onClose={() => seteditTermination(false)}
        fullWidth
        maxWidth="sm"
      >
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Edit Termination
          </h3>
          <form className="space-y-4">
            <TextField
              fullWidth
              type="text"
              label="Name of Employee"
              variant="outlined"
            ></TextField>
            <TextField
              fullWidth
              type="text"
              label="Employee Id"
              variant="outlined"
            ></TextField>
            <TextField
              fullWidth
              label="Department"
              select
              variant="outlined"
              value={status}
              onChange={handleChange}
            >
              <MenuItem value="all departments">All Departments</MenuItem>
              <MenuItem value="web development">Web Development</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
              <MenuItem value="it management">IT Management</MenuItem>
            </TextField>
            <TextField
              fullWidth
              type="text"
              multiline
              rows={3}
              label="Reason"
              variant="outlined"
            ></TextField>

            <div className="flex justify-end space-x-2">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#CD5C5C",
                }}
                onClick={() => seteditTermination(false)}
              >
                <b>Cancel</b>
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#b17f27",
                  color: "#000000",
                }}
              >
                <b>Submit</b>
              </Button>
            </div>
          </form>
        </div>
      </Dialog>

      {/* Delete Termination Modal */}

      <Dialog
        open={deleteTermination}
        onClose={() => setdeleteTermination(false)}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Delete Termination</h3>
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete this Termination?
          </p>
          <div className="flex justify-end space-x-2">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#CD5C5C",
              }}
              onClick={() => setdeleteTermination(false)}
            >
              <b>Cancel</b>
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#b17f27",
                color: "#000000",
              }}
              onClick={deleteTerminationOfEmployee(data.id)}
            >
              <b>Delete</b>
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default TerminationPage;
