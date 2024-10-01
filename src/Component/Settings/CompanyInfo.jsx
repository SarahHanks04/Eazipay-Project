import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AbstractCompany from "../../assets/AbstractCompany.svg";
import { setLogo } from "./Slice";

const CompanyInfo = () => {
  const dispatch = useDispatch();
  const logo = useSelector((state) => state.form.logo);
  const [fileName, setFileName] = useState("Change Logo");
  const [logoFile, setLogoFile] = useState(null);

  // Handle File Input Change
  const handleLogoFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
      // setFileName(file.name); // Update the button label to the file name

      // Create a preview URL for the image
      const logoURL = URL.createObjectURL(file);
      dispatch(setLogo(logoURL)); // Store the preview URL in Redux

      // Log the file details to the console
      console.log("Uploaded Logo File:", file);
    }
  };

  // Clean up the object URL when the component unmounts or when logoFile changes
  useEffect(() => {
    return () => {
      if (logo) {
        URL.revokeObjectURL(logo);
      }
    };
  }, [logo]);

  return (
    <main className="px-8">
      <div className="flex items-baseline gap-8 mb-6">
        <img
          src={AbstractCompany}
          alt="Abstract Company"
          className="object-contain"
        />

        <div className="relative">
          <input
            type="file"
            id="logoUpload"
            accept="image/*" // Restrict to image files
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleLogoFile}
          />
          <label
            htmlFor="logoUpload"
            className="bg-[#F0F7EB] border-[1.5px] border-[#11453B] px-4 py-2 rounded-[8px] cursor-pointer shadow-sm text-[#11453B] hover:bg-gray-100 transition"
          >
            {fileName}
          </label>
        </div>

        {/* Display the logo file name */}
        {logoFile && <p className="text-[#4E4E4E]">{logoFile.name}</p>}

        {/* Display the uploaded logo image */}
        {logo && (
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 object-cover rounded-md"
          />
        )}
      </div>
    </main>
  );
};

export default CompanyInfo;
