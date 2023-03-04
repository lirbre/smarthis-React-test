import { signIn } from 'next-auth/react'

export const WithoutUser = () => {
  return (
    <>
      <div className="my-auto flex h-full max-w-[670px] flex-col items-center justify-center gap-12 pb-4 xl:pb-40">
        <h4 className="font-black text-[#000]">
          WE BUILD SMARTHIS REACT CHALLENGE
        </h4>
        <p className="mr-auto max-w-[500px] text-left font-normal text-[#000]">
          Você ainda não realizou Login, por favor faça o Login.
        </p>
        <button
          className="mr-auto border-4 border-black bg-[#fff] px-8 py-4 shadow-[8px_8px_0_#000] transition duration-200 ease-in hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] md:px-12 md:py-6"
          onClick={() => signIn()}
        >
          <small className="font-black text-[#000]">SIGN IN</small>
        </button>
      </div>
      <object
        type="image/svg+xml"
        data="https://smarthis.com/wp-content/themes/smarthis/public/assets/illustrations/head.svg "
        className="mt-6 w-11/12 max-w-[638px] pb-12"
      />
    </>
  )
}
