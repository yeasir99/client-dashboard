import { FaEye, FaRegEdit } from 'react-icons/fa';

const SalesReturn = () => {
  let data = [
    {
      returnID: 1,
      returnNumber: 'RET-2024-001',
      partyID: 'Library 1',
      returnDate: '2024-09-08',
      userID: '101',
    },
    {
      returnID: 2,
      returnNumber: 'RET-2024-002',
      partyID: 'Library 2',
      returnDate: '2024-09-09',
      userID: '102',
    },
    {
      returnID: 3,
      returnNumber: 'RET-2024-003',
      partyID: 'Bookstore A',
      returnDate: '2024-09-10',
      userID: '103',
    },
    {
      returnID: 4,
      returnNumber: 'RET-2024-004',
      partyID: 'Library 3',
      returnDate: '2024-09-11',
      userID: '104',
    },
    {
      returnID: 5,
      returnNumber: 'RET-2024-005',
      partyID: 'Bookstore B',
      returnDate: '2024-09-12',
      userID: '105',
    },
    {
      returnID: 6,
      returnNumber: 'RET-2024-006',
      partyID: 'Library 4',
      returnDate: '2024-09-13',
      userID: '106',
    },
    {
      returnID: 7,
      returnNumber: 'RET-2024-007',
      partyID: 'Book Depot',
      returnDate: '2024-09-14',
      userID: '107',
    },
    {
      returnID: 8,
      returnNumber: 'RET-2024-008',
      partyID: 'Library 5',
      returnDate: '2024-09-15',
      userID: '108',
    },
    {
      returnID: 9,
      returnNumber: 'RET-2024-009',
      partyID: 'Bookstore C',
      returnDate: '2024-09-16',
      userID: '109',
    },
    {
      returnID: 10,
      returnNumber: 'RET-2024-010',
      partyID: 'Library 6',
      returnDate: '2024-09-17',
      userID: '110',
    },
    {
      returnID: 11,
      returnNumber: 'RET-2024-011',
      partyID: 'Library 7',
      returnDate: '2024-09-18',
      userID: '111',
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
                    Return ID
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Return Number
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Party Id
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Return Date
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    User ID
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
                    key={item.returnID}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.returnID}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.returnNumber}
                    </td>

                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.partyID}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.returnDate}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.userID}
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
export default SalesReturn;
