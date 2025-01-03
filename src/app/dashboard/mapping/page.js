'use client';
import { useState } from 'react';
import MappingUser from '@/components/dashboard/mappingInternals/MappingUser';
import MappingRegion from '@/components/dashboard/mappingInternals/MappingRegion';
import axios from 'axios';
import MappedViewList from '@/components/dashboard/mappingInternals/MappedViewList';

const page = () => {
  const [mappingUser, setMappingUser] = useState({
    user: '',
    region: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = async () => {
    if (mappingUser.user && mappingUser.region) {
      setStatus('pending');
      const res = await axios.post(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_mapping',
        {
          UserID: mappingUser.user,
          RegionID: mappingUser.region,
        }
      );
      setStatus('idle');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Mapping Employee Vs Region</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* left start */}
        <div className="bg-gray-50 p-3 rounded-md">
          <h1 className="text-xl font-semibold">User Selection</h1>
          <MappingUser
            mappingUser={mappingUser}
            setMappingUser={setMappingUser}
          />
        </div>
        {/* right start */}
        <div className="p-3 rounded-md">
          <h1 className="text-xl font-semibold">Region Selection</h1>
          <MappingRegion
            mappingUser={mappingUser}
            setMappingUser={setMappingUser}
          />
        </div>
      </div>
      <button
        className="capitalize bg-primary px-5 py-1 text-white rounded-md w-full my-5"
        onClick={handleSubmit}
      >
        {status === 'pending' ? 'Saveing...' : 'Submit'}
      </button>

      {mappingUser.user ? (
        status === 'pending' ? (
          ''
        ) : (
          <MappedViewList id={mappingUser.user} />
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default page;
