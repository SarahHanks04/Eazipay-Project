// import React, { useState } from "react";
// import axios from "axios"; // Assuming you make API requests to register
// import { Link } from "react-router-dom";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Form validation
//   const validateForm = () => {
//     const { username, email, password, confirmPassword } = formData;
//     if (!username || !email || !password || !confirmPassword) {
//       setError("All fields are required");
//       return false;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Please enter a valid email");
//       return false;
//     }
//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return; // Return if validation fails

//     try {
//       const response = await axios.post("https://reqres.in/api/register", {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//       });

//       setSuccess("Registration successful!");
//       setError(null); // Clear error messages
//       console.log(response.data); // You can redirect or store the user data
//     } catch (err) {
//       setError("Registration failed, please try again.");
//       setSuccess(null); // Clear success message
//       console.error(err);
//     }
//   };

//   return (
//     <div className="register-page bg-gray-100 min-h-screen flex justify-center items-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#DAE9D0] p-8 shadow-md rounded-lg max-w-md w-full"
//       >
//         <h2 className="text-xl text-[#515251] text-center font-bold mb-6">
//           Register
//         </h2>

//         {success && (
//           <div className="text-green-500 text-sm mb-4">{success}</div>
//         )}

//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-[#515251]"
//           >
//             Username
//           </label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-[#515251]"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-[#515251]"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="confirmPassword"
//             className="block text-sm font-medium text-[#515251]"
//           >
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
//           />
//         </div>
//         {error && <div className="text-red-500 text-sm mb-6">{error}</div>}

//         <button
//           type="submit"
//           className="w-full bg-[#11453B] text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
//         >
//           Sign Up
//         </button>

//         <p className="text-center text-sm mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 pl-[3px]">
//             Login here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IndividualContext } from "../Individual/IndividualProvider";

const RegisterPage = () => {
  const { register, error, registrationSuccess } =
    useContext(IndividualContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    if (!username || !email || !password || !confirmPassword) {
      return "All fields are required";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email";
    }
    return null; // No errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return; // Return if validation fails
    }

    // Call register function from context
    await register(formData.username, formData.email, formData.password);
  };

  return (
    <div className="register-page bg-[#FFE9E7] min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#DAE9D0] p-8 shadow-md rounded-lg max-w-md w-full"
      >
        <h2 className="text-xl text-[#515251] text-center font-bold mb-6">
          Register
        </h2>

        {registrationSuccess && (
          <div className="text-green-500 text-sm mb-4">
            {registrationSuccess}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-[#515251]"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#515251]"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#515251]"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-[#515251]"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        {error && <div className="text-red-500 text-sm mb-6">{error}</div>}

        <button
          type="submit"
          className="w-full bg-[#11453B] text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 pl-[3px]">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
