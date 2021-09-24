import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [user, setUser] = useState({})
    const {username} = useParams()

    useEffect(() => {
        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))
    },[username])

    return (
        <header className="d-flex justify-content-between align-items-center p-2  bg-dark">
            <Link to='/'>
                <div className='d-flex align-items-center '>
                    <img className='me-3' src={user.avatar_url} alt="" width='60'/>
                    <p className='text-white'>{user.login}</p>
                </div>
            </Link>
            <div>
                <input type="text" placeholder="search" className="input rounded"/>
            </div>
        </header>
    );
};

export default Header;