import Link from 'next/link';
import TadaManagement from '@/components/dashboard/TadaManagement';

const page = () => {
  return (
    <div>
      <h1 className="text-2xl capitalize mb-3">
        tA-DA &amp; other allowance management
      </h1>
      <div className="flex justify-between items-center">
        <Link href="/dashboard/ta-da/add">
          <button className="capitalize bg-primary px-2 py-1 text-white rounded-md">
            add new book category
          </button>
        </Link>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <TadaManagement />
    </div>
  );
};

export default page;