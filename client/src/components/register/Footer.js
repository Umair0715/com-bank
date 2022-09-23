import React from 'react'

const Footer = () => {
    return (
        <div className='w-full border-t-2 border-gray-300'>
            <div className='w-[95%] md:w-[80%] lg:w-[60%] mx-auto py-6 flex flex-col gap-6'>
                <div  className='grid sm:grid-cols-4 grid-cols-2 gap-2 sm:gap-4 text-[15px]'>
                    <p>Tools & calculators</p>
                    <p>Find a branch</p>
                    <p>Financial assistance</p>
                    <p>Contact us</p>
                </div>
                <div  className='grid sm:grid-cols-4 grid-cols-2 gap-2 sm:gap-4 text-[15px]'>
                    <p>Important information</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Terms of use</p>
                </div>
                <div>
                    <p> © 2022 Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and Australian credit licence 234945</p>
                </div>
            </div>
        </div>
    )
}

export default Footer