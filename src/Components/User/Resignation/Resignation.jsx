import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

function Resignation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const messageRef = useRef(null);

  const sendResignationForm = (data) => {
    console.log(data); // Handle the form submission
    messageRef.current.innerText = "Form submitted successfully!";
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Resignation Form
        </h3>
        <h5 ref={messageRef} className="text-center text-green-500 mb-4"></h5>

        <form
          onSubmit={handleSubmit(sendResignationForm)}
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your Employee Email Id"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Enter your contact number"
              {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[6-9][0-9]{9}$/,
                  message: "Invalid phone number",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter your Employee Id"
              {...register("employeeId", {
                required: "Employee Id is required",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.employeeId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employeeId.message}
              </p>
            )}
          </div>

          <div>
            <div className="m-2">Resign Date *</div>
            <input
              type="date"
              placeholder="Date of Resignation"
              {...register("resignationDate", {
                required: "Date of Resignation is required",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.resignationDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.resignationDate.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              rows="5"
              placeholder="Enter the reason for resignation"
              {...register("reason", {
                required: "Reason is required",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.reason && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reason.message}
              </p>
            )}
          </div>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#b17f27",
              color: "#000000",
            }}
          >
            <b>Submit</b>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Resignation;
