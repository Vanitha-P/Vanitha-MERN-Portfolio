import React, { createElement, useState } from 'react'
import { experience } from '../contents.jsx'
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw',       // Width is 80% of the viewport width
        maxWidth: '800px',   // Maximum width of the modal
        maxHeight: '90%',  // Maximum height of the modal
        overflow: 'auto',     // Enable scrolling if content overflows
        'background-color': '#161616',
        'border-width': '4px',
        'border-color': '#65a30d',
    },
    overlay: {
        padding: "2rem"
    }
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const Experience = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectSkill, setSelectSkill] = useState(null);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='text-white mx-w-[1200px] mx-auto' id="work" data-aos="fade-down" data-aos-delay={200}>
            {/* Modal Dialog Section */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                shouldCloseOnOverlayClick={false}  // Add this line
            >
                <div className=' text-white'>
                    <div className="flex justify-center items-center flex-col sm:flex-row mb-4">

                        <img className='w-14 hover:w-[80px] px-2.5' src={selectSkill?.icon} alt="" />
                        <h6 className='px-2.5 whitespace-nowrap text-xl'>{selectSkill?.name}</h6>

                    </div>
                    <div className="flex py-2 items-start flex-col sm:flex-row text-base sm:text-xl primary-color mx-4 mb-2">{selectSkill?.title} - {selectSkill?.duration}</div>
                    <div className='pl-8 font-sans !leading-8'>{selectSkill?.expHeadings.map((work, index) => (
                        <div key={index} className='relative'>
                            <p className='text-base pl-5 '>
                                <span className="absolute left-0 text-blue-500">•</span> {work}
                            </p>
                            <p className='text-sm pl-8 text-gray-400'>{selectSkill.experience[index]}</p>
                        </div>
                    ))}</div>
                    <div>
                        {selectSkill?.projects.map((project, point) => (
                            <div>
                                <div className='flex items-start py-2 justity-between mt-2'>

                                    <img className='w-[60px] hover:w-[100px] px-1' src={project?.logo} alt="" />
                                    <h6 className='px-2 text-base py-3 primary-color'>{project?.name}</h6>
                                    <a href={project?.website} target="_blank" rel="noopener noreferrer" className='py-4 px-1' title="Website">
                                        {createElement(selectSkill?.global)}
                                    </a>
                                    <a href={project?.applink} target="_blank" rel="noopener noreferrer" className='py-4 px-1' title="Web App">
                                        {createElement(selectSkill?.linkicon)}
                                    </a>
                                </div>
                                <div className='pl-8 font-sans !leading-8'>{project?.expHeadings.map((stack, module) => (
                                    <div key={module} className='relative'>
                                        <p className='text-base pl-8'>
                                            <span className="absolute left-0 text-blue-500">•</span> {stack}
                                        </p>
                                        <p className='text-sm pl-5 text-gray-400'>{project?.experience[module]}</p>
                                    </div>
                                ))}</div>

                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center sm:justify-end'><button onClick={closeModal} className='btn mt-3 text-white rounded w-28 bg-gradient-to-br from-lime-500 to-blue-500 text-xl'>Close</button></div></div>
            </Modal>
            <div className='text-center'>
                <h2 class="text-4xl font-bold leading-tight primary-color">Experience</h2>
            </div>
            <div className='flex flex-wrap gap-8 justify-center mt-10'>

                {
                    experience.map((exp, i) => (
                        <div key={i} className='bg-[#161616] border border-lime-600 sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-xl mx-2' >
                            <div>
                                <div className='flex gap-2 mb-4'>
                                <img className=' w-8 group-hover:scale-100 duration-200 justify-between items-center' src={exp.icon}></img><h6 className='font-bold text-lg justify-between' >{exp.name}</h6></div>
                                <a href='https://www.google.com/maps/place/Pruvity+HR+Solutions+Pvt.+Ltd/@9.9190315,78.1518084,15z/data=!4m2!3m1!1s0x0:0xa2f3f4718b1a7959?sa=X&ved=1t:2428&ictx=111' target="_blank" className=' text-xs text-blue-400 underline'>{exp.address}</a><br />
                                <p className='font-bold mt-2'>{exp.title}</p>
                                <h1 className=' text-sm'>{exp.duration}</h1><br />

                                <p>{exp.project}</p><br /><p className='primary-color'>{exp.stack}</p>
                            </div>
                            <div
                                className='text-xl absolute top-7 right-5 animate-ping' onClick={() => { setSelectSkill(exp); openModal() }}>
                                {createElement(exp.arrow)}

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience