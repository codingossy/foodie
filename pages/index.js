import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../layout/Layout'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import Chefs from '../components/chefs/Chefs'
import { client } from '../linklib/client'
import Furnitures from '../components/foods/Funitures'


const inter = Inter({ subsets: ['latin'] })



export default function Home( { allfurnitures }) {

  // console.log(allfurnitures)
  return (
    <>
      <Head>
        <title>Woodsoft</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Furnitures allfurnitures={allfurnitures} />
        <Chefs />
        <Services />
      </Layout>
    
       
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "food"]'
  const allfurnturesList = await client.fetch(query)

  return{
    props:{
      allfurnitures: allfurnturesList
    }
  }
}