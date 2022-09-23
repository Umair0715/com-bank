import React from 'react'

const Quicklinks = () => {
    return (
        <div className='text-xs sm:text-sm pb-8'>
            <h3 className='text-sm font-semibold border-b border-b-yellow-300 pb-2'>Quicklinks</h3>
            <div className='flex flex-col gap-1 mt-3'>
                <p className='underline cursor-pointer'>Supporting the game changers in women's sport</p>
                <p className='underline cursor-pointer'>Are you in financial difficulty? Apply for assistance.</p>
                <p className='underline cursor-pointer'>Find benefits you may be eligible for during lockdown.</p>
                <p className='underline cursor-pointer'>Support for home loan customers</p>
            </div>
            <div className='mt-8 border-t border-t-gray-200 flextext-xs pt-4 gap-2 sm:flex-row flex-col '>
                <p className='text-dark'>Terms of user | Security | Privacy</p>
                <span className='text-gray-400'> © Commonwealth Bank of Australia 2022 ABN 48 123 123 124</span>
            </div>
        </div>
    )
}

export default Quicklinks