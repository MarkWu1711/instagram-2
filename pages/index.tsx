import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Mark's instagram</title>
        <link rel="icon" href="/insta_favicon.webp" />
      </Head>
      <Header />
      {session ? (
        <>
          <Feed />
          <Modal />
        </>
      ) : (
        <div className=" flex min-h-screen flex-col items-center justify-center py-2 px-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="insta-icon"
            className="w-80"
          />
          <p className="font-xs italic">Mark Ngô's Instagram</p>
        </div>
      )}
    </div>
  )
}

export default Home
