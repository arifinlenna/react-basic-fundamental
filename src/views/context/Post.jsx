import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const PostContext = createContext();


function UserProvider({children}) {
    const [Posts, setPosts] = useState([]);
    const [Loading, setLoading] = useState(false);

    async function getPost() {
        setLoading(true)
        try {
            let response = await axios.get('posts')
            setPosts(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    } 

    useEffect(()=>{
        getPost()
    },[])

    return (
        <PostContext.Provider value={{ Posts,Loading }}>
            {children}
        </PostContext.Provider>
    )
}

export {UserProvider, PostContext}