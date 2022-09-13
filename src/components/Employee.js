import React from "react";

function Employee({ id, username, position, image, salary,handleDelete }) {
  function addToDelete() {
    fetch(`https://nameless-thicket-02202.herokuapp.com/employees/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => handleDelete(id))
      
      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{username}</h3>
      <img src={image} alt="employee" />
      <h3>Salary KSH {salary}</h3>
      <h2>
        <strong>{position}</strong>
      </h2>
      

      <button onClick={addToDelete}>
        Delete
      </button>
    </div>
  );
}

export default Employee;
