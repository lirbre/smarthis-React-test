import Image from 'next/image'

export const WithUser = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-[#01ffa9] px-4 pt-8 xl:pt-32">
        <div className="flex min-h-full w-full max-w-[1324px] flex-col items-center justify-between lg:flex-row xl:items-start">
          <div className="my-auto flex h-full max-w-[670px] flex-col items-center justify-center gap-12 pb-4 xl:pb-40">
            <h4 className="font-black text-[#000]">
              WE BUILD SMARTHIS REACT CHALLENGE
            </h4>
            <p className="mr-auto max-w-[500px] text-left font-normal text-[#000]"></p>
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
