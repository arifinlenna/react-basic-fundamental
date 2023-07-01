import axios from "axios";
import { useEffect, useState } from "react"
import Modal from "./components/Modal";

function App() {
  const [users,setUsers] = useState([]);
  const [modal,setModal] = useState(false);
  const [user,setUser] = useState({});
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState(false)
  
  async function getUsers(){
    try {
      let response = await axios.get('users');
      setUsers(response.data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  async function getUser(){
    setLoading(true)
    try {
      let response = await axios.get('users/'+id);
      setUser(response.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(JSON.stringify(error));
    }
  };

  function clickModal(e) {
    modal ? setModal(false) : setModal(true)
  }



  useEffect(()=>{
    getUsers()
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id,modal])

  return(
    <>
    <Modal onClick={clickModal} show={modal} user={user} id={id} loading={loading}/>

    <div className="container py-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => {
                    setModal(true)
                    setId(user.id)
                  }}>Show</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    
    </>
  )
}


export default App