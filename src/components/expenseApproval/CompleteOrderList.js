'use client'
import Link from "next/link"
import useGetData from "@/utils/useGetData"
import convertDateFormat from '@/utils/convertDateFormat';
import formatAmountWithCommas from '@/utils/formatAmountWithCommas';

const CompleteOrderList = () => {
const completedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_BDExpReqCompleteRejectCancelled&UserID=501')
  console.log(completedData)
    if(completedData.status === 'pending'){
        return <div className="text-xl font-semibold text-center py-5">Loading...</div>
    }
  return (
    <>
        <h1 className="text-2xl capitalize mb-2">Business Development Requisition Approval</h1>
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
                    BD Exp Req No.
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
                    Institution
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Total Amount
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
                  {completedData.data.length ? completedData.data.map(item =>(
                    <tr className="border-b border-neutral-200 dark:border-white/10" key={item.BDExpReqID}>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.BDExpReqID}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.BDExpReqNo}
                    </td>

                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {convertDateFormat(item.BDExpReqDate)}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                     {item.InstituteName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {formatAmountWithCommas(Number(item.TotalAmount))}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.Status}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                    <Link href={`/dashboard/expense-approval/view/${item.BDExpReqID}`}>
                      <button className="bg-gray-300 px-1 py-[2px]">
                        View
                      </button>
                    </Link>

                    </td>
                  </tr>
                  )) : <div className="text-center text-xl font-semibold">No Data to Display</div>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default CompleteOrderList