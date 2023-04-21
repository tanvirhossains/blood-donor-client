import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { json, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Profile = () => {

    const [user] = useAuthState(auth)
    // --------------reset password---------------
    const [sendPasswordResetEmail, sending, pasResError] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async (data) => {
        toast('password reset, check your email please')
        if (data.email) {
            await sendPasswordResetEmail(data.email)
        }
        else {
            toast('enter your email')
        }
    }


    // use form
    const { register, formState: { errors }, handleSubmit } = useForm();


    //-----------------data fetching using email--------------
    // const { data: data, isLoading, refetch } = useQuery('single', () => fetch(`http://localhost:5000/donors?email=${user.email}`).then(res => res.json()))


    const [data, setDonorData] = useState([]);
    axios.get(`http://localhost:5000/donors?email=${user.email}`)
        .then((res) => {
            console.log(res);
            setDonorData.JSON.parse(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    // JSON.parse()
    // const { data, isLoading, refetch } = useQuery('admins', () => fetch(`http://localhost:5000/donors?email=${user.email}`).then(res => res.json()))
    // if (isLoading) {
    //     <Loading></Loading>
    // }
    // refetch();
    // console.log(data);
    // console.log(user)
    //console.log(data[0]?.name)

    const navigate = useNavigate();
    if (!user) {
        navigate('/')
    }



    const onSubmit = userInfo => {

        // setUserInfo(userInfo)
        // ---------------------------bmi calculating -----------
        const height = (userInfo.feet * 12) + (userInfo.inch)
        const userHeight = ` ${userInfo.feet}.${userInfo.inch}`
        let bmi = (userInfo.weight) / (height * height);
        toast(' email please')

        const userProfile = {
            name: userInfo.name,
            email: userInfo.email,
            gender: userInfo.gender,
            bldGroup: userInfo.bloodGrp,
            lastBlood: userInfo.lastTime,
            presentAddress: userInfo.currentAdd,
            mobile: userInfo.contactNum,
            whatsUp: userInfo.whatsUp,
            facebook: userInfo.facebook,
            bTimes: userInfo.donatedTimes,
            age: userInfo.age,
            weight: userInfo.weight,
            height: userHeight,
            inch: userInfo.inch,
            feet: userInfo.feet,
            bmi: bmi
        }

        console.log(userProfile);
        console.log(userInfo);

        fetch(`http://localhost:5000/donor/${user.email}`, {
            method: 'PUT',
            body: JSON.stringify(userProfile),
            headers: {
                // 'Content-type': 'application/json; charset=UTF-8',
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };




    return (
        <div className='p-10  grid grid-cols-1 lg:grid-cols-2 text-center border border-indigo-600  '>
            <div>
                <div class="avatar">
                    <div class="w-80 h-80 rounded-full ring ring-primary ring-offset-base-100 ">
                        {/* <img src={user.photoURL} /> */}
                    </div>
                </div>
                <p></p>
                <Link className='btn m-5'> Change Your password</Link>

            </div>

            <div className="w-96">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="form-control w-96 my-5   ">

                        {/* ------------name */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"
                                aria-describedby="required-description"> Enter Your Name <span class="text-red-600">*</span></span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            defaultValue={data[0]?.name}
                            class="input input-bordered 
                        input-error bg-none w-96 text-black "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span className='text-red-600 '> {errors.name.message} </span>}
                        </label>
                        {/* blood group */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Blood Group <span class="text-red-600">*</span></span>
                        </label>
                        <select
                            defaultValue={data[0]?.bldGroup}
                            class="select select-secondary w-96" {...register("bloodGrp", {
                                required: {
                                    value: true,
                                    message: 'Blood Group is Required'
                                }
                            })}>
                            <option value="">Select....</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-" >O-</option>
                        </select>

                        {/* Gender name  */}
                        <label class="label">
                            <span class="label-text font-bold text-xl">Gender Group <span class="text-red-600">*</span></span>
                        </label>

                        <select
                            defaultValue={data[0]?.gender}

                            class="select select-secondary w-96" {...register("gender", {
                                required: {
                                    value: true,
                                    message: 'Gender Group is Required'
                                }
                            })}>

                            <option value="">Select....</option>
                            <option value="male">male</option>
                            <option value="female">female</option>

                        </select>
                        <label class="label">
                            {errors.number?.type === 'required' && <span className='text-red-600 '> {errors.number.message} </span>}
                            {errors.number?.type === 'minLength' && <span className='text-red-600'> {errors.number.message} </span>}
                            {errors.number?.type === 'maxLength' && <span className='text-red-600'> {errors.number.message} </span>}
                        </label>

                        {/* ------------Contact number */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Contact Number <span class="text-red-600">*</span></span>
                        </label>

                        <input
                            type="number"
                            placeholder="Your Contact Number"
                            defaultValue={data[0]?.mobile}
                            // value={data.currentAdd ? data.currentAdd : 0}
                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("contactNum", {
                                required: {
                                    value: true,
                                    message: 'Contact Number is Required'
                                },
                                minLength: {
                                    value: 11,
                                    message: 'Minimum Length should be 11 digit'
                                },
                                maxLength: {
                                    value: 11,
                                    message: 'Maximum Length should be 11 digit' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                        <label class="label">
                            {errors.contactNum?.type === 'required' && <span className='text-red-600 '> {errors.contactNum.message} </span>}
                            {errors.contactNum?.type === 'minLength' && <span className='text-red-600'> {errors.contactNum.message} </span>}
                            {errors.contactNum?.type === 'maxLength' && <span className='text-red-600'> {errors.contactNum.message} </span>}
                        </label>


                        {/* ------------What's Up number */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your What's Number</span>
                        </label>

                        <input
                            type="number"
                            defaultValue={data[0]?.whatsUp}
                            placeholder="Your What's  Number"
                            // value={data.whatsUp ? data.whatsUp : 0}
                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("whatsUp", {
                                required: {
                                    value: true,
                                    message: "What's up  Number is Required"
                                },
                                minLength: {
                                    value: 11,
                                    message: 'Minimum Length should be 11 digit'
                                },
                                maxLength: {
                                    value: 11,
                                    message: 'Maximum Length should be 11 digit' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                        <label class="label">
                            {errors.whatsUp?.type === 'required' && <span className='text-red-600 '> {errors.whatsUp.message} </span>}
                            {errors.whatsUp?.type === 'minLength' && <span className='text-red-600'> {errors.whatsUp.message} </span>}
                            {errors.whatsUp?.type === 'maxLength' && <span className='text-red-600'> {errors.whatsUp.message} </span>}
                        </label>



                        {/* ------------Facebook Link */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Facebook Link </span>
                        </label>

                        <input
                            type="text"
                            defaultValue={data[0]?.facebook}
                            placeholder="https://www.facebook.com"
                            // value={data.facebook ? data.facebook : " "}
                            onChange={e => onchange()}
                            //defaultValue={data.facebook}
                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("facebook")} />


                        {/* ------------current address */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Current Address</span>
                        </label>

                        <input
                            type="text"
                            placeholder="Your Current Address"
                            defaultValue={data[0]?.presentAddress}
                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("currentAdd", {
                                required: {
                                    value: true,
                                    message: 'Current Address is Required'
                                }
                            })} />
                        <label class="label">
                            {errors.currentAdd?.type === 'required' && <span className='text-red-600 '> {errors.currentAdd.message} </span>}

                        </label>

                        {/* ------------user email */}
                        <label class="label">
                            <span class="label-text font-bold text-xl">Your Email Address <span class="text-red-600">*</span></span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={user?.email}

                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Give valid email'
                                }
                            })} />

                        <label class="label">
                            {errors.email?.type === 'required' && <span className='text-red-600 '> {errors.email.message} </span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-600'> {errors.email.message} </span>}
                        </label>
                    </div>

                    {/* ------------Last blood donation  */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> Last Data of Blood Donation</span>
                    </label>

                    <input
                        type="date"
                        defaultValue={data[0]?.lastBlood}
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("lastTime")} />


                    {/* ------------Blood donated times */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> How many times donate blood?</span>
                    </label>

                    <input
                        type="number"
                        defaultValue={data[0]?.bTimes}
                        placeholder="How many times donate blood"
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("donatedTimes")} />


                    {/* ------------Age   */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> Enter Your Age</span>
                    </label>

                    <input
                        type="number"
                        defaultValue={data[0]?.age}
                        placeholder="Your Weight in KG"
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("age", {
                            required: {
                                value: true,
                                message: 'Enter Your Age '
                            }
                        })} />
                    <label class="label">
                        {errors.age?.type === 'required' && <span className='text-red-600 '> {errors.age.message} </span>}

                    </label>
                    {/* ------------Height feet   */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> Enter Your Height</span>
                    </label>

                    <div className='flex justify-between'>


                        <div>
                            <input
                                type="number"
                                defaultValue={data[0]?.feet}
                                placeholder="feet"
                                class="input input-bordered input-error bg-none w-44 text-black "
                                {...register("feet", {
                                    required: {
                                        value: true,
                                        message: 'Enter Your Feet '
                                    }
                                })} />
                            <label class="label">
                                {errors.feet?.type === 'required' && <span className='text-red-600 '> {errors.feet.message} </span>}
                            </label>
                        </div>
                        <div>{/* ----------inch */}
                            <input
                                type="number"
                                placeholder="Inch"
                                defaultValue={data[0]?.inch}
                                class="input input-bordered input-error bg-none w-44 text-black  "
                                {...register("inch", {
                                    required: {
                                        value: true,
                                        message: 'Enter Your Feet '
                                    }
                                })} />
                            <label class="label">
                                {errors.inch?.type === 'required' && <span className='text-red-600 '> {errors.inch.message} </span>}
                            </label>
                        </div>
                    </div>

                    {/* ------------Weight  */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> Enter Your Weight</span>
                    </label>

                    <input
                        type="number"
                        defaultValue={data[0]?.weight}
                        placeholder="Your Weight in KG"
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("weight", {
                            required: {
                                value: true,
                                message: 'Enter Your Weight (around)'
                            }
                        })} />
                    <label class="label">
                        {errors.weight?.type === 'required' && <span className='text-red-600 '> {errors.weight.message} </span>}
                    </label>




                    {/* >>>>>>>>>>>>>>>>>>>password field */}
                    {/* <div class="form-control w-full mb-5">
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            class="input input-bordered input-error w-96 text-black "
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'At lest 6  required'
                                }
                            })} />
                        <label class="label">
                            {errors.password?.type === 'required' && <span className='text-red-600 '> {errors.password.message} </span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'> {errors.password.message} </span>}
                        </label>
                    </div> */}



                    <input className='btn w-32 mt-3 ' type="submit" value="Save  " />
                    <input className='btn w-32 mt-3 btn-outline ml-3' type="submit " value="cancel  " />


                </form>

            </div>








        </div>
    );
};

export default Profile;