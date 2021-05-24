import Link from 'next/link'
import { useTodoItemQuery } from '../lib/ukol.graphql'
import { FC } from 'react'
import styled from 'styled-components'
import { spacings } from './theme'
import styles from '../styles/Home.module.css'

const Cart = styled.div`
border: 1px solid black;
border-radius: 5px;
padding: 1em;
width: 20em;
height: 20em;
overflow: auto;
`

export const TodoItem: FC = () => {
  const {data, loading, error} = useTodoItemQuery({});
  return <div>
  {loading && <>loading...</>}
  {error && <>Eror!</>}
  {data && (
    <>
      <Cart>
        <h3>Název: {data.ukol.name}</h3>
        <p>Popis: {data.ukol.description}</p>
        <p>Datum: {data.ukol.date}</p>
        <p>Zákaznik: {data.ukol.customer?.firstName} {data.ukol.customer?.lastName}</p>
        <p>Auto: {data.ukol.car?.brand} {data.ukol.car?.type} rok {data.ukol.car?.year}</p>
      </Cart>
    </>
  )}
  </div>
}
