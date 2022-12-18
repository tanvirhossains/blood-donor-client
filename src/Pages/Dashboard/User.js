import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const User = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        // fetch('https://vast-temple-90550.herokuapp.com/user',
        fetch('http://localhost:5000/user',
        {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
             }} )
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    // const { data: users, isLoading} = useQuery('users', () =>
    //     fetch('https://localhost/5000/user', {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res =>
    //         res.json()
    //     )
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h1>This is user : {users.length}</h1>
            <div class="overflow-x-auto bg">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th className='bg-gray-600'>Number</th>
                            <th >email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                index={index}
                                key={user._id}
                                user={user}
                              ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;