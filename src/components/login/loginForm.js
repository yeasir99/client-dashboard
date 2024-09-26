'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const LoginForm = () => {
  return (
    <form className="w-full">
      <div className="w-full flex items-center border border-text2 rounded-md mb-4">
        <label className="px-4" htmlFor="empId">
          <FaUser />
        </label>
        <input
          id="empId"
          className="w-full text-md outline-0 border-0 focus:ring-0 rounded-md"
          type="text"
          placeholder="Employee Id"
        />
      </div>
      <div className="w-full flex items-center border border-text2 rounded-md mb-6">
        <label className="px-4" htmlFor="pass">
          <RiLockPasswordFill />
        </label>
        <input
          id="pass"
          className="w-full text-md outline-0 border-0 focus:ring-0 rounded-md"
          type="password"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="bg-primary w-full py-3 rounded-full text-surface1"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
