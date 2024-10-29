import { FaEye, FaRegEdit } from 'react-icons/fa';
const MoneyReceipt = () => {
  let data = [
    {
      receiptId: 1,
      receiptNumber: 1,
      partyName: 'Library 1',
      receiptDate: '2024-09-08',
      amountReceived: 15000,
      paymentMethod: 'Bank Transfer',
      receivedBy: 3,
    },
    {
      receiptId: 2,
      receiptNumber: 2,
      partyName: 'Library 2',
      receiptDate: '2024-09-09',
      amountReceived: 12000,
      paymentMethod: 'Cash',
      receivedBy: 4,
    },
    {
      receiptId: 3,
      receiptNumber: 3,
      partyName: 'Bookstore A',
      receiptDate: '2024-09-10',
      amountReceived: 17000,
      paymentMethod: 'Credit Card',
      receivedBy: 5,
    },
    {
      receiptId: 4,
      receiptNumber: 4,
      partyName: 'Library 3',
      receiptDate: '2024-09-11',
      amountReceived: 14000,
      paymentMethod: 'Bank Transfer',
      receivedBy: 6,
    },
    {
      receiptId: 5,
      receiptNumber: 5,
      partyName: 'Bookstore B',
      receiptDate: '2024-09-12',
      amountReceived: 11000,
      paymentMethod: 'Cash',
      receivedBy: 7,
    },
    {
      receiptId: 6,
      receiptNumber: 6,
      partyName: 'Library 4',
      receiptDate: '2024-09-13',
      amountReceived: 16000,
      paymentMethod: 'Credit Card',
      receivedBy: 8,
    },
    {
      receiptId: 7,
      receiptNumber: 7,
      partyName: 'Book Depot',
      receiptDate: '2024-09-14',
      amountReceived: 13500,
      paymentMethod: 'Bank Transfer',
      receivedBy: 9,
    },
    {
      receiptId: 8,
      receiptNumber: 8,
      partyName: 'Library 5',
      receiptDate: '2024-09-15',
      amountReceived: 12500,
      paymentMethod: 'Cash',
      receivedBy: 10,
    },
    {
      receiptId: 9,
      receiptNumber: 9,
      partyName: 'Bookstore C',
      receiptDate: '2024-09-16',
      amountReceived: 14500,
      paymentMethod: 'Credit Card',
      receivedBy: 11,
    },
    {
      receiptId: 10,
      receiptNumber: 10,
      partyName: 'Library 6',
      receiptDate: '2024-09-17',
      amountReceived: 15500,
      paymentMethod: 'Bank Transfer',
      receivedBy: 12,
    },
    {
      receiptId: 11,
      receiptNumber: 11,
      partyName: 'Library 7',
      receiptDate: '2024-09-18',
      amountReceived: 13000,
      paymentMethod: 'Cash',
      receivedBy: 13,
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
                    Receipt Id
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Receipt Number
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
                    Receipt Date
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Amount Received
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Received By
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
                    key={item.receiptId}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.receiptId}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.receiptNumber}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.partyName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.receiptDate}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.amountReceived}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.paymentMethod}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.receivedBy}
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

export default MoneyReceipt;
