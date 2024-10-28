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