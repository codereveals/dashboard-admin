import React from 'react'
import Wrapper from './Wrapper';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    
  <footer className='py-4 px-8 mb-2 rounded-md bg-purple-50 mx-auto flex mt-2 justify-center w-[98%]'>
       <p className='text-sm'>&copy; {year} Studio Inc. A Code Reveals Product | All Right Reserved.</p> 
    
    
      
    
    </footer>


   
  
  )
}

export default Footer