import React from 'react'

const InfoCard = () => {
    return (
        <div>
            <div className='w-full px-4 py-2 rounded-md border border-gray-200 mt-6 shadow-1'>
                    <h4 className='text-black font-semibold text-lg'>
                        What you need to register:
                    </h4>
                    <div className='grid md:grid-cols-4 grid-cols-2 mt-5 gap-6 '>
                        <div >
                            <div className=''>
                                <img 
                                src='/images/card2.svg' 
                                alt='Card' 
                                className='w-[50px] '/>
                            </div>
                            <ul className='flex flex-col gap-1 mt-3 text-sm'>
                                <li>
                                    <span className='font-semibold'>Debit card</span> or
                                </li>
                                <li>
                                    <span className='font-semibold'>Credit card</span> or
                                </li>
                                <li>
                                    <span className='font-semibold'>Keycard</span> or
                                </li>
                                <li className='font-semibold'>
                                    Travel Money Card
                                </li>
                            </ul>
                        
                        </div>
                        <div className='flex  flex-col sm:items-start items-center'>
                            <div className=''>
                                <img 
                                src='/images/card1.svg' 
                                alt='Card' 
                                className='w-[50px] '/>
                            </div>
                            <p className='font-semibold text-sm mt-3'>Your card PIN</p>
                        </div>
                        <div >
                            <div className=''>
                                <img 
                                src='/images/phone.svg' 
                                alt='Card' 
                                className='w-[50px] '/>
                            </div>
                            <p className='font-semibold text-sm mt-3'>
                                Your mobile <br /> phone number
                            </p>
                        </div>
                        <div className='flex  flex-col sm:items-start items-center'>
                            <div className=''>
                                <img 
                                src='/images/email.svg' 
                                alt='Card' 
                                className='w-[50px] '/>
                            </div>
                            <p className='font-semibold text-sm mt-3'>
                                A valid email address
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default InfoCard