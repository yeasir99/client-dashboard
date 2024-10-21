import Link from 'next/link';

const NavItem = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-xl mb-1">Basic</h1>
        <div>
          <Link
            className="capitalize block text-sm"
            href="/dashboard/financial-year"
          >
            financial year
          </Link>
          <Link
            className="capitalize block text-sm"
            href="/dashboard/designation"
          >
            designation
          </Link>
          <Link
            className="capitalize block text-sm"
            href="/dashboard/user-employee"
          >
            user-Employee registration
          </Link>
          <Link
            className="capitalize block text-sm"
            href="/dashboard/region-type"
          >
            region type
          </Link>
          <Link
            className="capitalize block text-sm"
            href="/dashboard/region-area"
          >
            region area
          </Link>
          <Link
            className="capitalize block text-sm"
            href="/dashboard/institution-type"
          >
            Institution type
          </Link>
        </div>
      </div>
      <div>
        <h1>Transection</h1>
      </div>
      <div>
        <h1>Report</h1>
      </div>
    </div>
  );
};

export default NavItem;
