import { useParams } from "react-router-dom";
import CustomerInfo from "./CustomerInfo";

const SingleCustomer = ({ customer }) => {
  const { id } = useParams();
  return <CustomerInfo customer={customer} index={id} />;
};

export default SingleCustomer;
