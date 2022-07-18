import { Dialog, DialogContent } from "node_modules/@mui/material/index"
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Select from "./select";
import NewSelect from "./newSelect";

export default function Modal({ open, onClose }) {
    return (
        <Dialog dir='rtl' maxWidth="sm w-[768px]" className="" open={open} onClose={onClose}>
            <DialogContent className='flex h-[810px] p-0 rounded-md'>
                <div className="w-[50%] h-[810px] text-[14px]">
                    <div className="md:text-[14px] sm:text-[12px] text-[10px] p-5 py-8">
                        <h1 className="text-[#081c4c] md:text-[22px] sm:text-[18px] text-[14px] font-bold mb-6"> تماس با پادمارت</h1>
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p >موضوع</p>
                        </div>
                        <div className="mb-3">
                            <Select />
                        </div>
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p >شهر</p>
                        </div>
                        <NewSelect />
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p>نام و نام خانوادگی</p>
                        </div>
                        <input className="inputModal" placeholder="مثلا: محمد همتی" type="text" />
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p>شماره تماس</p>
                        </div>
                        <input className="inputModal" type="text" />
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p>آدرس ایمیل</p>
                        </div>
                        <input className="inputModal" type="text" />
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p>متن پیام</p>
                        </div>
                        <textarea className="inputModal" name="textarea" id="textarea" cols="15" rows="4" placeholder="متن پیام را وارد کنید..."></textarea>
                        <div className="mb-3 flex">
                            <StarIcon sx={{ color: 'red', width: '8px', marginLeft: '3px', paddingBottom: '4px' }} />
                            <p>کد امنیتی</p>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <button className="p-2 rounded-md bg-[#081c4c] text-white">ارسال درخواست</button>
                    </div>
                </div>
                <div className="modal w-[50%] h-[810px] bg-[#fff0de] text-[#081c4c]">
                    <div className="relative py-8">
                        <button className="absolute top-[5px] left-[5px]" onClick={onClose}> <ClearIcon /></button>
                        <img className="mx-auto mb-5 w-[37px]" src="/images/headLogo.svg" />
                        <h2 className="mb-6 text-[16px] text-center font-bold">راه های ارتباطی</h2>
                        <div className="md:pr-7 sm:pr-5 pr-3 pl-3  md:text-[14px] sm:text-[12px] text-[10px] font-bold">
                            <div className="sm:flex items-center mb-4">
                                <PhoneEnabledIcon sx={{ marginLeft: '7px', marginBottom: '12px' }} />
                                <p>021-89514217</p>
                            </div>
                            <div className="sm:flex items-center mb-4">
                                <LocationOnIcon sx={{ marginLeft: '7px', marginBottom: '12px' }} />
                                <p>تهران، پردیس، پارک فناوری پردیس بلوار نوآوری ۱۲، پلاک ۱۲۳</p>
                            </div>
                            <div className="sm:flex items-center mb-4">
                                <EmailIcon sx={{ marginLeft: '7px', marginBottom: '12px' }} />
                                <p>info@podmart.ir</p>
                            </div>
                            <div className="sm:flex items-center mb-4 md:text-[14px] sm:text-[12px] text-[9px]">
                                <InstagramIcon sx={{ marginLeft: '7px', marginBottom: '12px' }} />
                                <p>instagram.com/podmart.ir</p>
                            </div>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog >
    )
}