import { arrayBuffer } from "node:stream/consumers";
import Product from "./Product";



const ProductGrid = ({ products, filter }) => {
  if (!products || products.length === 0) return null;

  /*
    Loop that takes each array in "products", and checks to see 
    if the filter matches the name of the array

    If that filter does match, then throw that product in a filteredProducts array, 
    and have the return function return just the filtered products
  */

  let filteredProducts = [];
  let index = 0;

  function checkFilter(filter, product) {
    return filter.some(function(selectedIndex) {
      return product.name.includes(selectedIndex)
    })
  }  

  for (const product of products) {
    let isInFilter = checkFilter(filter, product)

    if (isInFilter) {
      filteredProducts[index] = product
    }

    index++;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-4 w-10/12 mx-auto pb-5">
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
