import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Head>
        <title>Call John (UX) 859-536-0453</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"/>
      </Head>
      <div id="about" ></div>
      < Header/>
      <div className="min-h-screen items-center w-full">
      < Body />
      </div>

    </div>

    
  )
}
