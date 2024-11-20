'use client';
import useGetData from '@/utils/useGetData';
const SubjectInfoView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_subjectinfo&ID=${id}`
  );
  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Subject Info Information
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Id:</h1>
          <h1>{data.ID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Subject Name:</h1>
          <h1>{data.SubjectName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Class-Info Id:</h1>
          <h1>{data.sndClassID}</h1>
        </div>
      </div>
    </div>
  );
};

export default SubjectInfoView;
