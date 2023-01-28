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
    const [error,setError]=useState({show:false,msg:""})



    const checkRequest=()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>{
            let {rate:remaining}=data
            setRequest(remaining)
            if(remaining===0){
               toggleError(true,'sorry, you have exceeded your hourly rate limit!')
            }
        }).catch(err=>console.log(err))
    }

    useEffect(()=>{checkRequest()},[])

    function toggleError(show=false,msg=""){
        setError({show,msg})
    }


    return (<GithubContext.Provider value={{githubUser,repos,followers,request,error}}>{children}</GithubContext.Provider>)
}

export {GithubProvider,GithubContext}