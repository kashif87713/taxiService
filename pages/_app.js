import '../styles/globals.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Image from "next/image";
import img from '../Images/what.png';
import Link from "next/link";


export default function App({ Component, pageProps }) {

    // if(Component.getLayout) {
    //     return (Component.getLayout(<Component pageProps={pageProps}/>))
    // }

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <div className='box' >
            
                <Link
  href="https://wa.me/+966543446382"
  target="_blank"
  style={{ textDecoration: 'none' }}
>
  <Image
    src={img}
    className='img'
    alt="img"
    height={80}
    width={80}
  />
</Link>
                  </div>
            <Footer />
        </ >
    )

}
