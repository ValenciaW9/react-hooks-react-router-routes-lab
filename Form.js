import React from 'react';

function FormComponent() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <section id="form">
      <h2>Add Food</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="foodName">Food Name:</label>
        <input type="text" id="foodName" name="foodName" />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default FormComponent;