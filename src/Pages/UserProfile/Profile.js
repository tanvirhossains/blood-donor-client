import React from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

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
    console.log(user)



    const navigate = useNavigate();


    if (!user) {
        navigate('/')
    }
    const onSubmit = data => {




        toast(' email please')

        const userProfile = {
            name: my.name,
            email: my.email,
            bldGroup: ,
            lastBlood: " 2-3-22",
            presentAddress: "comilla",
            mobile: 140580832,
            whatsUp: 10234958,
            telegram: 3489384934,
            facebook: "link",
            bTimes: 3,
            weight: 34,
            height: 4.5,
            gender: male,
            bmi: 23
    
    
        }
    };




    return (
        <div className='p-10  grid grid-cols-1 lg:grid-cols-2 text-center border border-indigo-600  '>

            <div>
                <div class="avatar">
                    <div class="w-80 h-80 rounded-full ring ring-primary ring-offset-base-100 ">
                        <img src={user.photoURL} />

                    </div>


                </div>
                <p></p>
                <Link className='btn m-5'> Change Your password</Link>

            </div>

            <div className="w-96">


                <select class="select select-secondary w-96 ">
                    <option disabled selected>Pick your Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                </select>

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

                        <select class="select select-secondary w-96">
                            <option disabled selected>Pick your Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>

                        {/* ------------number */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Contact Number <span class="text-red-600">*</span></span>
                        </label>

                        <input
                            type="number"
                            placeholder="Your Contact Number"
                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("number", {
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
                            {errors.number?.type === 'required' && <span className='text-red-600 '> {errors.number.message} </span>}
                            {errors.number?.type === 'minLength' && <span className='text-red-600'> {errors.number.message} </span>}
                            {errors.number?.type === 'maxLength' && <span className='text-red-600'> {errors.number.message} </span>}
                        </label>

                        {/* ------------current address */}
                        <label class="label">
                            <span class="label-text font-bold text-xl"> Enter Your Current Address</span>
                        </label>

                        <input
                            type="text"
                            placeholder="Your Current Address"
                            class="input input-bordered input-error bg-none w-96 text-black "
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is Required'
                                }
                            })} />
                        <label class="label">
                            {errors.address?.type === 'required' && <span className='text-red-600 '> {errors.address.message} </span>}

                        </label>

                        {/* ------------user email */}

                        <label class="label">
                            <span class="label-text font-bold text-xl">Your Email Address <span class="text-red-600">*</span></span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={user.email}
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
                        {/* <p className='text-black'>Forget password? <button>
                            <span onSubmit={handleResetPassword} className='text-red-600'>Reset password </span>
                        </button>
                        </p> */}
                        {/* <input className='text-orange-500 ' type="submit" value="Reset Password " /> */}

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
                        placeholder="Your Name"
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("donated")} />


                    {/* ------------number */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> How many times donate blood?</span>
                    </label>

                    <input
                        type="number"
                        placeholder="How many times donate blood"
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("number")} />


                    {/* ------------Age   */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> Enter Your Age</span>
                    </label>

                    <input
                        type="number"
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


                    {/* ------------contact number */}
                    <label class="label">
                        <span class="label-text font-bold text-xl"> Enter Your Contact Number</span>
                    </label>

                    <input
                        type="number"
                        placeholder="Your Contact Number"
                        class="input input-bordered input-error bg-none w-96 text-black "
                        {...register("number", {
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
                        {errors.number?.type === 'required' && <span className='text-red-600 '> {errors.number.message} </span>}
                        {errors.number?.type === 'minLength' && <span className='text-red-600'> {errors.number.message} </span>}
                        {errors.number?.type === 'maxLength' && <span className='text-red-600'> {errors.number.message} </span>}
                    </label>


                    {/* >>>>>>>>>>>>>>>>>>>password field */}
                    <div class="form-control w-full mb-5">
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
                    </div>



                    <input className='btn w-32 mt-3 ' type="submit" value="Save  " />
                    <input className='btn w-32 mt-3 btn-outline ml-3' type="submit " value="cancel  " />


                </form>

            </div>








        </div>
    );
};

export default Profile;