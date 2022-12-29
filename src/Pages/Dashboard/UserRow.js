import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const UserRow = ({ user, index, }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Make a admin successfully`)
                }

            })
    }

    const { data: donorList, isLoading } = useQuery('donorList', () => fetch('http://localhost:5000/donor').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td> {role !== 'Admin' && <button onClick={makeAdmin} class="btn">Make Admin</button>}</td>
            <td><button class="btn">Remove User</button></td>
        </tr>
    );
};

export default UserRow;