import { Link } from "react-router-dom";

const Customer = ({ customer, onRemove, index }) => {
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>
        <button>
          <Link to={`/customers/${index}`}>See history</Link>
        </button>
      </td>
      <td>
        <button onClick={() => onRemove(customer.firstName)}>Remove</button>
      </td>
    </tr>
  );
};
export default Customer;
