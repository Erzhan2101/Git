import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout";
import Markdown from 'markdown-to-jsx';

const Readme = () => {

    const {username, project} = useParams()
    const [readme, setReadme] = useState("")

    useEffect(() => {
        axios(`https://api.github.com/repos/${username}/${project}/readme`, {
            headers: {Accept: "application/vnd.github.VERSION.raw"}
        })
            .then(({data}) => setReadme(data))
    }, [username, project])

    console.log(username, project)

    return (
        <Layout>
            <Markdown>{readme}</Markdown>
        </Layout>
    );
};

export default Readme;