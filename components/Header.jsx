import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  ChatIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'
const Header = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl items-center justify-between object-contain lg:mx-auto  ">
        {/* Left */}
        <div
          onClick={() => {
            router.push('/')
          }}
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
        >
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="insta-img"
          />
        </div>
        <div
          onClick={() => {
            router.push('/')
          }}
          className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            alt=""
            srcset=""
          />
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="border-gray block w-full rounded-md bg-gray-100 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon
            onClick={() => {
              router.push('/')
            }}
            className="navBtn"
          />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          {session ? (
            <>
              <div className="navBtn relative">
                <ChatIcon className="navBtn" />
                <div className="absolute -top-2 -right-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => {
                  setOpen(true)
                }}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 w-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
