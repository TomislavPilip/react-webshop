import { Link } from "react-router-dom";

export function SingleProduct() {
  return (
    <div className={"single-product"}>
      <h2>Some product title</h2>
      <Link to="/about">Go to about page</Link>
    </div>
  );
}
