import Axios from "axios";
import { serverAddress } from "../HostConfig";

export class DatabaseCall {


    getUsers = async () => {
        const response = await Axios.get(`${serverAddress}/users`);
        return response.data;
    }
}
