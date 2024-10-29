import { FaEye, FaRegEdit } from 'react-icons/fa';

const VisitApproval = () => {
  let data = [
    {
      id: 1,
      employeeName: 'Mr. Rahman',
      designation: 'ZM',
    },
    {
      id: 2,
      employeeName: 'Ms. Akter',
      designation: 'AM',
    },
    {
      id: 3,
      employeeName: 'Mr. Khan',
      designation: 'BM',
    },
    {
      id: 4,
      employeeName: 'Ms. Shoma',
      designation: 'ZM',
    },
    {
      id: 5,
      employeeName: 'Mr. Alam',
      designation: 'SM',
    },
    {
      id: 6,
      employeeName: 'Ms. Parvin',
      designation: 'AM',
    },
    {
      id: 7,
      employeeName: 'Mr. Saif',
      designation: 'BM',
    },
    {
      id: 8,
      employeeName: 'Ms. Hossain',
      designation: 'ZM',
    },
    {
      id: 9,
      employeeName: 'Mr. Islam',
      designation: 'AM',
    },
    {
      id: 10,
      employeeName: 'Ms. Sultana',
      designation: 'BM',
    },
    {
      id: 11,
      employeeName: 'Mr. Kabir',
      designation: 'SM',
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
                    Id
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Employee Name
                  </th>

                  <th scope="col" className="px-6 py-4">
                    Designation
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
                      {item.employeeName}
                    </td>

                    <td className="whitespace-nowrap">{item.designation}</td>
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

export default VisitApproval;
