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
            width={118}
            alt="Brand Name"
          />
        </div>
        <NavItem />
      </div>
    </div>
  );
};

export default Navbar;
