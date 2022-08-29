import Image from 'next/image'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

export const Navbar = () => {
  const router = useRouter()
  const { data } = useSession()

  return (
    <header className="sticky top-0 z-10 flex h-[85px] w-full items-center justify-center">
      <div className="flex w-full max-w-[1324px] items-center justify-between px-4">
        <Image
          src={'/logos/smarthis.svg'}
          width={162}
          height={67}
          alt="Smarthis Logo"
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        {data ? (
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => signOut()}
              className="text-small relative font-semibold text-[#000] duration-300 before:absolute before:bottom-0 before:-left-1 before:z-[-1] before:block before:h-2.5 before:w-0 before:bg-[#01ffa9] before:transition-all hover:before:w-[calc(100%+10px)]"
            >
              Sign Out
            </button>
            <Image
              src={data?.user?.image || ''}
              width={50}
              height={50}
              alt={`${data?.user?.name} profile photo`}
              className="rounded-full"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  )
}
