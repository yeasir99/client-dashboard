'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    bookCategory: '',
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_bookscategory',
      {
        CategoryType: 'books-category',
        CategoryName: formData.bookCategory,
      }
    );
    if (res.status === 200) {
      setFormData({
        bookCategory: '',
      });
      router.push('/dashboard/book-category');
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">book-Category management</h1>
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
          add new books-Category
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="bookCategory"
            className="block text-sm font-bold mb-1"
          >
            Books-Category:
          </label>
          <input
            type="text"
            id="bookCategory"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            name="bookCategory"
            value={formData.bookCategory}
            onChange={e => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            required
          />
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save Books-Category
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
