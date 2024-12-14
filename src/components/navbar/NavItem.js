'use client';
import Link from 'next/link';
import { BiQrScan } from 'react-icons/bi';
import { MdOutlineEqualizer } from 'react-icons/md';
import { TiFlowParallel } from 'react-icons/ti';
import { usePathname } from 'next/navigation';
import { FaArrowRightLong } from 'react-icons/fa6';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const NavItem = () => {
  const pathName = usePathname();
  let updatedLink = [
    {
      name: 'Home',
      href: '/dashboard/',
      status: 'main',
    },
    {
      name: 'Security & Setting',
      status: 'accordion',
      internalLinks: [
        {
          name: 'Emoloyee Registration',
          href: '/dashboard/user-employee',
        },
        {
          name: 'User Role',
          href: '/dashboard/',
        },
        {
          name: 'Menu Entry',
          href: '/dashboard/',
        },
        {
          name: 'User Role Mapping',
          href: '/dashboard/',
        },
        {
          name: 'Role Menu Privileges',
          href: '/dashboard/',
        },
        {
          name: 'Approvals',
          href: '/dashboard/',
        },
        {
          name: 'Approvals Menu',
          href: '/dashboard/',
        },
        {
          name: 'User Approvals Privileges',
          href: '/dashboard/',
        },
      ],
    },
    {
      name: 'Master Setup',
      status: 'accordion',
      internalLinks: [
        {
          name: 'Financial Year',
          href: '/dashboard/financial-year',
        },
        {
          name: 'Designation',
          href: '/dashboard/designation',
        },
        {
          name: 'Region Type',
          href: '/dashboard/region-type',
        },
        {
          name: 'Region Area',
          href: '/dashboard/region-area',
        },
        {
          name: 'Institution Type',
          href: '/dashboard/institution-type',
        },
        {
          name: 'Institution',
          href: '/dashboard/institution',
        },
        {
          name: 'Books Group',
          href: '/dashboard/book-category',
        },
        {
          name: 'Book/Product',
          href: '/dashboard/book-management',
        },
        {
          name: 'Party Management',
          href: '/dashboard/party-management',
        },
        {
          name: 'Marketing Expense',
          href: '/dashboard/ta-da',
        },
        {
          name: 'Marketing Activity List',
          href: '/dashboard/purpose-management',
        },
        {
          name: 'Employee VS Region Mapping',
          href: '/dashboard/mapping',
        },
        // {
        //   name: 'Class Information',
        //   href: '/dashboard/class-management',
        // },
        // {
        //   name: 'Subject Information',
        //   href: '/dashboard/subject-management',
        // },
      ],
    },
    {
      name: 'Assign Visit Plans',
      href: '/dashboard/visit-plan',
      status: 'main',
    },
    {
      name: 'Visit Plans Approval',
      href: '/dashboard/visit-approval',
      status: 'main',
    },
    {
      name: 'Visit Entry',
      href: '/dashboard/visit-entry',
      status: 'main',
    },
    {
      name: 'Visit Approval',
      href: '/dashboard/visit-approval-inital',
      status: 'main',
    },
    // {
    //   name: 'Production Order',
    //   href: '/dashboard/production-order',
    //   status: 'main',
    // },
    {
      name: 'Product Receipt',
      href: '/dashboard/product-receipt',
      status: 'main',
    },
    {
      name: 'Sales Order',
      href: '/dashboard/sales-order',
      status: 'main',
    },
    {
      name: 'Sales Order Approval',
      href: '/dashboard/sales-order-approval',
      status: 'main',
    },
    {
      name: 'Sales Return',
      href: '/dashboard/sales-return',
      status: 'main',
    },
    {
      name: 'Delivery Chalan',
      href: '/dashboard/delivery-challan',
      status: 'main',
    },
    {
      name: 'Invoice/Bill',
      href: '/dashboard/invoice-bill',
      status: 'main',
    },
    {
      name: 'Invoice/Bill Approval',
      href: '/dashboard/',
      status: 'main',
    },
    {
      name: 'Money Receipt',
      href: '/dashboard/money-receipt',
      status: 'main',
    },
    {
      name: 'Specimen Order',
      href: '/dashboard/specimen',
      status: 'main',
    },
    {
      name: 'Specimen Approval',
      href: '/dashboard/',
      status: 'main',
    },
  ];
  let allLinks = [
    {
      section: 'Basic',
      icon: TiFlowParallel,
      links: [
        {
          name: 'financial year',
          href: '/dashboard/financial-year',
          status: 'main',
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
          name: 'Sales & Distribution Expense Ledger',
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
    <div>
      {updatedLink.map((item, index) =>
        item.status === 'main' ? (
          <div key={index}>
            <Link
              className="capitalize block text-sm text-white py-[2px] pl-12"
              href={item.href}
            >
              {item.name}
            </Link>
          </div>
        ) : (
          <Accordion key={index} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="text-white">
                  <div className="flex gap-2 items-center pl-12">
                    <FaArrowRightLong /> {item.name}
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {item.internalLinks.map((ele, id) => (
                  <div key={id}>
                    <Link
                      className="capitalize block text-sm text-white py-[2px] pl-12"
                      href={ele.href}
                    >
                      {ele.name}
                    </Link>
                  </div>
                ))}
                <div className="border border-gray-300 border-dashed my-2"></div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        )
      )}
    </div>
  );
};

export default NavItem;
