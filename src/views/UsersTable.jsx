import axios from "axios";
import { useEffect, useState } from "react"
import Modal from "../components/Modal";
import BeatLoader from "react-spinners/BeatLoader";

function UsersTable() {
  const [users,setUsers] = useState([]);
  const [modal,setModal] = useState(false);
  const [user,setUser] = useState({});
  const [id, setId] = useState(1)
  const [loading, setLoading] = useState({
    LoadingUser : true,
    LoadingUsers: true,
  })
  
  const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

  async function getUsers(){
    try {
      let response = await axios.get('users');
      setUsers(response.data);
      setTimeout(() => {
        setLoading({
          ...loading,
          LoadingUsers:false
        })
      }, 50000)
    } catch (error) {
      setLoading({
        ...loading,
        LoadingUsers:false
      })
      console.log(JSON.stringify(error));
    }
  };

  async function getUser(){
    setLoading({
      LoadingUser:true
    })
    try {
      let response = await axios.get('users/'+id);
      setUser(response.data);
      setLoading({
        LoadingUser:false
      })
    } catch (error) {
      setLoading({
        LoadingUser:false
      })
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
      <Modal onClick={clickModal} show={modal} user={user} id={id} loading={loading}>
        <li className="list-group-item">arifin</li>
      </Modal> 

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
              loading.LoadingUsers ? (
                <div className="m-auto z-1 h-100 w-100 position-fixed d-block">
                  <div className="card overflow-auto h-100 w-100" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                      <div className="card-body w-50 m-auto">
                          <BeatLoader 
                              color="#36d7b7"
                              loading={loading}
                              cssOverride={override}
                              speedMultiplier={1}
                          />
                      </div>
                  </div>
                </div>
              ) :
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
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}


export default UsersTable