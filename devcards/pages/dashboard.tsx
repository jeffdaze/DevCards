import React from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Unauthorized from '../components/Unauthorized'
import UserDashboard from '../components/UserDashboard'

import { useSession } from 'next-auth/react'

export default function Dashboard() {

  const { data: session, status } = useSession();
  const loading = status === "loading";

  var content = session ? <UserDashboard></UserDashboard> : <Unauthorized></Unauthorized>

  return (
    <div className="container">
      <Head>
        <title>DevCards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      {content}

    </div>
  )
}
