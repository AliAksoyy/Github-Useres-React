import React, { useState, useEffect, createContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const GithubContext=createContext()

const GithubProvider =({children})=> {

    const [githubUser,setGithubUser]=useState(mockUser)
    const [repos,setRepos]=useState(mockRepos)
    const [followers,setFollowers]=useState(mockFollowers)
    const [request,setRequest]=useState(0)
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{checkRequest()},[])
    const checkRequest=()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>setRequest(data))
    }

    return (<GithubContext.Provider value={{githubUser,repos,followers,request}}>{children}</GithubContext.Provider>)
}

export {GithubProvider,GithubContext}