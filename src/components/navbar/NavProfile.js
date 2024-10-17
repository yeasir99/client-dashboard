import { RxAvatar } from 'react-icons/rx';
const NavProfile = () => {
  return (
    <div className="flex items-center space-x-2 text-surface1">
      <div>
        <p className="text-sm">Good Afternoon,</p>
        <h1>Md. Abdur Rahim Rajib</h1>
      </div>
      <div>
        <RxAvatar className="text-5xl" />
      </div>
    </div>
  );
};

export default NavProfile;
