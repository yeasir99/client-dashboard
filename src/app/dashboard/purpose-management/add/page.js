'use client';
import { useState } from 'react';
import axios from 'axios';

const page = () => {
  const [formData, setFormData] = useState({
    purpose: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_visitpurpose',
      {
        CategoryType: 'visitpurpose',
        CategoryName: formData.purpose,
      }
    );
    if (res.status === 200) {
      setFormData({
        purpose: '',
      });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">purposes management</h1>
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
          add new purpose
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Purpose" className="block text-sm font-bold mb-1">
            purpose:
          </label>
          <input
            type="text"
            id="Purpose"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            name="purpose"
            value={formData.purpose}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save purposes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
