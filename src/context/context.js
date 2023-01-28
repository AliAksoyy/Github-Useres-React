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
    
    const checkRequest=()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>{
            const {rate:remaining}=data
            setRequest(remaining)
            if(remaining===0){
                // erorr
            }
        }).catch(err=>console.log(err))
    }
    useEffect(()=>{checkRequest()},[])
console.log(request)
    return (<GithubContext.Provider value={{githubUser,repos,followers,request}}>{children}</GithubContext.Provider>)
}

export {GithubProvider,GithubContext}