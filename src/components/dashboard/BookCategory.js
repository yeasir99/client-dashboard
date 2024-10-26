import { FaEye, FaRegEdit } from 'react-icons/fa';

const BookCategory = () => {
  let data = [
    {
      id: 1,
      bookCategory: 'Bangla',
    },
    {
      id: 2,
      bookCategory: 'English',
    },
    {
      id: 3,
      bookCategory: 'Mathematics',
    },
    {
      id: 4,
      bookCategory: 'Science',
    },
    {
      id: 5,
      bookCategory: 'History',
    },
    {
      id: 6,
      bookCategory: 'Geography',
    },
    {
      id: 7,
      bookCategory: 'Computer Science',
    },
    {
      id: 8,
      bookCategory: 'Biology',
    },
    {
      id: 9,
      bookCategory: 'Chemistry',
    },
    {
      id: 10,
      bookCategory: 'Physics',
    },
    {
      id: 11,
      bookCategory: 'Art',
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
                    Books-Category
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
                      {item.bookCategory}
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

export default BookCategory;
