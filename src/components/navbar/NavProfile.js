import { RxAvatar } from 'react-icons/rx';
const NavProfile = () => {
  return (
    <div className="flex items-center space-x-2 text-surface1">
      <div>
        <RxAvatar className="text-5xl" />
      </div>
      <div>
        <p className="text-sm">Welcome</p>
        <h1>Md. Abdur</h1>
      </div>
      <div>
        <button className="bg-surface2 text-black py-1.5 px-4 rounded-md ml-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavProfile;
