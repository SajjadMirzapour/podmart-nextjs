import { Fade } from "node_modules/react-awesome-reveal/dist/index";

export default function Suitable() {
    return (
        <div className="suitable md:flex justify-between items-center mx-auto md:text-[18px] text-[14px]">
            <Fade delay={500} direction='up' triggerOnce >
                <div className="flex justify-center mb-10">
                    <img src="/images/Group 4.png" alt="#" />
                </div>
            </Fade>
            <Fade delay={500} direction='up' triggerOnce >
                <div className="sm:w-[427px] pr-4">
                    <img className="mx-auto" src="/icons/Group 7639.png" alt="" />
                    <h1 className="text-[20px] text-center text-[#7ab9cc]">برای همه برنامه داریم</h1>
                    <h2 className="text-[32px] mb-6">
                        پادمارت برای
                        <span className="text-[#207d99]">&nbsp;چه کسانی&nbsp;</span>
                        مناسب است؟
                    </h2>
                    <p className="text-[#505e81] mb-6">ما در حال حاضر برای افراد یا گروه هایی که دارای کالاهای فیزیکی هستند قادر به ارائه خدمات هستیم</p>
                    <ul className="">
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                اگر در فضای اینستاگرام و تلگرام محصولات خود را به فروش می گذارید.
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                اگر صاحب مغازه یا فروشگاه هستید.
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                اگر صاحب کسب و کار خانگی هستید.
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                در نهایت اگر محصولی برای فروش دارید، پادمارت برای شما مناسب است و با ایجاد فروشگاه اینترنتی خود می توانید از همین امروز فروش آنلاینتان راه اندازی کنید.
                            </span>
                        </li>
                    </ul>
                </div>
            </Fade>
            <Fade delay={500} direction='up' triggerOnce >
                <div className="suitableimg">
                    <img src="images/Group 5.png" alt="#" />
                </div>
            </Fade>
        </div>
    )
}