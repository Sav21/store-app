import { Table } from "react-bootstrap";
import Heading from "./Heading";
import Product from "./Product";

const AppProducts = () => {
  const listOfProducts = [
    {
      name: "Samsung A53",
    },
    {
      name: "Samsung A34",
    },
    {
      name: "Samsung S23",
    },
  ];
  return (
    <div>
      <Heading />
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {listOfProducts.map((product) => (
            <Product product={product} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AppProducts;
