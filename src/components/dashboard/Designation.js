import { FaEye, FaRegEdit } from 'react-icons/fa';
const Designation = () => {
  let data = [
    {
      id: 1,
      designation: 'Mark',
    },
    {
      id: 2,
      designation: 'John',
    },
    {
      id: 3,
      designation: 'Alice',
    },
    {
      id: 4,
      designation: 'Sophia',
    },
    {
      id: 5,
      designation: 'David',
    },
    {
      id: 6,
      designation: 'Emma',
    },
    {
      id: 7,
      designation: 'Michael',
    },
    {
      id: 8,
      designation: 'Olivia',
    },
    {
      id: 9,
      designation: 'Daniel',
    },
    {
      id: 10,
      designation: 'Liam',
    },
    {
      id: 11,
      designation: 'Mia',
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
                    Designation
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
                      {item.designation}
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

export default Designation;
