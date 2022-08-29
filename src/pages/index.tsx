import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { WithoutUser, WithUser } from '@/components'
import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = (props: any) => {
  const { data, status } = useSession()
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
          {status ? <WithoutUser /> : <WithUser />}
        </Main>
      )}
    </>
  )
}

export default Index
