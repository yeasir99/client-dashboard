import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="bg-surface2 h-full flex-grow">
        <div className="max-w-[1440px] mx-auto h-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default layout;
