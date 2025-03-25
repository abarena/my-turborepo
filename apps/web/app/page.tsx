import CreateProduct from "./crate-product/create-product";
import Products from "./products/products";

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
      <CreateProduct />
      <Products />
    </>
  );
}
