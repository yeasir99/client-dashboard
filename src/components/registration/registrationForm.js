const registrationForm = () => {
  return (
    <form className="w-full">
      <div>{/* image upload here */}</div>
      <div className="mb-5">
        <input
          type="text"
          className="w-full rounded-md mb-3"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full rounded-md mb-3"
          placeholder="Employee Id"
        />
        <input
          type="number"
          className="w-full rounded-md mb-3"
          placeholder="Mobile Number"
        />
        <div className="mb-3 flex justify-between space-x-3">
          <select name="zone" className="w-full rounded-md text-gray-500">
            <option value="" disabled={true} selected>
              Zone
            </option>
            <option value="Zone one">Zone one</option>
            <option value="Zone two">Zone two</option>
            <option value="Zone three">Zone three</option>
          </select>
          <select name="area" className="w-full rounded-md text-gray-500">
            <option value="" disabled={true} selected>
              Area
            </option>
            <option value="Area one">Area one</option>
            <option value="Area two">Area two</option>
            <option value="Area three">Area three</option>
          </select>
        </div>
        <div className="mb-3 flex justify-between space-x-3 text-gray-500">
          <select name="district" className="w-full rounded-md">
            <option value="" disabled={true} selected>
              District
            </option>
            <option value="District one">District one</option>
            <option value="District two">District two</option>
            <option value="District three">District three</option>
          </select>
          <select name="division" className="w-full rounded-md text-gray-500">
            <option value="" disabled={true} selected>
              Division
            </option>
            <option value="Division one">Division one</option>
            <option value="Division two">Division two</option>
            <option value="Division three">Division three</option>
          </select>
        </div>
        <input
          type="password"
          className="w-full rounded-md"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="bg-primary w-full py-3 rounded-full text-surface1"
      >
        Register
      </button>
    </form>
  );
};

export default registrationForm;
