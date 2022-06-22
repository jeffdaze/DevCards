import { signIn } from 'next-auth/react'
import OktaWrapper from './OktaWrapper'

export default function Unauthorized() {

  return (
    <div>
      <p>You are not logged in!</p>

      <p>Please sign in here:</p>

      <p><button onClick={() => signIn()}>Sign in</button></p>
    </div>
  )
}
