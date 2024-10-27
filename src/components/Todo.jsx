import React from 'react'
import { useTodosIds } from '../services/queries'

const Todo = () => {
const todosIdsQuery = useTodosIds();

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
    {todosIdsQuery.data?.map((id) => {
      return <p key={id}>{id}</p>
    })}
    </>
  )
}

export default Todo