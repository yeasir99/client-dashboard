import { FaEye, FaRegEdit } from 'react-icons/fa';

const ClassManagement = () => {
  let data = [
    {
      id: 1,
      classInfo: 'Class One',
    },
    {
      id: 2,
      classInfo: 'Class Two',
    },
    {
      id: 3,
      classInfo: 'Class Three',
    },
    {
      id: 4,
      classInfo: 'Class Four',
    },
    {
      id: 5,
      classInfo: 'Class Five',
    },
    {
      id: 6,
      classInfo: 'Class Six',
    },
    {
      id: 7,
      classInfo: 'Class Seven',
    },
    {
      id: 8,
      classInfo: 'Class Eight',
    },
    {
      id: 9,
      classInfo: 'Class Nine',
    },
    {
      id: 10,
      classInfo: 'Class Ten',
    },
    {
      id: 11,
      classInfo: 'Class Eleven',
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
                    Class-Info
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
                      {item.classInfo}
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

export default ClassManagement;
