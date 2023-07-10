import { useState } from "react"
import React from 'react'


function FormInputFunction(params) {
    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [name, setName] = useState('')

    function submitHandler(event) {
        event.preventDefault();
        setName(firstname + " " + lastname)
        setFirstname('')
        setLastname('')
    }

    function changeInputName(event,name) {
        if (event.target.name === "firstname") {
            setFirstname(event.target.value);
        }else if(event.target.name === "lastname"){
            setLastname(event.target.value)
        }
    }

    return(
        <>
            <div className="p-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">#FormInput</div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="mb-3">
                                        <label htmlFor="firstname" className="form-label">Firstname</label>
                                        <input type="text" value={firstname} onChange={changeInputName} name="firstname"
                                            id="firstname" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastname" className="form-label">Lastname</label>
                                        <input type="text" value={lastname} onChange={changeInputName} name="lastname"
                                            id="lastname" className="form-control" />
                                    </div>
                                    <button type="submit" className='btn btn-block btn-primary'>Show</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                My name is {name !== "" ? name :"..."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormInputFunction