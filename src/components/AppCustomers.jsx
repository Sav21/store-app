import { useState } from "react";
import { Table } from "react-bootstrap";
import Customer from "./Customer";
import CustomerForm from "./CustomerForm";
import Heading from "./Heading";

const AppCustomers = () => {
  const customers = [
    {
      firstName: "Yoruichi",
      lastName: "Shihouin",
      id: 0,
    },
    {
      firstName: "Mark",
      lastName: "Something idk",
      id: 1,
    },
    {
      firstName: "Dio",
      lastName: "Brando",
    },
  ];
  const [listOfCustomers, setlistOfCustomers] = useState(customers);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    id: "",
  });

  const onRemove = (firstName) => {
    setlistOfCustomers((prevState) =>
      prevState.filter((customer) => customer.firstName !== firstName)
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(state.sector);

    let newCustomer = {
      firstName: state.firstName,
      lastName: state.lastName,
      id: state.id,
    };
    console.log(state);

    setlistOfCustomers(
      (prevState) => (prevState = [...prevState, newCustomer])
    );
  };

  return (
    <div>
      <Heading />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Latest Purchases</th>
            <th>Delete customer</th>
          </tr>
        </thead>
        <tbody>
          {listOfCustomers.map((customer, index) => (
            <Customer
              key={index}
              customer={customer}
              onRemove={onRemove}
              index={index}
            />
          ))}
        </tbody>
      </Table>
      <CustomerForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        state={state}
      />
    </div>
  );
};

export default AppCustomers;
