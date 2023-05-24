import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [webUser] = useAuthState(auth)

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(eUser);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const onSubmit = async data => {
        // console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });


        dataSending(data);
        // const userData = {
        //     name: data.name ,
        //     email: gUser.email,
        // }

        // fetch('http://localhost:9000/donor', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },

        //     body: JSON.stringify(userData),

        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));


        console.log("data imported by email user")

        toast("This is done")
        // navigate('/appointment')
    };


    if (gLoading) {
        <Loading> </Loading>

    }
    if (gUser) {

        console.log("this is a google new user");
        <Loading> </Loading>


        const userData = {
            name: webUser.displayName,
            email: webUser.email
        }
        fetch('http://localhost:9000/donor', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    // console.log("data imported by google user")

    // CALLING post fetch
    const dataSending = data => {

        const userData = {
            name: (data.name ? data.name : webUser.displayName),
            email: (data.email ? data.email : webUser.email)
        }
        if (webUser) {


            fetch('http://localhost:9000/donor', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    }


    const navigate = useNavigate();
    if (webUser) {
        navigate('/')
    }

    let emailError;
    if (eError || gError) {
        emailError = <h1 className='text-red-600 font-bold'>{eError?.message || gError?.message}</h1>
    }




    return (
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: `url("https://placeimg.com/1000/800/arch")`
            }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">


                    <div class="card w-full bg-gray-50 shadow-xl">
                        <div class="card-body items-center text-center">
                            <h2 class="text-center font-bold text-2xl text-red-500">Create New Account Please!</h2>
                            <div class="form-control w-full ">
                                {/* ------------form  part start here */}
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div class="form-control w-96 my-5   ">
                                        <label class="label">
                                            <span class="label-text font-bold text-xl"> Enter Your Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            class="input input-bordered input-error bg-none w-96 text-black "
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                }
                                            })} />

                                        <label class="label">
                                            {errors.name?.type === 'required' && <span className='text-red-600 '> {errors.name.message} </span>}
                                        </label>
                                        <label class="label">
                                            <span class="label-text font-bold text-xl"> Enter Your Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="example@email.com"
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

                                    {emailError}
                                    <input className='btn w-full mt-3' type="submit" value="Sign Up " />
                                    <p className='text-black'>Already Have an Account? <Link className='text-primary' to='/signin'>Sign In</Link></p>
                                </form>
                                {/* ------------divider part start here */}
                                <div class="divider text-black px-5 py-0 font-bold">OR
                                </div>
                                {/* <ToastContainer /> */}
                                <button class="btn " onClick={() => signInWithGoogle()}>Sign Up With Google</button>
                                <button class="btn " onClick={() => signInWithFacebook()}>Sign Up With Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;