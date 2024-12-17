'use client'
import useGetData from "@/utils/useGetData";

const SpecimanOrderView = ({id}) => {
    const { status, data } = useGetData(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_specimenorderssingle&SalesOrderID=${id}`
      );
      console.log(data)
      if (status === 'pending') {
        return <div>Loading...</div>;
      }
      return (
        <div className="flex justify-center">
          <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
            <h1 className="text-center text-xl font-semibold mb-3">
              Speciman Order Details
            </h1>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">Order Id:</h1>
              <h1>{data.length ? data[0].SalesOrderID : " "}</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">Order No:</h1>
              <h1>{data.length ? data[0].SalesOrderNo : " "}</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">Order Date:</h1>
              <h1>{data.length ? data[0].OrderDate : " "}</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">Party Name:</h1>
              <h1>{data.length ? data[0].partyname : " "}</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">Total Amount:</h1>
              <h1>{data.length ? data[0].TotalAmount : " "}</h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">status:</h1>
              <h1>{data.length ? data[0].status ? "Active" : "Pending" : " "}</h1>
            </div>
          </div>
        </div>
      );
}

export default SpecimanOrderView