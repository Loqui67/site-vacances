import Axios from "axios";
import { serverAddress } from "../HostConfig";

export class DatabaseCall {


    getUsers = async () => {
        const response = await Axios.get(`${serverAddress}/users`);
        return response.data;
    }

    getUser = async (userLogin: string) => {
        const response = await Axios.get(`${serverAddress}/users/${userLogin}`);
        return response.data;
    }

    updateUser = async (user: any, userLogin: string) => {
        console.log(user);
        console.log(userLogin);
        const response = await Axios.put(`${serverAddress}/users`, {user: user, userLogin: userLogin});
        console.log(response.status);
    }   

    test = async () => {
        const response = await Axios.get(`${serverAddress}/test`);
        if (response.status === 200) {
        console.log(response.data);
        return;
        }
        console.log("Error");
    }

    
}
