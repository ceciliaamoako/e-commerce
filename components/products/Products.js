import React from "react";
import { Grid } from "@mui/material";

import Product from "./Product";
import useStyles from "./styles_products";

function Products({ products, onAddToCart }) {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export default Products;