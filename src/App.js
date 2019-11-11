import React, { useState } from "react";
import "./skeleton.css";
import "./App.css";
import Button from "./components/Button";
import ResourceList from "./components/ResourceList";
import UserList from "./components/UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="container">
      <div className="header">
        <h1>AMAZING APP</h1>
        <Button handle={() => setResource("posts")} text={"posts"} />
        <Button
          handle={() => setResource("todos")}
          primary={true}
          text={"todos"}
        />
      </div>
      <ResourceList resource={resource}></ResourceList>
      <UserList></UserList>
    </div>
  );
};

export default App;
