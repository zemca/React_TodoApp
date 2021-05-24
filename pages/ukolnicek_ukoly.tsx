import React, { } from 'react'
import { useTodoItemQuery } from '../lib/ukol.graphql'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Menu } from '../components/navBar'
import { TodoItem } from '../components/todoItem'

const Ukolnicek = () => {
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
          <TodoItem>
          </TodoItem>
        </div>
      </main>
        
    </div>
    )
}

export default Ukolnicek;