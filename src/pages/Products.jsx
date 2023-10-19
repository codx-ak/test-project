import {
  Button,
  Card,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductData } from "../Api/ProductApi";
import "./product.css";
import { useDispatch } from "react-redux";
import { AddCart } from "../Redux/store/CartSlice";
const Products = () => {
  const [Product, setProducts] = useState([]);
  useEffect(() => {
    //getting produc data and update product store
    ProductData().then((value) => setProducts(value));
  }, [Product]);
  //dispatch function to calling redux actions
  const dispatch = useDispatch();
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
          Product.map((data, index) => {
            return (
              <Card className="product-item" variant="outlined" key={index}>
                <img
                  width="100%"
                  height={150}
                  src={data.image}
                  alt={data.title}
                />
                <Typography variant="h6">{data.title}</Typography>
                <Typography component="p">
                  <Rating
                    size="small"
                    value={data.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  ({data.rating.count})
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => dispatch(AddCart(data))}
                  color="secondary"
                >
                  Add to card
                </Button>
              </Card>
            );
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
