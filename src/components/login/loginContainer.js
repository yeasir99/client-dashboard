import SarinaFontWrapper from '../sarinaF/sarinaFontWrapper';
import LoginForm from './loginForm';

const LoginContainer = () => {
  return (
    <div className="bg-surface1 w-[872px] min-height-[557px] px-[142px] py-[86px] rounded-[30px] text-center">
      <SarinaFontWrapper>
        <h1 className="text-[34px] font-bold mb-2 text-primary">
          Color is life
        </h1>
      </SarinaFontWrapper>

      <h1 className="mainHeading text-[30px] mb-2">Welcome to Ujala Paints</h1>
      <p className="text-text2 mb-8">
        Don't have an account?{' '}
        <span className="text-primary font-bold">Register</span>
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginContainer;
