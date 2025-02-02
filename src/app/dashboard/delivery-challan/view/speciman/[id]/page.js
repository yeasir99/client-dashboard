"use client"
import axios from 'axios'
import {useState, useEffect} from 'react'
import convertDateFormat from '@/utils/convertDateFormat';
import formatAmountWithCommas from '@/utils/formatAmountWithCommas';
import Link from 'next/link';

const page = ({params}) => {
  const [state, setState] = useState({
    status: 'pending',
    data: null
  })

  const getData = async id =>{
    const res = await axios.get(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_ChallanOrderDetails&ChallanID=${id}`)
    setState({
      status: "idle",
      data: res.data
    })
  }

  useEffect(()=>{
    if(params.id){
      getData(params.id)
    }
  }, [params.id])

  if(state.status === 'pending'){
    return <div className='text-xl text-center font-semibold py-10'>Loading...</div>
  }

  return (
      <>
        <div className="flex justify-end">
          <Link
            href={`/dashboard/delivery-challan/preview/speciman/${params.id}`}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Preview
          </Link>
        </div>
        {state.data && (
          <div className="flex justify-center">
            <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
              <h1 className="text-center text-xl font-semibold mb-3">
               Challan
              </h1>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Date:</h1>
                <h1>{convertDateFormat(state.data.ChallanMaster.ChallanDate)}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Challan No:</h1>
                <h1>{state.data.ChallanMaster.ChallanNo}</h1>
              </div>
  
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Employee Name:</h1>
                <h1>{state.data.ChallanMaster.EmployeeName}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">status:</h1>
                <h1>{state.data.ChallanMaster.StatusName}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Address:</h1>
                <h1>{state.data.ChallanMaster.Address}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Contact Number:</h1>
                <h1>{state.data.ChallanMaster.ContactNumber}</h1>
              </div>
            </div>
          </div>
        )}
        
        {state.data && state.data.ChallanDetails && (
          <div className="inline-block max-w-full w-full pt-5">
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
                            Financial Year
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Product Name
                          </th>
  
                          <th scope="col" className="px-6 py-4">
                          Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.data.ChallanDetails.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.ChallanDetailID}
                          >
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.FinancialYear}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.ProductName}
                            </td>
  
                            <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3 font-medium">
                              {formatAmountWithCommas(
                                Number(item.ChallanQty)
                              )}
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
      </>
  )
}

export default page