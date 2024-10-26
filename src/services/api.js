import axios from "axios"

const BASE_URL = 'http://localhost:8000'
const axiosInstance = axios.create({baseURL:BASE_URL})

export const getTodosIds = async () => {
    
    try{
        const response = await axiosInstance.get('todos');
        return response.data.map((todo) => todo.id)
    } catch (error) {
        console.error('failed to fetch todos:', error);
        return [];
    }
}