import React from 'react';
import logo from '../assets/react.svg';
import fbLogo from '../assets/Facebook-logo.png';
import googleLogo from '../assets/logo.png';

const Form = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form className="px-6 py-8 bg-white rounded-[2rem] shadow-md">
                <div className="text-center mb-6">
                    <img src={logo} alt="Logo" className="w-32 h-32 mx-auto mb-2" />
                    <p className="text-2xl font-bold">Welcome Back!</p>
                    <p className="mt-4 text-sm text-gray-600">Login to your Account</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-64 lg:w-96 h-10 px-4 border rounded-[0.8rem] focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-64 lg:w-96 h-10 px-4 border rounded-[0.8rem] focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <label htmlFor="remember-me" className="flex items-center">
                        <input type="checkbox" id="remember-me" className="mr-2" />
                        <span className="text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-red-600 hover:text-red-800">
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-4 bg-red-600 text-white font-semibold rounded-[1rem] hover:bg-red-700"
                    style={{ backgroundColor: '#AD2F3B' }}
                >
                    Login
                </button>
                <div className="text-center mb-6">
                    {/* <img src={logo} alt="Logo" className="w-32 h-32 mx-auto mb-2" />
                    <p className="text-2xl font-bold">Welcome Back!</p> */}
                    <p className="mt-4 text-sm text-gray-600">Or login with</p>
                </div>
                <div className="flex justify-center mt-4 space-x-2 ">
                    <button
                        type="button"
                        className="flex items-center px-4 py-2 bg-white-600 border border-gray-300 rounded-[1rem] "
                    >
                        <img src={fbLogo} alt="Facebook" className="w-6 h-4 mr-2" />
                        Facebook
                    </button>
                    <button
                        type="button"
                        className="flex items-center px-4 py-2 bg-white-600 border border-gray-300 rounded-[1rem] "
                    >
                        <img src={googleLogo} alt="Google" className="w-4 h-4 mr-2" />
                        Google
                    </button>
                </div>

                <div className="text-center mb-6">
                    {/* <img src={logo} alt="Logo" className="w-32 h-32 mx-auto mb-2" />
                    <p className="text-2xl font-bold">Welcome Back!</p> */}
                    <p className="mt-4 text-sm text-gray-600">Don’t have an account?
                        <span className='text-red-600 hover:text-red-800'> Register</span></p>
                </div>
            </form>
        </div>
    );
};

export default Form;
