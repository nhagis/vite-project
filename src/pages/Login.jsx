/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Logo from '../components/img/smgc.png';
import { userLogin } from '../utils/mockApi';

const InputClass =
  'w-full py-4 placeholder:text-gray px-6 text-main border-2 mt-2 border-border rounded-md';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await userLogin({ email, password });
      setIsLoading(false);
    } catch (e) {
      setError('Invalid username or password');
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <div className="container flex-colo py-12 mx-auto min-h-screen sm:py-2 px-4 ">
        <div className="main-box lg:w-3/4 w-full flex box-shadow rounded-lg overflow-hidden">
          <div className="box-1 bg-main flex-colo py-6 sm:py-0">
            <img src={Logo} className="w-21 h-21 object-cover" alt="logo" />
            <h1 className=" text-xl">ISM Mart</h1>
            {/* <p className="itaic text-sm">
          We detected you are <br /> current in{" "}
          <span className="font-bold">(Pakistan)</span>
        </p> */}
            <p className="itaic text-sm">
              Virtual space to sellers/vendors
              {/* <span className="font-bold">(Friendly Highway)</span> */}
            </p>
          </div>
          <form
            onSubmit={submitHandler}
            className="box-2 bg-white pt-12 pb-6 sm:px-12 px-6"
          >
            <h2 className="sm:text-2xl text-xl text-center mb-12 font-semibold">
              E-commerce platform
            </h2>
            {/* fullName */}
            <div className="my-6">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                placeholder="Enter Email"
                className={InputClass}
              />
            </div>
            {/* email */}
            <div className="my-6">
              <label>Password</label>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Enter Password"
                className={InputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full border-2 border-main hover:bg-white trans bg-main mt-6 rounded-md tracking-widest py-4 font-subMain font-bold"
            >
              {isLoading ? 'Loading..' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
