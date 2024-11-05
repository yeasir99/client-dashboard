import Navbar from '@/components/navbar/Navbar';
import NavProfile from '@/components/navbar/NavProfile';
import Footer from '@/components/Footer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');
  return (
    <div className="min-h-screen grid grid-cols-12 max-w-[1540px] mx-auto gap-[2px]">
      <div className="col-span-3 bg-gray-700">
        <Navbar />
      </div>
      <main className="bg-surface2 min-h-screen flex-grow col-span-9">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-end p-3 bg-primary">
              <NavProfile session={session} />
            </div>
            <div className="p-3">{children}</div>
          </div>
          <div className="order-last">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default layout;
