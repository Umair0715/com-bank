import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-2 sm:justify-start justify-center sm:items-start items-center'>
            <div className='w-[250px] sm:w-full sidebar-item contact bg-[#EEEEEE] rounded-md px-2 py-4 x'>
                <h4 className=' text-sm border-b border-b-black pb-3 font-semibold'>
                    Contact us
                </h4>
                <p className='text-sm mt-3 '>
                If you need help registering online, please call us on <strong> 13 2221 </strong> , 24 hours a day, 7 days a week
                </p>
            </div>
            <div className='w-[250px] sm:w-full sidebar-item contact bg-[#EEEEEE] rounded-md px-2 py-4 x'>
                <h4 className=' text-sm border-b border-b-black pb-3 font-semibold'>
                    Security tips
                </h4>
                <div className='pt-3 flex items-center justify-center'>
                    <img src="/images/sideLock.gif" alt='Security lock' className='h-[60px]'/>
                </div>
                <p className='text-sm mt-2 '>
                    We keep your personal information secure. See our
                </p>
                <p className='underline text-sm -translate-y-[1px]'>security & privacy policy.</p>
            </div>

        </div>
    )
}

export default Sidebar