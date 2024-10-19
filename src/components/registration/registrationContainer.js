import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import Link from 'next/link';
import RegistrationForm from './registrationForm';

const RegestrationContainer = () => {
  return (
    <div className="bg-surface1 w-[872px] min-height-[557px] px-[142px] py-[86px] rounded-[30px] text-center">
      <SarinaFontWrapper>
        <h1 className="text-[30px] font-bold mb-2 text-primary">
          kazal Brothers Limited
        </h1>
      </SarinaFontWrapper>
      <h1 className="mainHeading text-[30px] mb-2">
        Welcome to kazal brothers limited
      </h1>
      <p className="text-text2 mb-8">
        Have an account?{' '}
        <Link className="text-primary font-bold" href="/">
          Login
        </Link>
      </p>
      <RegistrationForm />
    </div>
  );
};

export default RegestrationContainer;
