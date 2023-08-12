import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import HomePage from './HomePage/HomePage';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>taxi service</title>
        <meta name="google-site-verification" content="ZSaGcN7LbOOhUL-oe5dsOwfR9o35XLgtQT7SHCa2GDg" />
        <meta name="sterlize equipments" content="Medical Equipments" />
        <meta name="company" content="UAE medical equimpents" />
        <link rel="icon" href="/logoonly.png" />
      </Head>
      <div style={{margin: '0px'}}>
        <HomePage />
      </div>
    </>
  )
}
