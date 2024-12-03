'use client';
import useGetData from '@/utils/useGetData';
import Image from 'next/image';

const InstitutionManagementView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_institution&institutionID=${id}`
  );
  console.log(data);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        {data.InstitutionScanImageURL && (
          <div className="flex justify-center pb-3">
            <Image
              src={data.InstitutionScanImageURL}
              width={500}
              height={500}
              alt="Institution Photo"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
          <h1 className="text-center text-xl font-semibold mb-3">
            Institution Management Details
          </h1>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Id:</h1>
            <h1>{data.InstitutionID}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Institution Name:</h1>
            <h1>{data.InstitutionName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Total Students:</h1>
            <h1>{data.TotalStudents}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Address:</h1>
            <h1>{data.Address}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Contact Person Name:</h1>
            <h1>{data.ContactPersonName}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Contact Number:</h1>
            <h1>{data.ContactPhone}</h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg">status:</h1>
            <h1>{data.status ? 'Active' : 'Deactive'}</h1>
          </div>
          <div>
            <h1 className="text-xl py-3 ">Details:</h1>
            {data.details.length
              ? data.details.map((item, index) => (
                  <div key={index} className="py-3">
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg">Teacher Name:</h1>
                      <h1>{item.TeacherName}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg">Contact Phone:</h1>
                      <h1>{item.ContactPhone}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg">Designation:</h1>
                      <h1>{item.Designation}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg">Class Name:</h1>
                      <h1>{item.ClassName}</h1>
                    </div>
                  </div>
                ))
              : 'No details to display'}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionManagementView;
