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
        <meta name="google-site-verification" content="sZe4_vHjYjfLQ2ePo1ha5XEEQ-sMVUJgv9EqejTgP8I" />
        <meta name="subhanallahumrahtaxi" content="umrahtaxi" />
        <meta name="company" content="taxi service" />
        <link rel="icon" href="/logoonly.png" />
      </Head>
      <div style={{margin: '0px'}}>
        <HomePage />
      </div>
    </>
  )
}
