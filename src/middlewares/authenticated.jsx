import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { Authenticated } from '../store'
import { useHistory, useNavigate } from "react-router-dom";

function AuthenticatedMiddleware(props) {
    let navigate = useNavigate();
    const auth = useRecoilValue(Authenticated)
    useEffect(()=>{
        if (!auth.check) {
            navigate("/login");
        }
    })
    return props.children
}

export default AuthenticatedMiddleware
