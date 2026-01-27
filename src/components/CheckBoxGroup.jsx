import React from "react";

const CheckboxGroup = (props) => {
  const { title, isRequired = false, values } = props;

  const buildCheckboxGroup = () =>
    values.map(({ value }) => (
      <div className="flex flex-row gap-2">
        <input className="" type="checkbox" />
        <label className="font-medium">{value}</label>
      </div>
    ));

  return (
    <div className="flex flex-row gap-10">
      <label className="font-medium">
        {" "}
        {title} : <span className="text-red-500">{isRequired ? "*" : ""}</span>
      </label>
      <div className="flex flex-col gap-2">{buildCheckboxGroup()}</div>
    </div>
  );
};

export default CheckboxGroup;
