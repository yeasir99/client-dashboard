import { FaEye, FaRegEdit } from 'react-icons/fa';

const ProductionOrder = () => {
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
                    Order No
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Submitted By
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
                    Financial Year
                  </th>

                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Product Category
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Quantity
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
                <tr className="border-b border-neutral-200 dark:border-white/10">
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                    POR-101
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    Mr. Kamal
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    10.01.2023
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    2023
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    ssc
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    English 1st
                  </td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                    1000
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

export default ProductionOrder;
