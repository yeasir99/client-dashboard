import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import NavItem from './NavItem';
import NavProfile from './NavProfile';
const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-3">
        <SarinaFontWrapper>
          <h1 className="text-surface1 text-2xl">KBL Publication</h1>
        </SarinaFontWrapper>
        <NavItem />
        <NavProfile />
      </div>
    </div>
  );
};

export default Navbar;
