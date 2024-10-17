import Link from 'next/link';

const NavItem = () => {
  return (
    <div className="flex space-x-5 text-surface1 text-sm">
      <Link href="/dashboard/">Home</Link>
      <Link href="/dashboard/target">Daily Target</Link>
      <Link href="/dashboard/notification">Notification List</Link>
      <div>logout</div>
    </div>
  );
};

export default NavItem;
