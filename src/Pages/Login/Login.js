import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../Hooks/UseToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = UseToken(user || gUser)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser, from, navigate])

    let signInError;

    const { register, formState: { errors }, handleSubmit } = useForm();



    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (gError || error) {
        signInError = <h1 className='text-red-600 font-bold'>{gError?.message || error?.message}</h1>
    }




    return (
        <div className='flex justify-center'>

            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h1 className='text-center text-3xl font-bold mb-10'>Log In </h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your email?</span>
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
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
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

                        {signInError}
                        <input className='btn w-full' type="submit" value="Log in " />
                        <p><small>New to Doctor portal</small> <Link className='text-primary' to='/signup'>Create new account</Link></p>
                    </form>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Google Log In</button>

                </div>
            </div>
        </div>
    );
};

export default Login;