import React from 'react'
import { technologies, tools } from '../contents.jsx'

const Skills = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-10 flex-col mx-0 sm:mx-12" data-aos="fade-down" data-aos-delay={200}>
                <h3 className="text-4xl font-bold mb-4 primary-color">Software Skills</h3>
                <div className="mt-10 flex flex-wrap  justify-center gap-10 ">
                    {technologies.map((item, i) => (
                        <div key={i} className="mx-2 flex items-center justify-around w-[80px] flex-col hover:w-[100px]">
                            <img src={item.icon} width="100%" alt={item.name} />
                            <p className="text-center text-white">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 flex-col" data-aos="fade-down" data-aos-delay={200}>
                <h3 className="text-4xl font-bold mb-4 primary-color">Tools & Software</h3>
                <div className="mt-5 flex flex-wrap  justify-center gap-10 ">
                    {tools.map((item, i) => (
                        <div key={i} className="mx-2 flex items-center justify-around w-[80px] flex-col hover:w-[100px]">
                            <img src={item.icon} width="100%" alt={item.name} />
                            <p className="text-center text-white">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills