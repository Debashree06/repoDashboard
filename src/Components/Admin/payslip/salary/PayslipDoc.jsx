// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import { useReactToPrint } from "react-to-print";

// const EmployeeSalarySlip = () => {
//   const componentRef = useRef();

//   // Download PDF Logic
//   const downloadPDF = async () => {
//     const element = componentRef.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = 210;
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("payslip.pdf");
//   };

//   // Print Logic
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Payslip",
//     onAfterPrint: () => alert("Print successful!"),
//   });

//   // Download CSV Logic
//   const downloadCSV = () => {
//     const csvData = [
//       ["Name", "John Doe"],
//       ["Employee Code", "EMP12345"],
//       ["Date of Joining", "01-Jan-2020"],
//       ["Department", "IT"],
//       ["Designation", "Software Developer"],
//       ["Location", "Remote"],
//       ["Days Worked", "30"],
//       ["Week Off", "2"],
//       ["LOP", "2"],
//       [],
//       ["Earnings", "Amount", "Deductions", "Amount"],
//       ["Basic", "30000", "Employee Provident Fund", "2000"],
//       ["HRA", "10000", "ESIC", "1000"],
//       ["Special Allowances", "5000", "P Tax", "200"],
//       ["Other Allowances", "2000", "TDS", "500"],
//       ["", "", "LOP", "1000"],
//       [],
//       ["Total Earnings", "47000"],
//       ["Total Deductions", "4700"],
//       ["Net Pay", "42300"],
//       ["Net Pay (In Words)", "Forty-Two Thousand Three Hundred Rupees"],
//       [],
//       ["Leave Details"],
//       ["Leave Type", "Total Balance", "Taken", "Remaining"],
//       ["Sick Leave", "4", "0", "4"],
//       ["Casual Leave", "4", "0", "4"],
//       ["Paid Leave", "4", "0", "4"],
//     ];

//     // Convert array to CSV string
//     const csvContent = csvData
//       .map((row) => row.join(","))
//       .join("\n");

//     // Download CSV file
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "payslip.csv";
//     link.click();
//   };

//   return (
//     <div className="p-6">
//   <div className="flex md:justify-between  gap-2 pb-8">
//         <div>
//           <h1 className="font-semibold text-2xl">Employee Salary</h1>
//           <h2 className="text-md">
//             Dashboard / <span>Employee Salary</span>
//           </h2>
//         </div>
       
//       </div>

//  <div className="flex lg:justify-between flex-col  lg:flex-row pb-4">
//      <h1 className="text-2xl font-bold mb-4">Payslip</h1>

//      <div className="flex space-x-4">
//         <button
//           onClick={downloadPDF}
//           className="bg-golden text-white px-4 py-2 rounded"
//         >
//            PDF
//         </button>
//         <button
//           onClick={handlePrint}
//           className="bg-golden text-white px-4 py-2 rounded"
//         >
//           Print
//         </button>
//         <button
//           onClick={downloadCSV}
//           className="bg-golden text-white px-4 py-2 rounded"
//         >
//           CSV
//         </button>
//       </div>
//      </div>

//       {/* Payslip Design */}
//       <div
//         id="payslip"
//         ref={componentRef}
//         className="border p-6 shadow-md max-w-full md:max-w-3xl mx-auto bg-white"
//       >
//         <h2 className="text-lg font-semibold text-center mb-4">
//           Payslip for the period of October, 2024
//         </h2>

//         {/* Employee Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           <div>
//             <p><strong>Name:</strong> John Doe</p>
//             <p><strong>Employee Code:</strong> EMP12345</p>
//             <p><strong>Date of Joining:</strong> 01-Jan-2020</p>
//             <p><strong>PF UAN Number:</strong> PF123456789</p>
//             <p><strong>Days Worked:</strong> 30</p>
//             <p><strong>Week Off:</strong> 2</p>
//           </div>
//           <div>
//             <p><strong>Department:</strong> IT</p>
//             <p><strong>Designation:</strong> Software Developer</p>
//             <p><strong>Location:</strong> Remote</p>
//             <p><strong>ESIC No.:</strong> ESIC12345</p>
//             <p><strong>LOP:</strong> 2</p>
//           </div>
//         </div>

//         {/* Earnings & Deductions Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border mb-6 text-sm">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">Earnings</th>
//                 <th className="border px-4 py-2">Amount</th>
//                 <th className="border px-4 py-2">Deductions</th>
//                 <th className="border px-4 py-2">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border px-4 py-2">Basic</td>
//                 <td className="border px-4 py-2">₹ 30000</td>
//                 <td className="border px-4 py-2">Employee Provident Fund</td>
//                 <td className="border px-4 py-2">₹ 2000</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">HRA</td>
//                 <td className="border px-4 py-2">₹ 10000</td>
//                 <td className="border px-4 py-2">ESIC</td>
//                 <td className="border px-4 py-2">₹ 1000</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">Special Allowances</td>
//                 <td className="border px-4 py-2">₹ 5000</td>
//                 <td className="border px-4 py-2">P Tax</td>
//                 <td className="border px-4 py-2">₹ 200</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">Other Allowances</td>
//                 <td className="border px-4 py-2">₹ 2000</td>
//                 <td className="border px-4 py-2">TDS</td>
//                 <td className="border px-4 py-2">₹ 500</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2"></td>
//                 <td className="border px-4 py-2"></td>
//                 <td className="border px-4 py-2">LOP</td>
//                 <td className="border px-4 py-2">₹ 1000</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Total Earning and Deductions */}
//         <p><strong>Total Earnings:</strong> ₹ 47000</p>
//         <p><strong>Total Deductions:</strong> ₹ 4700</p>

//         {/* Net Pay */}
//         <p><strong>Net Pay:</strong> ₹ 42300</p>
//         <p><strong>Net Pay (In Words):</strong> Forty-Two Thousand Three Hundred Rupees</p>

//         {/* Leave Details */}
//         <h3 className="text-lg font-semibold mt-6">Leave Details</h3>
//         <div className="overflow-x-auto mt-4">
//           <table className="w-full border-collapse border text-sm">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">Leave Type</th>
//                 <th className="border px-4 py-2">Total Balance</th>
//                 <th className="border px-4 py-2">Taken</th>
//                 <th className="border px-4 py-2">Remaining</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border px-4 py-2">Sick Leave</td>
//                 <td className="border px-4 py-2">4</td>
//                 <td className="border px-4 py-2">0</td>
//                 <td className="border px-4 py-2">4</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">Casual Leave</td>
//                 <td className="border px-4 py-2">4</td>
//                 <td className="border px-4 py-2">0</td>
//                 <td className="border px-4 py-2">4</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-2">Paid Leave</td>
//                 <td className="border px-4 py-2">4</td>
//                 <td className="border px-4 py-2">0</td>
//                 <td className="border px-4 py-2">4</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeSalarySlip;



// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import { useReactToPrint } from "react-to-print";

// const EmployeeSalarySlip = ({ employeeData }) => {

//   console.log(employeeData)
//   const componentRef = useRef();

//   // Download PDF Logic
//   const downloadPDF = async () => {
//     const element = componentRef.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = 210;
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("payslip.pdf");
//   };

//   // Print Logic
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Payslip",
//     onAfterPrint: () => alert("Print successful!"),
//   });

//   // Download CSV Logic
//   const downloadCSV = () => {
//     const csvData = [
//       ["Name", employeeData.name],
//       ["Employee Code", employeeData.employeeCode],
//       ["Date of Joining", employeeData.dateOfJoining],
//       ["Department", employeeData.department],
//       ["Designation", employeeData.designation],
//       ["Location", employeeData.location],
//       ["Days Worked", employeeData.daysWorked],
//       ["Week Off", employeeData.weekOff],
//       ["LOP", employeeData.lop],
//       [],
//       ["Earnings", "Amount", "Deductions", "Amount"],
//       ["Basic", employeeData.earnings.basic, "Employee Provident Fund", employeeData.deductions.epf],
//       ["HRA", employeeData.earnings.hra, "ESIC", employeeData.deductions.esic],
//       ["Special Allowances", employeeData.earnings.specialAllowances, "P Tax", employeeData.deductions.ptax],
//       ["Other Allowances", employeeData.earnings.otherAllowances, "TDS", employeeData.deductions.tds],
//       ["", "", "LOP", employeeData.deductions.lop],
//       [],
//       ["Total Earnings", employeeData.totalEarnings],
//       ["Total Deductions", employeeData.totalDeductions],
//       ["Net Pay", employeeData.netPay],
//       ["Net Pay (In Words)", employeeData.netPayInWords],
//     ];

//     // Convert array to CSV string
//     const csvContent = csvData.map((row) => row.join(",")).join("\n");

//     // Download CSV file
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "payslip.csv";
//     link.click();
//   };

//   return (
//     <div className="p-6">
//       <div className="flex md:justify-between gap-2 pb-8">
//         <div>
//           <h1 className="font-semibold text-2xl">Employee Salary</h1>
//           <h2 className="text-md">
//             Dashboard / <span>Employee Salary</span>
//           </h2>
//         </div>
//       </div>

//       <div className="flex lg:justify-between flex-col lg:flex-row pb-4">
//         <h1 className="text-2xl font-bold mb-4">Payslip</h1>
//         <div className="flex space-x-4">
//           <button onClick={downloadPDF} className="bg-golden text-white px-4 py-2 rounded">
//             PDF
//           </button>
//           <button onClick={handlePrint} className="bg-golden text-white px-4 py-2 rounded">
//             Print
//           </button>
//           <button onClick={downloadCSV} className="bg-golden text-white px-4 py-2 rounded">
//             CSV
//           </button>
//         </div>
//       </div>

//       <div
//         ref={componentRef}
//         className="border p-6 shadow-md max-w-full md:max-w-3xl mx-auto bg-white"
//       >
//         <h2 className="text-lg font-semibold text-center mb-4">
//           Payslip for the period of {employeeData.payPeriod}
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           <div>
//             <p><strong>Name:</strong> {employeeData.name}</p>
//             <p><strong>Employee Code:</strong> {employeeData.employeeCode}</p>
//             <p><strong>Date of Joining:</strong> {employeeData.dateOfJoining}</p>
//             <p><strong>PF UAN Number:</strong> {employeeData.pfUanNumber}</p>
//             <p><strong>Days Worked:</strong> {employeeData.daysWorked}</p>
//             <p><strong>Week Off:</strong> {employeeData.weekOff}</p>
//           </div>
//           <div>
//             <p><strong>Department:</strong> {employeeData.department}</p>
//             <p><strong>Designation:</strong> {employeeData.designation}</p>
//             <p><strong>Location:</strong> {employeeData.location}</p>
//             <p><strong>ESIC No.:</strong> {employeeData.esicNumber}</p>
//             <p><strong>LOP:</strong> {employeeData.lop}</p>
//           </div>
//         </div>

//         <table className="w-full border-collapse border mb-6 text-sm">
//           <thead>
//             <tr>
//               <th className="border px-4 py-2">Earnings</th>
//               <th className="border px-4 py-2">Amount</th>
//               <th className="border px-4 py-2">Deductions</th>
//               <th className="border px-4 py-2">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employeeData.earnings.map((earning, index) => (
//               <tr key={index}>
//                 <td className="border px-4 py-2">{earning.name}</td>
//                 <td className="border px-4 py-2">₹ {earning.amount}</td>
//                 <td className="border px-4 py-2">{employeeData.deductions[index]?.name}</td>
//                 <td className="border px-4 py-2">₹ {employeeData.deductions[index]?.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <p><strong>Total Earnings:</strong> ₹ {employeeData.totalEarnings}</p>
//         <p><strong>Total Deductions:</strong> ₹ {employeeData.totalDeductions}</p>
//         <p><strong>Net Pay:</strong> ₹ {employeeData.netPay}</p>
//         <p><strong>Net Pay (In Words):</strong> {employeeData.netPayInWords}</p>

//         <h3 className="text-lg font-semibold mt-6">Leave Details</h3>
//         <div className="overflow-x-auto mt-4">
//           <table className="w-full border-collapse border text-sm">
//             <thead>
//               <tr>
//                 <th className="border px-4 py-2">Leave Type</th>
//                 <th className="border px-4 py-2">Total Balance</th>
//                 <th className="border px-4 py-2">Taken</th>
//                 <th className="border px-4 py-2">Remaining</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employeeData.leaveDetails.map((leave, index) => (
//                 <tr key={index}>
//                   <td className="border px-4 py-2">{leave.type}</td>
//                   <td className="border px-4 py-2">{leave.totalBalance}</td>
//                   <td className="border px-4 py-2">{leave.taken}</td>
//                   <td className="border px-4 py-2">{leave.remaining}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeSalarySlip;




import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useReactToPrint } from "react-to-print";

const EmployeeSalarySlip = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [employeeData, setEmployeeData] = useState(null);
  const componentRef = useRef();

  // Mock employee data (replace with actual data fetching logic)
  const mockEmployeeData = [
    {
      id: "1",
      name: "John Doe",
      employeeCode: "EMP001",
      dateOfJoining: "2021-01-01",
      department: "Sales",
      designation: "Sales Manager",
      location: "New York",
      daysWorked: 22,
      weekOff: 2,
      lop: 0,
      earnings: [
        { name: "Basic", amount: 30000 },
        { name: "HRA", amount: 15000 },
        { name: "Special Allowances", amount: 5000 },
        { name: "Other Allowances", amount: 2000 },
      ],
      deductions: [
        { name: "Employee Provident Fund", amount: 3000 },
        { name: "ESIC", amount: 500 },
        { name: "P Tax", amount: 200 },
        { name: "TDS", amount: 1000 },
        { name: "LOP", amount: 0 },
      ],
      totalEarnings: 52000,
      totalDeductions: 4700,
      netPay: 47300,
      netPayInWords: "Forty-Seven Thousand Three Hundred Only",
      pfUanNumber: "UAN123456789",
      esicNumber: "ESIC987654321",
      payPeriod: "October 2024",
      leaveDetails: [
        { type: "Sick Leave", totalBalance: 10, taken: 2, remaining: 8 },
        { type: "Casual Leave", totalBalance: 8, taken: 1, remaining: 7 },
      ],
    },
    // Add more employee data here...
  ];

  // Fetch employee data based on ID
  useEffect(() => {
    const employee = mockEmployeeData.find((emp) => emp.id === id);
    if (employee) {
      setEmployeeData(employee);
    }
  }, [id]);

  // Download PDF Logic
  const downloadPDF = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("payslip.pdf");
  };

  // Print Logic
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Payslip",
    onAfterPrint: () => alert("Print successful!"),
  });

  // Download CSV Logic
  const downloadCSV = () => {
    const csvData = [
      ["Name", employeeData.name],
      ["Employee Code", employeeData.employeeCode],
      ["Date of Joining", employeeData.dateOfJoining],
      ["Department", employeeData.department],
      ["Designation", employeeData.designation],
      ["Location", employeeData.location],
      ["Days Worked", employeeData.daysWorked],
      ["Week Off", employeeData.weekOff],
      ["LOP", employeeData.lop],
      [],
      ["Earnings", "Amount", "Deductions", "Amount"],
      ["Basic", employeeData.earnings[0].amount, "Employee Provident Fund", employeeData.deductions[0].amount],
      ["HRA", employeeData.earnings[1].amount, "ESIC", employeeData.deductions[1].amount],
      ["Special Allowances", employeeData.earnings[2].amount, "P Tax", employeeData.deductions[2].amount],
      ["Other Allowances", employeeData.earnings[3].amount, "TDS", employeeData.deductions[3].amount],
      ["", "", "LOP", employeeData.deductions[4].amount],
      [],
      ["Total Earnings", employeeData.totalEarnings],
      ["Total Deductions", employeeData.totalDeductions],
      ["Net Pay", employeeData.netPay],
      ["Net Pay (In Words)", employeeData.netPayInWords],
    ];

    // Convert array to CSV string
    const csvContent = csvData.map((row) => row.join(",")).join("\n");

    // Download CSV file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payslip.csv";
    link.click();
  };

  if (!employeeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex md:justify-between gap-2 pb-8">
        <div>
          <h1 className="font-semibold text-2xl">Employee Salary</h1>
          <h2 className="text-md">
            Dashboard / <span>Employee Salary</span>
          </h2>
        </div>
      </div>

      <div className="flex lg:justify-between flex-col lg:flex-row pb-4">
        <h1 className="text-2xl font-bold mb-4">Payslip</h1>
        <div className="flex space-x-4">
          <button onClick={downloadPDF} className="bg-golden text-white px-4 py-2 rounded">
            PDF
          </button>
          <button onClick={handlePrint} className="bg-golden text-white px-4 py-2 rounded">
            Print
          </button>
          <button onClick={downloadCSV} className="bg-golden text-white px-4 py-2 rounded">
            CSV
          </button>
        </div>
      </div>

      <div
        ref={componentRef}
        className="border p-6 shadow-md max-w-full md:max-w-3xl mx-auto bg-white"
      >
        <h2 className="text-lg font-semibold text-center mb-4">
          Payslip for the period of {employeeData.payPeriod}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p><strong>Name:</strong> {employeeData.name}</p>
            <p><strong>Employee Code:</strong> {employeeData.employeeCode}</p>
            <p><strong>Date of Joining:</strong> {employeeData.dateOfJoining}</p>
            <p><strong>PF UAN Number:</strong> {employeeData.pfUanNumber}</p>
            <p><strong>Days Worked:</strong> {employeeData.daysWorked}</p>
            <p><strong>Week Off:</strong> {employeeData.weekOff}</p>
          </div>
          <div>
            <p><strong>Department:</strong> {employeeData.department}</p>
            <p><strong>Designation:</strong> {employeeData.designation}</p>
            <p><strong>Location:</strong> {employeeData.location}</p>
            <p><strong>ESIC No.:</strong> {employeeData.esicNumber}</p>
            <p><strong>LOP:</strong> {employeeData.lop}</p>
          </div>
        </div>

        <table className="w-full border-collapse border mb-6 text-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2">Earnings</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Deductions</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.earnings.map((earning, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{earning.name}</td>
                <td className="border px-4 py-2">₹ {earning.amount}</td>
                <td className="border px-4 py-2">{employeeData.deductions[index]?.name}</td>
                <td className="border px-4 py-2">₹ {employeeData.deductions[index]?.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p><strong>Total Earnings:</strong> ₹ {employeeData.totalEarnings}</p>
        <p><strong>Total Deductions:</strong> ₹ {employeeData.totalDeductions}</p>
        <p><strong>Net Pay:</strong> ₹ {employeeData.netPay}</p>
        <p><strong>Net Pay (In Words):</strong> {employeeData.netPayInWords}</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Leave Details:</h3>
          <table className="w-full border-collapse border mt-2 text-sm">
            <thead>
              <tr>
                <th className="border px-4 py-2">Leave Type</th>
                <th className="border px-4 py-2">Total Balance</th>
                <th className="border px-4 py-2">Taken</th>
                <th className="border px-4 py-2">Remaining</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.leaveDetails.map((leave, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{leave.type}</td>
                  <td className="border px-4 py-2">{leave.totalBalance}</td>
                  <td className="border px-4 py-2">{leave.taken}</td>
                  <td className="border px-4 py-2">{leave.remaining}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalarySlip;

