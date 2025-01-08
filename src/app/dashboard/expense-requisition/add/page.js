'use client';
import { useState } from 'react';

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">
          Add Business Development Expense Requisition
        </h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
