import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { WithoutUser, WithUser } from '@/components'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = (props: any) => {
  const { data } = useSession()
  const [preventHydration, setPreventHydration] = useState<boolean>(false)

  useEffect(() => {
    console.log('user data -> ', data)
  }, [data])

  useEffect(() => {
    console.log('my props', props)
  }, [props])

  useEffect(() => {
    // prevent hydration error from Next 12
    setPreventHydration(true)
  }, [])

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
          <div className="flex h-full items-center justify-center bg-[#01ffa9] px-4 pt-8 xl:pt-32">
            <div
              className="flex min-h-full w-full max-w-[1324px] flex-col items-center justify-between lg:flex-row xl:items-start"
              style={{ animation: 'entrance 3s' }}
            >
              {!data ? <WithoutUser /> : <WithUser />}
            </div>
          </div>
        </Main>
      )}
    </>
  )
}

export default Index
