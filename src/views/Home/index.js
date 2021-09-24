import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import './style.css'
import logo from './Без_названия__1_-removebg-preview.png'

const Home = () => {
    const [username, setUsername] = useState("")
    const history = useHistory()

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePress = (e) => {
        if (e.key === "Enter" && username.trim()) {
            history.push(`/${username}`)
        }
    }
    const handleCheck = () => {
        if (username) {
            history.push(`/${username}`)
        }
    }

    return (
        <div className='home text-center'>
            <div className="home-box rounded">
                <div>
                    <img src={logo} alt='' width='60'/>
                    <p>GitHub Search User</p>
                </div>

                <input type='text' onChange={handleChange} onKeyPress={handlePress} placeholder='search user' className='rounded input'/>
                <button onClick={handleCheck} className='btn-search ms-3 rounded'>search</button>
            </div>
        </div>
    );
};

export default Home;