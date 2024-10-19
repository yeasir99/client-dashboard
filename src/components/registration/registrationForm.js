const registrationForm = () => {
  return (
    <form className="w-full">
      <div>{/* image upload here */}</div>
      <div className="mb-5">
        <div>
          <label
            htmlFor="employeeID"
            className="capitalize flex font-semibold text-md py-1"
          >
            employeeID:
          </label>

          <input
            id="employeeID"
            name="employeeID"
            type="text"
            className="w-full rounded-md mb-1"
          />
        </div>
        <div>
          <label
            htmlFor="employeeName"
            className="capitalize flex font-semibold text-md py-1"
          >
            employee Name:
          </label>

          <input
            id="employeeName"
            type="text"
            name="employeeName"
            className="w-full rounded-md mb-1"
          />
        </div>
        <div>
          <label className="capitalize flex font-semibold text-md py-1">
            Dasignation/Role:
          </label>

          <select name="zone" className="w-full rounded-md">
            <option value="" disabled={true} selected>
              NSM
            </option>
            <option value="Zone one">Zone one</option>
            <option value="Zone two">Zone two</option>
            <option value="Zone three">Zone three</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="userID"
            className="capitalize flex font-semibold text-md py-1"
          >
            user ID:
          </label>

          <input
            id="userID"
            type="text"
            name="userID"
            className="w-full rounded-md mb-1"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="capitalize flex font-semibold text-md py-1"
          >
            password:
          </label>

          <input
            id="password"
            type="password"
            name="password"
            className="w-full rounded-md mb-1"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="capitalize flex font-semibold text-md py-1"
          >
            email:
          </label>

          <input
            id="email"
            type="email"
            name="email"
            className="w-full rounded-md mb-1"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="capitalize flex font-semibold text-md py-1"
          >
            Phone:
          </label>

          <input
            id="phone"
            type="number"
            name="phone"
            className="w-full rounded-md mb-1"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="capitalize flex font-semibold text-md py-1"
          >
            address:
          </label>

          <input
            id="address"
            type="text"
            name="address"
            className="w-full rounded-md mb-1"
          />
        </div>
        <div>
          <label className="capitalize flex font-semibold text-md py-1">
            reporting to:
          </label>

          <select name="district" className="w-full rounded-md">
            <option value="" disabled={true} selected>
              John Smith -CEO
            </option>
            <option value="District one">District one</option>
            <option value="District two">District two</option>
            <option value="District three">District three</option>
          </select>
        </div>
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
