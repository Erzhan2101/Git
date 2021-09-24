import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [user, setUser] = useState({})
    const {username} = useParams()

    useEffect(() => {
        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))
    },[username])

    return (
        <header className="d-flex justify-content-between align-items-center p-2 text-white bg-dark">
            <div className='d-flex align-items-center'>
                <img className='me-3' src={user.avatar_url} alt="" width='60'/>
                <p>{user.login}</p>
            </div>
            <div>
                <input type="text" placeholder="search"/>
            </div>
        </header>
    );
};

export default Header;