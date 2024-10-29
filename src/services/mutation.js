import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, updateTodo } from "./api";

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createTodo(data),

    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      console.log("succcess");
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}

export function useUpdateTodo() {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data) => updateTodo(data),

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        try {
            await queryclient.invalidateQueries({ queryKey: ["todos"] });
        await queryclient.invalidateQueries({
          queryKey: ["todo", { id: variables.id }],
        });
        } catch (invalidateError) {
            console.log('Error invalidating queries:', invalidateError)
        }
      }
    },
  });
}

