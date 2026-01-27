import React from "react";

const checkboxGroup = (props) => {
  const { title, isRequired = false, values } = props;

  const buildCheckboxGroup = () =>
    values.map(({ value }) => (
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <input className="" type="checkbox" />
          <label className="font-medium">{value}</label>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-row gap-10">
      <label className="font-medium">
        {" "}
        {title} : <span className="text-red-500">{isRequired ? "*" : ""}</span>
      </label>
      {buildCheckboxGroup()}
    </div>
  );
};

export default checkboxGroup;
