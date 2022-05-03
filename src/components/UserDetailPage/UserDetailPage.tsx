import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types";
import axios from "axios";

interface UserDetailPageParams {
    id: string;
}

const UserDetailPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/')
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserDetailPage;
