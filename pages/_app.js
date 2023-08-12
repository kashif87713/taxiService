import '../styles/globals.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function App({ Component, pageProps }) {

    // if(Component.getLayout) {
    //     return (Component.getLayout(<Component pageProps={pageProps}/>))
    // }

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ >
    )

}
