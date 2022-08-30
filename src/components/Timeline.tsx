/* eslint-disable */
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ISODateString } from "next-auth";
// import Tweet from "./Tweet";

interface MySession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    uid?: string | null;
  };
  expires: ISODateString;
}

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

  const [tweetData, setData] = useState<TweetData[]>([
    {
      created_at: "2022-07-24T18:05:16.000Z",
      id: "1551267284395630598",
      author_id: "3819345081",
      text: "@Rivalrylolbr @baianolol1 @Y8zora @RudoDuro reza",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 2,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1548301785651023875",
        },
      ],
    },
    {
      created_at: "2022-07-24T18:04:09.000Z",
      id: "1551267003452850178",
      author_id: "3819345081",
      text: "RT @Rivalrylolbr: FAZ O SOGRINHA PORQUE O SORTEIO DO BAIANO CHEGOU! Concorra a um PCZÃO CUSTOMIZADO de $3.000 (3 mil dólares) 🔥\n\n✅Like e RT…",
      public_metrics: {
        retweet_count: 9316,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "retweeted",
          id: "1548301785651023875",
        },
      ],
    },
    {
      created_at: "2022-07-24T18:04:07.000Z",
      id: "1551266993961144322",
      author_id: "3819345081",
      text: "@Rivalrylolbr @baianolol1 @esACarry @brucerlol",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1548301785651023875",
        },
      ],
    },
    {
      created_at: "2022-07-06T14:41:40.000Z",
      id: "1544693066874978304",
      author_id: "3819345081",
      text: "@brenonovelli Sua DM está fechada, me manda uma dm",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1544692507409252354",
        },
      ],
    },
    {
      created_at: "2022-07-06T14:37:11.000Z",
      id: "1544691937004982273",
      author_id: "3819345081",
      text: "@brenonovelli E aí, hahaaha\n\nVamos conversar. :)",
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 0,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1544077960784875522",
        },
      ],
    },
    {
      created_at: "2022-07-04T23:17:16.000Z",
      id: "1544098046442627073",
      author_id: "3819345081",
      text: "@BADEUZ_ Jamais te odiaria amigo",
      public_metrics: {
        retweet_count: 0,
        reply_count: 0,
        like_count: 1,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1544063916480806912",
        },
      ],
    },
    {
      created_at: "2022-06-14T14:51:12.000Z",
      id: "1536722930129944578",
      author_id: "3819345081",
      text: "@duds________ qual sorteio?\n(não vale sortei o pau na tua cara",
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 1,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1536718830134771713",
        },
      ],
    },
    {
      created_at: "2022-06-11T01:22:33.000Z",
      id: "1535432265181843458",
      author_id: "3819345081",
      text: "@BADEUZ_ piada de tiozão falando da Muié 😭😭😭",
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 3,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1535421489004089347",
        },
      ],
    },
    {
      created_at: "2022-06-11T01:20:27.000Z",
      id: "1535431736359899136",
      author_id: "3819345081",
      text: "@duds________ será que quando eu crescer eu vou ser que nem esse gostoso?",
      public_metrics: {
        retweet_count: 0,
        reply_count: 1,
        like_count: 1,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "replied_to",
          id: "1535408250702667777",
        },
      ],
    },
    {
      created_at: "2022-05-23T16:11:00.000Z",
      id: "1528770480840245248",
      author_id: "3819345081",
      text: "RT @Gaules: A GALERA DA MIDNITE FICOU MALUCA! Pra comemorar o Major, vai rolar um sorteio de um pc gamer MONSTRO de R$30.000 para a Tribo!…",
      public_metrics: {
        retweet_count: 65087,
        reply_count: 0,
        like_count: 0,
        quote_count: 0,
      },
      referenced_tweets: [
        {
          type: "retweeted",
          id: "1523679057279213568",
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!myData) return;
    console.log(tweetData)
    getTweets()
  }, [myData]);

  const getTweets = () => {
    fetch(`/api/tweets/${myData?.user?.uid}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };

  // const memoizedTweets = useMemo(
  //   () =>
  //     tweetData.map(
  //       ({
  //         author_id,
  //         created_at,
  //         id,
  //         public_metrics,
  //         referenced_tweets,
  //         text,
  //       }) => <Tweet text={text} created_at={created_at} id={id} public_metrics={public_metrics} referenced_tweets={referenced_tweets} author={} media={} />
  //     ),
  //   [tweetData]
  // );

  return (
    <>
      {/* <Tweet author={} created_at={} id={} media={} public_metrics={} referenced_tweets={}/> */}
    </>
  );
};
