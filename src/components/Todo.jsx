import React from "react";
import { useTodos, useTodosIds } from "../services/queries";
import { useCreateTodo } from "../services/mutation";
import { useForm } from "react-hook-form";

const Todo = () => {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  const createTodoMutation = useCreateTodo();

  const handleCreateTodoSubmit = (data) => {
    createTodoMutation.mutate(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h1>New Todo: </h1>
        <input placeholder="Title" {...register("title")} />
        <br />
        <input placeholder="Description" {...register("description")} />
        <br />
        <input type="submit" />
      </form>

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
