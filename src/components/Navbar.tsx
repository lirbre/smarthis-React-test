import Image from 'next/image'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-10 flex h-[85px] w-full items-center justify-center">
      <div className="flex w-full max-w-[1324px] items-center justify-between">
        <Image
          src={'/logos/smarthis.svg'}
          width={162}
          height={67}
          alt="Smarthis Logo"
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>
    </header>
  )
}
