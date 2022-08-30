import { Timeline } from './Timeline'

export const WithUser = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-16">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <div className="my-auto flex h-full max-w-[670px] flex-col items-center justify-center gap-12 pb-4 xl:pb-40">
          <h4 className="font-black text-[#000]">
            WE BUILD SMARTHIS REACT CHALLENGE
          </h4>
          <p className="mr-auto max-w-[500px] text-left font-normal text-[#000]">
            Veja seus últimos 100 Tweets abaixo.
          </p>
        </div>
        <object
          type="image/svg+xml"
          data="https://smarthis.com.br/wp-content/themes/smarthis/public/assets/illustrations/ia.svg"
          className="mt-6 w-11/12 max-w-[638px] pb-12"
        />
      </div>
      <Timeline />
    </div>
  )
}
