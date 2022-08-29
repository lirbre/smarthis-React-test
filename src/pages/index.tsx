import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = (props: any) => {
  const { data, status } = useSession()

  useEffect(() => {
    console.log('user data -> ', data)
  }, [data])

  useEffect(() => {
    console.log('my props', props)
  }, [props])

  return (
    <Main
      meta={
        <Meta
          title="Smarthis React Test"
          description="Smarthis React Test done by Breno Lira."
        />
      }
    >
      <div className="container flex flex-col gap-2 pt-4">
        <button onClick={() => signIn()}>Sign In twitter</button>
        <button onClick={() => signOut()}>Sign Out twitter</button>
        <p>{status}</p>
      </div>
    </Main>
  )
}

export default Index
