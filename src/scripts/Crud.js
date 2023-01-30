import axios from 'axios';
import User from "./Interfaces";


export async function getUsers(): Promise<User[]> {
    try {
        const response = await axios.get<User[]>('https://crudcrud.com/api/95e03b819ee94857a9be5af862acf55e/PMPuser');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export async function getUser(user: User): Promise<User[]> {
    try {
        const response = await axios.get<User[]>(`https://crudcrud.com/api/95e03b819ee94857a9be5af862acf55e/PMPuser/${user.id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export async function addUser(user: User): Promise<User[]> {
    try {
        const response = await axios.post<User[]>('https://crudcrud.com/api/95e03b819ee94857a9be5af862acf55e/PMPuser', user);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export async function updatetUser(user: User): Promise<User[]> {
    try {
        const response = await axios.put<User[]>(`https://crudcrud.com/api/95e03b819ee94857a9be5af862acf55e/PMPuser/${user.id}`, user);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

export async function deleteUser(user: User): Promise<void> {
    try {
        await axios.delete<User[]>(`https://crudcrud.com/api/95e03b819ee94857a9be5af862acf55e/PMPuser/${user.id}`);
    } catch (error) {
        console.error(error);
        throw error;
    }

}
