import React from 'react';
import logo from '../assets/react.svg';
import fbLogo from '../assets/Facebook-logo.png';
import googleLogo from '../assets/logo.png';

const Pform = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form className="px-6 py-8 bg-white rounded-[2rem] shadow-md">
                <div className="text-center mb-6">
                    <img src={logo} alt="Logo" className="w-32 h-32 mx-auto mb-2" />
                    <p className="text-2xl font-bold">Joining as Patron</p>
                    <p className="mt-4 text-sm text-gray-600">Create Your Account</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Full Name
                    </label>
                    <input
                        type="fullname"
                        id="name"
                        className="w-64 lg:w-96 h-10 px-4 border rounded-[0.8rem] focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your Full Name"
                    />
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
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="Confirm Password"
                        id="Confirm Password"
                        className="w-64 lg:w-96 h-10 px-4 border rounded-[0.8rem] focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your Confirm Password"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Contact Number
                    </label>
                    <input
                        type="Contact Number"
                        id="Confirm Password"
                        className="w-64 lg:w-96 h-10 px-4 border rounded-[0.8rem] focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your Contact Number"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full py-2 px-4 mt-4 bg-red-600 text-white font-semibold rounded-[1rem] hover:bg-red-700"
                    style={{ backgroundColor: '#AD2F3B' }}
                >
                    Register
                </button>


                <div className="text-center mb-6">
                    {/* <img src={logo} alt="Logo" className="w-32 h-32 mx-auto mb-2" />
            <p className="text-2xl font-bold">Welcome Back!</p> */}
                    <p className="mt-4 text-sm text-gray-600">Don’t have an account?
                        <span className='text-red-600 hover:text-red-800'> Login</span></p>
                </div>
            </form>
        </div>
    )
}

export default Pform