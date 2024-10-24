import React from 'react';

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">User Management</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <form className="w-full max-w-lg">
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
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Status
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Active
              </option>
              <option value="Zone one">Disable</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary px-6 py-2 rounded-full text-surface1"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default page;
