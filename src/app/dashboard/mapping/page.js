'use client';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const page = () => {
  const [selectNasa, setSelectNasa] = useState(false);
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
        <div className="bg-gray-400">
          <div className="flex items-center gap-3">
            <div onClick={() => setSelectNasa(!selectNasa)}>
              {selectNasa ? <FaPlus /> : <FaMinus />}
            </div>
            <input type="checkbox" />
            nasa
          </div>
        </div>
        {/* right start */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
