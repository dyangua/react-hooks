import React from "react";
import useResources from "./_useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <h3>Lists of {resource}</h3>
      {resources.map(item => (
        <div className="card" key={item.id}>
          <h5>{item.title}</h5>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
