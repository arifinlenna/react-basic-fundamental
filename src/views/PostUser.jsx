import React, { useContext } from 'react'
import {PostContext} from './context/Post'
import { NavLink } from 'react-router-dom';


export default function AuthenticatedUser() {
    const {Posts,Loading} = useContext(PostContext)
    function maxTitle(params) {
        return params.length > 18 ? params.slice(0,18) + '...' : params
    }
    
    return (
        <>
            <div className="row">
                {
                    Loading ? "Loading ..." :
                    Posts.map((post,index)=>(
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card bg-light-subtle">
                                <div className="card-body">
                                    <h5 className="card-title">{maxTitle(post.title)}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{post.userId}</h6>
                                    <p className="card-text">{maxTitle(post.body)}</p>
                                    <NavLink to="#" className="card-link">Card link</NavLink>
                                    <NavLink to="#" className="card-link">Another link</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
