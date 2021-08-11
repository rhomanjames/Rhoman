import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className="flex flex-col  bg-blue-200 ">
      <Head>
        <title>Rhoman | Front End Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"/>
      </Head>
      < Header />
      <div className="min-h-screen items-center w-full">
      < Body />
      </div>

    </div>
  )
}
