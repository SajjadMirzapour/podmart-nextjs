import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <footer className="w-[80%] mx-auto py-8">
            <div className="md:flex justify-between pb-6">
                <div className="md:w-[40%] w-[100%] md:mb-0 mb-6">
                    <img className="mb-4" src="./images/logo.png" alt="#" />
                    <p className='md:text-[16px] text-[14px]'>پادمارت برای ساخت یک فروشگاه حرفه ای، امکانات متنوع و منحصربه‌فردی را در اختیار شما می‌گذارد. استفاده از جدیدترین تکنولوژی‌های‌ برنامه‌نویسی، به‌کارگیری قالب‌های حرفه‌ای، پرداخت آنلاین، قابلیت ارائه‌ی کدهای تخفیف، مدیریت پیشرفته‌ی سفارشات و ... فروشگاه‌ساز پادمارت را به بستری مناسب برای یک فعالیت بلندمدت تبدیل کرده است.</p>
                </div>
                <div className="md:text-[16px] text-[14px] md:mb-0 mb-6">
                    <h3 className="font-bold mb-4">لینک های مفید</h3>
                    <ul className='text-[12px]'>
                        <li className="hover:mr-3 transition-all duration-300 pb-4">
                            <a href="">
                                قوانین و مقررات
                            </a>
                        </li>
                        <li className="hover:mr-3 transition-all duration-300 pb-4">
                            <a href="">
                                پنل کاربری پاد
                            </a>
                        </li>
                        <li className="hover:mr-3 transition-all duration-300 pb-4">
                            <a href="">
                                فناپ
                            </a>
                        </li>
                        <li className="hover:mr-3 transition-all duration-300 pb-4">
                            <a href="">
                                پادیوم
                            </a>
                        </li>
                        <li className='hover:mr-3 transition-all duration-300'>
                            <a href="">
                                بانک پاسارگاد
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='md:text-[16px] text-[14px]  md:mb-0 mb-6'>
                    <h3 className="font-bold mb-4">راه های ارتباطی</h3>
                    <ul className='text-[12px]'>
                        <li className="pb-4">
                            <PhoneEnabledIcon className={'ml-3'} />
                            021-89514217</li>
                        <li className="pb-4">
                            <LocationOnIcon className={'ml-3'} />
                            تهران، پردیس، پارک فناوری پردیس</li>
                        <li className="pb-4">
                            <EmailIcon className={'ml-3'} />
                            info@podmart.ir</li>
                        <li className="pb-4">
                            <InstagramIcon className={'ml-3'} />
                            instagram.com/podmart.ir</li>
                    </ul>
                </div>
            </div>
            <p className="py-3 border-t border-gray-400  text-[#a3acbe] md:text-[16px] text-[14px]">تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت فناپ می باشد و هر گونه کپی برداری پیگرد قانونی دارد.</p>
        </footer>
    )
}