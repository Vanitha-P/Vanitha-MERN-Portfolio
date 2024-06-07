import React from 'react'
import heroinIamge from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation'
import {intro} from '../contents'

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 gap-8 max-w-[1200px] md:[70vh] mx-auto py-8 bg-black'>
            <div className='col-span-1 px-4 my-auto mx-auto w-[250px] h-auto lg:w-[350px]' data-aos="fade-down" data-aos-delay={100}>
                <img src={heroinIamge} alt='Vanitha' />
            </div>
            <div className='col-span-2 mx-10 my-auto'>
                <h1 className='text-white text-2xl sm:text-2xl lg:text-5xl font-extrabold' data-aos="fade-down" data-aos-delay={200}>
                    <span className='primary-color'>I'm a</span> <br />
                    <TypeAnimation sequence={["Backend Developer", 500, "MERN Stack Developer", 500, "Nodejs Developer", 500, "Laravel Developer", 500]} wrapper="span" speed={50} repeat={Infinity} /></h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl' data-aos="fade-down" data-aos-delay={250}>{intro[0].intro}</p>
                <div className='my-8 flex' data-aos="fade-down" data-aos-delay={300}>
                    <a href={heroinIamge} className='px-6 py-3 w-auto rounded-xl mr-4 bg-gradient-to-br from-lime-500 to-blue-500 text-white' download>
                        Resume
                    </a>
                    <a href='#contact' className='px-6 py-3 w-auto rounded-xl mr-4 border border-gray-400 text-white hover:bg-gradient-to-br hover:from-lime-500 hover:to-blue-500 hover:border-transparent'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Hero