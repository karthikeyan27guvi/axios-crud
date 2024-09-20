// Import React and the useState hook
import React, { useState } from "react";

// Define the Form component
const Form = ({ setUsers }) => {
  // Initialize state variables
  const [showForm, setShowForm] = useState(false); // toggle form visibility
  const [name, setName] = useState(""); // store the user's name

  // Handle button click to toggle form visibility
  const handleClick = () => {
    setShowForm(!showForm);
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Create a new user object with a unique ID and the entered name
    const userData = { id: new Date().getTime(), name };
    // Make a POST request to the API to create a new user
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the users state with the new user data
        setUsers((prevUsers) => [...prevUsers, userData]);
        // Reset the name input field
        setName("");
      })
      .catch((error) => console.error(error));
  };

  // Render the Form component
  return (
    <div>
      <div>
        {/* Button to toggle form visibility */}
        <button className="show" onClick={handleClick}>
          Click here to add User
        </button>
      </div>
      {/* Conditionally render the form */}
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          {/* Input field for user name */}
          <input
            type="text"
            className="title-bar"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter user name"
          />
          {/* Submit button */}
          <button className="submit">Mount User</button>
        </form>
      )}
    </div>
  );
};

export default Form;