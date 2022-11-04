import '../styles/globals.css';
import LayOut from '../components/layout/Layout';
function MyApp({ Component, pageProps }) {
    return (
        <LayOut> {/* //' will have to import Link in the [MainNavigation] Component and change 'to' attribute to 'href' */}
            <Component {...pageProps} />
        </LayOut>
        //' use this way to apply general Component
    );
}

export default MyApp;
