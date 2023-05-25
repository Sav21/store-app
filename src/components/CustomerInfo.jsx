import Heading from "./Heading";

const CustomerInfo = ({ customer, index }) => {
  let customerInfo = customer[index];

  return (
    <div>
      <Heading />
      <div>First Name: {customerInfo.firstName}</div>
      <div>Last Name: {customerInfo.lastName}</div>
      <div>ID: {customerInfo.id}</div>
    </div>
  );
};

export default CustomerInfo;
