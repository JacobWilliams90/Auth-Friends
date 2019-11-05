import React, { useState, useEffect } from "react";
import api from "../helper/api";
import NewFriend from "./NewFriend";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    api()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="friends-list">
      <NewFriend />
      {friends.map((friend, index) => {
        return (
          <div key={index} className="friend">
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FriendsList;
