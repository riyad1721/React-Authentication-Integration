import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <h2>Please Login</h2>
            <form>
                <input type="email" name="email" id="" />
                <br /><br />
                <input type="password" name="password" id="" />
            </form>
            <br />
            <button onClick={signInUsingGoogle}>Google Log-In</button>
            <br /><br />
            <Link to="/register">New User</Link>

        </div>
    );
};

export default Login;