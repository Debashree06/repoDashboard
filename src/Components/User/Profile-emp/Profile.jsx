import React, { useState } from "react";
import image from "./images/images.png";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
} from "@mui/material";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    designation: "Web Designer",
    employeeId: "FT-0001",
    joinDate: "1st Jan 2025",
    phone: "9876543210",
    email: "johndoe@example.com",
    personalInfo: {
      passportNo: "9876543210",
      passportExp: "9876543210",
      tel: "9876543210",
      nationality: "Indian",
      religion: "Christian",
      maritalStatus: "Married",
      spouseEmployment: "No",
      children: 2,
    },
    emergencyContact: {
      primary: {
        name: "John Doe",
        relationship: "Father",
        phone: "9876543210",
      },
      secondary: {
        name: "Karen Wills",
        relationship: "Brother",
        phone: "9876543210",
      },
    },
    bankInfo: {
      bankName: "ICICI Bank",
      accountNo: "159843014641",
      ifsc: "ICIC24604",
      pan: "TC000Y56",
    },
  });

  const [editSection, setEditSection] = useState(null); // Current section being edited
  const [open, setOpen] = useState(false); // Dialog open/close state
  const [formData, setFormData] = useState({}); // Form data for editing

  // Open the dialog with the current section's data
  const handleEditClick = (section) => {
    setEditSection(section);
    setFormData(user[section]);
    setOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e, parentKey) => {
    const { name, value } = e.target;

    if (parentKey) {
      // For nested objects like emergencyContact
      setFormData((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [name]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Save the edited data
  const handleSave = () => {
    setUser({ ...user, [editSection]: formData });
    setOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        {/* Header */}
        <div className="flex items-center p-6">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img src={image} alt="User Avatar" className="w-full h-full" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.designation}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Personal Information */}
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(user.personalInfo).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-gray-500">
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            color="primary"
            className="mt-4"
            onClick={() => handleEditClick("personalInfo")}
          >
            Edit Personal Info
          </Button>

          <hr className="my-4" />

          {/* Emergency Contact */}
          <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(user.emergencyContact).map(([type, contact]) => (
              <div key={type}>
                <p className="text-sm font-semibold text-gray-500">
                  {type.toUpperCase()} CONTACT
                </p>
                <p>{contact.name}</p>
                <p>{contact.relationship}</p>
                <p>{contact.phone}</p>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            color="primary"
            className="mt-4"
            onClick={() => handleEditClick("emergencyContact")}
          >
            Edit Emergency Contact
          </Button>

          <hr className="my-4" />

          {/* Bank Information */}
          <h3 className="text-lg font-semibold mb-4">Bank Information</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(user.bankInfo).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-gray-500">
                  {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            color="primary"
            className="mt-4"
            onClick={() => handleEditClick("bankInfo")}
          >
            Edit Bank Info
          </Button>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit {editSection?.replace(/([A-Z])/g, " $1")}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {formData &&
              Object.entries(formData).map(([key, value]) => {
                if (typeof value === "object") {
                  // For nested fields like emergencyContact
                  return (
                    <React.Fragment key={key}>
                      <Grid item xs={12}>
                        <h4>{key.toUpperCase()} CONTACT</h4>
                      </Grid>
                      {Object.entries(value).map(([subKey, subValue]) => (
                        <Grid item xs={12} sm={6} key={subKey}>
                          <TextField
                            fullWidth
                            name={subKey}
                            label={subKey.replace(/([A-Z])/g, " $1")}
                            value={subValue}
                            onChange={(e) => handleInputChange(e, key)}
                          />
                        </Grid>
                      ))}
                    </React.Fragment>
                  );
                }
                // For flat fields like personalInfo or bankInfo
                return (
                  <Grid item xs={12} sm={6} key={key}>
                    <TextField
                      fullWidth
                      name={key}
                      label={key.replace(/([A-Z])/g, " $1")}
                      value={value}
                      onChange={handleInputChange}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserProfile;
