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

  const WhatsappRedirect = () => {
    console.log("Hi");
    window.location.href = "https://wa.me/917225952005?text=";
  };

  const sendResignationForm = (data) => {
    console.log(data); // Handle the form submission
    messageRef.current.innerText = "Form submitted successfully!";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Onsite Form
        </h3>
        <h5
          ref={messageRef}
          className="text-center text-green-500 text-sm font-medium mb-4"
        ></h5>

        <form
          onSubmit={handleSubmit(sendResignationForm)}
          className="space-y-4"
        >
          {/* Full Name Field */}
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
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Employee No Field */}
          <div>
            <input
              type="text"
              placeholder="Enter your Employee Id"
              {...register("employeeId", {
                required: "Employee Id is required",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.employeeId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employeeId.message}
              </p>
            )}
          </div>

          {/* Client Name Field */}
          <div>
            <input
              type="text"
              placeholder="Enter your Client name"
              {...register("clientName", {
                required: "Client name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.clientName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.clientName.message}
              </p>
            )}
          </div>

          {/* Project Name Field */}
          <div>
            <input
              type="text"
              placeholder="Enter your Project name"
              {...register("projectName", {
                required: "Project name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.projectName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.projectName.message}
              </p>
            )}
          </div>

          {/* Contact Number Field */}
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
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Onsite Location Field */}
          <div>
            <textarea
              rows="3"
              placeholder="Enter your Onsite location"
              {...register("location", {
                required: "Location is required",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="button"
              variant="contained"
              sx={{
                bgcolor: "#CD5C5C",
              }}
              onClick={WhatsappRedirect}
              className="w-full sm:w-auto"
            >
              <b> Share your Live location</b>
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
    </div>
  );
}

export default Resignation;



