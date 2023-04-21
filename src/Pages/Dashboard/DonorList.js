// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const DonorList = () => {

    const [user] = useAuthState(auth)
    // const [donorsList, setDonorList] = useState([]);
    // useEffect(() => {
    //     fetchProducts();
    // }, []);
    // const fetchProducts = () => {
    //     axios
    //         .get('http://localhost:5000/donors')
    //         .then((res) => {
    //             console.log(res);
    //             setDonorList(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const { data: donorsList, isLoading, refetch } = useQuery('admins', () => fetch(`http://localhost:5000/donors`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(donorsList);
    return (
        <div>
            <h1>this is donor list outlet?????</h1>
            <div class="overflow-x-auto ">
                <table class="table table-compact w-full bg-none">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Blood Group</th>
                            <th>last donation</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>What's Up</th>
                            <th>Mobile</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            donorsList.map((donor, index) =>
                                <tr>
                                    <th>{index + 1}_{donor.name}</th>
                                    <td>{donor.bldGroup}</td>
                                    <td>{donor.lastBlood}</td>
                                    <td>{donor.gender}</td>
                                    <td>{donor.mobile}</td>
                                    <td><button className='btn btn-sm'>< a href={donor.facebook}>facebook </a>  </button></td>
                                    <td>{donor.facebook}</td>



                                </tr>
                            )
                        }





                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default DonorList;