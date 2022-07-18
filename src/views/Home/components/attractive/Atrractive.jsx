import { Fade } from "node_modules/react-awesome-reveal/dist/index";


export default function Atracctive() {
    return (
        <div className="attractive flex flex-wrap justify-between items-center mx-auto py-24 md:text-[18px] text-[14px]">
            <div className="sm:w-[424px] mb-8">
                <Fade delay={500} direction='up' triggerOnce >
                    <img className="mb-1" src="/images/imoji 1.png" alt="" />
                    <h2 className="text-[20px] text-[#7ab9cc] mb-2">به سرعت تاثیر بگذارید</h2>
                    <h1 className="text-[32px] mb-6">
                        <span className="text-[#207d99]">&nbsp;قالب های&nbsp;</span>
                        اصولی و جذاب
                    </h1>
                </Fade>
                <Fade delay={500} direction='up' triggerOnce>
                    <p className="text-[#505e81] mb-5">در طراحی قالب ها سعی شده علاوه بر ظاهر زیبا ، کار کردن با آن نیز راحت ترین حالت ممکن باشد. بطور خلاصه ویژگی های قالب های پادمارت عبارتند از:</p>
                </Fade>
                <Fade delay={500} direction='up' triggerOnce>
                    <ul className="text-[#081c4c] mb-6">
                        <li className="mb-4 last:mb-0">
                            -
                            <span className="mr-3">طراحی استاندارد و حرفه ای</span>
                        </li>
                        <li className="mb-4 last:mb-0">
                            -
                            <span className="mr-3">تجربه کاربری دلنشین و لذت بخش</span>
                        </li>
                        <li className="mb-4 last:mb-0">
                            -
                            <span className="mr-3">رسپانسیو و واکنش گرا</span>
                        </li>
                        <li className="mb-4 last:mb-0">
                            -
                            <span className="mr-3">امکانات کامل</span>
                        </li>
                        <li className="mb-4 last:mb-0">
                            -
                            <span className="mr-3">امنیت و سرعت بالا</span>
                        </li>
                    </ul>
                </Fade>
                <Fade delay={500} direction='up' triggerOnce>
                    <div className="text-[18px] text-[#0c7268]">
                        <button className="relative">
                            <div className="flex items-center px-3">
                                <span className="text-[18px] text-[#0c7268]">
                                    مشاهده قالب ها
                                </span>
                                <img className="w-[15px] h-[9px] mr-3" src="/icons/Path 7605.png" alt="" />
                            </div>
                            <div className="absolute bottom-[-8px] bg-[#89e5dc] w-full h-4 z-[-1]"></div>
                        </button>
                    </div>
                </Fade>
            </div>
            <Fade delay={500} direction='up' triggerOnce>
                <div className="w-full">
                    <img className="w-full" src="/images/Group 3.png" alt="" />
                </div>
            </Fade>
        </div >
    )
}
