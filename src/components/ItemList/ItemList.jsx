import Item from "../Item/Item";
import NoResults from "../NoResults/NoResults";

export default function ItemList({ listProducts }) {
  
  return (
    <>
      {
        listProducts.length > 0 ? listProducts.map((product) => (<Item key={product.id} product={ product } />)) 
                                : <NoResults />    
      }
    </>
  );
}