'use client'
import { useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [current, setCurrent] = useState('sales');

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">
          Sales Order approval system
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
      <div>
      <div className="flex gap-8 items-center mb-5">
        <div className="flex gap-4">
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              if (current !== 'sales') {
                setCurrent('sales');
              }
            }}
          >
            <input
              id="sales"
              type="checkbox"
              checked={current === 'sales'}
              className="rounded-full"
            />
            <label
              className={`${
                current === 'sales' ? 'text-xl font-semibold' : 'text-xl'
              }`}
              htmlFor="sales"
            >
              Sales Order
            </label>
          </div>
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              if (current !== 'speciman') {
                setCurrent('speciman');
              }
            }}
          >
            <input
              id="speciman"
              type="checkbox"
              checked={current === 'speciman'}
              className="rounded-full"
            />
            <label
              className={`${
                current === 'speciman' ? 'text-xl font-semibold' : 'text-xl'
              }`}
              htmlFor="speciman"
            >
              Speciman Order
            </label>
          </div>
        </div>
      </div>
      <h1 className="text-2xl capitalize text-center py-3">
          {current === 'sales' ? 'sales order list' : 'Speciman Order List'}
        </h1>
      </div>
      
      {/* start */}
      <div className="flex flex-col">
        <div>
          <div className="inline-block max-w-full w-full pt-5">
            <div className="overflow-x-scroll">
              <table className="max-w-full w-full overflow-x-scroll border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr className="bg-text1 text-white">
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      SL
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Sales Order No
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Order Date
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Party Name
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Approval Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Approval Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      1
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      SO-1001
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      2024-09-15
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      Mr. Rahman
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                    20000
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      Pending
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                      <Link href="sales-order-approval/check">
                        <button className="bg-gray-300 px-1 py-[2px]">
                          Authorization
                        </button>
                      </Link>

                      {/* <Link href="sales-order-approval/final">
                        <button className="bg-gray-300 px-1 py-[2px]">
                          Approval
                        </button>
                      </Link> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      <h1 className="text-2xl capitalize mb-2">Completed / Rejected list</h1>
      {/* start */}
      <div className="flex flex-col">
        <div>
          <div className="inline-block max-w-full w-full pt-5">
            <div className="overflow-x-scroll">
              <table className="max-w-full w-full overflow-x-scroll border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr className="bg-text1 text-white">
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      SL
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Sales Order No
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Order Date
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Party Name
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Total Amount
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Approval Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      1
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      SO-1001
                    </td>

                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      2024-09-15
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      Mr. Rahman
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      20000
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      Rejected
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                      <button className="bg-gray-300 px-1 py-[2px]">
                        View
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
    </div>
  );
};

export default page;
