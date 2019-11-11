import React from "react";
import useResources from "./_useResources";

const UserList = () => {
  const users = useResources("users");
  return (
    <div>
      <h3>Lists of Users</h3>
      {users.map(item => (
        <div className="card" key={item.id}>
          <h5>{item.name}</h5>
          <p>{item.username}</p>
          <a href={`mailto:${item.email}`}>{item.email}</a>
        </div>
      ))}
    </div>
  );
};

export default UserList;
