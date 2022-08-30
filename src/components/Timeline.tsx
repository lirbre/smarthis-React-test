/* eslint-disable */
import { MySession } from "@/typings/session";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { CustomEmbed } from "./CustomEmbed";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [shouldShow, setShouldShow] = useState<number>(8);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    if (!myData) return;
    getTweets();
  }, [myData]);

  const getTweets = () => {
    fetch(`/api/tweets/${myData?.user?.uid}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setIsFetching(false);
      });
  };

  const showCorrectly = useMemo(
    () => [...tweetData].filter(({}, i: number) => i < shouldShow),
    [shouldShow, tweetData]
  );

  const memoizedTweets = useMemo(
    () => showCorrectly?.map(({ id }) => <CustomEmbed key={id} id={id} />),
    [showCorrectly]
  );

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
          loader={
            <></>
          }
          className="grid lg:grid-cols-2 grid-cols-1 grid-flow-row-dense gap-12 justify-center pb-16 md:px-6 w-full mx-auto"
        >
          {memoizedTweets}
        </InfiniteScroll>
      )}
    </div>
  );
};
