import React, { useState } from "react";
import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);

    if (result.success) {
      setError("");
      navigate(result.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-white shadow-[0px_4px_6px_rgba(177,127,39,0.3),_0px_1px_3px_rgba(177,127,39,0.30)] flex flex-col items-center gap-4 w-[70%] md:w-[40%] lg:w-[28%] 2xl:w-[25%] rounded-xl px-6 py-10">
            <div>
              <img src="/newLogo.png" className="w-24 rounded-[50%] bg-black p-2" alt="Logo" />
            </div>
            <div className="space-y-2">
              <h1 className="sub-title text-center uppercase font-bold">
                Welcome to KINGSMEN
              </h1>
              <h1 className="text-center text-base">
                Login with your Credentials
              </h1>
            </div>
            <div className="divide-y divide-gray-200 w-full">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Username Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="username"
                    name="username"
                    type="text"
                    className={`peer bg-white placeholder-transparent h-10 w-full border-b-2 ${
                      error ? "border-red-600" : "border-gray-300"
                    } text-gray-900 focus:outline-none focus:border-rose-600`}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Username
                  </label>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={`peer bg-white placeholder-transparent h-10 w-full border-b-2 ${
                      error ? "border-red-600" : "border-gray-300"
                    } text-gray-900 focus:outline-none focus:border-rose-600`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/4 cursor-pointer"
                  >
                    {showPassword ? (
                      <BsEyeFill className="text-2xl text-gray-400 hover:text-gray-700" />
                    ) : (
                      <BsEyeSlashFill className="text-2xl text-gray-400 hover:text-gray-700" />
                    )}
                  </span>
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                {/* Error Message */}
                {error && <div className="text-red-600 text-sm">{error}</div>}

               
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-8 items-center">
              <div className="flex items-center justify-center">
                <button className="bg-golden text-black font-bold py-2 px-8 rounded-md text-lg">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
