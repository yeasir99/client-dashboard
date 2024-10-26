import { FaEye, FaRegEdit } from 'react-icons/fa';

const PartyManagement = () => {
  let data = [
    {
      id: 1,
      partyName: 'Library 1',
      contactPerson: 'John Doe',
      phone: '+8801711111111',
      address: 'Mohammadpur, Dhaka',
      creditLimit: 300000,
      deposit: 300000,
      openingBalance: 20000,
    },
    {
      id: 2,
      partyName: 'Book Store A',
      contactPerson: 'Jane Smith',
      phone: '+8801711111112',
      address: 'Banani, Dhaka',
      creditLimit: 250000,
      deposit: 250000,
      openingBalance: 15000,
    },
    {
      id: 3,
      partyName: 'Educational Hub',
      contactPerson: 'Alice Johnson',
      phone: '+8801711111113',
      address: 'Gulshan, Dhaka',
      creditLimit: 350000,
      deposit: 350000,
      openingBalance: 30000,
    },
    {
      id: 4,
      partyName: 'Knowledge Point',
      contactPerson: 'Robert Brown',
      phone: '+8801711111114',
      address: 'Uttara, Dhaka',
      creditLimit: 400000,
      deposit: 400000,
      openingBalance: 25000,
    },
    {
      id: 5,
      partyName: 'Library 2',
      contactPerson: 'Emily Davis',
      phone: '+8801711111115',
      address: 'Mirpur, Dhaka',
      creditLimit: 200000,
      deposit: 200000,
      openingBalance: 10000,
    },
    {
      id: 6,
      partyName: 'Books & Beyond',
      contactPerson: 'Michael Wilson',
      phone: '+8801711111116',
      address: 'Dhanmondi, Dhaka',
      creditLimit: 300000,
      deposit: 300000,
      openingBalance: 15000,
    },
    {
      id: 7,
      partyName: 'Study Zone',
      contactPerson: 'Sophia Taylor',
      phone: '+8801711111117',
      address: 'Bashundhara, Dhaka',
      creditLimit: 280000,
      deposit: 280000,
      openingBalance: 12000,
    },
    {
      id: 8,
      partyName: 'Book Haven',
      contactPerson: 'Liam Martinez',
      phone: '+8801711111118',
      address: 'Tejgaon, Dhaka',
      creditLimit: 270000,
      deposit: 270000,
      openingBalance: 17000,
    },
    {
      id: 9,
      partyName: 'Textbook Hub',
      contactPerson: 'Emma Anderson',
      phone: '+8801711111119',
      address: 'Badda, Dhaka',
      creditLimit: 320000,
      deposit: 320000,
      openingBalance: 14000,
    },
    {
      id: 10,
      partyName: 'Scholarly Source',
      contactPerson: 'Noah Thomas',
      phone: '+8801711111120',
      address: 'Paltan, Dhaka',
      creditLimit: 260000,
      deposit: 260000,
      openingBalance: 18000,
    },
    {
      id: 11,
      partyName: 'The Book Spot',
      contactPerson: 'Mia White',
      phone: '+8801711111121',
      address: 'Khilgaon, Dhaka',
      creditLimit: 230000,
      deposit: 230000,
      openingBalance: 16000,
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
                    Party Name
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
                    Address
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Credit Limit
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Deposit Amount
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Opening Balance
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
                      {item.partyName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.contactPerson}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.phone}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.address}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.creditLimit} BDT
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.deposit} BDT
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.openingBalance} BDT
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

export default PartyManagement;
