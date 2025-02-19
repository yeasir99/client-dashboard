'use client'
import useGetData from "@/utils/useGetData";
const page = () => {
  const {status, data} = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_user_statistics&UserID=501')
  console.log(data)
  if(status === 'pending'){
    return <div className="text-xl font-semibold text-center py-6">Loading...</div>
  }
  return (
    <div>
      <div className="flex justify-center">
            <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">No of Institution:</h1>
                    <h1>{data.No_of_Institution}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">No of Party:</h1>
                    <h1>{data.No_of_Party}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">Sales Target:</h1>
                    <h1>{data.Sales_Target}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">Sales Achievement:</h1>
                    <h1>{data.Sales_Achievement}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">Total Collection:</h1>
                    <h1>{data.Total_Collection}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">Business Development Expense:</h1>
                    <h1>{data.Business_Development_Expense}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">Specimen Expense:</h1>
                    <h1>{data.Specimen_Expense}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">TA Expense:</h1>
                    <h1>{data.TA_Expense}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">DA Expense:</h1>
                    <h1>{data.DA_Expense}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <h1 className="text-lg">Others Expense:</h1>
                    <h1>{data.Others_Expense}</h1>
                </div>
            </div>
        </div>
        {data.Institution_Visits.length > 0 && <div>
            <h1 className="text-xl font-semibold text-center pt-3">Institution Visit</h1>
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
                    Institution Type
                  </th>
                  
                  <th scope="col" className="px-6 py-4">
                  No of Institute Visit
                  </th>
                </tr>
              </thead>
              <tbody>
                { data.Institution_Visits.map((item, index) => (
                    <tr
                      className="border-b border-neutral-200 dark:border-white/10"
                      key={index}
                    >
                      <td className="whitespace-nowrap border-e border-neutral-200 px-2 py-4 font-medium dark:border-white/10">
                        {item.InstitutionType}
                      </td>
                      
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center items-end h-full gap-3">
                      {item.No_of_Institute_Visit}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
        </div> }
        
    </div>
  );
};

export default page;
