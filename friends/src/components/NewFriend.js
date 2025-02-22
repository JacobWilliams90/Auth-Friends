import React, { useState } from "react";
import api from "../helper/api";

function NewFriend(props) {
  const [error, setError] = useState();
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    api()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(err);
      });
  };

  return (
    <div className="friends-form">
      <form onSubmit={handleSubmit}>
        {error && <div className="form_error">{error}</div>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newFriend.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newFriend.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newFriend.email}
          onChange={handleChange}
        />

        <button type="submit"> Add Friend </button>
      </form>
    </div>
  );
}

export default NewFriend;
