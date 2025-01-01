import UEtable from '@/components/dashboard/UEtable';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-2xl capitalize mb-3">Employee Registration</h1>
      <div className="flex justify-between items-center">
        <Link href="/dashboard/user-employee/add">
          <button className="capitalize bg-primary px-2 py-1 text-white rounded-md">
            add new User
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
      {session.user.id && <UEtable userId={session.user.id} />}
    </div>
  );
};

export default page;
