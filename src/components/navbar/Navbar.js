import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import NavItem from './NavItem';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="bg-primary flex justify-center">
          <Image
            src="/images/anupom.jpg"
            height={20}
            width={119}
            alt="Brand Name"
          />
        </div>
        <div>
          <NavItem />
        </div>
      </div>
      <div className="bg-white">
        <h1 className="text-center py-1">
          D-Logic Sales & Distribution <br />
          with Sales Force
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
