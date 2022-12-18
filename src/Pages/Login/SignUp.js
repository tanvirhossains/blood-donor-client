import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Hooks/UseToken';
// import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    let signInError;


    const [token] = UseToken(user || gUser)


    if (token) {
        // navigate('/appointment')
    }
    const onSubmit = async data => {
        // console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // navigate('/appointment')
    };

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (gError || error || updateError) {
        signInError = <h1 className='text-red-600 font-bold'>{gError?.message || error?.message}</h1>
    }


    // if (gUser || user) {
    // }



    return (
        <div className='flex justify-center'>

            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h1 className='text-center text-3xl font-bold mb-10'>Sign Up </h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your name?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }

                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className='text-red-600 '> {errors.name.message} </span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your Email?</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
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

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your Password?</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'At lest 6 required'
                                    }
                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='text-red-600 '> {errors.password.message} </span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'> {errors.password.message} </span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full text-white' type="submit" value="Sign Up" />
                    </form>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Google Log In</button>

                </div>
            </div>
        </div>
    );
};

export default SignUp;

