import React from 'react';
import backgroundImage from '../assets/image.png';
import Card from '../component/Card';
import Pform from '../component/Pform';

const data = [
    {
        title: "Patron",
        des: "Users can only visit the site orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis."
    },
    {
        title: "Patron",
        des: "Users can only visit the site orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis."
    },
    {
        title: "Patron",
        des: "Users can only visit the site orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis."
    },
    {
        title: "Patron",
        des: "Users can only visit the site orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis."
    }
];

const Second = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className='text-center md:w-[45rem] 2xl:pt-[10rem] md:pt-[5rem]'>
                <div className=''>
                    <p className="font-bold text-4xl mb-10">Choose Who Would You <br />Like To Be</p>
                </div>
                <div className=' flex justify-center items-center gap-8 flex-wrap'>
                    {data.map((item, index) => (
                        <Card key={index} title={item.title} description={item.des} onClick={()=>{
                            <Pform/>
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Second;
