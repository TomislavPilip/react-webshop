import { Outlet } from "react-router-dom";

export function Product() {
  return (
    <div className={"product-wrapper"}>
      <h2>Article content comes below this point</h2>

      <Outlet />
    </div>
  );
}
