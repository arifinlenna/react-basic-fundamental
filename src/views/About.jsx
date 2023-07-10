import React, { useEffect } from 'react'
import {authUser, getTheme, loadingState,textState} from '../store'
import { useRecoilState, useRecoilValue } from 'recoil';

export default function About() {
    const authUserData = useRecoilValue(authUser);
    const [text, setText] = useRecoilState(textState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const onChange = (event) => {
        setText(event.target.value);
    };
    const getThemes = useRecoilValue(getTheme)

    function loadingTimeout(params) {
        setLoading(true)
        // console.log('ha');
    }

    useEffect(()=>{
        setTimeout(loadingTimeout,5000)
    },[])

    return(
        <div className='container' data-bs-theme={getThemes}>
            {authUserData}
            <br/>
            <input type="text" value={text} onChange={onChange} />
            {
                loading === false ? <div className={(getThemes === 'dark' ?'text-light': 'text-dark' )}>loading....</div> : <h1 className={(getThemes === 'dark' ?'text-light': 'text-dark' )}>params</h1> 
            }
            <p className={(getThemes === 'dark' ?'text-light': 'text-dark' )}>{text}</p>
        </div>
    )
}