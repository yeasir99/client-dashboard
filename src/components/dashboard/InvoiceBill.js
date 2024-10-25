import { FaEye, FaRegEdit } from 'react-icons/fa';

const InvoiceBill = () => {
  return (
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
                    Invoice ID
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Invoice No
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Invoice Date
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Challan No
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
                    Payment Status
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
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    INV-2024-001
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    2024-09-12
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    INV-2024-001
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    1-library
                  </td>

                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    50000
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    Pending
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                    <span>
                      <FaEye />
                    </span>{' '}
                    |{' '}
                    <span>
                      <FaRegEdit />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBill;
