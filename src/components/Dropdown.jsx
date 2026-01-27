import React from "react";

const Dropdown = (props) => {
  const { title, isRequired = false, values } = props;

  const buildOptions = () =>
    values.map(({value,refCode}) => (
      <option value={refCode} className="font-medium cursor-pointer">
        {value}
      </option>
    ));
  return (
    <div className="flex flex-row gap-10">
      <label className="font-medium">
        {" "}
        {title} : <span className="text-red-500">{isRequired ? "*" : ""}</span>
      </label>
      <div>
        <select
          className="w-64 border border-black size-8 rounded focus:outline-sky-600 p-1"
          defaultValue={""}
        >
          {buildOptions()}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
