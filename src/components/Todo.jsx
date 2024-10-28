import React from "react";
import { useTodos, useTodosIds } from "../services/queries";
import { useIsFetching } from "@tanstack/react-query";

const Todo = () => {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  return (
    <>
      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
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
