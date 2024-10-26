import { FaEye, FaRegEdit } from 'react-icons/fa';
const Specimen = () => {
  let data = [
    {
      id: 1,
      orderList: 'Bangla',
      name: 'Class One',
      orderDate: '2024-09-13',
      status: 'Pending',
      totalAmount: 5000,
    },
    {
      id: 2,
      orderList: 'English',
      name: 'Class One',
      orderDate: '2024-09-14',
      status: 'Completed',
      totalAmount: 6000,
    },
    {
      id: 3,
      orderList: 'Mathematics',
      name: 'Class Two',
      orderDate: '2024-09-15',
      status: 'Pending',
      totalAmount: 5500,
    },
    {
      id: 4,
      orderList: 'Science',
      name: 'Class Two',
      orderDate: '2024-09-16',
      status: 'Pending',
      totalAmount: 7000,
    },
    {
      id: 5,
      orderList: 'History',
      name: 'Class Three',
      orderDate: '2024-09-17',
      status: 'Completed',
      totalAmount: 8000,
    },
    {
      id: 6,
      orderList: 'Geography',
      name: 'Class Three',
      orderDate: '2024-09-18',
      status: 'Pending',
      totalAmount: 4500,
    },
    {
      id: 7,
      orderList: 'Computer Science',
      name: 'Class Four',
      orderDate: '2024-09-19',
      status: 'Pending',
      totalAmount: 6500,
    },
    {
      id: 8,
      orderList: 'Art',
      name: 'Class Four',
      orderDate: '2024-09-20',
      status: 'Completed',
      totalAmount: 4000,
    },
    {
      id: 9,
      orderList: 'Physical Education',
      name: 'Class Five',
      orderDate: '2024-09-21',
      status: 'Pending',
      totalAmount: 3000,
    },
    {
      id: 10,
      orderList: 'Music',
      name: 'Class Five',
      orderDate: '2024-09-22',
      status: 'Completed',
      totalAmount: 3500,
    },
    {
      id: 11,
      orderList: 'Islamic Studies',
      name: 'Class Six',
      orderDate: '2024-09-23',
      status: 'Pending',
      totalAmount: 5000,
    },
  ];
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
                    Id
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Specimen order list
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
                    key={item.id}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.orderList}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.name}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specimen;
