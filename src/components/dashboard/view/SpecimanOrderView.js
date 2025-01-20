'use client';
import useGetData from '@/utils/useGetData';

const SpecimanOrderView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_order&SalesOrderID=${id}`
  );
  const { order, orderDetails } = data;
  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
          <h1 className="text-center text-xl font-semibold mb-3">
            Speciman Order Details
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Order Id:</h1>
            <h1>{order.SalesOrderID}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Order No:</h1>
            <h1>{order.SalesOrderNo}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Order Date:</h1>
            <h1>{order.OrderDate}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Speciman User Name:</h1>
            <h1>{order.SpecimenUserName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Total Amount:</h1>
            <h1>{order.TotalAmount}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">status:</h1>
            <h1>{order.Status}</h1>
          </div>
        </div>
      </div>
      {orderDetails && orderDetails.length && (
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
                      {orderDetails.map(item => (
                        <tr
                          className="border-b border-neutral-200 dark:border-white/10"
                          key={item.SL}
                        >
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
        </div>
      )}
    </>
  );
};

export default SpecimanOrderView;
