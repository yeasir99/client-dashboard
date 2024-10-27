import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">
          Visit Entry Details - Final Approval
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
      <div className="w-full bg-gray-200 rounded-md px-4 py-4">
        <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Plan ID
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Visit Date
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Employee Name
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Place
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Visit Area
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Purpose
              </th>

              <th scope="col" className="px-6 py-4">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                1
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                2024-09-15
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                Mr. Rahman
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                Dhaka High School
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                Uttara
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                Meeting
              </td>

              <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                Comments
              </td>
            </tr>
          </tbody>
        </table>
        <form className="mb-10">
          <div className="grid grid-cols-2 gap-8 mb-5">
            <div>
              <label className="font-semibold">Purpose:</label>
              <input className="text-md outline-1 border-1 focus:ring-0 rounded-md ml-2 text-sm" />
            </div>
            <div>
              <label className="font-semibold">Remark:</label>
              <input className="text-md outline-1 border-1 focus:ring-0 rounded-md ml-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-5">
            <div>
              <label className="font-semibold">Actual Check In Time:</label>
              <input className="text-md outline-1 border-1 focus:ring-0 rounded-md ml-2 text-sm" />
            </div>
            <div>
              <label className="font-semibold">Actual Check Out Time:</label>
              <input className="text-md outline-1 border-1 focus:ring-0 rounded-md ml-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-5">
            <div>
              <label className="font-semibold">Transport Allowance:</label>
              <input className="text-md outline-1 border-1 focus:ring-0 rounded-md ml-2 text-sm" />
            </div>
            <div>
              <label className="font-semibold">Day Allowance:</label>
              <input className="text-md outline-1 border-1 focus:ring-0 rounded-md ml-2 text-sm" />
            </div>
          </div>
          <button className="bg-primary px-3 py-1 rounded-md text-white">
            Add Particulars
          </button>
          <button className="bg-red-500 ml-5 px-3 py-1 rounded-md text-white">
            Delete Particulars
          </button>
        </form>
        {/* start */}
        <h1 className="text-2xl capitalize mb-2">Purpose Details</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block max-w-full w-full pt-5">
              <div className="overflow-hidden">
                <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr className="bg-text1 text-white">
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Teacher Name
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Designation
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Mobile
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Financial Year
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Sub. Category
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Student Count
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Amount
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-white/10 text-black">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Mr. Sohel
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Bangla Teacher
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        0171111111
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Class 1
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        F-Year
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Math
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Math Part 1
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        80
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        1000
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                        <button className="bg-red-500 px-3 py-[2px] text-white rounded-md">
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <h1 className="text-2xl capitalize mb-2">TA/DA Allowance</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block max-w-full w-full pt-5">
              <div className="overflow-hidden">
                <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr className="bg-text1 text-white">
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        TA/DA Allowance Type
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-white/10 text-black">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Rickshaw
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                        300
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10 text-black">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Day Allowance
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                        500
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10 text-black">
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        Total Amount
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                        800
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label className="block  mb-1 text-xl font-semibold">
            Check Approval Comments:
          </label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
        </div>
        <div className="mb-5">
          <label className="block text-xl font-semibold mb-1">
            Final Approval Comments:
          </label>
          <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          />
        </div>
        <button className="bg-primary px-3 py-1 rounded-md text-white mr-5">
          Checked
        </button>
        <button className="bg-primary px-3 py-1 rounded-md text-white">
          Reject
        </button>
      </div>
    </>
  );
};

export default page;
