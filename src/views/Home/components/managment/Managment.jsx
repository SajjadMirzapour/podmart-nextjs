import { Fade } from "node_modules/react-awesome-reveal/dist/index";

export default function Managment() {
    return (
        <div className="manager flex flex-wrap justify-between mx-auto mb-20 md:text-[18px] text-[14px]">
            <div className="sm:w-[424px] pr-4">
                <Fade delay={500} direction='up' triggerOnce >
                    <img className="mb-1" src="/images/imoji 3.png" alt="#" />
                    <h1 className="text-[20px] text-[#7ab9cc] mb-2">هیچ بخشی از نگاه شما پنهان نخواهد بود</h1>
                    <h2 className="text-[32px] text-[#081c4c] mb-6">
                        همه چیز را
                        <span className="text-[#207d99]">
                            &nbsp;مدیریت&nbsp;
                        </span>
                        کنید
                    </h2>
                    <h3 className="text-[#505e81] mb-6">در پنل مدیریتی فروشنده پادمارت همه بخش های فروشگاه خود را براحتی مدیریت کنید</h3>
                </Fade>
                <Fade delay={500} direction='up' triggerOnce >
                    <ul className="">
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                محیطی ساده با تجربه کاربری راحت و لذت بخش
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                مشاهده سفارش ها، کاربران، کالاها، نظرات و غیره
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                آنالیز فروش، سفارش ها، موجودی انبار و غیره با استفاده از گزارش گیری کامل و دقیق
                            </span>
                        </li>
                        <li className="mb-4">
                            -
                            <span className="mr-3">
                                شخصی سازی موارد قابل مشاهده در جداول
                            </span>
                        </li>
                    </ul>
                </Fade>
            </div>
            <Fade delay={500} direction='up' triggerOnce>
                <div className="w-full">
                    <img className="w-full" src="/images/Group 2.png" alt="" />
                </div>
            </Fade>
        </div>
    )
}