import axios from "axios";
const baseUrl="http://localhost:3001/users";

class UserService {
    register(user) {
        return axios.post(`${baseUrl}`, user);
    }
    async loginUser(username, password) {
        try {
            return await axios.get((`${baseUrl}`), {
                headers: {
                    "Content-Type": "application/json"
                },
                params: {
                    username: username,
                    password: password
                }
            })
        } catch (e) {
            return null
        }
    }
}
export default new UserService();

