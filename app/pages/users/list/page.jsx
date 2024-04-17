'use client'
import axios from "axios";
import {AXIOS_API} from "../../../components/common/enums/AXIOS_API";

const UserListPage = ()=> {
    async function getUser() {
        try {
            const response = await axios.get(`${AXIOS_API}/users/list`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    let userList = [];
    const fix = () => {
        getUser().then(data => {
            userList = data;
            console.log(userList);
        });
    }

    return (
        <div style={{backgroundColor:"black"}} onClick={fix}>hello</div>

    )
}
export default UserListPage;