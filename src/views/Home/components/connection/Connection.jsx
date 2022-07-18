export default function Connection() {
    return (
        <div>
            <img className="flex mx-auto" src="./images/imoji 1.png" alt="#" />
            <div className='connection relative mt-2  rounded-md'>
                <img className="mx-auto pb-4" src="./images/imoji 2.png" alt="#" />
                <p className="md:text-[18px]  sm:text-[14px] text-[10px] text-center text-blue-500 pb-6">زمان مناسب همین الانه</p>
                <p className="md:text-[18px]  sm:text-[14px] text-[10px] text-center font-bold pb-8">با ما ارتباط برقرار کنید اگر:</p>
                <div className="w-[80%] mx-auto flex justify-between ">
                    <div>
                        <p className="md:text-[18px] sm:text-[14px] text-[10px] pb-4">نیاز به مشاوره دارید</p>
                        <button className="flex relative mx-auto pb-6">
                            <div className="relative z-10 flex items-center">
                                <span className="md:text-[18px] sm:text-[14px] text-[10px]">تماس با ما</span>
                                <img className="mr-3" src="./images/left arrow.png" alt="#" />
                            </div>
                            <div className="absolute top-[15px] z-[5] w-full h-4 bg-[#0c7268]"></div>
                        </button>
                    </div>
                    <div>
                        <p className="md:text-[18px] sm:text-[14px] text-[10px] pb-4">محصولی برای فروش دارید</p>
                        <button className="flex relative mx-auto pb-6">
                            <div className="relative z-10 flex items-center">
                                <span className="md:text-[18px] sm:text-[14px] text-[10px]">شروع کنید</span>
                                <img className="mr-3" src="./images/left arrow.png" alt="#" />
                            </div>
                            <div className="absolute top-[15px] z-[5] w-full h-4 bg-[#0c7268]"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}