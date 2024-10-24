import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Product Receipt List</h1>
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
        <form>
          <label htmlFor="designation" className="block text-sm font-bold mb-1">
            Receipt No:
          </label>
          <input
            type="text"
            id="designation"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Receipt Date:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                MM/DD/YYYY
              </option>
              <option value="Zone one">MM/DD/YYYY</option>
              <option value="Zone two">MM/DD/YYYY</option>
              <option value="Zone three">MM/DD/YYYY</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Production Order Ref:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                PRD-2024-001
              </option>
              <option value="Zone one">PRD-2024-001</option>
              <option value="Zone two">PRD-2024-001</option>
              <option value="Zone three">PRD-2024-001</option>
            </select>
          </div>
          <label htmlFor="Print" className="block text-sm font-bold mb-1">
            Print:
          </label>
          <input
            type="text"
            id="Print"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Financial Year:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Financial Year 2023
              </option>
              <option value="Zone one">Financial Year 2023</option>
              <option value="Zone two">Financial Year 2023</option>
              <option value="Zone three">Financial Year 2023</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Product Category:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                SSC
              </option>
              <option value="Zone one">SSC</option>
              <option value="Zone two">SSC</option>
              <option value="Zone three">SSC</option>
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Product Name:
            </label>

            <select name="zone" className="w-full rounded-md">
              <option value="" disabled={true} selected>
                Mathematics-Class 10
              </option>
              <option value="Zone one">Mathematics-Class 10</option>
              <option value="Zone two">Mathematics-Class 10</option>
              <option value="Zone three">Mathematics-Class 10</option>
            </select>
          </div>
          <label htmlFor="Quantity" className="block text-sm font-bold mb-1">
            Quantity:
          </label>
          <input
            type="text"
            id="Quantity"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
          <label htmlFor="POQ" className="block text-sm font-bold mb-1">
            Production Order Qty:
          </label>
          <input
            type="text"
            id="POQ"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
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
