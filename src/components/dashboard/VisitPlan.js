import { FaEye, FaRegEdit } from 'react-icons/fa';

const VisitPlan = () => {
  let data = [
    {
      id: 1,
      visitDate: '2024-09-13',
      employeeName: 'Mr. Rahman',
      place: 'Dhaka High School',
      visitArea: 'Uttara',
      purpose: 'Promotional Expense',
      approvalStatus: 'Pending',
      createdBy: 'loginUser',
    },
    {
      id: 2,
      visitDate: '2024-09-14',
      employeeName: 'Ms. Akter',
      place: 'Bashundhara School',
      visitArea: 'Bashundhara',
      purpose: 'Event Coordination',
      approvalStatus: 'Approved',
      createdBy: 'adminUser',
    },
    {
      id: 3,
      visitDate: '2024-09-15',
      employeeName: 'Mr. Khan',
      place: 'Gulshan College',
      visitArea: 'Gulshan',
      purpose: 'Promotional Expense',
      approvalStatus: 'Pending',
      createdBy: 'loginUser',
    },
    {
      id: 4,
      visitDate: '2024-09-16',
      employeeName: 'Ms. Shoma',
      place: 'Mirpur School',
      visitArea: 'Mirpur',
      purpose: 'Training',
      approvalStatus: 'Completed',
      createdBy: 'managerUser',
    },
    {
      id: 5,
      visitDate: '2024-09-17',
      employeeName: 'Mr. Alam',
      place: 'Banani High School',
      visitArea: 'Banani',
      purpose: 'Promotional Expense',
      approvalStatus: 'Pending',
      createdBy: 'loginUser',
    },
    {
      id: 6,
      visitDate: '2024-09-18',
      employeeName: 'Ms. Parvin',
      place: 'Dhanmondi Tutorial',
      visitArea: 'Dhanmondi',
      purpose: 'Market Research',
      approvalStatus: 'Approved',
      createdBy: 'adminUser',
    },
    {
      id: 7,
      visitDate: '2024-09-19',
      employeeName: 'Mr. Saif',
      place: 'Uttara Model College',
      visitArea: 'Uttara',
      purpose: 'Event Coordination',
      approvalStatus: 'Pending',
      createdBy: 'managerUser',
    },
    {
      id: 8,
      visitDate: '2024-09-20',
      employeeName: 'Ms. Hossain',
      place: 'Motijheel Ideal School',
      visitArea: 'Motijheel',
      purpose: 'Promotional Expense',
      approvalStatus: 'Completed',
      createdBy: 'loginUser',
    },
    {
      id: 9,
      visitDate: '2024-09-21',
      employeeName: 'Mr. Islam',
      place: 'Tejgaon College',
      visitArea: 'Tejgaon',
      purpose: 'Training',
      approvalStatus: 'Pending',
      createdBy: 'managerUser',
    },
    {
      id: 10,
      visitDate: '2024-09-22',
      employeeName: 'Ms. Sultana',
      place: 'Khilgaon High School',
      visitArea: 'Khilgaon',
      purpose: 'Promotional Expense',
      approvalStatus: 'Approved',
      createdBy: 'adminUser',
    },
    {
      id: 11,
      visitDate: '2024-09-23',
      employeeName: 'Mr. Kabir',
      place: 'Mirpur College',
      visitArea: 'Mirpur',
      purpose: 'Market Research',
      approvalStatus: 'Pending',
      createdBy: 'loginUser',
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
                    Visit Data
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
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Approval status
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Created By
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
                      {item.visitDate}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.employeeName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.place}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.visitArea}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.purpose}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.approvalStatus}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.createdBy}
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

export default VisitPlan;
