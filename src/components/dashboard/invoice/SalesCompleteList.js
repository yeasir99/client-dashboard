import useGetData from "@/utils/useGetData"
import Link from "next/link"
import convertDateFormat from "@/utils/convertDateFormat"
import formatAmountWithCommas from "@/utils/formatAmountWithCommas"

const SalesCompleteList = () => {
    const {status, data} = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_invoiceSalesOrder')
    if(status === 'pending'){
        return <div className="text-xl fonr-semibold text-center py-3">Loading...</div>
    }
    console.log(data)
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
                        Invoice ID
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Invoice No
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Invoice Date
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Challan No
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Party Name
                      </th>
    
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 && data.map(item => (
                      <tr
                        className="border-b border-neutral-200 dark:border-white/10"
                        key={item.InvoiceID}
                      >
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          {item.InvoiceID}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                          {item.InvoiceNo}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                          {convertDateFormat(item.InvoiceDate)}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                          {item.ChallanNo}
                        </td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                          {item.PartyName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 flex justify-center items-center gap-3">
                        <Link href={`/dashboard/invoice-bill/view/sales/${item.SalesOrderID}`}>
                            <button className="px-4 py-2 bg-black text-white rounded-md">View</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SalesCompleteList