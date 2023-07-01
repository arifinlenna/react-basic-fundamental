import React, {Component} from 'react'

export default class ClassExample extends Component {

    constructor(){
        super();
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.state={
            Firstname: '',
            Lastname: '',
            Name: ''
        }
    }

    submitHandler(e){
        e.preventDefault()
        this.setState({Name: `${this.state.Firstname} ${this.state.Lastname}`})

        this.setState({
            Firstname: '',
            Lastname: '',
        })
    }

    changeHandler(event){
        let value = event.target.value
        this.setState({
            [event.target.name]: value,
            // [event.target.Firstname]: event.target.value,
            // [event.target.Lastname]: event.target.value
        })
    }

    render(){
        let name = this.state.Name
        return(
            <>
                <h1>#FormInput</h1>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.submitHandler} className='row g-3'>
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstname" className="form-label">Firstname</label>
                                    <input type="text" name='Firstname' value={this.state.Firstname} onChange={this.changeHandler} className="form-control" id="inputFirstname" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastname" className="form-label">Lastname</label>
                                    <input type="text" name='Lastname' value={this.state.Lastname} onChange={this.changeHandler} className="form-control" id="inputLastname" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Show</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            My name is {name != null | '' ? name : '' }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}