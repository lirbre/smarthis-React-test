import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { MySession } from '@/typings/session'
import { TweetData } from '@/typings/tweets'

import { Timeline } from './Timeline'

export const WithUser = () => {
  const { data } = useSession()
  const myData: MySession = data as MySession
  const [tweetData, setTweetData] = useState<TweetData[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)

  const getTweets = () => {
    fetch(`/api/tweets/${myData?.user?.uid}`)
      .then((res) => res.json())
      .then((result) => {
        setTweetData(result.data)
        setIsFetching(false)
      })
  }

  useEffect(() => {
    if (!myData) return
    getTweets()
  }, [myData])

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
          <button
            className="mr-auto border-4 border-black bg-[#fff] px-8 py-4 shadow-[8px_8px_0_#000] transition duration-200 ease-in hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_#000] md:px-12 md:py-6"
            onClick={() => getTweets()}
          >
            <small className="font-black text-[#000]">RELOAD</small>
          </button>
        </div>
        <object
          type="image/svg+xml"
          data="https://smarthis.com.br/wp-content/themes/smarthis/public/assets/illustrations/ia.svg"
          className="mt-6 w-11/12 max-w-[638px] pb-12"
        />
      </div>
      <Timeline isFetching={isFetching} tweetData={tweetData} />
    </div>
  )
}
