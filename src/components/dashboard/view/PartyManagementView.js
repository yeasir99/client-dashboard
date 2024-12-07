'use client';
import useGetData from '@/utils/useGetData';

const PartyManagementView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_party&PartyID=${id}`
  );
  console.log(data);
  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Party Information
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Party Name:</h1>
          <h1>{data.PartyName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Address:</h1>
          <h1>{data.Address}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">RegionID:</h1>
          <h1>{data.RegionID}</h1>
        </div>
        {data.ContactPersonName ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Contact Person Name:</h1>
            <h1>{data.ContactPersonName}</h1>
          </div>
        ) : (
          ''
        )}
        {data.ContactNumber ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Contact Number:</h1>
            <h1>{data.ContactNumber}</h1>
          </div>
        ) : (
          ''
        )}
        {data.Email ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Email:</h1>
            <h1>{data.Email}</h1>
          </div>
        ) : (
          ''
        )}
        {data.Website ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Website:</h1>
            <h1>{data.Website}</h1>
          </div>
        ) : (
          ''
        )}
        {data.OwnerName ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Owner Name:</h1>
            <h1>{data.OwnerName}</h1>
          </div>
        ) : (
          ''
        )}
        {data.OwnerPermanentAddress ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Owner Permanent Address:</h1>
            <h1>{data.OwnerPermanentAddress}</h1>
          </div>
        ) : (
          ''
        )}
        {data.OwnerCurrentAddress ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Owner Current Address:</h1>
            <h1>{data.OwnerCurrentAddress}</h1>
          </div>
        ) : (
          ''
        )}
        {data.OwnerContactNumber ? (
          <div className="flex items-center gap-2">
            <h1 className="text-lg">Owner Contact Number:</h1>
            <h1>{data.OwnerContactNumber}</h1>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default PartyManagementView;
