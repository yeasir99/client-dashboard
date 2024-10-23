import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1 className="text-2xl capitalize mb-3">institution management</h1>
      <div className="flex justify-between items-center">
        <Link href="/dashboard/institution/add">
          <button className="capitalize bg-primary px-2 py-1 text-white rounded-md">
            add new institution
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
    </div>
  );
};

export default page;
