'use client';
import { useState } from 'react';
import axios from 'axios';
const page = () => {
  const [formData, setFormData] = useState({
    taDa: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_tada_allowance',
      {
        CategoryType: 'TA/DA Allowance',
        CategoryName: formData.taDa,
      }
    );
    if (res.status === 200) {
      setFormData({
        taDa: '',
      });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">TA/DA Allowance management</h1>
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
          TA/DA &amp; Others Allowance Management
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="TaDa" className="block text-sm font-bold mb-1">
            TA/DA &amp; Others Allowance:
          </label>
          <input
            type="text"
            id="TaDa"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            name="taDa"
            value={formData.taDa}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
          <div className="mt-5">
            <button
              className="capitalize bg-primary px-5 py-1 text-white rounded-md"
              type="submit"
            >
              Save TA/DA
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
