import { useState } from "react";

function NewEmployeeForm({ updateEmployees }) {
  const [newData, setNewData] = useState({
    username: "",
    image: "",
    task: "",
  });

  function onSubmission(e) {
    e.preventDefault();
    if (
      newData.username === "" ||
      newData.image === "" ||
      newData.task === "" ||
      newData.salary === "" ||
      newData.department === ""
    ) {
      alert("Please input all fields");
    } else {
      fetch("http://localhost:9292/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          updateEmployees(data);
          setNewData({ ...newData, username: "", position: "", image: "",salary:"" });
        });
    }
  }

  function doChange(e) {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  }

  return (
    <div className="sidebar">
    <form className="new-employee-form" onSubmit={onSubmission}>
      <input
        value={newData.username}
        name="username"
        placeholder="username"
        onChange={doChange}
      />
      <input
        value={newData.position}
        name="position"
        placeholder="Position"
        onChange={doChange}
      />
      <input
        value={newData.image}
        name="image"
        placeholder="image"
        onChange={doChange}
      />
      <input
        value={newData.salary}
        name="salary"
        placeholder="Salary"
        onChange={doChange}
      />
      
      <input type="submit" value="Assign Employee" />
    </form>
    </div>
  );
}

export default NewEmployeeForm;
