'use client';
import { useState } from 'react';

const page = () => {
  const [formData, setFormData] = useState({
    division: '',
    district: '',
    thana: '',
    area: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Region management</h1>
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
          add new Region
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Parent Region (if applicable):
            </label>

            <select
              className="w-full rounded-md"
              defaultValue="none"
              name="division"
              onChange={handleChange}
            >
              <option value="none" disabled>
                Choose a Location ...
              </option>
            </select>
          </div>

          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              district:
            </label>

            <select
              className="w-full rounded-md"
              defaultValue="none"
              name="regionType"
              onChange={handleChange}
            >
              <option value="none" disabled>
                Choose a Region Type ...
              </option>
            </select>
          </div>
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              save region-type
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
