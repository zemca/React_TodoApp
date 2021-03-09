import Link from 'next/link'
import React, { useState } from 'react'
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
        
      </main>
        
    </div>
    )
}

export default Ukolnicek;