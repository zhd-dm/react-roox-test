import React, {FC} from 'react';
import {IUser} from "../../types";
import './UserDetail.scss';
import Button from '../UI/Button/Button';

interface UserProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserDetail: FC<UserProps> = ({user, onClick}) => {
    return (
        <div 
            className="user-detail-card" 
            onClick={() => onClick(user)}
        >
            <div className="user-detail-info">
                <div className="user-name">
                    <span className="user-data-title"> ФИО: </span>
                    <span className="user-data">{user.name}</span>
                </div>
                <div className="user-city">
                    <span className="user-data-title"> город: </span>
                    <span className="user-data">{user.address.city}</span>
                </div>
                <div className="user-company">
                    <span className="user-data-title"> компания: </span>
                    <span className="user-data">{user.company.name}</span>
                </div>
            </div>

            <Button
            onClick={() => console.log('hello')}
            title="Подробнее"
            className="user-detail-btn"
          />

        </div>
    );
};

export default UserDetail;