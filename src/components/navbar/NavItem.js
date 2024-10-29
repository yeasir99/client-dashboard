'use client';
import Link from 'next/link';
import { BiQrScan } from 'react-icons/bi';
import { MdOutlineEqualizer } from 'react-icons/md';
import { TiFlowParallel } from 'react-icons/ti';
import { usePathname } from 'next/navigation';

const NavItem = () => {
  const pathName = usePathname();
  let allLinks = [
    {
      section: 'Basic',
      icon: TiFlowParallel,
      links: [
        {
          name: 'financial year',
          href: '/dashboard/financial-year',
        },
        {
          name: 'designation',
          href: '/dashboard/designation',
        },
        {
          name: 'user-Employee registration',
          href: '/dashboard/user-employee',
        },
        {
          name: 'region type',
          href: '/dashboard/region-type',
        },
        {
          name: 'region area',
          href: '/dashboard/region-area',
        },
        {
          name: 'Institution type',
          href: '/dashboard/institution-type',
        },
        {
          name: 'Institution',
          href: '/dashboard/institution',
        },
        {
          name: 'book category',
          href: '/dashboard/book-category',
        },
        {
          name: 'books (Products)',
          href: '/dashboard/book-management',
        },
        {
          name: 'party management',
          href: '/dashboard/party-management',
        },
        {
          name: 'TA/DA allowance type',
          href: '/dashboard/ta-da',
        },
        {
          name: 'purpose category',
          href: '/dashboard/purpose-management',
        },
        {
          name: 'mapping employee VS region',
          href: '/dashboard/mapping',
        },
        {
          name: 'class info management',
          href: '/dashboard/class-management',
        },
        {
          name: 'subject info management',
          href: '/dashboard/subject-management',
        },
        {
          name: 'specimen order',
          href: '/dashboard/specimen',
        },
      ],
    },
    {
      section: 'Transection',
      icon: MdOutlineEqualizer,
      links: [
        {
          name: 'assign visit plans',
          href: '/dashboard/visit-plan',
        },
        {
          name: 'visit approval process',
          href: '/dashboard/visit-approval',
        },
        {
          name: 'visit entry',
          href: '/dashboard/visit-entry',
        },
        {
          name: 'visit approval',
          href: '/dashboard/visit-approval-inital',
        },
        {
          name: 'production order',
          href: '/dashboard/production-order',
        },
        {
          name: 'product receipt',
          href: '/dashboard/product-receipt',
        },
        {
          name: 'sales orders',
          href: '/dashboard/sales-order',
        },
        {
          name: 'sales order approval process',
          href: '/dashboard/sales-order-approval',
        },
        {
          name: 'delivery challan',
          href: '/dashboard/delivery-challan',
        },
        {
          name: 'invoice/Bill',
          href: '/dashboard/invoice-bill',
        },
        {
          name: 'money receipt',
          href: '/dashboard/money-receipt',
        },
        {
          name: 'sales return',
          href: '/dashboard/sales-return',
        },
        {
          name: 'inventory transfer',
          href: '/dashboard/inventory-transfer',
        },
      ],
    },
    {
      section: 'Report',
      icon: BiQrScan,
      links: [
        {
          name: 'stock in-out report',
          href: '/dashboard/stock-in-out-report',
        },
        {
          name: 'current stock report',
          href: '/dashboard/current-stock-report',
        },
      ],
    },
  ];
  return (
    <div className="bg-gray-700">
      {allLinks.map((item, index) => (
        <div
          key={index}
          className={`${item.section === 'Transection' ? 'bg-gray-800' : ''}`}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div>
                <item.icon className="text-4xl pt-2 text-white" />
              </div>
              <h1 className="text-2xl text-white">{item.section}</h1>
            </div>
            <div className="flex flex-col ">
              {item.links.map((element, position) => (
                <Link
                  key={position}
                  className={`${
                    pathName === element.href ? 'bg-primary' : ' '
                  } capitalize block text-sm text-white py-[2px] pl-12`}
                  href={element.href}
                >
                  {element.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavItem;
