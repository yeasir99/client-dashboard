const FyTable = () => {
  let data = [
    {
      id: 1,
      financialYear: 'financial year 2025',
      openingDate: '01-01-2024',
      closingDate: '31-12-2024',
      yearClosing: '0',
    },
    {
      id: 2,
      financialYear: 'financial year 2025',
      openingDate: '01-01-2025',
      closingDate: '31-12-2025',
      yearClosing: '0',
    },
    {
      id: 3,
      financialYear: 'financial year 2026',
      openingDate: '01-01-2026',
      closingDate: '31-12-2026',
      yearClosing: '0',
    },
    {
      id: 4,
      financialYear: 'financial year 2027',
      openingDate: '01-01-2027',
      closingDate: '31-12-2027',
      yearClosing: '0',
    },
    {
      id: 5,
      financialYear: 'financial year 2028',
      openingDate: '01-01-2028',
      closingDate: '31-12-2028',
      yearClosing: '0',
    },
    {
      id: 6,
      financialYear: 'financial year 2029',
      openingDate: '01-01-2029',
      closingDate: '31-12-2029',
      yearClosing: '0',
    },
    {
      id: 7,
      financialYear: 'financial year 2030',
      openingDate: '01-01-2030',
      closingDate: '31-12-2030',
      yearClosing: '0',
    },
    {
      id: 8,
      financialYear: 'financial year 2031',
      openingDate: '01-01-2031',
      closingDate: '31-12-2031',
      yearClosing: '0',
    },
    {
      id: 9,
      financialYear: 'financial year 2032',
      openingDate: '01-01-2032',
      closingDate: '31-12-2032',
      yearClosing: '0',
    },
    {
      id: 10,
      financialYear: 'financial year 2033',
      openingDate: '01-01-2033',
      closingDate: '31-12-2033',
      yearClosing: '0',
    },
    {
      id: 11,
      financialYear: 'financial year 2034',
      openingDate: '01-01-2034',
      closingDate: '31-12-2034',
      yearClosing: '0',
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
                    Financial Year
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    FY Opening Date
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    FY Closing Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    FY Closing Status
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
                      {item.financialYear}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.openingDate}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.closingDate}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.yearClosing}
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

export default FyTable;
