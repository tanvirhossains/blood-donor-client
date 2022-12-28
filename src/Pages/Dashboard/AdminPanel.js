import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminPanelRow from './AdminPanelRow';

const AdminPanel = () => {

    const { data: adminUsers, isLoading } = useQuery('admins', () => fetch('http://localhost:5000/donor').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-3xl text-red-600 font-bold font-mono p-2'>This is Admin Panel Board!!! <br /> Total Admin : <span className='text-zinc-900' >{adminUsers.length}  </span> </h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>blood</th>
                            <th>Gender</th>
                        </tr>
                        {
                            adminUsers.map((adminUser, index) => <AdminPanelRow

                                index={index}
                                key={adminUser._id}
                                adminUserData={adminUser}
                            ></AdminPanelRow>)
                        }
                    </thead>
                    <tbody>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;