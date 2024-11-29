
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

