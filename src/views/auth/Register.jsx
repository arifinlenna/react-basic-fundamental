import React from 'react'

export default function Register() {
  return (
    <div className='container'>
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <button className='btn btn-primary d-block w-100'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
