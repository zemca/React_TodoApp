import Link from 'next/link'
import React, { } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Menu } from '../components/navBar'

const Ukolnicek = () => {
    return (
    <div className={styles.container}>
      <Head>
        <title>Ukolníček</title>
      </Head>
      <Menu>
      </Menu>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to To Do App!
        </h1>
        <Link scroll={false} href="ukolnicek_ukoly">
          <a className={styles.mainButton}>Start now</a>
        </Link>
      </main>
        
    </div>
    )
}

export default Ukolnicek;