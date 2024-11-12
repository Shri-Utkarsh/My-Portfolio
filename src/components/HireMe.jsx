import React from 'react';

const HireMe = () => {
    return (
        <div className='left-4 bottom-4 flex items-center justify-center overflow-hidden '>
            <div className='w-48 h-auto flex items-center justify-center relative '>
                <img src="/HireMee.svg" alt="" className=' animate-spin-slow '/>
                <a href="mailto:utkarshsrivastava1422@gmail.com" className='cursor-pointer absolute items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#19BBC9] animate-pulse pointer-events-auto'>Hire Me</a>

               
            </div>
        </div>
    );
}

export default HireMe;
