import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">assign visit plan</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="max-w-2xl bg-gray-200 rounded-md px-4 py-4">
        <h2 className="text-lg font-semibold mb-2 capitalize">
          add new visit plan / Edit visit plan
        </h2>
        <h2 className="text-lg font-semibold mb-2 capitalize">
          visit plan created by: login user
        </h2>
        <form>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Employee Name:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Mr. Rahman
              </option>
              <option value="Zone one">Mr. Rahman</option>
              <option value="Zone two">Mr. Rahman</option>
              <option value="Zone three">Mr. Rahman</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              visit data:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                mm/dd/yyyy
              </option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Institution / Party Name:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Dhaka High School
              </option>
              <option value="Zone one">Dhaka High School</option>
              <option value="Zone two">Dhaka High School</option>
              <option value="Zone three">Dhaka High School</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Purpose:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Promotional Express
              </option>
              <option value="Zone one">Promotional Express</option>
              <option value="Zone two">Promotional Express</option>
              <option value="Zone three">Promotional Express</option>
            </select>
          </div>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Comment:
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            placeholder="Comment"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              status:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                pending
              </option>
              <option value="Zone one">pending</option>
              <option value="Zone two">pending</option>
              <option value="Zone three">pending</option>
            </select>
          </div>

          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              save visit plan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
