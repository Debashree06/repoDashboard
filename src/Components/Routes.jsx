// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoutes";  // Assuming you have a protected route for authentication checks
// import Login from "./Login";

// // Admin Components
// import AdminDashboard from "../Components/Admin/dashboard/AdminDashboard";  // Replace with your actual admin dashboard component

// // User Components
// import UserDashboard from "../Components/User/dashboard/DashboardView";  // Replace with your user dashboard component

// const AllRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route
//         path="/admin-dashboard"
//         element={
//           <ProtectedRoute>
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/user-dashboard"
//         element={
//           <ProtectedRoute>
//             <UserDashboard />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// };

// export default AllRoutes;

import { Route, Routes } from "react-router-dom"
import TicketView from "./ticket/index"
import Tickets from "./ticket/index"
import AdminDashboard from "../Components/Admin/dashboard/AdminDashboard";
import Employee from "./Admin/Employee/Employee";
import Holidays from "./Admin/Holidays/Holidays";
import Leaves from "./Admin/Leaves/Leaves";
import Attendance from "./Admin/Attendance/Attendance";
import Timesheet from "./Timesheet/Timesheet";
import Activities from "./Activities/Activities";
import Reimbursement from "./Admin/payslip/employeeReimbursement/Reimbursement";
import EmployeeExpenses from "./Admin/payslip/expenses/EmployeeExpences";
import PayslipOverview from "./Admin/payslip/overviewOfPayslip/PayslipOverview";
import PayslipDoc from "./Admin/payslip/salary/PayslipDoc";
import EmployeeTable  from "./Admin/payslip/salary/EmployeeTable";
import Policies from "./Admin/Policies/Policies";
import ResignationAdminPanel from "./Admin/Resignation-admin/ResignationAdminPanel"
import Termination from "./Admin/Termination/Termination";
import ReimbursementOfEmployee from "./User/expense/ReimbursementOfEmployee";
import CourseList from "./User/courses/courseList/CourseList";
import TakeQuiz from "./User/courses/quizList/QuizComponent"

const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<AdminDashboard/>}/>
            <Route path="/tickets" element={<Tickets/>}/>
            <Route path="/ticket/:id" element={<TicketView/>}/>
            <Route path="/employees" element={<Employee/>}/>
            <Route path="/holidays" element={<Holidays/>}/>
            <Route path="/leaves" element={<Leaves/>}/>
            <Route path="/attendance" element={<Attendance/>}/>
            <Route path="/timesheet" element={<Timesheet/>}/>
            <Route path="/activities" element={<Activities/>}/>

            {/* <Route path="/reimbursement" element={<Reimbursement />} /> */}
            <Route path="/payroll" element={<EmployeeTable />} />
            <Route path="/employeeExpences" element={<EmployeeExpenses />} />
            <Route path="/payslipOverview" element={<PayslipOverview/>} />
            <Route path="/payslip/document/:id" element={<PayslipDoc />} />

            <Route path="/policies" element={<Policies/>} />

            <Route path="/resignation" element={<ResignationAdminPanel />} />

            <Route path="/termination" element={<Termination />} />

            <Route path="/reimbursement" element={<ReimbursementOfEmployee/>}/>

            <Route path="/courses" element={<CourseList/>}/>

            <Route path="/takeQuiz" element={<TakeQuiz/>}/>

        </Routes>
    )
}
export default AllRoutes;
