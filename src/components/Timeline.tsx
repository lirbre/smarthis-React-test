import { useMemo, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { TweetData } from '@/typings/tweets'

import { CustomEmbed } from './CustomEmbed'

interface TweetDataProps {
  tweetData: TweetData[]
  isFetching: boolean
}

export const Timeline = ({ tweetData, isFetching }: TweetDataProps) => {
  const [shouldShow, setShouldShow] = useState<number>(8)

  const showCorrectly = useMemo(
    () => [...tweetData].slice(0, shouldShow),
    [shouldShow, tweetData]
  )

  const memoizedTweets = useMemo(
    () => showCorrectly?.map(({ id }) => <CustomEmbed key={id} id={id} />),
    [showCorrectly]
  )

  return (
    <div className="w-full">
      {!isFetching && tweetData.length === 0 ? (
        <div className="w-full items-center justify-center pb-32">
          <p className="w-full text-center font-bold text-[#000]">
            Você não tem nenhum tweet disponível.
          </p>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={shouldShow}
          next={() => setShouldShow((prev) => prev + 10)}
          hasMore={shouldShow < tweetData.length}
          loader={<></>}
          className="mx-auto grid w-full grid-flow-row-dense grid-cols-1 justify-center gap-12 pb-16 md:px-6 lg:grid-cols-2"
        >
          {memoizedTweets}
        </InfiniteScroll>
      )}
    </div>
  )
}
