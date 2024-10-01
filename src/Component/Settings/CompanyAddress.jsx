import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOfficeAddress, setProofOfAddress } from "./Slice";

const CompanyAddress = () => {
  const dispatch = useDispatch();
  const officeAddress = useSelector((state) => state.form.officeAddress);
  const proofOfAddress = useSelector((state) => state.form.proofOfAddress);
  const [proofOfAddressFile, setProofOfAddressFile] = useState(null);
  const [fileName, setFileName] = useState("Upload Proof of Address");
  const [previewURL, setPreviewURL] = useState(null);
  const [error, setError] = useState("");

  // Handle Text Input
  const handleOfficeChange = (e) => {
    const value = e.target.value;
    dispatch(setOfficeAddress(value));
  };

  // Handle File Input Change with Validation
  const handleProofOfAddressChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Reset error
      setError("");

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!validTypes.includes(file.type)) {
        setError("Only JPEG, PNG, and PDF files are allowed.");
        return;
      }

      // Validate file size (2MB max)
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSizeInBytes) {
        setError("File size exceeds 2MB.");
        return;
      }

      // Log the file to the console
      console.log("Uploaded Proof of Address File:", file);

      // Update local state
      setProofOfAddressFile(file);
      setFileName(file.name);

      // Create a preview URL
      const url = URL.createObjectURL(file);
      setPreviewURL(url);

      // Dispatch the preview URL to Redux
      dispatch(setProofOfAddress(url));
    }
  };

  // Clean up the object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (previewURL) {
        URL.revokeObjectURL(previewURL);
      }
    };
  }, [previewURL]);

  return (
    <main className="px-4 sm:px-8">
      {/* COMPANY ADDRESS */}
      <div className="relative my-4 sm:my-8">
        <label
          htmlFor="address"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Office Address
        </label>
        <input
          type="text"
          id="officeAddress"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={officeAddress}
          onChange={handleOfficeChange}
        />
      </div>

      {/* Proof Of Address */}
      <div className="relative flex items-center flex-wrap sm:flex-nowrap gap-3 my-[2rem] sm:my-[3rem]">
        <div className="relative">
          <input
            type="file"
            id="uploadProofOfAddress"
            accept="image/*,application/pdf"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleProofOfAddressChange}
          />
          <label
            htmlFor="uploadProofOfAddress"
            className="bg-[#F0F7EB] border-[1.5px] border-[#11453B] px-4 py-2 rounded-[8px] cursor-pointer shadow-sm text-[#11453B] hover:bg-[#4E4E4E] hover:text-white transition"
          >
            {fileName}
          </label>
        </div>
        <span className="text-[12px] sm:text-[13px] text-[#4E4E4E]">
          e.g Nepa Bill, etc
        </span>
      </div>

      {/* Display Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {/* Display the uploaded Proof of Address */}
      {proofOfAddress && proofOfAddressFile && (
        <div className="mt-4 sm:mt-6">
          <p className="text-[#4E4E4E] mb-2">Uploaded Proof of Address:</p>
          {/* Check file type to display appropriately */}
          {proofOfAddressFile.type === "application/pdf" ? (
            <a
              href={proofOfAddress}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View PDF
            </a>
          ) : (
            <img
              src={proofOfAddress}
              alt="Proof of Address"
              className="w-32 h-32 object-cover rounded-md"
            />
          )}
          <p className="text-[#4E4E4E] mt-2">{proofOfAddressFile.name}</p>
        </div>
      )}
    </main>
  );
};

export default CompanyAddress;
