import { useQueryClient } from "@tanstack/react-query";
import axios from "axios"

const BASE_URL = 'http://localhost:8000'
const axiosInstance = axios.create({baseURL:BASE_URL})

export const getTodosIds = async () => {
    
    try{
        const response = await axiosInstance.get('todos');
        console.log('fetched ids:', response.data.map((todo) => todo.id));
        return response.data.map((todo) => todo.id)
    } catch (error) {
        console.error('failed to fetch todos id:', error);
        return [];
    }
}

export const getTodo = async (id) => {
    try {
        const todoResponse = await axiosInstance.get(`todos/${id}`);
        return todoResponse.data
    } catch (error){
        console.error(`Failed to fetch todo with id ${id}:`, error);
        return {};
    }
}

export const createTodo = async (data) => {
    try {
        const create = await axiosInstance.post("todos", data)
        return create.data
    } catch (error){
        console.error('failed to create todo:', error);
        return {};
    }

}

export const updateTodo = async (data) => {
    try{
        const update = await axiosInstance.put(`todos/${data.id}`, data);
        return update.data
    } catch (error){
        console.error('failed to update todo:', error);
        return {};
    }
}

export const deleteTodo = async (id) => {
    try {
        const deleteConstant = await axiosInstance.delete(`todos/${id}`);
        
    } catch (error) {
        console.error('failed to delete todo:', error)
    }
}

export const getProjectsFunction = async (page = 1) => {
    try {
        const getProjects = await axiosInstance.get(`projects?_page=${page}&_limit=3`)
        return getProjects.data
    } catch (error) {
        console.error('Failed to get projects:', error)
    }
}