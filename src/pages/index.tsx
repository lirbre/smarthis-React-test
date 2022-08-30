import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { WithoutUser, WithUser } from '@/components'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const { data } = useSession()
  const [preventHydration, setPreventHydration] = useState<boolean>(false)

  useEffect(() => {
    // prevent hydration error from Next 12
    if (data === undefined) return
    setPreventHydration(true)
  }, [data])

  return (
    <>
      {preventHydration && (
        <Main
          meta={
            <Meta
              title="Smarthis React Test"
              description="Smarthis React Test done by Breno Lira."
            />
          }
        >
          <div className="flex min-h-[calc(100vh-50px)] flex-col items-center justify-center bg-[#01ffa9] px-4 pt-32">
            <div
              className="flex min-h-[calc(100vh-200px)] w-full max-w-[1324px] flex-col items-center justify-between lg:flex-row xl:items-start"
              style={{ animation: 'entrance 3s linear 1s 1 normal both' }}
            >
              {data === null || data === undefined ? (
                <WithoutUser />
              ) : (
                <WithUser />
              )}
            </div>
          </div>
        </Main>
      )}
    </>
  )
}

export default Index
