import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

const Calendar2025 = () => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    { name: "January", days: 31, startDay: 3 },
    { name: "February", days: 28, startDay: 6 },
    { name: "March", days: 31, startDay: 6 },
    { name: "April", days: 30, startDay: 2 },
    { name: "May", days: 31, startDay: 5 },
    { name: "June", days: 30, startDay: 1 },
    { name: "July", days: 31, startDay: 3 },
    { name: "August", days: 31, startDay: 6 },
    { name: "September", days: 30, startDay: 1 },
    { name: "October", days: 31, startDay: 4 },
    { name: "November", days: 30, startDay: 7 },
    { name: "December", days: 31, startDay: 2 },
  ];

  const generateDays = (daysInMonth, startDay) => {
    let daysArray = [];
    let currentDay = 1;

    for (let i = 0; i < startDay; i++) {
      daysArray.push(null);
    }

    while (currentDay <= daysInMonth) {
      daysArray.push(currentDay);
      currentDay++;
    }

    return daysArray;
  };

  const backendHighlightDates = {
    January: [5, 12, 19, 26],
    February: [2, 9, 16, 23],
    March: [2, 9, 16, 23, 30],
    April: [6, 13, 20, 27],
    May: [3, 10, 17, 24, 31],
    June: [7, 14, 21, 28],
    July: [5, 12, 19, 26],
    August: [2, 9, 16, 23, 30],
    September: [7, 14, 21, 28],
    October: [4, 11, 18, 25],
    November: [1, 8, 15, 22, 29],
    December: [6, 13, 20, 27],
  };

  const salesHighlightDates = {
    January: [6, 13, 20, 27],
    February: [3, 10, 17, 24],
    March: [3, 10, 17, 24, 31],
    April: [7, 14, 21, 28],
    May: [4, 11, 18, 25],
    June: [1, 8, 15, 22, 29],
    July: [6, 13, 20, 27],
    August: [3, 10, 17, 24, 31],
    September: [1, 8, 15, 22, 29],
    October: [5, 12, 19, 26],
    November: [2, 9, 16, 23, 30],
    December: [7, 14, 21, 28],
  };

  const governmentHolidayDates = {
    January: { 26: "Republic Day" },
    August: { 15: "Independence Day" },
    October: { 2: "Gandhi Jayanti" },
    December: { 25: "Christmas" },
  };

  const restrictedHolidayDates = {
    January: { 1: "New Year" },
    March: { 14: "Holi Festival", 27: "Jumat-ul-wida", 28: "Shab-e-qadar" },
    April: { 6: "Ramanavami" },
    May: { 12: "Buddha Poornima" },
    August: {
      8: "Vara Mahalakshmi Vrta",
      9: "Rug-upakarma",
      16: "Krishna Janmashtami",
      25: "Swama Gowri Vrata",
    },
    September: {
      7: "Brahma Shri Narayana Guru Jayanthi",
    },
    October: { 17: "Vishwakarma Jayanthi" },
    December: { 24: "Christmas Eve" },
  };

  const isHighlighted = (monthName, day) => {
    if (governmentHolidayDates[monthName]?.[day]) {
      return "bg-green-400 text-white shadow-md";
    }

    if (restrictedHolidayDates[monthName]?.[day]) {
      return "bg-blue-400 text-white shadow-md";
    }

    if (
      status === "Backend" &&
      backendHighlightDates[monthName]?.includes(day)
    ) {
      return "bg-red-400 text-white shadow-md";
    }

    if (status === "Sales" && salesHighlightDates[monthName]?.includes(day)) {
      return "bg-red-400 text-white shadow-md";
    }

    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-800">
        2025 Calendar
      </h1>

      <div className="flex justify-center mb-8">
        <TextField
          fullWidth
          variant="outlined"
          label="Select Department"
          size="medium"
          select
          value={status}
          onChange={handleChange}
          className="bg-white shadow-md max-w-md"
        >
          <MenuItem value="Sales">Sales Department</MenuItem>
          <MenuItem value="Backend">Backend Department</MenuItem>
        </TextField>
      </div>

      <h1 className="text-red-500 text-center text-sm sm:text-lg mb-4">
        <b>The Red dates are holidays for specific-selected departments</b>
      </h1>
      <h1 className="text-green-500 text-center text-sm sm:text-lg mb-4">
        <b>The Green dates are public holidays</b>
      </h1>
      <h1 className="text-blue-500 text-center text-sm sm:text-lg mb-6">
        <b>The Blue dates are restricted holidays</b>
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {months.map((month, index) => {
          const daysArray = generateDays(month.days, month.startDay);

          return (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 rounded-lg shadow-lg p-6 flex flex-col h-[34rem] w-[90%] sm:w-[40%] lg:w-[30%] transition-transform hover:scale-105"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-4">
                {month.name}
              </h2>
              <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center">
                {daysOfWeek.map((day, i) => (
                  <div
                    key={i}
                    className="text-sm sm:text-base font-semibold text-gray-600 uppercase"
                  >
                    {day}
                  </div>
                ))}
                {daysArray.map((day, i) => (
                  <div
                    key={i}
                    className={`rounded-full text-base sm:text-xl font-semibold py-3 ${
                      day
                        ? `${isHighlighted(
                            month.name,
                            day
                          )} hover:bg-blue-200 hover:shadow-lg cursor-pointer`
                        : "invisible"
                    }`}
                    title={
                      restrictedHolidayDates[month.name]?.[day]
                        ? `Restricted Holiday, 2025 - ${
                            restrictedHolidayDates[month.name][day]
                          }`
                        : governmentHolidayDates[month.name]?.[day]
                        ? `Public Holiday, 2025 - ${
                            governmentHolidayDates[month.name][day]
                          }`
                        : ""
                    }
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar2025;
