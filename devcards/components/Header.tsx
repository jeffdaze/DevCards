import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {

  // const [session, loading] = useSession();
  const { data: session, status } = useSession();
  const loading = status === "loading";

  let button;

  if (session) {
    button = <button className="btn btn-secondary" onClick={() => signOut()}>Logout</button>;
  } else {
    button = <button className="btn btn-primary" onClick={() => signIn()}>Login</button>;
  }

  return (
    <nav>
      <ul>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="dashboard">Dashboard</a>
        </li>
      </ul>
      <form>
        {button}
      </form>
    </nav>

  )
}
