import { FaEye, FaRegEdit } from 'react-icons/fa';

const BookManagement = () => {
  let data = [
    {
      id: 1,
      bookCategory: 'Education',
      title: 'English 1st',
      rate: 300,
    },
    {
      id: 2,
      bookCategory: 'Education',
      title: 'Mathematics Basics',
      rate: 350,
    },
    {
      id: 3,
      bookCategory: 'Science',
      title: 'Physics Fundamentals',
      rate: 500,
    },
    {
      id: 4,
      bookCategory: 'Science',
      title: 'Chemistry Essentials',
      rate: 450,
    },
    {
      id: 5,
      bookCategory: 'History',
      title: 'World History',
      rate: 400,
    },
    {
      id: 6,
      bookCategory: 'Geography',
      title: 'Physical Geography',
      rate: 320,
    },
    {
      id: 7,
      bookCategory: 'Computer Science',
      title: 'Introduction to Programming',
      rate: 600,
    },
    {
      id: 8,
      bookCategory: 'Biology',
      title: 'Biology for Beginners',
      rate: 420,
    },
    {
      id: 9,
      bookCategory: 'Literature',
      title: 'Classical Poems',
      rate: 380,
    },
    {
      id: 10,
      bookCategory: 'Art',
      title: 'Introduction to Art',
      rate: 250,
    },
    {
      id: 11,
      bookCategory: 'Language',
      title: 'Learn French',
      rate: 550,
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
                    Category
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    title
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    rate
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
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.title}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.rate}
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

export default BookManagement;
