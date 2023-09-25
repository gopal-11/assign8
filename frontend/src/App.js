// frontend/src/App.js
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';

// GET api url endpoint
const APIURL = 'http://localhost:3001/api/users';

// entry point component for app
const App = () => {
  const [userList, setUserList] = useState([]);

  // fetching user details from server using get api
  const fetchUsers = () => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setUserList(data.users);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div className="items">
        {userList.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
