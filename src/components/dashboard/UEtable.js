'use client';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import useGetData from '@/utils/useGetData';
import axios from 'axios';

const UEtable = () => {
  const url =
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_sndUsers';
  const { status, data } = useGetData(url);
  if (status === 'pending') {
    return <div>Loading....</div>;
  }
  if (status === 'error') {
    return <div>something went wrong</div>;
  }

  const handleDeactive = async item => {
    const url = `https://kblsf.site/DLogicKBL/salesforce_api.php?action=update_sndUserStatus&UserID=${item.UserID}`;
    const res = await axios.put(url, { Status: false });
    if (res.status === 200) {
      window.location.reload();
    }
  };

  const handleActive = async item => {
    const url = `https://kblsf.site/DLogicKBL/salesforce_api.php?action=update_sndUserStatus&UserID=${item.UserID}`;
    const res = await axios.put(url, { Status: true });
    if (res.status === 200) {
      window.location.reload();
    }
  };

  console.log(data);

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
                    Employee_ID
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Name
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    username
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Reporting To
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
                      {item.DesignationID}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.Email}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.Phone}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.Username}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.ReportingToUserID}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center gap-3">
                      <div>
                        <span className="bg-cyan-500 p-1 inline-block rounded-md">
                          <FaEye className="text-white text-sm" />
                        </span>
                      </div>
                      |
                      <div>
                        <span className="bg-amber-600 p-1 inline-block rounded-md">
                          <FaRegEdit className="text-white text-sm" />
                        </span>
                      </div>
                      |
                      <div>
                        {item.Status === 1 ? (
                          <button
                            class="group relative z-0 h-10 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-6 py-2 text-neutral-50"
                            type="button"
                            onClick={() => handleDeactive(item)}
                          >
                            <span class="relative z-10">Deactive</span>
                            <span class="absolute inset-0 overflow-hidden rounded-md">
                              <span class="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                            </span>
                          </button>
                        ) : (
                          <button
                            class="group relative z-0 h-10 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"
                            type="button"
                            onClick={() => handleActive(item)}
                          >
                            <span class="relative z-10">Active</span>
                            <span class="absolute inset-0 overflow-hidden rounded-md">
                              <span class="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                            </span>
                          </button>
                        )}
                      </div>
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

export default UEtable;
