import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "./api";


export function useCreateTodo() {
    const queryClient = useQueryClient();


    return useMutation({
        mutationFn: ((data) => createTodo(data)),

        onMutate: () => {
            console.log('mutate')
        },

        onError: () => {
            console.log('error')
        },

        onSuccess: () => {
            console.log('succcess');
            queryClient.invalidateQueries(['todos']);
        },

        onSettled: () => {
            console.log('settled')
        }
    })
}