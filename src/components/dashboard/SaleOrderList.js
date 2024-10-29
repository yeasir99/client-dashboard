import { FaEye, FaRegEdit } from 'react-icons/fa';

const SaleOrderList = () => {
  let data = [
    {
      salesOrderId: 1,
      salesOrderNo: 1,
      partyName: 'Library 1',
      orderDate: '2024-09-08',
      status: 'Pending',
      totalAmount: 5000,
    },
    {
      salesOrderId: 2,
      salesOrderNo: 2,
      partyName: 'Library 2',
      orderDate: '2024-09-09',
      status: 'Completed',
      totalAmount: 7000,
    },
    {
      salesOrderId: 3,
      salesOrderNo: 3,
      partyName: 'Bookstore A',
      orderDate: '2024-09-10',
      status: 'Pending',
      totalAmount: 4500,
    },
    {
      salesOrderId: 4,
      salesOrderNo: 4,
      partyName: 'Library 3',
      orderDate: '2024-09-11',
      status: 'Shipped',
      totalAmount: 8000,
    },
    {
      salesOrderId: 5,
      salesOrderNo: 5,
      partyName: 'Bookstore B',
      orderDate: '2024-09-12',
      status: 'Pending',
      totalAmount: 6500,
    },
    {
      salesOrderId: 6,
      salesOrderNo: 6,
      partyName: 'Library 4',
      orderDate: '2024-09-13',
      status: 'Completed',
      totalAmount: 5500,
    },
    {
      salesOrderId: 7,
      salesOrderNo: 7,
      partyName: 'Book Depot',
      orderDate: '2024-09-14',
      status: 'Pending',
      totalAmount: 9000,
    },
    {
      salesOrderId: 8,
      salesOrderNo: 8,
      partyName: 'Library 5',
      orderDate: '2024-09-15',
      status: 'Shipped',
      totalAmount: 7500,
    },
    {
      salesOrderId: 9,
      salesOrderNo: 9,
      partyName: 'Bookstore C',
      orderDate: '2024-09-16',
      status: 'Pending',
      totalAmount: 6700,
    },
    {
      salesOrderId: 10,
      salesOrderNo: 10,
      partyName: 'Library 6',
      orderDate: '2024-09-17',
      status: 'Completed',
      totalAmount: 5800,
    },
    {
      salesOrderId: 11,
      salesOrderNo: 11,
      partyName: 'Library 7',
      orderDate: '2024-09-18',
      status: 'Pending',
      totalAmount: 6400,
    },
  ];
  return (
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
                    Sales Order ID
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
                    Party Name
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Total Amount
                  </th>

                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr
                    className="border-b border-neutral-200 dark:border-white/10"
                    key={item.salesOrderId}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.salesOrderId}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.salesOrderNo}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.partyName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.orderDate}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.status}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.totalAmount}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center gap-3">
                      <span className="bg-cyan-500 p-1 inline-block rounded-md">
                        <FaEye className="text-white text-xl" />
                      </span>{' '}
                      |
                      <span className="bg-amber-600 p-1 inline-block rounded-md">
                        <FaRegEdit className="text-white text-xl" />
                      </span>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleOrderList;
