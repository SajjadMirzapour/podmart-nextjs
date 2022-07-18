import Head from 'next/head'
import { About } from 'src/views';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title> درباره ما | فروشگاه ساز پادمارت </title>
                <link href="/images/headLogo.svg" rel="icon" />
            </Head>
            <About />
        </>
    )
}