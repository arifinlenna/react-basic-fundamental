import React, { useEffect } from 'react'
import {authUser, loadingState,textState} from '../store'
import { useRecoilState, useRecoilValue } from 'recoil';

export default function About() {
    const authUserData = useRecoilValue(authUser);
    const [text, setText] = useRecoilState(textState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const onChange = (event) => {
        setText(event.target.value);
    };

    function loadingTimeout(params) {
        setLoading(true)
        // console.log('ha');
    }

    useEffect(()=>{
        setTimeout(loadingTimeout,5000)
    },[])

    return(
        <div className='container'>
            {authUserData}
            <br/>
            <input type="text" value={text} onChange={onChange} />
            {
                loading === false ? <div>loading....</div> : <h1>params</h1> 
            }
            {text}
        </div>
    )
}