import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import LoginForm from './loginForm';
import Link from 'next/link';

const LoginContainer = () => {
  return (
    <div className="bg-surface1 w-[872px] min-height-[557px] px-[142px] py-[86px] rounded-[30px] text-center">
      <SarinaFontWrapper>
        <h1 className="text-[30px] font-semibold mb-2 text-primary capitalize text-center">
          D-Logic Sales & Distribution <br />
          with Sales Force
        </h1>
      </SarinaFontWrapper>

      <h1 className="mainHeading text-[30px] mb-2 capitalize">
        Welcome to kazal brothers limited
      </h1>
      <p className="text-text2 mb-8">
        Don't have an account?{' '}
        <Link className="text-primary font-bold" href="/sign-up">
          Register
        </Link>
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
