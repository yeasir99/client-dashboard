import { FaEye, FaRegEdit } from 'react-icons/fa';

const UEtable = () => {
  let data = [
    {
      id: 1,
      employeeId: 'sm-101',
      name: 'John Doe',
      designation: 'Zonal Manager',
      email: 'johndoe@example.com',
      phone: '+8801711111111',
      userName: 'sm-101',
      reportingTo: 'Mr. Hasan',
    },
    {
      id: 2,
      employeeId: 'sm-102',
      name: 'Jane Smith',
      designation: 'Regional Manager',
      email: 'janesmith@example.com',
      phone: '+8801711111112',
      userName: 'sm-102',
      reportingTo: 'Mr. Rahim',
    },
    {
      id: 3,
      employeeId: 'sm-103',
      name: 'Alice Johnson',
      designation: 'Area Manager',
      email: 'alicejohnson@example.com',
      phone: '+8801711111113',
      userName: 'sm-103',
      reportingTo: 'Mr. Karim',
    },
    {
      id: 4,
      employeeId: 'sm-104',
      name: 'Robert Brown',
      designation: 'Branch Manager',
      email: 'robertbrown@example.com',
      phone: '+8801711111114',
      userName: 'sm-104',
      reportingTo: 'Mr. Hossain',
    },
    {
      id: 5,
      employeeId: 'sm-105',
      name: 'Emily Davis',
      designation: 'Assistant Manager',
      email: 'emilydavis@example.com',
      phone: '+8801711111115',
      userName: 'sm-105',
      reportingTo: 'Mr. Rahman',
    },
    {
      id: 6,
      employeeId: 'sm-106',
      name: 'Michael Wilson',
      designation: 'Sales Manager',
      email: 'michaelwilson@example.com',
      phone: '+8801711111116',
      userName: 'sm-106',
      reportingTo: 'Mr. Ahmed',
    },
    {
      id: 7,
      employeeId: 'sm-107',
      name: 'Sophia Taylor',
      designation: 'Field Officer',
      email: 'sophiataylor@example.com',
      phone: '+8801711111117',
      userName: 'sm-107',
      reportingTo: 'Mr. Rahim',
    },
    {
      id: 8,
      employeeId: 'sm-108',
      name: 'Liam Martinez',
      designation: 'Senior Executive',
      email: 'liammartinez@example.com',
      phone: '+8801711111118',
      userName: 'sm-108',
      reportingTo: 'Mr. Karim',
    },
    {
      id: 9,
      employeeId: 'sm-109',
      name: 'Emma Anderson',
      designation: 'Junior Executive',
      email: 'emmaanderson@example.com',
      phone: '+8801711111119',
      userName: 'sm-109',
      reportingTo: 'Mr. Hossain',
    },
    {
      id: 10,
      employeeId: 'sm-110',
      name: 'Noah Thomas',
      designation: 'Intern',
      email: 'noahthomas@example.com',
      phone: '+8801711111120',
      userName: 'sm-110',
      reportingTo: 'Mr. Rahman',
    },
    {
      id: 11,
      employeeId: 'sm-111',
      name: 'Mia White',
      designation: 'Customer Service',
      email: 'miawhite@example.com',
      phone: '+8801711111121',
      userName: 'sm-111',
      reportingTo: 'Mr. Ahmed',
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
                    Employee ID
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
                    email
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
                    User Name
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
                    key={item.id}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.employeeId}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.designation}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.phone}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.userName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.reportingTo}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex justify-between">
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

export default UEtable;
