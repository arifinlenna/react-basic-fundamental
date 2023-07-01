import axios from 'axios';
import React,{ Component } from 'react'

class LearningExample extends Component{
  constructor(props){
    console.log(props);
    super(props);
    this.a = {color: "red"};
    this.InputText = this.InputText.bind(this);
    this.state = {
      value:"",
      user:[]
    };
  }

  InputText(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount(){
    this.getUser();
  }

  // InputText = (event) => {
  //   this.setState({value: event.target.value});
  // }

  async getUser(){
    let response = await axios.get('users');
    this.setState({user: response.data})
  }

  render(){
    return <div>
      <h1>#APP</h1>
      <h4>props name: {this.props.name}</h4>
      <h5>favorite color : {this.a.color}</h5>
      <input type="text" name="inputText" id="inputText" value={this.state.value} onChange={this.InputText} />
      <span>{this.state.value}</span>

      <section>
        <h5>Data User</h5>
        {this.state.user.map((user,index)=>(
          <>
          <span>{index+1}.&emsp;User : {user.name}</span>
          <br/>
          <span>&emsp;&ensp;&ensp;phone : {user.phone}</span>
          <br/>
          <span>&emsp;&ensp;&ensp;email : {user.email}</span>
          <br/>
          <br/>
          <br/>
          </>
        ))}
      </section>

    </div> 
  }
}


export default LearningExample