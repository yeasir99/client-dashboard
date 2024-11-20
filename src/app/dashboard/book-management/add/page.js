'use client';
import useGetData from '@/utils/useGetData';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const url =
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_bookscategorys';

  const { status, data } = useGetData(url);

  const [formData, setFormData] = useState({
    category: '',
    bookTitle: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_product',
      {
        Category: formData.category,
        ProductName: formData.bookTitle,
      }
    );

    if (res.status === 200) {
      router.push('/dashboard/book-management');
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Category:
            </label>

            <select
              name="category"
              className="w-full rounded-md"
              defaultValue=""
              onChange={handleChange}
            >
              <option value="" disabled={true} selected></option>
              {data.length &&
                data.map(item => (
                  <option value={item.CategoryName} key={item.ID}>
                    {item.CategoryName}
                  </option>
                ))}
            </select>
          </div>
          <label htmlFor="BookTitle" className="block text-sm font-bold mb-1">
            Book Title :
          </label>
          <input
            type="text"
            id="BookTitle"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            name="bookTitle"
            onChange={handleChange}
            value={formData.bookTitle}
          />

          <div className="mt-5">
            <button
              className="capitalize bg-primary px-5 py-1 text-white rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
