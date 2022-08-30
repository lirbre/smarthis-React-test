import { useState } from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import Loading from './Loading'

interface CustomEmbedProps {
  id: string
}

export const CustomEmbed = ({ id }: CustomEmbedProps) => {
  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <div className="mx-auto w-full" style={{ animation: 'fade-in .5s' }}>
      <div style={{ animation: `${!isLoading ? 'fade-in .5s' : ''}` }}>
        <TwitterTweetEmbed onLoad={() => setLoading(false)} tweetId={id} />
      </div>
      {isLoading && <Loading />}
    </div>
  )
}
