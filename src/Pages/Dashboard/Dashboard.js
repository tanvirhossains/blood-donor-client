import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h1 className=' text-2xl text-primary font-bold'>Well Come to The Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                        <li><Link to='/dashboard/review'>My review</Link></li>
                        <li><Link to='/dashboard/history'>My history</Link></li>
                        {admin && <li><Link to='/dashboard/users'>All User</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;