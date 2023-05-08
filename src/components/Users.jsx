import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:5173/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>{user.name} : {user.email}
                        <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;