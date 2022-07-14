import React, {Fragment } from 'react';
import { TUserList } from './main';

interface UserListProps {
    items: TUserList
};

const UserList: React.FC<UserListProps> = (props) => {
    return (
        <Fragment>
            <ul>
                {props.items.map(user => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default UserList;