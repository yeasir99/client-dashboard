'use client'
import Link from 'next/link';
import useGetData from '@/utils/useGetData';

const PendingOrderList = () => {
    const pendingData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_MoneyReceiptApproval&UserID=501')
  if (pendingData.status === 'pending') {
    return (
      <div className="text-xl font-semibold text-center py-5">Loading...</div>
    );
  }
  return (
    <>
        <h1 className="text-2xl capitalize mb-2">Pending list</h1>
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
                    Receipt No
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Date
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
                    Received Amount
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Approval Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Approval Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingData.data.length ? (
                  pendingData.data.map(item => (
                    <tr
                      className="border-b border-neutral-200 dark:border-white/10"
                      key={item.MRID}
                    >
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.MRID}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.MRNo}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.MRDate}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.PartyName}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.AmountReceived}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.Status}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                        {item.AppStatus === 1 ? (
                          <Link
                            href={
                                `/dashboard/money-receipt-approval/check/${item.MRID}`
                            }
                          >
                            <button className="bg-gray-300 px-1 py-[2px]">
                              check
                            </button>
                          </Link>
                        ) : item.AppStatus === 2 ? (
                          <Link href={
                            `/dashboard/money-receipt-approval/authorized/${item.MRID}`
                            }>
                            <button className="bg-gray-300 px-1 py-[2px]">
                              Approval
                            </button>
                          </Link>
                        ): (
                          <Link href={
                            `/dashboard/money-receipt-approval/approval/${item.MRID}`
                            }>
                            <button className="bg-gray-300 px-1 py-[2px]">
                              Approval
                            </button>
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className="text-center text-xl font-semibold">
                    No Data to Display
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PendingOrderList;
