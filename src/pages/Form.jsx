export default function Form() {
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
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <input className="" name="gender" type="radio" />
              <label className="font-medium">Male</label>
            </div>
            <div className="flex flex-row gap-2">
              <input className="" name="gender" type="radio" />
              <label className="font-medium">Female</label>
            </div>
            <div className="flex flex-row gap-2">
              <input className="" name="gender" type="radio" />
              <label className="font-medium">Others</label>
            </div>
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
