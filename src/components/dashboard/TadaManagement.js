import { FaEye, FaRegEdit } from 'react-icons/fa';

const TadaManagement = () => {
  let data = [
    {
      id: 1,
      allowanceType: 'Education',
    },
    {
      id: 2,
      allowanceType: 'Transportation',
    },
    {
      id: 3,
      allowanceType: 'Health',
    },
    {
      id: 4,
      allowanceType: 'Housing',
    },
    {
      id: 5,
      allowanceType: 'Food',
    },
    {
      id: 6,
      allowanceType: 'Internet',
    },
    {
      id: 7,
      allowanceType: 'Utilities',
    },
    {
      id: 8,
      allowanceType: 'Recreation',
    },
    {
      id: 9,
      allowanceType: 'Clothing',
    },
    {
      id: 10,
      allowanceType: 'Childcare',
    },
    {
      id: 11,
      allowanceType: 'Bonus',
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
                    TA/DA Allowance Type
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
                      {item.allowanceType}
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

export default TadaManagement;
