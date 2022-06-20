import React from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Unauthorized from '../components/Unauthorized'
import Movies from '../components/Movies'

import { useSession } from 'next-auth/react'

export default function Dashboard() {

  const { data: session, status } = useSession();
  const loading = status === "loading";

  var content = session ? <Movies></Movies> : <Unauthorized></Unauthorized>

  return (
    <div className="container">
      <Head>
        <title>Movies By Nik - Find Your Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      {content}

    </div>
  )
}
