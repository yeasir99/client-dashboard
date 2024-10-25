import Link from 'next/link';
import DeliveryChallan from '@/components/dashboard/DeliveryChallan';

const page = () => {
  return (
    <div>
      <h1 className="text-2xl capitalize mb-3">delivery challan list</h1>
      <div className="flex justify-between items-center">
        <Link href="/dashboard/delivery-challan/add">
          <button className="capitalize bg-primary px-2 py-1 text-white rounded-md">
            Add New List
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
      <DeliveryChallan />
    </div>
  );
};

export default page;
