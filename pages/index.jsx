import Head from 'next/head';
import { Home } from 'src/views';

export default function HomePage() {
    return (
        <>
            <Head>
                <title> فروشگاه ساز پادمارت | ساخت فروشگاه آنلاین </title>
                <link rel='icon' href='images/headLogo.svg'></link>
            </Head>
            <Home />
        </>
    )
}

HomePage.getLayout = (Component) => {
    return <Component />
}


