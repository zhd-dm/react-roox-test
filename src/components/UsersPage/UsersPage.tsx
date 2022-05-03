import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types";
import axios from "axios";
import List from "../List/List";
import UserDetail from "../UserDetail/UserDetail";
import Loader from "../UI/Loader/Loader";
import './UsersPage.scss';

const UsersPage:FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="users-list-wrapper">
            <Loader />
            <span 
                className="users-list-title"
            >
                Список пользователей
            </span>
            <List
                items={users}
                renderItem={(user: IUser) =>
                <UserDetail
                    onClick={(user) => ('/users/' + user.id)}
                    user={user}
                    key={user.id}
                />}
            />  
        </div>
        
        
    );
};

export default UsersPage;
