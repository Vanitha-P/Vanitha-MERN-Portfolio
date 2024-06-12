import React, { createElement } from 'react'
import { footer } from '../contents.jsx'
const Footer = () => {
  return (
    <div className='max-w-[1200px] flex justify-end items-end mx-auto mb-5'>
      <ul>
        {footer.map((item, i) => (
          <li className='text-white flex py-1 mx-1'>{createElement(item.icon)}
            <a href={item.content} target="_blank" rel="noopener noreferrer" className='text-xs font-normal primary-color mx-1 ' title={item.title}>
              {item.content}
            </a>

          </li>
        ))}<li className='primary-color py-1 mx-1 text-xs font-bold' >#2024</li></ul>
    </div>
  )
}

export default Footer