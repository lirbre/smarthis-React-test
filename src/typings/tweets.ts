export interface TweetData {
  created_at: string
  id: string
  author_id: string
  text: string
  public_metrics: {
    retweet_count: number
    reply_count: number
    like_count: number
    quote_count: number
  }
  referenced_tweets: [
    {
      type: string
      id: string
    }
  ]
}
