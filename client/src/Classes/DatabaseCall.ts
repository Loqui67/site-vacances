import Axios from "axios";
import { serverAddress } from "../HostConfig";

export class DatabaseCall {


    getUsers = async () => {
        const response = await Axios.get(`${serverAddress}/users`);
        return response.data;
    }

    getUser = async (id: number) => {
        const response = await Axios.get(`${serverAddress}/users/${id}`);
        return response.data;
    }

    createUser = async (user: any) => {
        const response = await Axios.post(`${serverAddress}/users`, user);
        return response.data;
    }

    updateUser = async (id: number, user: any) => {
        const response = await Axios.put(`${serverAddress}/users/${id}`, user);
        return response.data;
    }   

    
}
