import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AttentionSeeker } from "node_modules/react-awesome-reveal/dist/index";
import Modal from "src/components/modal/Modal";
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from "node_modules/@mui/material/index";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DATAMENU } from "./data";

export default function Unlimited() {

    const [open, setOpen] = useState(false)
    const handleModal = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 700) { setShow(true) }
            else setShow(false)
        })
    })

    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        setOpenMenu(prev => !prev)
    }

    const [openButton, setOpenButton] = useState(-1)
    const handleButton = (id) => {
        setOpenButton(id === openButton ? -1 : id)
    }

    const ref = useRef(null)

    return (
        <div className="unlimited">
            <div className={`${openMenu ? 'absolute flex' : 'translate-x-[360px]'} md:hidden fixed z-50 bg-white w-[70%] h-screen transition-all duration-300`}>
                <ul className="w-[70%] text-[18px] p-5">
                    {DATAMENU.map(data =>
                        <li key={data.id} className="border-b border-black pb-2 mb-3 last:mb-0">
                            <Button onClick={() => handleButton(data.id)}>
                                {data.title}
                                {openButton === data.id ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
                            </Button>
                            <ul className="text-[12px]" style={{ height: openButton === data.id ? ref.current?.clientHeight : 0 }}>
                                <li className={`${openButton === data.id ? '' : 'hidden'}`} style={{ height: openButton === data.id ? ref.current?.clientHeight : 0 }}>تماس با ما</li>
                                <li className={`${openButton === data.id ? '' : 'hidden'}`} style={{ height: openButton === data.id ? ref.current?.clientHeight : 0 }}>درخواست مشاوره</li>
                            </ul>
                        </li>
                    )}
                    <li>
                        <Button onClick={handleModal}>
                            تماس با ما
                        </Button>
                    </li>
                </ul>
                <button className="absolute top-[5px] left-[5px]" onClick={handleMenu}> <ClearIcon /></button>
            </div>
            <div className="w-[80%] mx-auto pt-5 md:text-[18px] text-[14px] relative">
                <nav className="flex justify-between items-center  relative z-10">
                    <img className="md:flex hidden" src="/images/logo.png" alt="#" />
                    <button onClick={handleMenu}>
                        <img className="md:hidden w-[25px] h-[25px]" src="/images/menu.png" alt="#" />
                    </button>
                    <ul className="md:flex hidden text-[14px]">
                        <li className="ml-3 last:ml-0">
                            <Link href={"/"}>
                                <a className="ml-3">  قالب ها</a>
                            </Link>
                        </li>
                        <li className="ml-3 last:ml-0">
                            <Link href={"/"}>
                                <a className="ml-3">  امکانات</a>
                            </Link>
                        </li>
                        <li className="ml-3 last:ml-0">
                            <Link href={"/about"}>
                                <a className="ml-3">  درباره ما</a>
                            </Link>
                        </li>
                        <li className="ml-3 last:ml-0">
                            <button onClick={handleModal} className="ml-3">
                                تماس با ما
                            </button>
                        </li>
                    </ul>
                    <div>
                        <Link href={"/login"}> ورود </Link>
                    </div>
                </nav>
                <div className="md:w-[40%] w-[80%] md:text-right text-center md:mx-0 mx-auto md:mt-[154px] mt-10 md:pr-4">
                    <h2 className="text-[#7ab9cc]">راحت تر از همیشه!</h2>
                    <h1 className="md:text-[30px] text-[15px] mb-6 font-bold">با ایجاد فروشگاه آنلاین
                        فروش خود را
                        <span className="text-[#4696af]">&nbsp;نامحدود&nbsp;</span>
                        کنید
                    </h1>
                    <div className="absolute top-0 left-0 w-full h-full z-0">
                        <video height={'100%'} width={'100%'} className="absolute md:w-[14.4%] w-[33%] sm:h-[320px] h-[200px] md:top-[201px] top-[455px] md:left-[31%] left-[58%] object-cover" autoPlay muted loop><source src="/videos/displayer.mp4" type="video/mp4" /> </video>
                    </div>
                    <p className="md:text-[18px] text-[10px] text-[#505e81] mb-6">نگران پیچیدگی های فروش آنلاین نباشید. با فروشگاه ساز پادمارت بسادگی ایده خود برای داشتن فروشگاه آنلاین را به واقعیت تبدیل کنید و درآمدتان را افزایش دهید</p>
                    <button className="group relative bg-[#0c7268] pr-4 pl-7 rounded-md text-white py-2 md:ml-0 ml-[25px] hover:z-10 transition-all duration-500">
                        <span>شروع کنید</span>
                        <div className="absolute top-0 left-[-20px] bg-[#1f998d]  h-full w-[40px] group-hover:w-[25px] transition-all duration-300 flex justify-center items-center rounded-l-md">
                        </div>
                        <img className="absolute top-[16px] left-[-12px] w-4 h-fit mx-2 z-20" src="/images/left arrow.png" alt="#" />
                    </button>
                </div>
                <Modal open={open} onClose={onClose} />
            </div>
            <nav className={`${show ? 'translate-y-0' : '-translate-y-32'} fixed top-0 bg-white z-10 w-[100%] shadow-sm transition-all duration-300`}>
                <div className="flex justify-between items-center py-4 w-[80%] mx-auto">
                    <img className="md:flex hidden" src="/images/logo.png" alt="#" />
                    <button>
                        <img className="md:hidden w-[25px] h-[25px]" src="/images/menu.png" alt="#" />
                    </button>
                    <ul className="sm:flex hidden text-[14px]">
                        <li className="ml-3 last:ml-0">
                            <Link href={"/"}>
                                <a className="ml-3">  قالب ها</a>
                            </Link>
                        </li>
                        <li className="ml-3 last:ml-0">
                            <Link href={"/"}>
                                <a className="ml-3">  امکانات</a>
                            </Link>
                        </li>
                        <li className="ml-3 last:ml-0">
                            <Link href={"/"}>
                                <a className="ml-3">  درباره ما</a>
                            </Link>
                        </li>
                        <li className="ml-3 last:ml-0">
                            <Link href={"/"}>
                                <a className="ml-3"> تماس با ما</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center">
                        <AttentionSeeker effect="swinng">
                            <button className="group sm:text-[16px] text-[12px] relative bg-[#0c7268] pr-4 pl-7 sm:rounded-md text-white sm:py-2 py-1 ml-10 transition-all duration-500">
                                <span>شروع کنید</span>
                                <div className="absolute top-0 left-[-20px] bg-[#1f998d]  h-full w-[40px] group-hover:w-[25px] transition-all duration-300 flex justify-center items-center rounded-l-md">
                                </div>
                                <img className="absolute sm:top-[16px] top-[10px] left-[-12px] w-4 h-fit mx-2 z-20" src="/images/left arrow.png" alt="#" />
                            </button>
                        </AttentionSeeker>
                        <Link className={'sm:text-[16px] text-[12px]'} href={"/login"}> ورود </Link>
                    </div>
                </div>
            </nav>
        </div>
    )

}