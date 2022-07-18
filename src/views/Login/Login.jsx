import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';
import Select from 'src/components/select/select';
import Mwnu from '/src/components/menu/Menu'

export default function Login() {
    return (
        <div className="login h-fit py-10 md:text-[16px] sm:text-[14px] text-[12px]">
            <div className="lg:w-[30%] md:w-[40%] w-[75%] mx-auto bg-white shadow-md p-4">
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <Mwnu />
                        <div className='flex'>
                            <p className='md:text-[16px] sm:text-[14px] text-[12px] ml-2'> ورود با حساب کاربری </p>
                            <img className='md:w-[34px] w-[20px]' src="/images/login_pod.png" alt="#" />
                        </div>
                    </div>
                    <Link href={'/'} >
                        <a>
                            <KeyboardBackspaceIcon />
                        </a>
                    </Link>
                </div>
                <div className='mb-4'>
                    <img className='sm:w-[200px] w-[150px] mx-auto' src="/images/login_logo.png" alt="#" />
                </div>
                <input className='mb-4 w-full border outline-blue-300 p-3' type="text" placeholder='نام کاربری / تلفن / ایمیل / کدملی' />
                <input className='mb-4 w-full border outline-blue-300 p-3' type="text" placeholder='رمز عبور' />
                <button className='mb-4 bg-blue-500 text-center text-white w-full p-3 hover:bg-white hover:text-blue-500 hover:border-blue-500 rounded-md transition-all duration-200'>ورود</button>
                <div className='flex text-cyan-600 text-[12px] justify-center items-center mb-4'>
                    <Link href={''}>
                        <a className='ml-2 hover:text-blue-900 transition-all duration-200'>
                            بازیابی رمز عبور
                        </a>
                    </Link>
                    <Link href={''}>
                        <a className='border-r border-gray-500 pr-2 hover:text-blue-900 transition-all duration-200'>
                            ثبت نام کاربر جدید
                        </a>
                    </Link>
                </div>
                <div className='flex justify-between items-center text-[12px]'>
                    <p>تلفن پشتیبانی: 02191033000</p>
                    <Select />
                </div>
            </div>

        </div>
    )
}