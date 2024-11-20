'use client';
import useGetData from '@/utils/useGetData';
const TaDaView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_tada_allowance&ID=${id}`
  );

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          TA DA Allowance Information
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Id:</h1>
          <h1>{data.ID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">TA/DA Allowance:</h1>
          <h1>{data.CategoryName}</h1>
        </div>
      </div>
    </div>
  );
};

export default TaDaView;
