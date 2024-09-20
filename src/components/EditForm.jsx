// Import React and the useState hook
import React, { useState } from "react";

// Define the EditForm component
const EditForm = ({
  // Props passed from the parent component
  editingUser, // user object being edited
  onUpdate, // function to handle update button click
  onCancel, // function to handle cancel button click
}) => {
  // Initialize state variable for the user's name
  const [name, setName] = useState(editingUser.name);

  // Handle form submission
  const handleFormSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Create an updated user object with the new name
    const updatedUser = { ...editingUser, name };
    // Call the onUpdate function with the updated user object
    onUpdate(updatedUser);
  };

  // Render the EditForm component
  return (
    <div className="class">
      {/* Form element */}
      <form onSubmit={handleFormSubmit}>
        {/* Input field for user name */}
        <input
          className="editinput"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter user name"
        />
        {/* Update button */}
        <button className="saveedit" type="submit">
          Update
        </button>
        {/* Cancel button */}
        <button className="cancel" type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;