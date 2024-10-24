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
          <h1 className="text-2xl mb-1 pt-1 ">Basic</h1>
          <div>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              financial year
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/designation"
            >
              designation
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/user-employee"
            >
              user-Employee registration
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/region-type"
            >
              region type
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/region-area"
            >
              region area
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/institution-type"
            >
              Institution type
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/institution"
            >
              Institution
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/book-category"
            >
              book category
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/book-management"
            >
              books (Products)
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/party-management"
            >
              party management
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/ta-da"
            >
              TA/DA allowance type
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/purpose-management"
            >
              purpose category
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/mapping"
            >
              mapping employee VS region
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/class-management"
            >
              class info management
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/subject-management"
            >
              subject info management
            </Link>
            <Link
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/specimen"
            >
              specimen order
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
            <h1 className="text-2xl mb-1 pt-1">Transection</h1>
            <div>
              <Link
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/visit-plan"
              >
                assign visit plans
              </Link>
              <Link
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/visit-approval"
              >
                visit approval process
              </Link>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/user-employee"
              >
                visit entry
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/region-type"
              >
                visit approval
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/region-area"
              >
                production order
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution-type"
              >
                product receipt
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                sales orders
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                sales order approval process
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                delivery challan
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                invoice/Bill
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                money receipt
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                sales return
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                damage product/Book
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/institution"
              >
                inventory transfer
              </span>
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
            <h1 className="text-2xl mb-1 pt-1">Report</h1>
            <div>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/financial-year"
              >
                stock in-Out report
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/designation"
              >
                current stock report
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
