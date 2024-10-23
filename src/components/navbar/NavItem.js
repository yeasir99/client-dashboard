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
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              book category
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              books (Products)
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              party management
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              TA/DA allowance type
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              purpose category
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              mapping employee VS region
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              class info management
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              subject info management
            </span>
            <span
              className="capitalize block text-sm mb-0.5"
              href="/dashboard/financial-year"
            >
              specimen order
            </span>
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
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/financial-year"
              >
                assign visit plans
              </span>
              <span
                className="capitalize block text-sm mb-0.5"
                href="/dashboard/designation"
              >
                visit approval process
              </span>
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
