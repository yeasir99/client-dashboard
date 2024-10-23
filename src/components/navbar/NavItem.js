import Link from 'next/link';
import { BiQrScan } from 'react-icons/bi';
import { MdOutlineEqualizer } from 'react-icons/md';
import { TiFlowParallel } from 'react-icons/ti';

const NavItem = () => {
  return (
    <div className="">
      <div className="flex gap-3 bg-gray-600 text-white py-2">
        <div>
          <TiFlowParallel className="text-4xl pt-2" />
        </div>
        <div>
          <h1 className="text-2xl mb-1 pt-1 font-semibold">Basic</h1>
          <div>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/financial-year"
            >
              financial year
            </Link>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/designation"
            >
              designation
            </Link>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/user-employee"
            >
              user-Employee registration
            </Link>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/region-type"
            >
              region type
            </Link>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/region-area"
            >
              region area
            </Link>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/institution-type"
            >
              Institution type
            </Link>
            <Link
              className="capitalize block text-md mb-1"
              href="/dashboard/institution"
            >
              Institution
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 bg-gray-800 text-white py-2">
          <div>
            <MdOutlineEqualizer className="text-4xl pt-2" />
          </div>
          <div>
            <h1 className="text-2xl mb-1 pt-1 font-semibold">Transection</h1>
            <div>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/financial-year"
              >
                financial year
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/designation"
              >
                designation
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/user-employee"
              >
                user-Employee registration
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/region-type"
              >
                region type
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/region-area"
              >
                region area
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/institution-type"
              >
                Institution type
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/institution"
              >
                Institution
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 bg-gray-700 text-white py-2">
          <div>
            <BiQrScan className="text-4xl pt-2" />
          </div>
          <div>
            <h1 className="text-2xl mb-1 pt-1 font-semibold">Report</h1>
            <div>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/financial-year"
              >
                financial year
              </Link>
              <Link
                className="capitalize block text-md mb-1"
                href="/dashboard/designation"
              >
                designation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
