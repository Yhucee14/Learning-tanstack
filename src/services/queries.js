import { keepPreviousData, useQueries, useQuery } from "@tanstack/react-query";
import { getProjectsFunction, getTodo, getTodosIds } from "./api";


export function useTodosIds() {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getTodosIds,
    })
}

export function useTodos(ids = []) {
    return useQueries({
        queries: (ids ?? []).map((id) => {
            return {
                queryKey: ['todo', {id}],
                queryFn: () => getTodo(id),
            }
        })
    })
}

export function useProjects(page) {
    return useQuery({
        queryKey: ['projects', {page}],
        queryFn: () => getProjectsFunction(page),
        placeholderData: keepPreviousData,
    })
}