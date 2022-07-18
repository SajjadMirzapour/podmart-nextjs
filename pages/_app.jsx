import Layouts from 'src/layouts'
import 'swiper/css/bundle';
import 'styles/globals.css';

export default ({ Component, pageProps }) => {
    return (
        <>
            {Component.getLayout ? <Component {...pageProps} /> :
                <Layouts >
                    <Component {...pageProps} />
                </Layouts>
            }
        </>
    )
}