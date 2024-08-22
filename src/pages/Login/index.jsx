import React from 'react'
import { useState } from 'react';
import { signup, login } from '../../config/firebase';


function Login() {
    const [currState, setState] = useState('Login');
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState === 'Sign up') {
            signup(userName, email, password);
        } else {
            login(email, password);
        }
    }
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center">

                <form action="" onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
                    <h2 className=' text-2xl'>{currState}</h2>
                    {currState === 'Sign up' ? <input type='text' placeholder='username' onChange={(e) => setUserName(e.target.value)} value={userName} /> : null}
                    <input type='email' className='border-solid ' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                    <button type="submit">{currState === 'Sign up' ? "create account" : "login"}</button>
                    <div className="">
                        <input type="checkbox" name="" id="" />
                        <p>Agree of the terms of use & Privacy Policy.</p>
                    </div>
                    <p>{currState === 'Login' ? 'Don\'t have an account?' : 'Already have an account?'} <span onClick={() => setState(currState === 'Login' ? 'Sign up' : 'Login')}> {currState === 'Login' ? 'Sign up' : 'Login'}</span></p>
                </form>
            </div>

        </>

    )
}

export default Login