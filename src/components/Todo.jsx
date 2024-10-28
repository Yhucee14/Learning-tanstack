import React from 'react'
import { useTodosIds } from '../services/queries'
import { useIsFetching } from '@tanstack/react-query';

const Todo = () => {
const todosIdsQuery = useTodosIds();


  return (
    <>
    {todosIdsQuery.data?.map((id) => {
      return <p key={id}>id: {id}</p>
    })}
    </>
  )
}

export default Todo