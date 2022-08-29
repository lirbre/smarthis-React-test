import Image from 'next/image'
import { signIn } from 'next-auth/react'

export const WithoutUser = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-[#01ffa9] px-4 pt-8 xl:pt-32">
        <div className="flex min-h-full w-full max-w-[1324px] flex-col items-center justify-between lg:flex-row xl:items-start">
          <div className="my-auto flex h-full max-w-[670px] flex-col items-center justify-center gap-12 pb-4 xl:pb-40">
            <h4 className="font-black text-[#000]">
              WE BUILD SMARTHIS REACT CHALLENGE
            </h4>
            <p className="mr-auto max-w-[500px] text-left font-normal text-[#000]">
              Parece que você ainda não realizou Login, por favor faça o Login.
            </p>
            <button
              className="mr-auto border-4 border-black bg-[#fff] px-8 py-4 shadow-[8px_8px_0_#000] transition duration-200 ease-in hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] md:px-12 md:py-6"
              onClick={() => signIn()}
            >
              <small className="font-black text-[#000]">SIGN IN</small>
            </button>
          </div>
          <Image
            src={'/images/withoutuser.svg'}
            width={654}
            height={573}
            alt="a interactive dashboard image"
          />
        </div>
      </div>
    </>
  )
}
