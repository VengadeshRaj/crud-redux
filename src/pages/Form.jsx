import { DOMAINS, GENDERS } from "../constants";

export default function Form() {
  const buildGender = () =>
    GENDERS.map((g) => <option value={g.refCode}>{g.value}</option>);

  const builDomain = () =>
    DOMAINS.map((d) => (
      <div className="flex flex-row gap-5">
        <input type="radio" name="domain" className=""/>
        <label className="font-medium">{d.value}</label>
      </div>
    ));

  return (
    <div className="flex flex-col justify-center h-screen items-center bg-gray-100 gap-10 p-5">
      <h1 className="text-3xl font-bold">Employee Registration Form</h1>
      <form className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <label className="font-medium">
            {" "}
            First Name : <span className="text-red-500">*</span>
          </label>
          <input className="border border-black rounded focus:outline-sky-600 size-8 w-64" />
        </div>
        <div className="flex flex-row gap-5">
          <label className="font-medium">
            {" "}
            Last Name : <span className="text-red-500">*</span>
          </label>
          <input className="border border-black rounded focus:outline-sky-600 size-8 w-64" />
        </div>
        <div className="flex flex-row gap-10">
          <label className="font-medium">
            {" "}
            Gender : <span className="text-red-500">*</span>
          </label>
          <div>
            <select
              className="w-64 border border-black size-8 rounded focus:outline-sky-600 "
              defaultValue={""}
            >
              {buildGender()}
            </select>
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <label className="font-medium">
            {" "}
            Domain : <span className="text-red-500">*</span>
          </label>
          <div>
            {builDomain()}
          </div>
        </div>
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
      </form>
    </div>
  );
}
