
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userlist.css';
const UserList = () => {
  const [userList, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <div class="container">
             <div className="card">
  <img
    src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
    alt="Person"
    className="card__image"
  />
  <h2 className="card__name">{user.name}</h2>
  <div className="grid-container">
    <div className="grid-child-posts">{user.username}</div>
    <div className="grid-child-followers">{user.email}</div>
  </div>
  <h3 className="card__name">{user.address.street}</h3>
  <h3 className="card__name">{user.address.suite}</h3>
  <h3 className="card__name">{user.address.city}</h3>
  <h3 className="card__name">{user.address.zipcode}</h3>
  <h4 className="card__name">{user.address.geo.lat}</h4>
  <h4 className="card__name">{user.address.geo.lng}</h4>
  <h5 className="card__name">{user.phone}</h5>
  <h5 className="card__name">{user.website}</h5>
  <h5 className="card__name">{user.company.name}</h5>
  <h5 className="card__name">{user.company.catchPhrase}</h5>
  <h5 className="card__name">{user.company.bs}</h5>
  
</div>

          </div>
         
        ))}
      </ul>
    </div>
  );
};

export default UserList;
