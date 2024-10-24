import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">subject-Info management</h1>
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
          add new subject-Info
        </h2>
        <form>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Subject-Name:
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Class Name
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                class1
              </option>
              <option value="Zone one">class1</option>
              <option value="Zone two">class1</option>
              <option value="Zone three">class1</option>
            </select>
          </div>
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save Subject-Info
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
