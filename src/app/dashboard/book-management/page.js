import Link from 'next/link';
import BookManagement from '@/components/dashboard/BookManagement';

const page = () => {
  return (
    <div>
      <h1 className="text-2xl capitalize mb-3">book management</h1>
      <div className="flex justify-between items-center">
        <Link href="/dashboard/book-management/add">
          <button className="capitalize bg-primary px-2 py-1 text-white rounded-md">
            add new books
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
      <BookManagement />
    </div>
  );
};

export default page;
