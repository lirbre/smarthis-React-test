import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Unvalid method' })
  }

  const { id } = req.query

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER}`
    }
  }

  const params = new URLSearchParams({
    expansions:
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields':
      'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
  })

  const { data } = await axios
    .get(
      `https://api.twitter.com/2/users/${id}/tweets?${params}&max_results=100`,
      options
    )
    .then((r) => {
      return r
    })
    .catch((err) => {
      return err
    })

  res.status(200).json({ ...data })
}
