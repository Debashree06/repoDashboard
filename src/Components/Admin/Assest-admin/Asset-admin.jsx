import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Dialog, MenuItem } from "@mui/material";

function Assest() {
  let [addAsset, setaddAsset] = useState(false);

  const [status, setStatus] = useState(""); 

  const handleChange = (event) => {
    setStatus(event.target.value); 
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Assets</h2>
        <Button
          variant="contained"
          color="error"
          sx={{
            bgcolor: "#b17f27",
            color: "#000000",
          }}
          onClick={() => {
            setaddAsset(true);
          }}
        >
          <b>Add Asset</b>
        </Button>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <a href="#" className="hover:underline">
          Dashboard
        </a>
        /
        <span className="font-semibold text-gray-800">
          <a href="#" className="hover:underline">
            Assets
          </a>
        </span>
      </div>

      {/* Search Criteria */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <TextField
            fullWidth
            variant="outlined"
            label="Employee Name"
            size="small"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Status"
            size="small"
            select
            value={status} // Bind the state to the value prop
            onChange={handleChange} // Handle the change event
          >
            {/* Use MenuItem instead of option */}
            <MenuItem value="Approved">✅ Approved</MenuItem>
            <MenuItem value="Pending">❔ Pending</MenuItem>
            <MenuItem value="Returned">➡️ Returned</MenuItem>
          </TextField>
          <TextField
            fullWidth
            variant="outlined"
            label="From Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="To Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#b17f27",
              color: "#000000",
            }}
          >
            <b>Search</b>
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="p-2 sm:p-3">Asset Employee Name</th>
              <th className="p-2 sm:p-3">Asset Name</th>
              <th className="p-2 sm:p-3">Asset Id</th>
              <th className="p-2 sm:p-3">Asset Employee Id</th>
              <th className="p-2 sm:p-3">Granted date</th>
              <th className="p-2 sm:p-3">Validity</th>
              <th className="p-2 sm:p-3">Value</th>
              <th className="p-2 sm:p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-2 sm:p-3">Catherine Manseau</td>
              <td className="p-2 sm:p-3 font-bold">Canon Portable Printer</td>
              <td className="p-2 sm:p-3">#AST-0012</td>
              <td className="p-2 sm:p-3">kings#2091</td>
              <td className="p-2 sm:p-3">14 Jan 2020</td>
              <td className="p-2 sm:p-3">12 months</td>
              <td className="p-2 sm:p-3">$2500</td>
              <td className="p-2 sm:p-3">
                <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full text-xs sm:text-sm">
                  ❔ Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Asset Dialog */}
      <Dialog
        open={addAsset}
        onClose={() => {
          setaddAsset(false);
        }}
        fullWidth
        maxWidth="sm"
      >
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
            Add Asset
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                fullWidth
                label="Asset Name"
                variant="outlined"
                required
              />
              <TextField fullWidth label="Asset Id" variant="outlined" />
              <TextField fullWidth label="Asset Employee Name" variant="outlined" />
              <TextField fullWidth label="Asset Employee Id" variant="outlined" />
              <TextField
                fullWidth
                label="Granted Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
             
              <TextField
                fullWidth
                label="Validity(In Months)"
                type="number"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Value"
                type="number"
                variant="outlined"
                defaultValue="0"
              />
             
            </div>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              variant="outlined"
            />
            <TextField
              fullWidth
              select
              label="Status"
              variant="outlined"
              defaultValue="Pending"
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Returned">Returned</option>
            </TextField>
            <div className="flex justify-end space-x-2">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#CD5C5C",
                }}
                onClick={() => setaddAsset(false)}
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
    </div>
  );
}

export default Assest;
