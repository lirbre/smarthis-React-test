/* eslint-disable */
import { MySession } from "@/typings/session";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { CustomEmbed } from "./CustomEmbed";

interface TweetData {
  created_at: string;
  id: string;
  author_id: string;
  text: string;
  public_metrics: {
    retweet_count: number;
    reply_count: number;
    like_count: number;
    quote_count: number;
  };
  referenced_tweets: [
    {
      type: string;
      id: string;
    }
  ];
}

export const Timeline = () => {
  const { data } = useSession();
  const myData: MySession = data as MySession;

  const [tweetData, setData] = useState<TweetData[]>([]);

  useEffect(() => {
    if (!myData) return;
    console.log(tweetData);
    getTweets();
  }, [myData]);

  const getTweets = () => {
    fetch(`/api/tweets/${myData?.user?.uid}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      });
  };

  const memoizedTweets = useMemo(
    () =>
      tweetData?.map(({ id }) => <CustomEmbed key={id} id={id} />),
    [tweetData]
  );

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 grid-flow-row-dense gap-12 justify-center pb-16 px-6 w-full mx-auto">{memoizedTweets}</div>
    </>
  );  
};
