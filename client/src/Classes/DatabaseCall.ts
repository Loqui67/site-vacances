import Axios from "axios";

export class DatabaseCall {


    getUsers = async () => {
        const response = await Axios.get("http://localhost:3001/users");
        return response.data;
    }
}
