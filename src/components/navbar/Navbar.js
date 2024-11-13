import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import NavItem from './NavItem';
import Image from 'next/image';
const Navbar = () => {
  return (
    <div>
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
          <div className="bg-white">
            <h1 className="text-center py-1">
              D-Logic Sales & Distribution <br />
              with Sales Force
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
