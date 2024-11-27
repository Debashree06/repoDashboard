import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Attendance() {
// States for attendance tracking
const [records, setRecords] = useState([]); // Punch records
const [currentPunchIn, setCurrentPunchIn] = useState(null); // Active Punch In time
const [statusMessage, setStatusMessage] = useState(""); // Status messages
const [currentDuration, setCurrentDuration] = useState(0); // Dynamic duration tracking
const [firstPunchIn, setFirstPunchIn] = useState(null); // First punch-in time of the day
const [lastPunchOut, setLastPunchOut] = useState(null); // Last punch-out time of the day
const [totalWorkedMinutes, setTotalWorkedMinutes] = useState(0); // Total worked time
const WORK_DAY_MINUTES = 8 * 60; // Default workday target: 8 hours in minutes

// Load records and first/last punch times from localStorage on mount
useEffect(() => {
  const savedRecords = JSON.parse(localStorage.getItem("punchRecords")) || [];
  setRecords(savedRecords);

  const savedFirstPunchIn = localStorage.getItem("firstPunchIn");
  const savedLastPunchOut = localStorage.getItem("lastPunchOut");
  const savedTotalWorkedMinutes = parseInt(localStorage.getItem("totalWorkedMinutes")) || 0;

  if (savedFirstPunchIn) setFirstPunchIn(savedFirstPunchIn);
  if (savedLastPunchOut) setLastPunchOut(savedLastPunchOut);
  setTotalWorkedMinutes(savedTotalWorkedMinutes);
}, []);

// Save records to localStorage whenever they change
useEffect(() => {
  localStorage.setItem("punchRecords", JSON.stringify(records));

  // Recalculate total worked minutes and save it in local storage
  const totalMinutes = records.reduce((total, record) => {
    const [hours, minutes] = record.duration
      .split("h")
      .map((val) => parseInt(val.trim(), 10));
    return total + hours * 60 + minutes;
  }, 0);

  setTotalWorkedMinutes(totalMinutes);
  localStorage.setItem("totalWorkedMinutes", totalMinutes);
}, [records]);

// Utility: Format date and time as DD/MM/YYYY HH:MM:SS AM/PM
const formatDateTime = (date) => {
  return date.toLocaleString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

// Utility: Calculate duration in minutes between two dates
const calculateDurationInMinutes = (inTime, outTime) => {
  return Math.floor((outTime - inTime) / (1000 * 60));
};

// Utility: Format duration in HH:mm format
const formatDuration = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours.toString().padStart(2, "0")}h ${minutes
    .toString()
    .padStart(2, "0")}m`;
};

// Calculate remaining time to complete a workday
const calculateRemainingTime = () => {
  return Math.max(WORK_DAY_MINUTES - totalWorkedMinutes, 0);
};

// Handle Punch In
const handlePunchIn = () => {
  if (currentPunchIn) {
    setStatusMessage("You are already punched in. Please punch out first.");
    return;
  }

  const now = new Date();
  setCurrentPunchIn(now);
  setStatusMessage(`Punched in at ${formatDateTime(now)}.`);
  setCurrentDuration(0); // Reset dynamic duration
};

// Handle Punch Out
const handlePunchOut = () => {
  if (!currentPunchIn) {
    setStatusMessage("You need to punch in first.");
    return;
  }

  const now = new Date();
  const durationInMinutes = calculateDurationInMinutes(currentPunchIn, now);
  const formattedDuration = formatDuration(durationInMinutes);

  const newRecord = {
    punchIn: formatDateTime(currentPunchIn),
    punchOut: formatDateTime(now),
    duration: formattedDuration,
  };

  setRecords((prevRecords) => {
    const updatedRecords = [...prevRecords, newRecord];

    // Update first punch-in and last punch-out
    if (!firstPunchIn) {
      const firstTime = formatDateTime(currentPunchIn);
      setFirstPunchIn(firstTime);
      localStorage.setItem("firstPunchIn", firstTime);
    }
    const lastTime = formatDateTime(now);
    setLastPunchOut(lastTime);
    localStorage.setItem("lastPunchOut", lastTime);

    return updatedRecords;
  });

  setCurrentPunchIn(null); // Reset punch-in state
  setCurrentDuration(0); // Reset dynamic duration
  setStatusMessage(`Punched out at ${formatDateTime(now)}.`);
};

// Calculate remaining minutes
const remainingMinutes = calculateRemainingTime();


//  &   Table Data start Here here
const [data, setData] = useState([
  {
    id: 1,
    date: "19 Feb 2019",
    punchIn: "10 AM",
    punchOut: "7 PM",
    production: "9 hrs",
    break: "1 hrs",
  },
  {
    id: 2,
    date: "20 Feb 2019",
    punchIn: "10 AM",
    punchOut: "7 PM",
    production: "9 hrs",
    break: "1 hrs",
  },
  {
    id: 2,
    date: "20 Feb 2019",
    punchIn: "10 AM",
    punchOut: "7 PM",
    production: "9 hrs",
    break: "1 hrs",
  },
  {
    id: 2,
    date: "20 Feb 2019",
    punchIn: "10 AM",
    punchOut: "7 PM",
    production: "9 hrs",
    break: "1 hrs",
  },
  {
    id: 2,
    date: "20 Feb 2019",
    punchIn: "10 AM",
    punchOut: "7 PM",
    production: "9 hrs",
    break: "1 hrs",
  },
]);


 //  &   Table Data End  here




  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap gap-6">
          {/* Attendance Tracker */}
          <div className="p-6 flex items-center flex-col gap-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold">Attendance Tracker</h1>
            <div className="w-[125px] h-[125px] bg-slate-500 rounded-full flex items-center justify-center text-white font-bold">
              {currentPunchIn
                ? formatDuration(currentDuration)
                : formatDuration(totalWorkedMinutes)}
            </div>
            <div className="mb-4">
              <button
                className="px-4 py-2 mr-2 bg-green-500 text-white rounded"
                onClick={handlePunchIn}
              >
                Punch In
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handlePunchOut}
              >
                Punch Out
              </button>
            </div>
            <div className="flex gap-4">
              <p>Remaining Time: {formatDuration(remainingMinutes)}</p>
              <p>Total Time: {formatDuration(totalWorkedMinutes)}</p>
            </div>
            {statusMessage && (
              <p className="text-gray-700 mb-4">{statusMessage}</p>
            )}
          </div>
           {/*========================== Statistics========================================== */}
           <div className="flex-1 min-w-[280px] p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">Statistics</h3>
              <div className="space-y-3 mt-6">
                <div className="flex justify-between ">
                  <p>Today:</p>
                  <p>3.45/8 hrs</p>
                </div>
                <div className="flex justify-between ">
                  <p>This Week:</p>
                  <p>15.23/40 hrs</p>
                </div>
                <div className="flex justify-between">
                  <p>This Month:</p>
                  <p>90/160 hrs</p>
                </div>
                <div className="flex justify-between">
                  <p>This Year:</p>
                  <p>450/8736 hrs</p>
                </div>
              </div>
            </div>

          {/* Today's Activity */}
          <div className="flex-1 min-w-[280px] p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">Today Activity</h3>
            <table className="w-full bg border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">Punch In</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Punch Out
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {record.punchIn}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {record.punchOut}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {record.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <div>
      <Container>
            {/* Search Filters */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "20px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <TextField
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ flex: "1" }}
              />

              <Button
                variant="contained"
                color="success"
                style={{ flex: "0 0 150px" }}
              >
                Search
              </Button>
            </div>
            
            {/* Data Table */}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Punch In</TableCell>
                    <TableCell>Punch Out</TableCell>
                    <TableCell>Production</TableCell>
                    <TableCell>Break</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.punchIn}</TableCell>
                      <TableCell>{row.punchOut}</TableCell>
                      <TableCell>{row.production}</TableCell>
                      <TableCell>{row.break}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
      </div>
    </div>
  );
}

export default Attendance;
