import { FaEye, FaRegEdit } from 'react-icons/fa';

import React from 'react';

const PurposeManagement = () => {
  let data = [
    {
      id: 1,
      purpose: 'Specimen',
    },
    {
      id: 2,
      purpose: 'Research',
    },
    {
      id: 3,
      purpose: 'Education',
    },
    {
      id: 4,
      purpose: 'Demonstration',
    },
    {
      id: 5,
      purpose: 'Analysis',
    },
    {
      id: 6,
      purpose: 'Testing',
    },
    {
      id: 7,
      purpose: 'Quality Control',
    },
    {
      id: 8,
      purpose: 'Training',
    },
    {
      id: 9,
      purpose: 'Exhibition',
    },
    {
      id: 10,
      purpose: 'Development',
    },
    {
      id: 11,
      purpose: 'Maintenance',
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
                    Purpose
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
                      {item.purpose}
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

export default PurposeManagement;
