import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import './style.css'

const Home = () => {
    const [username, setUsername] = useState("")
    const history = useHistory()

    const  handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePress = (e) => {
        if (e.key === "Enter" && username.trim()){
            history.push(`/${username}`)
        }
    }
    const handleCheck = () => {
        if (username.trim()) {
            history.push(`/${username}`)
        }
    }

    return (
        <div className='home'>
            <div className="home-box">
                <input type='text' onChange={handleChange} onKeyPress={handlePress} placeholder='search user'/>
                <button onClick={handleCheck}>search</button>
            </div>
        </div>
    );
};

export default Home;