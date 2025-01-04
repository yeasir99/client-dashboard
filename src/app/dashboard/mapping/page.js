'use client';
import { useState, useEffect } from 'react';
import MappingUser from '@/components/dashboard/mappingInternals/MappingUser';
import MappingRegion from '@/components/dashboard/mappingInternals/MappingRegion';
import axios from 'axios';
import MappedViewList from '@/components/dashboard/mappingInternals/MappedViewList';
import Link from 'next/link';

const page = () => {
  const [mappingUser, setMappingUser] = useState([]);
  const getmappedUsers = async () => {
    const res = await axios.get(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_allusermapregion'
    );
    if (res.data.success) {
      setMappingUser(res.data.data);
    }
  };

  useEffect(() => {
    getmappedUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Mapping Employee Vs Region</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="py-4">
        <Link
          href="/dashboard/mappingv2"
          className="py-2 px-5 text-white bg-primary rounded-md"
        >
          New Map
        </Link>
      </div>
      <div>
        {mappingUser.length && (
          <div>
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
                            Employee ID
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
                            Designation
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            User Role Name
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            District
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Thana
                          </th>

                          <th scope="col" className="px-6 py-4">
                            Area
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mappingUser.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.UserID}
                          >
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.UserID}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              {item.EmployeeID}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              {item.EmpName}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              {item.Designation}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              {item.UserRoleName}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              {item.District}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                              {item.Thana}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center gap-3">
                              {item.Area}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
