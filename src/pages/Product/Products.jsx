import { Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductData } from "../../Api/ProductApi";
import "./product.css";
import ProductItem from "./ProductItem";
const Products = () => {
  const [Product, setProducts] = useState([]);
  useEffect(() => {
    //getting produc data and update product store
    ProductData().then((value) => setProducts(value));
  }, [Product]);

  return (
    <>
      <Typography variant="h3" textAlign="center" paddingBottom="5px">
        Shop Now
      </Typography>
      <Typography component="p" textAlign="center" paddingBottom="20px">
        Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet.
      </Typography>
      <Typography className="search">
        <TextField sx={{ width: 270 }} placeholder="search here..." />
      </Typography>
      <Container className="products">
        {Product ? (
          Product.map((product, index) => {
            return <ProductItem key={index} data={product} />;
          })
        ) : (
          <Typography
            variant="h5"
            color="gray"
            sx={{ textAlign: "center", padding: "10% 0", width: "100%" }}
          >
            No Items Available
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Products;
