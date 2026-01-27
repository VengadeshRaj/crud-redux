import React from "react";

const TextBox = (props) => {
  const { title, isRequired = false } = props;
  return (
    <div className="flex flex-row gap-5">
      <label className="font-medium">
        {" "}
        {title} : <span className="text-red-500">{isRequired ? "*" : ""}</span>
      </label>
      <input className="border border-black rounded focus:outline-sky-600 size-8 w-64 p-1" />
    </div>
  );
};

export default TextBox;
