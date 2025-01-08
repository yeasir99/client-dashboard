import React from 'react';

const ExpenseRequisitionList = () => {
  return (
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
                  Exp. ID
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Exp. NO.
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Institution
                </th>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                >
                  Date
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
                  Status
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => (
                  <tr
                    className="border-b border-neutral-200 dark:border-white/10"
                    key={item.id}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.OpeningDate.date.split(' ')[0]}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.ClosingDate.date.split(' ')[0]}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.YearClosingStatus}
                    </td>
                  </tr>
                ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseRequisitionList;
