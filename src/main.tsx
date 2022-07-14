import React, {useEffect, useState, Fragment } from 'react';
import axios from 'axios';

interface User {
    id: number,
    name: string,
    username:  string,
    email:  string,
    address: {
        street: string,
        suite:  string,
        city:  string,
        zipcode:  string,
        geo: {
            lat:  string,
            lng:  string
        }
    },
    phone:  string,
    website:  string,
    company: {
        name:  string,
        catchPhrase:  string,
        bs: string
    }
}

export type TUserList = User[]

const Users: React.FC = (props) => {
    const [users, setUserList] = useState<User[]>([]);

    useEffect(() => {
        axios.get<TUserList>('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data);
                setUserList(response.data);
            });
    }, []);

    return (
        <Fragment>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span >{user.name}</span>
                        {"  "}
                        <span>{user.username}</span>
                        {"  "}
                        <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </Fragment>

    );
}
export default Users;
