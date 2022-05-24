import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
// Browser
const signIn = ({ providers }) => {
  return (
    <div>
      <>
        <Header />
        <div className=" flex min-h-screen flex-col items-center justify-center py-2 px-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="insta-icon"
            className="w-80"
          />
          <p className="font-xs italic">Mark Ngô's Instagram</p>
          <div className="mt-40">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="rounded-lg bg-blue-500 p-3 text-white"
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: '/' })
                  }
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  )
}

// Server
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signIn
