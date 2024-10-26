import { FaEye, FaRegEdit } from 'react-icons/fa';

import React from 'react';

const InstitutionManagement = () => {
  let data = [
    {
      id: 1,
      institution: 'Dhaka High School',
      institutionType: 'School',
      totalStudent: 700,
      contactPerson: 'John Doe',
      phone: '+8801711111111',
      assignedRegion: 'Dhaka Division',
      schoolImage: 'image',
    },
    {
      id: 2,
      institution: 'Chattogram Central College',
      institutionType: 'College',
      totalStudent: 1200,
      contactPerson: 'Jane Smith',
      phone: '+8801711111112',
      assignedRegion: 'Chattogram Division',
      schoolImage: 'image',
    },
    {
      id: 3,
      institution: 'Rajshahi University',
      institutionType: 'University',
      totalStudent: 8000,
      contactPerson: 'Alice Johnson',
      phone: '+8801711111113',
      assignedRegion: 'Rajshahi Division',
      schoolImage: 'image',
    },
    {
      id: 4,
      institution: 'Sylhet Technical Institute',
      institutionType: 'Technical Institute',
      totalStudent: 500,
      contactPerson: 'Robert Brown',
      phone: '+8801711111114',
      assignedRegion: 'Sylhet Division',
      schoolImage: 'image',
    },
    {
      id: 5,
      institution: 'Barisal Vocational School',
      institutionType: 'Vocational School',
      totalStudent: 300,
      contactPerson: 'Emily Davis',
      phone: '+8801711111115',
      assignedRegion: 'Barisal Division',
      schoolImage: 'image',
    },
    {
      id: 6,
      institution: 'Khulna Training Center',
      institutionType: 'Training Center',
      totalStudent: 450,
      contactPerson: 'Michael Wilson',
      phone: '+8801711111116',
      assignedRegion: 'Khulna Division',
      schoolImage: 'image',
    },
    {
      id: 7,
      institution: 'Rangpur Research Institute',
      institutionType: 'Research Institute',
      totalStudent: 200,
      contactPerson: 'Sophia Taylor',
      phone: '+8801711111117',
      assignedRegion: 'Rangpur Division',
      schoolImage: 'image',
    },
    {
      id: 8,
      institution: 'Cumilla Community College',
      institutionType: 'Community College',
      totalStudent: 600,
      contactPerson: 'Liam Martinez',
      phone: '+8801711111118',
      assignedRegion: 'Cumilla District',
      schoolImage: 'image',
    },
    {
      id: 9,
      institution: 'Gazipur Language School',
      institutionType: 'Language School',
      totalStudent: 150,
      contactPerson: 'Emma Anderson',
      phone: '+8801711111119',
      assignedRegion: 'Dhaka Division',
      schoolImage: 'image',
    },
    {
      id: 10,
      institution: 'Narayanganj Medical College',
      institutionType: 'Medical College',
      totalStudent: 900,
      contactPerson: 'Noah Thomas',
      phone: '+8801711111120',
      assignedRegion: 'Dhaka Division',
      schoolImage: 'image',
    },
    {
      id: 11,
      institution: 'Mymensingh Art School',
      institutionType: 'Art School',
      totalStudent: 250,
      contactPerson: 'Mia White',
      phone: '+8801711111121',
      assignedRegion: 'Mymensingh Division',
      schoolImage: 'image',
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <div className="inline-block max-w-full w-full pt-5">
          <div className="overflow-x-scroll">
            <table className="max-w-full overflow-x-scroll w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
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
                    Institution Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Institution Type
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Total Students
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Contact Person
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
                    Assigned Region
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    School Image
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
                      {item.institution}
                    </td>

                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.institutionType}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.totalStudent}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.contactPerson}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.phone}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.assignedRegion}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.schoolImage}
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

export default InstitutionManagement;
