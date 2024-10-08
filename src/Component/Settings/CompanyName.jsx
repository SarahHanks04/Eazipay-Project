import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName, setCACDocument } from "./Slice";

const CompanyName = () => {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.form.companyName);
  const cacDocument = useSelector((state) => state.form.cacDocument);
  const [cacDocumentFile, setCacDocumentFile] = useState(null);
  const [fileName, setFileName] = useState("Upload CAC Doc.");
  const [previewURL, setPreviewURL] = useState(null);

  // Handle Text Input
  const handleCompanyName = (e) => {
    const value = e.target.value;
    dispatch(setCompanyName(value));
  };

  const handleCacDocument = (e) => {
    const file = e.target.files[0];
    if (file) {
      // clg file
      console.log("Uploaded CAC Document File:", file);

      // Update local state
      setCacDocumentFile(file);
      setFileName(file.name);

      // Create a preview URL
      const url = URL.createObjectURL(file);
      setPreviewURL(url);

      // Dispatch the preview URL
      dispatch(setCACDocument(url));
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
      {/* COMPANY NAME */}
      <div className="relative my-4 sm:my-8">
        <label
          htmlFor="companyName"
          className="absolute -top-3 left-4 sm:left-5 bg-white px-[8px] sm:px-[16px] text-[14px] sm:text-[16px] text-[#8D8E8D]"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          className="block w-full px-3 py-2 sm:px-4 sm:py-2 border-[1.3px] border-[#B5B6B5] rounded-[12px] sm:rounded-[16px] focus:outline-none focus:ring-1 focus:ring-[#11453B]"
          value={companyName}
          onChange={handleCompanyName}
        />
      </div>

      {/* COMPANY REGISTRATION */}
      <div>
        <label className="text-[#515251] text-[16px] font-[400]">
          Is your company registered?
        </label>
        <div className="mt-4 sm:mt-[1rem] flex gap-4 sm:gap-8">
          <button
            type="button"
            className="flex-1 py-2 rounded-md text-white bg-[#11453B] hover:bg-white hover:text-[#4E4E4E] transition-all"
          >
            Yes
          </button>
          <button
            type="button"
            className="flex-1 py-2 rounded-md border-[2px] text-[#4E4E4E] border-[#F0F7EB] hover:bg-[#11453B] hover:text-white transition-all"
          >
            No
          </button>
        </div>
      </div>

      {/* CAC DOCUMENT */}
      <div className="relative flex flex-wrap sm:flex-nowrap items-center gap-2 my-[2rem] sm:my-[3rem]">
        <div className="relative">
          <input
            type="file"
            id="cacDocument"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleCacDocument}
          />
          <label
            htmlFor="cacDocument"
            className="bg-[#F0F7EB] border-[1.5px] border-[#11453B] px-4 py-2 rounded-[8px] cursor-pointer shadow-sm text-[#11453B] hover:bg-[#4E4E4E] hover:text-white transition"
          >
            {fileName}
          </label>
        </div>
        <span className="text-[12px] sm:text-[13px] text-[#4E4E4E]">
          Jpeg and Png Only (2mb max)
        </span>
        {cacDocumentFile && <p>{cacDocumentFile.name}</p>}
      </div>

      {/* Display the uploaded CAC Document */}
      {cacDocument && (
        <div className="mt-4 sm:mt-6">
          <p className="text-[#4E4E4E] mb-2">Uploaded CAC Document:</p>
          <img
            src={cacDocument}
            alt="CAC Document"
            className="w-32 h-32 object-cover rounded-md"
          />
          <p className="text-[#4E4E4E] mt-2">{cacDocumentFile.name}</p>
        </div>
      )}
    </main>
  );
};

export default CompanyName;
