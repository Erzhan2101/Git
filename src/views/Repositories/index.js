import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "../../components/Layout";

const Repositories = () => {
    const [projects, setProjects] = useState([])
    const {username} = useParams()

    useEffect(() => {
        axios(`https://api.github.com/users/${username}/repos`)
            .then(({data}) => setProjects(data))
    }, [username])
    return (
        <Layout>
            <div className='p-3'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Repos name</th>
                        <th scope="col">Created at</th>
                        <th scope="col"> Readme.md</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        projects.map(item =>
                            <tr>
                                <td className="border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap" >
                                        {item.name}
                                    </p>
                                </td>
                                <td className=" border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {item.created_at.slice(0,10)}
                                    </p>
                                </td>
                                <td className=" border-b border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block  font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true"
                                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <Link className="relative" to={`/${username}/${item.name}`}>
                                        Readme.md
                                    </Link>
                                </span>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Repositories;