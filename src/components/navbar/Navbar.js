import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import NavItem from './NavItem';
const Navbar = () => {
  return (
    <div>
      <div>
        <div className="bg-primary ">
          <SarinaFontWrapper>
            <h1 className="text-surface1 text-xl text-center py-2">
              D - Logic Sale Force Application
            </h1>
          </SarinaFontWrapper>
        </div>
        <NavItem />
      </div>
    </div>
  );
};

export default Navbar;
