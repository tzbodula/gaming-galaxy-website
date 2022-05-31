import Product from "./Product";

const ProductGrid = ({ products, filter }) => {
  if (!products || products.length === 0) return null;
  console.log("Product Grid Component Received", products.length, "products")
  /*
    Loop that takes each array in "products", and checks to see 
    if the filter matches the name of the array

    If that filter does match, then throw that product in a filteredProducts array, 
    and have the return function return just the filtered products
  */
  let filteredProducts = [];
  let index = 0;

  for (const product of products) {
    console.log("Looking at product", product.name)
    if (product.name.includes(filter)) {
          console.log("Product contains filter", filter)
          filteredProducts[index] = product;
          index++;
    }
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
