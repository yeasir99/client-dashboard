import { FaEye, FaRegEdit } from 'react-icons/fa';

import React from 'react';

const SubjectManagement = () => {
  let data = [
    {
      id: 1,
      subjectInfo: 'Bangla',
      classInfo: 'Class One',
    },
    {
      id: 2,
      subjectInfo: 'English',
      classInfo: 'Class One',
    },
    {
      id: 3,
      subjectInfo: 'Mathematics',
      classInfo: 'Class Two',
    },
    {
      id: 4,
      subjectInfo: 'Science',
      classInfo: 'Class Two',
    },
    {
      id: 5,
      subjectInfo: 'History',
      classInfo: 'Class Three',
    },
    {
      id: 6,
      subjectInfo: 'Geography',
      classInfo: 'Class Three',
    },
    {
      id: 7,
      subjectInfo: 'Computer Science',
      classInfo: 'Class Four',
    },
    {
      id: 8,
      subjectInfo: 'Art',
      classInfo: 'Class Four',
    },
    {
      id: 9,
      subjectInfo: 'Physical Education',
      classInfo: 'Class Five',
    },
    {
      id: 10,
      subjectInfo: 'Music',
      classInfo: 'Class Five',
    },
    {
      id: 11,
      subjectInfo: 'Islamic Studies',
      classInfo: 'Class Six',
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
                    Subject-Info
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
                      {item.subjectInfo}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.classInfo}
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

export default SubjectManagement;
