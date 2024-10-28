import { useMutation } from "@tanstack/react-query";
import { createTodo } from "./api";


export function useCreateTodo() {
    return useMutation({
        mutationFn: ((data) => createTodo(data)),

        onMutate: () => {
            console.log('mutate')
        },

        onError: () => {
            console.log('error')
        },

        onSuccess: () => {
            console.log('succcess')
        },

        onSettled: () => {
            console.log('settled')
        }
    })
}