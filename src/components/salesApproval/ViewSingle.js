import React from 'react'

const ViewSingle = ({viewableData}) => {
    if(viewableData.status === 'pending'){
        return <div className="text-xl font-semibold text-center py-5">Loading...</div>
    }
  return (
    <>
        <div>
        <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Order Information
        </h1>
        {viewableData.data === null ? <div className="text-center text-xl font-semibold py-5">No Data to Display</div> : <>
            <div className="flex items-center gap-2">
          <h1 className="text-lg">Order Id:</h1>
          <h1>{viewableData.data.order.SalesOrderID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Order Number:</h1>
          <h1>{viewableData.data.order.SalesOrderNo}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Order Date:</h1>
          <h1>{viewableData.data.order.OrderDate}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Party Name:</h1>
          <h1>{viewableData.data.order.PartyName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Total Amount:</h1>
          <h1>{viewableData.data.order.TotalAmount}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Status:</h1>
          <h1>{viewableData.data.order.Status}</h1>
        </div>
        </>}
      </div>
    </div>
    </div>
{viewableData.data !== null && viewableData.data.orderDetails.length && (
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
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                    >
                      Price
                    </th>
                    
                    <th scope="col" className="px-6 py-4">
                    Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {viewableData.data.orderDetails.map(item => (
                    <tr className="border-b border-neutral-200 dark:border-white/10" key={item.SL}>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.FinancialYearID}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.ProductName}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.Quantity}
                    </td>
                    <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                      {item.Price}
                    </td>
                    
                    <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                      {Number(item.Price) * Number(item.Quantity)}
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
    </>
  )
}

export default ViewSingle