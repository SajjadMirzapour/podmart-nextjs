export default function Header() {
    return (
        <nav className="w-[80%] mx-auto flex justify-between py-5">
            <div className="">
                <img src="./images/logo.png" alt="#" />
            </div>
            <ul className="md:flex justify-between hidden">
                <li className="ml-3 last:ml-0">قالب ها</li>
                <li className="ml-3 last:ml-0"> امکانات</li>
                <li className="ml-3 last:ml-0">درباره ما</li>
                <li className="ml-3 last:ml-0">قوانین و مقررات</li>
                <li className="ml-3 last:ml-0">تماس با ما</li>
            </ul>
        </nav>
    )
}