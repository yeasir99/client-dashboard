import { FaEye, FaRegEdit } from 'react-icons/fa';

import React from 'react';

const RegionAreaTable = () => {
  let data = [
    {
      id: 1,
      regionName: 'Dhaka',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 2,
      regionName: 'Chattogram',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 3,
      regionName: 'Rajshahi',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 4,
      regionName: 'Sylhet',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 5,
      regionName: 'Barisal',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 6,
      regionName: 'Khulna',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 7,
      regionName: 'Rangpur',
      regionType: 'Division',
      parentRegion: 'None',
    },
    {
      id: 8,
      regionName: 'Cumilla',
      regionType: 'District',
      parentRegion: 'Chattogram',
    },
    {
      id: 9,
      regionName: 'Gazipur',
      regionType: 'District',
      parentRegion: 'Dhaka',
    },
    {
      id: 10,
      regionName: 'Narayanganj',
      regionType: 'District',
      parentRegion: 'Dhaka',
    },
    {
      id: 11,
      regionName: 'Mymensingh',
      regionType: 'Division',
      parentRegion: 'None',
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
                    Region Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Region Type
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    parent region
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
                      {item.regionName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.regionType}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.parentRegion}
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

export default RegionAreaTable;
