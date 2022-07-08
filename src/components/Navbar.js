import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
    const [ sticky, setSticky ] = useState(false)

    const stickTop = () => {
      if(window.scrollY >= 10){
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", stickTop);

  return (
    <nav id='navbar' className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className='flex justify-between items-center'>
            <h1 className=' text-5xl'>Akanz</h1>
            <FaBars className='text-white text-2xl md:hidden'/>
        </div>
        <ul className='w-1/2 hidden md:flex text-2xl items-center justify-around'>
            <a className='nav-item' href=''>Home</a>
            <a className='nav-item' href='#about'>About</a>
            <a className='nav-item' href='#projects'>Projects</a>
            <a className='nav-item' href='#contact'>Contact</a>
        </ul>
    </nav>
  )
}

export default Navbar