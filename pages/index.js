import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import Nav from '../components/nav'
import Card from '../components/card'



export default function Home() {

  return (

    <div >
      <Head>
        <title>C-16</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Nav  />
      <Card  />
<Login/>
    
     
    </div>
  )
}
