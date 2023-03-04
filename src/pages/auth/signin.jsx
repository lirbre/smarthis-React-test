/* eslint-disable */
// still need to type and make eslint works
// because next-auth doesnt have typings

import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignIn({ providers }) {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data]);

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          className="bg-[#01ffa9] min-h-[calc(100vh-50px)] h-full flex items-center justify-center pt-32 px-4"
          key={provider.name}
        >
          <div
            className="w-full max-w-[1324px] min-h-[calc(100vh-200px)] xl:items-start items-center justify-between flex lg:flex-row flex-col"
            style={{ animation: "entrance 3s" }}
          >
            <div className="max-w-[670px] h-full my-auto flex flex-col items-center justify-center gap-12 xl:pb-40 pb-4">
              <h4 className="text-[#000] font-black">
                WE BUILD SMARTHIS REACT CHALLENGE
              </h4>
              <p className="max-w-[500px] text-left mr-auto font-normal text-[#000]">
                Clique para prosseguir com o Login.
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="mr-auto bg-[#fff] border-4 border-black md:px-12 px-8 md:py-6 py-4 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] hover:-translate-y-1 hover:-translate-x-1 transition ease-in duration-200"
              >
                <small className="text-[#000] font-black">SIGN IN</small>
              </button>
            </div>
            <object
              type="image/svg+xml"
              data="https://smarthis.com/wp-content/themes/smarthis/public/assets/illustrations/rpa-home.svg"
              className="w-11/12 max-w-[638px] pb-12 mt-6"
            ></object>
          </div>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
