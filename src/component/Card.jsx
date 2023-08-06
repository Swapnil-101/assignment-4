import React from 'react';
import logo from '../assets/logo.png'; // Replace with the actual path to your logo image

const Card = ({ title, description }) => { // Use object destructuring here
    return (
        <div>
            <div className="card w-[15rem]  bg-white rounded-lg p-6 text-black text-center">
                <div className="flex items-center justify-center">
                    <div className="logo w-16 h-16 rounded-full bg-[#AD2F3B] flex items-center justify-center mb-4">
                        <img src={logo} alt="Logo" className="w-8 h-8 flex items-center justify-center" />
                    </div>
                </div>
                <p className="font-bold text-2xl">{title}</p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
