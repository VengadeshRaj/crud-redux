import { DOMAINS, GENDERS,ACTIVITIES } from "../constants";
import TextBox from "../components/TextBox";
import Dropdown from '../components/Dropdown';
import RadioGroup from "../components/RadioGroup";

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
        <Dropdown title="Gender" isRequired values={GENDERS}/>
        <RadioGroup title="Domain" groupName="domain" isRequired values={DOMAINS} />
        <div className="flex flex-row gap-5">
          <label className="font-medium">
            {" "}
            Intrested in : <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <input className="" type="checkbox" />
              <label className="font-medium">Dance</label>
            </div>
            <div className="flex flex-row gap-2">
              <input className="" type="checkbox" />
              <label className="font-medium">Cricket</label>
            </div>
            <div className="flex flex-row gap-2">
              <input className="" type="checkbox" />
              <label className="font-medium">Indoor Games</label>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-center font-medium">
          <button className=" rounded px-3 py-2 bg-gray-300 hover:bg-gray-400">
            Cancel
          </button>
          <button
            className=" rounded px-3 py-2 bg-blue-500 text-white hover:bg-blue-700"
            type="submit"
            onSubmit={(e) => onFormSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
