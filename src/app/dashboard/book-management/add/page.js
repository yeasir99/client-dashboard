import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Books management</h1>
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
          add new Books / Edit Books
        </h2>
        <form>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Category
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Primary
              </option>
              <option value="Zone one">Primary</option>
              <option value="Zone two">Primary</option>
              <option value="Zone three">Primary</option>
            </select>
          </div>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Book Title :
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />

          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
