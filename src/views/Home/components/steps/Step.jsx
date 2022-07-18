import { Fade } from "node_modules/react-awesome-reveal/dist/index";

export default function Steps() {
    return (

        <div className="level flex flex-wrap justify-between  mx-auto mt-[118px] md:text-[18px] text-[14px]">
            <div className="pr-4  md:w-fit">
                <Fade delay={500} direction='up' triggerOnce>
                    <img className="mb-[3px]" src="./images/imoji 1.png" alt="#" />
                    <p className="text-[#7ab9cc] text-[20px] mb-2">ساده و سرگرم کننده</p>
                    <h2 className="text-[32px] mb-6">
                        <span className="text-[#207d99]">
                            &nbsp;مراحل&nbsp;
                        </span>
                        <span>
                            ایجاد فروشگاه در پادمارت
                        </span>
                    </h2>
                    <ul className="text-[#081c4c] mb-5">
                        <li className="mb-4">
                            -
                            <span>ثبت نام (فقط چند دقیقه زمان میبرد)</span>
                        </li>
                        <li className="mb-4">
                            -
                            <span>تکمیل محتوا و تنظیمات وبسایت</span>
                        </li>
                        <li className="mb-4">
                            -
                            <span>وبسایت شما آماده است!</span>
                        </li>
                    </ul>
                </Fade>
                <Fade delay={500} direction='up' triggerOnce>
                    <ul className="text-[12px] text-[#207d99] mb-6 flex justify-between">
                        <li className="flex justify-between items-center ml-3">
                            <img width={'12px'} className='ml-2 h-3 ' src="/images/tick.png" alt="#" />
                            <span>تست رایگان</span>
                        </li>
                        <li className="flex justify-between items-center ml-3">
                            <img width={'12px'} className='ml-2 h-3' src="/images/tick.png" alt="#" />
                            <span>بدون نیاز به دانش فنی</span>
                        </li>
                        <li className="flex justify-between items-center ml-3">
                            <img width={'12px'} className='ml-2 h-3' src="/images/tick.png" alt="#" />
                            <span>طراحی زیبا و جذاب</span>
                        </li>
                    </ul>
                    <button >
                        <div className="relative">
                            <div className="flex items-center">
                                <span className="text-[#0c7268] mr-4 ml-3">شروع کنید</span>
                                <img width={"15px"} className='h-[9px]' src="/images/left arrow green.png" alt="#" />
                            </div>
                            <div className="absolute top-[11px] right-[-8px] bg-[#c2f2ed] w-[128px] h-[16px] z-[-1]"></div>
                        </div>
                    </button>
                </Fade>
            </div>
            <Fade delay={500} direction='up' triggerOnce>
                <img className="levelimg" src="./images/Group 1.png" alt="#" />
            </Fade>
        </div>

    )
}