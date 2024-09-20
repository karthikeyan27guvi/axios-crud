// Import React and the EditForm component
import React from "react";
import EditForm from "./EditForm";

// Define the Box component
const Box = ({
  // Props passed from the parent component
  users, // array of user objects
  onEdit, // function to handle edit button click
  onDelete, // function to handle delete button click
  editingUser, // user object being edited
  showEditForm, // boolean to toggle edit form visibility
  onUpdate, // function to handle update button click
  onCancel, // function to handle cancel button click
}) => {
  // Render the Box component
  return (
    <>
      {/* Container element */}
      <div className="container">
        {/* Grid element to display users */}
        <div className="user-grid">
          {/* Map over the users array and render each user */}
          {users.map((user) => (
            <div key={user.id} className="user-item">
              {/* Display user name and ID */}
              <h4>{user.name}</h4>
              <p>ID: {user.id}</p>

              {/* Edit button */}
              <button className="edit" onClick={() => onEdit(user)}>Edit</button>

              {/* Delete button */}
              <button className="delete" onClick={() => onDelete(user.id)}>Delete</button>
              
              {/* Conditionally render the EditForm component */}
              {showEditForm && editingUser.id === user.id && (
                <EditForm
                  editingUser={editingUser}
                  onUpdate={onUpdate}
                  onCancel={onCancel}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Box;