import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useReactToPrint } from "react-to-print";

const EmployeeSalarySlip = () => {
  const componentRef = useRef();

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
      ["Name", "John Doe"],
      ["Employee Code", "EMP12345"],
      ["Date of Joining", "01-Jan-2020"],
      ["Department", "IT"],
      ["Designation", "Software Developer"],
      ["Location", "Remote"],
      ["Days Worked", "30"],
      ["Week Off", "2"],
      ["LOP", "2"],
      [],
      ["Earnings", "Amount", "Deductions", "Amount"],
      ["Basic", "30000", "Employee Provident Fund", "2000"],
      ["HRA", "10000", "ESIC", "1000"],
      ["Special Allowances", "5000", "P Tax", "200"],
      ["Other Allowances", "2000", "TDS", "500"],
      ["", "", "LOP", "1000"],
      [],
      ["Total Earnings", "47000"],
      ["Total Deductions", "4700"],
      ["Net Pay", "42300"],
      ["Net Pay (In Words)", "Forty-Two Thousand Three Hundred Rupees"],
      [],
      ["Leave Details"],
      ["Leave Type", "Total Balance", "Taken", "Remaining"],
      ["Sick Leave", "4", "0", "4"],
      ["Casual Leave", "4", "0", "4"],
      ["Paid Leave", "4", "0", "4"],
    ];

    // Convert array to CSV string
    const csvContent = csvData
      .map((row) => row.join(","))
      .join("\n");

    // Download CSV file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payslip.csv";
    link.click();
  };

  return (
    <div className="p-6">
    <div className="flex md:justify-between  gap-2 pb-8">
        <div>
          <h1 className="font-semibold text-2xl">Salary</h1>
          <h2 className="text-md">
            Dashboard / <span>Salary</span>
          </h2>
        </div>
       
      </div>
 <div className="flex lg:justify-between flex-col  lg:flex-row pb-4">
     <h1 className="text-2xl font-bold mb-4">Payslip</h1>

     <div className="flex space-x-4">
        <button
          onClick={downloadPDF}
          className="bg-golden text-white px-4 py-2 rounded"
        >
           PDF
        </button>
        <button
          onClick={handlePrint}
          className="bg-golden text-white px-4 py-2 rounded"
        >
          Print
        </button>
        <button
          onClick={downloadCSV}
          className="bg-golden text-white px-4 py-2 rounded"
        >
          CSV
        </button>
      </div>
     </div>

      {/* Payslip Design */}
      <div
        id="payslip"
        ref={componentRef}
        className="border p-6 shadow-md max-w-full md:max-w-3xl mx-auto bg-white"
      >
        <h2 className="text-lg font-semibold text-center mb-4">
          Payslip for the period of October, 2024
        </h2>

        {/* Employee Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Employee Code:</strong> EMP12345</p>
            <p><strong>Date of Joining:</strong> 01-Jan-2020</p>
            <p><strong>PF UAN Number:</strong> PF123456789</p>
            <p><strong>Days Worked:</strong> 30</p>
            <p><strong>Week Off:</strong> 2</p>
          </div>
          <div>
            <p><strong>Department:</strong> IT</p>
            <p><strong>Designation:</strong> Software Developer</p>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>ESIC No.:</strong> ESIC12345</p>
            <p><strong>LOP:</strong> 2</p>
          </div>
        </div>

        {/* Earnings & Deductions Table */}
        <div className="overflow-x-auto">
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
              <tr>
                <td className="border px-4 py-2">Basic</td>
                <td className="border px-4 py-2">₹ 30000</td>
                <td className="border px-4 py-2">Employee Provident Fund</td>
                <td className="border px-4 py-2">₹ 2000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">HRA</td>
                <td className="border px-4 py-2">₹ 10000</td>
                <td className="border px-4 py-2">ESIC</td>
                <td className="border px-4 py-2">₹ 1000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Special Allowances</td>
                <td className="border px-4 py-2">₹ 5000</td>
                <td className="border px-4 py-2">P Tax</td>
                <td className="border px-4 py-2">₹ 200</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Other Allowances</td>
                <td className="border px-4 py-2">₹ 2000</td>
                <td className="border px-4 py-2">TDS</td>
                <td className="border px-4 py-2">₹ 500</td>
              </tr>
              <tr>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">LOP</td>
                <td className="border px-4 py-2">₹ 1000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Earning and Deductions */}
        <p><strong>Total Earnings:</strong> ₹ 47000</p>
        <p><strong>Total Deductions:</strong> ₹ 4700</p>

        {/* Net Pay */}
        <p><strong>Net Pay:</strong> ₹ 42300</p>
        <p><strong>Net Pay (In Words):</strong> Forty-Two Thousand Three Hundred Rupees</p>

        {/* Leave Details */}
        <h3 className="text-lg font-semibold mt-6">Leave Details</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border text-sm">
            <thead>
              <tr>
                <th className="border px-4 py-2">Leave Type</th>
                <th className="border px-4 py-2">Total Balance</th>
                <th className="border px-4 py-2">Taken</th>
                <th className="border px-4 py-2">Remaining</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Sick Leave</td>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">0</td>
                <td className="border px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Casual Leave</td>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">0</td>
                <td className="border px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Paid Leave</td>
                <td className="border px-4 py-2">4</td>
                <td className="border px-4 py-2">0</td>
                <td className="border px-4 py-2">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalarySlip;
