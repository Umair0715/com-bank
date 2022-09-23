import React from 'react'

const Flood = () => {
    return (
        <div className='w-full py-4 px-2 sm:px-6 flex gap-4 bg-[#F4F4F4] '>
            <div className='flex-1 sm:flex-auto flex sm:justify-start justify-center'>
                <img 
                src='/images/flood.jpg' 
                alt='flood' 
                className=' sm:w-[200px] object-cover'/>
            </div>
            <div className='text-sm text-black flex flex-col gap-1 flex-1 sm:flex-auto'>
                <h4 className='font-semibold'>Affected by the floods?</h4>
                <p className=' text-xs sm:text-[13px]'>You may be eligible for our Emergency Assistance. See how we can help or message us in the CommBank app.</p>
                <span className='underline'>Emergency Assistance</span>
            </div>
        </div>
    )
}

export default Flood