import { keepPreviousData, useInfiniteQuery, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct, getProductsFunction, getProjectsFunction, getTodo, getTodosIds } from "./api";


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

export function useProducts() {
    return useInfiniteQuery({
        queryKey: ['product'],
        queryFn: getProductsFunction,
        initialPageParam: 0,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined;
            }
            return lastPageParam + 1;
        },
        getPreviousPageParam: (_, __, firstPageParam) => {
            if (firstPageParam <= 1) {
                return undefined;
            } 
            return firstPageParam - 1
        }
    })
}

export function useProduct(id)  {
const queryClient = useQueryClient();

return useQuery({
    queryKey: ['product', {id}],
    queryFn: () => getProduct(id),
})
}