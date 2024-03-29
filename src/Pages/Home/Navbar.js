import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Assets/blood-logo.png'






const Navbar = () => {
  const [user] = useAuthState(auth)

  const logOut = () => {
    signOut(auth)
  }

  const setItem = <>
    <li ><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About Us</Link></li>
    {/* <li><Link to='/review'>Review</Link></li> */}
    {/* <li><Link to='/contact'>Contact  Us</Link></li> */}
    <li><Link to='/signin'>Join as a donor</Link></li>

    {/* -----------------if user exist then dash board will show-----------------  */}



    <li>{user ? <div>
      <li><Link to='/dashboard'>Dashboard</Link></li>

    </div> :
      <div>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
      </div>
    }</li>
    {/* <li>{user ? <button onClick={logOut} class="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li> */}

    {/* <li>{user && <Link to='/dashboard'>Dashboard</Link>}</li>
        <li>{user ? <button onClick={logOut} class="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li> */}
  </>
  return (
    <div>
      <div class="navbar bg-red-600  flex items-center">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-blue-800">
              {setItem}
            </ul>
          </div>
          <Link className='font-bold text-2xl pl-6' to='/'><img src={logo} alt="" /></Link>
          <Link className='font-bold text-2xl pl-6' to='/'>Blood Donor</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0  text-2xl text-white ">
            {setItem}
          </ul>
        </div>
        {user ?
          <div class="navbar-end ">
            <div class="dropdown dropdown-end flex items-center">
              <div>
                <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden"> <small>Dashboard <br />Sidebar </small> </label>
              </div>
              <div>

                {/* user profile info */}
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>

                    <Link class="justify-between" to='/profile'>
                      Profile
                      <span class="badge">New</span>
                    </Link>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a onClick={logOut} > Logout</a></li>
                </ul>
              </div>
            </div>
          </div> : <div></div>
        }
      </div>
    </div>
  );
};

export default Navbar;