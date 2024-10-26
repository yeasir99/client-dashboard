import { FaEye, FaRegEdit } from 'react-icons/fa';

const ProductReceiptList = () => {
  let data = [
    {
      receiptNo: 1,
      receiptDate: '10-01-2024',
      productionRef: 'PRD-2024-001',
      print: 'LOT-001',
      financialYear: 'FY-2024',
      productGroup: 'English 1st',
      productName: 'English 1st',
      quantity: 500,
    },
    {
      receiptNo: 2,
      receiptDate: '11-01-2024',
      productionRef: 'PRD-2024-002',
      print: 'LOT-002',
      financialYear: 'FY-2024',
      productGroup: 'Mathematics',
      productName: 'Mathematics',
      quantity: 600,
    },
    {
      receiptNo: 3,
      receiptDate: '12-01-2024',
      productionRef: 'PRD-2024-003',
      print: 'LOT-003',
      financialYear: 'FY-2024',
      productGroup: 'Science',
      productName: 'Science',
      quantity: 700,
    },
    {
      receiptNo: 4,
      receiptDate: '13-01-2024',
      productionRef: 'PRD-2024-004',
      print: 'LOT-004',
      financialYear: 'FY-2024',
      productGroup: 'History',
      productName: 'History',
      quantity: 800,
    },
    {
      receiptNo: 5,
      receiptDate: '14-01-2024',
      productionRef: 'PRD-2024-005',
      print: 'LOT-005',
      financialYear: 'FY-2024',
      productGroup: 'Geography',
      productName: 'Geography',
      quantity: 750,
    },
    {
      receiptNo: 6,
      receiptDate: '15-01-2024',
      productionRef: 'PRD-2024-006',
      print: 'LOT-006',
      financialYear: 'FY-2024',
      productGroup: 'Biology',
      productName: 'Biology',
      quantity: 550,
    },
    {
      receiptNo: 7,
      receiptDate: '16-01-2024',
      productionRef: 'PRD-2024-007',
      print: 'LOT-007',
      financialYear: 'FY-2024',
      productGroup: 'Physics',
      productName: 'Physics',
      quantity: 500,
    },
    {
      receiptNo: 8,
      receiptDate: '17-01-2024',
      productionRef: 'PRD-2024-008',
      print: 'LOT-008',
      financialYear: 'FY-2024',
      productGroup: 'Chemistry',
      productName: 'Chemistry',
      quantity: 650,
    },
    {
      receiptNo: 9,
      receiptDate: '18-01-2024',
      productionRef: 'PRD-2024-009',
      print: 'LOT-009',
      financialYear: 'FY-2024',
      productGroup: 'Accounting',
      productName: 'Accounting',
      quantity: 600,
    },
    {
      receiptNo: 10,
      receiptDate: '19-01-2024',
      productionRef: 'PRD-2024-010',
      print: 'LOT-010',
      financialYear: 'FY-2024',
      productGroup: 'Business Studies',
      productName: 'Business Studies',
      quantity: 450,
    },
    {
      receiptNo: 11,
      receiptDate: '20-01-2024',
      productionRef: 'PRD-2024-011',
      print: 'LOT-011',
      financialYear: 'FY-2024',
      productGroup: 'Bangla',
      productName: 'Bangla',
      quantity: 700,
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
                    Receipt No
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Receipt Date
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Production Order Ref
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Print
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
                    Product Group
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Quantity
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
                    key={item.receiptNo}
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.receiptNo}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.receiptDate}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.productionRef}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.print}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.financialYear}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.productGroup}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.productName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                      {item.quantity}
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

export default ProductReceiptList;
