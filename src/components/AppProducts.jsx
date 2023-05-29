import { Table } from "react-bootstrap";
import Heading from "./Heading";
import Product from "./Product";
import { useState } from "react";

const AppProducts = ({listOfPeople}) => {
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
    {
      name: "Apple smart watch",
    }
  ];
  const [people, setPeople] = useState(listOfPeople);
  const [products, setProducts] = useState(listOfProducts);
  const [productsCopy, setProductsCopy] = useState(listOfProducts);
  const [state, setState] = useState({
    search: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSearch = (event, name) => {
    event.preventDefault();
    setProducts(productsCopy.filter((product) => product.name.includes(name)));
  };
  return (
    
    <div className="container">
      <form className="d-flex mt-3" style={{ width: "500px" }} role="search">
        <input
          value={state.search}
          name="search"
          onChange={handleInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
        />
        <button
          onClick={(e) => handleSearch(e, state.search)}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
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
