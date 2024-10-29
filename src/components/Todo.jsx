import React from "react";
import { useTodos, useTodosIds } from "../services/queries";
import { useCreateTodo, useUpdateTodo } from "../services/mutation";
import { useForm } from "react-hook-form";

const Todo = () => {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();

  const handleCreateTodoSubmit = (data) => {
    createTodoMutation.mutate(data);
  };

  const handleMarkAsDoneSubmit = (data) => {
    if (data) {
      updateTodoMutation.mutate({ ...data, checked: true });
    }
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
        <input
          type="submit"
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? "creating..." : "create todo"}
        />
      </form>

      <ul>
        {todosQueries.map(({ data }, index) => (
          <li key={data?.id || index}>
            <div>Id: {data?.id}</div>
            <span>
              <strong>Title: </strong> {data?.title},{" "}
              <strong>Description: </strong> {data?.description}
            </span>

            <div>
              <button
                onClick={() => handleMarkAsDoneSubmit(data)}
                disabled={data?.checked}
              >
                {data?.checked ? "Done" : "Mark as done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
