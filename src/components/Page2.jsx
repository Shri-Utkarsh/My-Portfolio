import React from 'react';

const Page2 = () => {
  return (
    <div className="relative flex items-center justify-center h-[100vh]" id='about'>
    
      <div className=" flex flex-col items-center absolute top-1/2 -left-28 md:-left-40 lg:-left-56 -translate-y-1/2 transform -rotate-90 ">
        <h1 className='text-2xl md:text-4xl lg:text-5xl -tracking-tighter'>FRONT END DEVELOPER </h1>
        <h1 className='text-2xl md:text-4xl lg:text-5xl -tracking-tighter text-[#19BBC9]'>PORTFOLIO</h1>
      </div>

  
      <div className="flex flex-col items-center absolute top-1/2 -right-28 md:-right-40 lg:-right-56 -translate-y-1/2 transform rotate-90">
      <h1 className='text-2xl md:text-4xl lg:text-5xl -tracking-tighter'>FRONT END DEVELOPER </h1>
      <h1 className='text-2xl md:text-4xl lg:text-5xl -tracking-tighter text-[#19BBC9]'>PORTFOLIO</h1>
      </div>

      <div className=" w-[500px] md:w-[800px] lg:w-[1200px] relative flex flex-col items-center justify-center">
          <img src="mobile svg.svg" alt="Mobile image"  />
      </div>
    </div>
  );
};

export default Page2;
