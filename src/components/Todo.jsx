import React from 'react'
import { useTodosIds } from '../services/queries'
import { useIsFetching } from '@tanstack/react-query';

const Todo = () => {
const todosIdsQuery = useTodosIds();
const isFetching = useIsFetching();

// if (todosIdsQuery.isPending){
//     return <span>Loading...</span>
// }

// if (todosIdsQuery.isError){
//     return <span>Error ocurred...</span>
// }

  return (
    <>
    <p>Query function status: {todosIdsQuery.fetchStatus}</p>
    <p>Query data status: {todosIdsQuery.status}</p>
    <p>Global isFetching: {isFetching}</p>
    {todosIdsQuery.data?.map((id) => {
      return <p key={id}>{id}</p>
    })}
    </>
  )
}

export default Todo