
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const SignIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);
    const [sendPasswordResetEmail, sending, pasResError] = useSendPasswordResetEmail(
        auth
    );
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        signInUser,
        signLoading,
        signError,
    ] = useSignInWithEmailAndPassword(auth);


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        toast(' email please')

    };
    const handleResetPassword = async (data) => {
        toast('password reset, check your email please')
       
        if (data.email) {
            await sendPasswordResetEmail(data.email)
        }

        else {
            toast('enter your email')
        }
    }


    if (user) {
        toast('password reset, check your email please')
    }

    if (userFb) {
        console.log(userFb)
    }


    let signInError;
    if (signError || error) {
        signInError = <h1 className='text-red-600 font-bold'>{signError?.message || error?.message}</h1>
    }


    return (
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: `url("https://placeimg.com/1000/800/arch")`
            }} >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="card w-full bg-gray-50 shadow-xl">
                        <div class="card-body items-center text-center">
                            <h2 class="text-center font-bold text-2xl text-red-500">Log In Please!</h2>
                            <div class="form-control w-full ">
                                {/* ------------form  part start here */}
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div class="form-control w-96 my-5   ">
                                        <label class="label">
                                            <span class="label-text font-bold text-xl"> Enter Your Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
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
                                        <p className='text-black'>Forget password? <button>
                                            <span onSubmit={handleResetPassword} className='text-red-600'>Reset password </span>
                                             </button>
                                            </p>
                                        {/* <input className='text-orange-500 ' type="submit" value="Reset Password " /> */}
                            
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

                                    {signInError}
                                    <input className='btn w-full mt-3' type="submit" value="Log in " />
                                    <p className='text-black'>Are you new here? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                                </form>
<ToastContainer/>

                                {/* ------------divider part start here */}
                                <div class="divider text-black px-5 py-0 font-bold">OR</div>
                                <button class="btn " onClick={() => signInWithGoogle()}>Sign In With Google</button>
                                <button class="btn " onClick={() => signInWithFacebook()}>Sign In With Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;