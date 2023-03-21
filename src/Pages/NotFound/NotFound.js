import React from 'react';
import './NotFound.css';
import ErrorImg from'../../images/404/404.avif';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img  src={ErrorImg} alt="Page Not Found " /><br/>
            <Link to='/home'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;