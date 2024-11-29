'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import MappingUser from '@/components/dashboard/MappingUser';
import MappingRegion from '@/components/dashboard/MappingRegion';

const page = () => {
  const [mappingUser, setMappingUser] = useState({
    user: '',
    region: '',
  });

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
          <MappingUser />
        </div>
        {/* right start */}
        <div>
          <MappingRegion />
        </div>
      </div>
    </div>
  );
};

export default page;
