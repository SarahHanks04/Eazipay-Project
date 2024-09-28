import React from "react";
import LogoUpload from "./LogoUpload";
import CompanyName from "./CompanyName";
import CompanyRegistered from "./CompanyRegistered";
import CACUpload from "./CACUpload";
import CompanySize from "./CompanySize";

const Form = () => {
  return (
    <div>
      <form>
        <LogoUpload />
        <CompanyName />
        <CompanyRegistered />
        <CACUpload />
        <CompanySize />
      </form>
    </div>
  );
};

export default Form;
