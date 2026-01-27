import React from "react";

const RadioGroup = (props) => {
  const { title,groupName, isRequired = false, values } = props;

  const buildRadioGroup = () =>
    values.map(({value}) => (
      <div className="flex flex-row gap-5">
        <input type="radio" name={groupName} className="" />
        <label className="font-medium">{value}</label>
      </div>
    ));

  return (
    <div className="flex flex-row gap-10">
      <label className="font-medium">
        {" "}
        {title} : <span className="text-red-500">{isRequired ? "*" : ""}</span>
      </label>
      <div>{buildRadioGroup()}</div>
    </div>
  );
};

export default RadioGroup;
