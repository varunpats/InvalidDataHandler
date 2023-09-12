import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersData, setUsersData] = useState([]);

  const onDataHandler = (uName, uAge) => {
    setUsersData(prevState => {
      return [...prevState,
      { name: uName, age: uAge, id: Math.random().toString() }
      ]
    });
  }

  return (
    <div>
      <AddUser passUsersData={onDataHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
