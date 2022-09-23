import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='px-6 py-4 border-b-2 border-b-gray-300'>
            <Link to='/login'>
                <img src="/images/logo.png" alt="Logo" 
                className='w-[40px] object-fill' />
            </Link>
        </div>
    )
}

export default Nav