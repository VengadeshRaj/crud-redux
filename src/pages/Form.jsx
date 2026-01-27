import { DOMAINS, GENDERS, ACTIVITIES } from "../constants";
import TextBox from "../components/TextBox";
import Dropdown from "../components/Dropdown";
import RadioGroup from "../components/RadioGroup";
import CheckboxGroup from "../components/CheckBoxGroup";
import Button from "../components/Button";

export default function Form() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert();
  };

  return (
    <div className="flex flex-col justify-center h-screen items-center bg-gray-100 gap-10 p-5 font-medium">
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <form className="flex flex-col gap-5" onSubmit={(e) => onFormSubmit(e)}>
        <TextBox title="First Name" isRequired />
        <TextBox title="Last Name" isRequired />
        <Dropdown title="Gender" isRequired values={GENDERS} />
        <RadioGroup
          title="Domain"
          groupName="domain"
          isRequired
          values={DOMAINS}
        />
        <CheckboxGroup title="Intrested in" isRequired values={ACTIVITIES} />
        <div className="flex flex-row gap-5 justify-center font-medium">
          <Button title="Cancel" type="secondary" />
          <Button title="Submit" type="primary" isSubmit />
        </div>
      </form>
    </div>
  );
}
