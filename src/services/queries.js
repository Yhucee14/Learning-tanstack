import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodosIds } from "./api";


export function useTodosIds() {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodosIds,
    })
}

export function useTodos(ids) {
    return useQueries({
        queries: (ids => []).map((id) => {
            return {
                queryKey: ['todo', {id}],
                queryFn: getTodosIds,
            }
        })
    })
}