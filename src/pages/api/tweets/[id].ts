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

  const { data } = await axios
    .get(
      `https://api.twitter.com/2/users/${id}/tweets?tweet.fields=attachments,author_id,created_at,id,public_metrics,referenced_tweets&expansions=attachments.media_keys,author_id&max_results=1`,
      options
    )
    .then((r) => {
      console.log('your r -> ', r)
      return r
    })
    .catch((err) => {
      console.log('something went wrong -> ', err)
      return err
    })

  res.status(200).json({ ...data })
}
