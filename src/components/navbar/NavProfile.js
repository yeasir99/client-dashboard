import Avatar from './Avatar';
import Logout from './Logout';
const NavProfile = ({ session }) => {
  return (
    <div className="flex items-center space-x-2 text-surface1">
      <div>
        <Avatar userAvatar={session.user.avatar} />
      </div>
      <div>
        <p className="text-sm">Welcome</p>
        <h1>{session.user.name}</h1>
      </div>
      <Logout />
    </div>
  );
};

export default NavProfile;
