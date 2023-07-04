import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

export default function Show() {
    const { id } = useParams();

    const [User, setUser] = useState({});

    function getUser(params) {
        try {
            axios.get(`users/${id}`).then(
                response => setUser(response.data)
            )
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getUser()
    })

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 my-2" key={User.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{User.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{User.phone}</h6>
                                <p className="card-text">{User.email}</p>
                                <NavLink to={`http://${User.website}`} target='_blank' className="card-link">Go to website</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
