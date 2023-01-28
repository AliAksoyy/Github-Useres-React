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

    const searchGithubUser=async(user)=>{
        toggleError()
        setLoading(true)
         const {data}= await axios(`${rootUrl}/users/${user}`).catch(err=>console.log(err))
        
        if(data){
            setGithubUser(data)
        //    await axios(`${rootUrl}/users/${user}/followers`).then(res=>setFollowers(res.data)).catch(err=>console.log(err))
        //    await axios(`${rootUrl}/users/${user}/repos?per_page=100`).then((res)=>setRepos(res.data)).catch(err=>console.log(err))
           await Promise.allSettled([axios(`${rootUrl}/users/${user}/followers`), axios(`${rootUrl}/users/${user}/repos?per_page=100`)]).then((results)=>{
            const [followers,repos]=results
            const status="fulfilled"
            if(followers.status===status){
                setFollowers(followers.value.data); 
            }
            if(repos.status===status){
                setRepos(repos.value.data)
            }
           })
        }else{
            toggleError(true,"there is no user with that username")
        }
        checkRequest()
        setLoading(false)
    }







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


    return (<GithubContext.Provider value={{githubUser,repos,followers,request,error,searchGithubUser,loading}}>{children}</GithubContext.Provider>)
}

export {GithubProvider,GithubContext}