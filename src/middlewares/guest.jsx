import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { Authenticated } from '../store'
import { useNavigate } from "react-router-dom";

function GuestMiddleware(props) {
    let navigate = useNavigate();
    const auth = useRecoilValue(Authenticated)
    console.log(auth.check);
    useEffect(()=>{
        if (auth.check) {
            navigate("/");
        }
    })
    return props.children
}

export default GuestMiddleware
