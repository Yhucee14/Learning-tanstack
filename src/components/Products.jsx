import { Fragment, useState } from "react";
import { useProduct, useProducts } from "../services/queries";

export default function Product() {
  const productsQuery = useProducts();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const productQuery = useProduct(selectedProductId)
  


  return (
    <>
      {productsQuery.data?.pages.map((group, index) => (
        <Fragment key={index}>
          {group.data.map((product) => (
            <Fragment key={product.id}>
              <button onClick={() => setSelectedProductId(product.id)}>
                {product.name}
              </button>
              <br />
            </Fragment>
          ))}
        </Fragment>
      ))}
      <br />
      <div>
        <button
          onClick={() => productsQuery.fetchNextPage()}
          disabled={
            !productsQuery.hasNextPage || productsQuery.isFetchingNextPage
          }
        >
          {productsQuery.isFetchingNextPage
            ? "Loading more"
            : productsQuery.hasNextPage
            ? "Load more"
            : "Nothing more to load"}
        </button>
      </div>
      <div>Selected product:</div>
      {JSON.stringify(productQuery.data)}
    </>
  );
}
