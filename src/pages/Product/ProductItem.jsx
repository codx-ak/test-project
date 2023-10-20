import { Button, Card, Rating, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AddCart } from "../../Redux/store/CartSlice";

const ProductItem = ({ data }) => {
  //dispatch function to calling redux actions
  const dispatch = useDispatch();
  return (
    <Card className="product-item" variant="outlined">
      <img width="100%" height={150} src={data.image} alt={data.title} />
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
};

export default ProductItem;
