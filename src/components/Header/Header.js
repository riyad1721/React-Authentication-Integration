import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className='container'>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">LogIn</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;