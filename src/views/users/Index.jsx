import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Users() {

    const [users, setUsers] = useState([]);

    async function getUsers(params) {
        try {
            let {data} = await axios.get('users')
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <div className='container'>
            <div className="row">
                {
                    users.map((user) => (
                        <div className="col-md-4 my-2" key={user.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{user.phone}</h6>
                                    <p className="card-text">{user.email}</p>
                                    <NavLink to={`http://${user.website}`} target='_blank' className="card-link">Go to website</NavLink>
                                    <NavLink to={`/Users/${user.id}`} className="card-link">Show Details</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
