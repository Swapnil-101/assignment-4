import React from 'react'
import backgroundImage from '../assets/image.png'
import Form from '../component/Form'

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className='md:flex flex justify-center md:justify-start md:ml-[5rem]'>
        <Form />
      </div>
    </div>
  )
}

export default Home