import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Menu } from '../components/navBar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Ukolnicek = () => {
  const [value, onChange] = useState(new Date());
    return (
    <div className={styles.container}>
      <Head>
        <title>Ukolníček</title>
      </Head>
      <Menu>
      </Menu>
      <main className={styles.main}>
        <div>
          <Calendar
            // onChange={onChange}
            // value={value}
          />
        </div>
      </main>
        
    </div>
    )
}

export default Ukolnicek;