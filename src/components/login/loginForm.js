'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    Username: '',
    Password: '',
  });
  const router = useRouter();
  const handleChange = e => {
    setCredentials(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!credentials.Username || !credentials.Password) return;
    try {
      const res = await signIn('credentials', {
        ...credentials,
        redirect: false,
      });
      if (res.ok) {
        router.replace('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full flex items-center border border-text2 rounded-md mb-4">
        <label className="px-4" htmlFor="empId">
          <FaUser />
        </label>
        <input
          id="empId"
          className="w-full text-md outline-0 border-0 focus:ring-0 rounded-md"
          type="text"
          placeholder="Employee Id"
          name="Username"
          onChange={handleChange}
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
          name="Password"
          onChange={handleChange}
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
