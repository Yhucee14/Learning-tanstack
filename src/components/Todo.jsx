import React from "react";
import { useTodos, useTodosIds } from "../services/queries";

const Todo = () => {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  return (
    <> 
      <ul>
        {todosQueries.map(({ data }, index) => (
          <li key={data?.id || index}>
            <div>Id: {data?.id}</div>
            <span>
              <strong>Title: </strong> {data?.title},{" "}
              <strong>Description: </strong> {data?.description}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
