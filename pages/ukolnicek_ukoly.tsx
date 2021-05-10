import React, { } from 'react'
import { useTodoItemQuery } from '../lib/ukol.graphql'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Menu } from '../components/navBar'
import { todoItem } from '../components/todoItem'

const Ukolnicek = () => {
  const {data, loading, error} = useTodoItemQuery({});
  console.log(data?.ukol.name);
    return (
    <div className={styles.container}>
      <Head>
        <title>Ukolníček</title>
      </Head>
      <Menu>
      </Menu>
      <main className={styles.main}>
        <h1>Todo app</h1>
        <div>
          {loading && <>loading...</>}
          {error && <>Eror!</>}
          {data && (
            <>
              <div className={styles.cart}>
                <h3>Název: {data.ukol.name}</h3>
                <p>Popis: {data.ukol.description}</p>
                <p>Datum: {data.ukol.date}</p>
                <p></p>
              </div>
            </>
          )}
        </div>
      </main>
        
    </div>
    )
}

export default Ukolnicek;