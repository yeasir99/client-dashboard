'use client';
import useGetData from '@/utils/useGetData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const TaDaEdit = ({ id }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    taDa: '',
  });
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_tada_allowance&ID=${id}`
  );

  useEffect(() => {
    setFormData({
      taDa: data.CategoryName,
    });
  }, [data]);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.put(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=update_tada_allowance&ID=${id}`,
      {
        CategoryType: 'TA/DA Allowance',
        CategoryName: formData.taDa,
      }
    );
    if (res.status === 200) {
      setFormData({
        taDa: '',
      });
      router.push('/dashboard/ta-da');
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">
          Sales & Distribution Expense Ledger
        </h1>
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="TaDa" className="block text-sm font-bold mb-1">
            Sales &amp; Distribution Expense Ledger:
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
            required
          />
          <div className="mt-5">
            <button
              className="capitalize bg-primary px-5 py-1 text-white rounded-md"
              type="submit"
            >
              Update Expense Ledger
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaDaEdit;
