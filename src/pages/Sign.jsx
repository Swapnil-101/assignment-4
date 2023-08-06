import React from 'react'
import backgroundImage from '../assets/image.png';
import Form from '../component/Form';
import Pform from '../component/Pform';



export const Sign = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
             <div className='md:flex flex justify-center md:justify-start md:ml-[5rem]'>
            <Pform/>
            </div>
        </div>
    )
}
