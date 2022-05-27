import Item from "../Item/Item";

export default function ItemList({ listProducts }) {
  
  return (
    <>
      { listProducts.map((product) => (<Item key={product.id} product={ product } />)) }
    </>
  );
}