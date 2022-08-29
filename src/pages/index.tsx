import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { Meta } from '@/layouts'
import { Main } from '@/templates'

const Index = () => {
  const { data, status } = useSession()

  useEffect(() => {
    console.log('user data -> ', data)
  }, [data])

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
