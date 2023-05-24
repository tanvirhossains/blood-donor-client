import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Usetitle from '../../Hooks/Usetitle';

const Dashboard = () => {
    Usetitle("dashboard")


    return (
        <div>
            <div>Search by name</div>

            <div class="drawer drawer-mobile bg-gray-300">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}


                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Admin Panel</Link></li>
                        <li><Link to='/dashboard/donorList'>Donor List</Link></li>
                        <li><Link to='/dashboard/signin'>My history</Link></li>
                        {/* {admin && <li><Link to='/dashboard/users'>All User</Link></li>} */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;