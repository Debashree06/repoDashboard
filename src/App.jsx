// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Components/Login";  // Your login component
// import DefaultLayout from "./Components/Layout/DefaultLayout";  // Your layout component
// import { useAuth } from "./Components/Context/AuthContext"; // AuthContext
// import AllRoutes from "./Components/Routes";  // All your routes under the dashboard

// const App = () => {
//   const { authState } = useAuth();

//   if (!authState.isAuth) {
//     return <Login />;
//   }

//   return (
//     <DefaultLayout>
//       <AllRoutes />  
//     </DefaultLayout>
//   );
// };

// AuthenticatedLayout is used to wrap the dashboard content
// const AuthenticatedLayout = () => {
//   const { authState } = useAuth();

//   // If not authenticated, redirect to login
//   if (!authState.isAuth) {
//     return <Login />;
//   }

//   return (
//     <DefaultLayout>
//       <AllRoutes />
//     </DefaultLayout>
//   );
// };


import DefaultLayout from './Components/Layout/DefaultLayout'
import AllRoutes from './Components/Routes'

function App() {
  return (
    <DefaultLayout>
      <AllRoutes/>
    </DefaultLayout>
  )
}

export default App

