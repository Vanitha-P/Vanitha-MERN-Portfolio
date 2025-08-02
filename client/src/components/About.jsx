import React from 'react'
import aboutImg from '../assets/about.png'
import {about} from '../contents'
const About = () => {
    return (
        <div className='text-white mx-w-[1200px] sm:mx-12' id="about">
            <div className='md:grid md:grid-cols-2 sm:py-16 '>
                <div className='mt-8 md:mt-0 text-left flex'>
                    <div className='my-auto mx-6' data-aos="fade-right">
                        <h2 className='text-4xl font-bold mb-4 primary-color'  >About Me</h2> 
                        <p className='text-base lg:text-lg'>{about[0].one}<br/>{about[0].two}<br/>{about[0].three}<br/>{about[0].four}<br/></p>
                    </div>
                    </div>
                {/* mx-auto w-72 sm:w-96 h-[450px] mt-6 */}
                <img className='mx-auto w-72 sm:w-96 h-[450px] mt-6' data-aos="fade-left" src={aboutImg} width={400} height={1000}></img>
                {/* <img src={aboutImg} alt='Vanitha' /> */}
            </div>
            
        </div>
    )
}

export default About