import { FaEye, FaRegEdit } from 'react-icons/fa';

const INTtable = () => {
  let data = [
    {
      id: 1,
      institutionType: 'School',
    },
    {
      id: 2,
      institutionType: 'College',
    },
    {
      id: 3,
      institutionType: 'University',
    },
    {
      id: 4,
      institutionType: 'Technical Institute',
    },
    {
      id: 5,
      institutionType: 'Vocational School',
    },
    {
      id: 6,
      institutionType: 'Training Center',
    },
    {
      id: 7,
      institutionType: 'Research Institute',
    },
    {
      id: 8,
      institutionType: 'Community College',
    },
    {
      id: 9,
      institutionType: 'Language School',
    },
    {
      id: 10,
      institutionType: 'Medical College',
    },
    {
      id: 11,
      institutionType: 'Art School',
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
                    Institution-Type
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
                      {item.institutionType}
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

export default INTtable;
