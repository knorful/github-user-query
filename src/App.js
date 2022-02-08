import {useEffect, useState} from 'react';
import './App.css';
import getGithubUser from './api/api';
import SearchForm from './components/SearchForm';
import UserCardList from './components/UserCardList';

function App() {
  let [username, setUsername] = useState("")
  let [users, setUsers] = useState([]);

  const handleUsernameChange = ({target}) => {
    let name = target.value;
    setUsername(name);
  }

  const fetchGithubUser = async (name) => {
    let fetechedUserData = await getGithubUser(name);
    setUsers(prev => [...prev, fetechedUserData ])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGithubUser(username);
    setUsername("")
  }

  return (
    <div className="App">
      <h1>Github Search</h1>
      <p>Enter github username below:</p>
      <SearchForm 
        onHandleUsernameChange = {handleUsernameChange}
        name = {username}
        onSubmit={handleSubmit}
      />
      <UserCardList
        users={users}
      />
    </div>
  );
}

export default App;
