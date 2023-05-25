const CustomerForm = ({ handleInputChange, handleSubmit, state }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid black", padding: "5px", borderRadius: "5px" }}
    >
      First Name:
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={handleInputChange}
      />
      Last Name:
      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={handleInputChange}
      />
      Id:
      <input
        type="text"
        name="id"
        value={state.id}
        onChange={handleInputChange}
      />
      <button type="submit">Add customer</button>
    </form>
  );
};
export default CustomerForm;
