import React from "react";
import CompanyName from "./CompanyName";
import CompanyAddress from "./CompanyAddress";
import CompanySize from "./CompanySize";

const Form = () => {
  return (
    <div>
      <form>
        <CompanyName />
        <CompanyAddress />
        <CompanySize />
      </form>
    </div>
  );
};

export default Form;
