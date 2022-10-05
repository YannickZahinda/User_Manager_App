import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './feature/Users';

function App() {
  const userList = useSelector((state)=> state.users.value);
  const dispatch = useDispatch()
  
  const [name, setName] = useState("");
  const [username, setUserName] = useState("")
  return (
    <div className="App">
      <div className='addUser'>
        <input type='text' placeholder='name...' onChange={(event)=> {
          setName(event.target.value)
        }}/>
        <input type='text' placeholder='username' onChange={(event)=>{
          setUserName(event.target.value)
        }}/>
        <button onClick={()=> dispatch(addUser({id: userList[userList.length -1].id + 1, name, username}))}>Add user</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
