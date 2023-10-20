import React from "react";
import { Card, Box, Typography, Rating, IconButton } from "@mui/material";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  RemoveCart,
  ProductCountAdd,
  ProductCountDel,
} from "../../Redux/store/CartSlice";

const CartItem = ({ Product }) => {
  const dispatch = useDispatch();
  return (
    <Card variant="outlined" className="cartItem">
      <img height={80} width={80} src={Product.image} alt={Product.title} />
      <Box className="cart-title">
        <Typography component="p" variant="subtitle1">
          {Product.title}
        </Typography>
        <Typography color={"gray"} fontSize={13} component="p">
          <Rating
            size="small"
            value={Product.rating.rate}
            precision={0.5}
            readOnly
          />
          ({Product.rating.count})
        </Typography>
      </Box>
      <Box className="cart-btn-group">
        <IconButton
          color="error"
          disabled={Product.count <= 0}
          onClick={() => dispatch(ProductCountAdd(Product))}
        >
          <AiOutlinePlus />
        </IconButton>
        <Typography component="span" variant="h6">
          {Product.count}
        </Typography>
        <IconButton
          color="error"
          disabled={Product.count <= 1}
          onClick={() => dispatch(ProductCountDel(Product))}
        >
          <AiOutlineMinus />
        </IconButton>
      </Box>
      <Typography component="p" sx={{ fontWeight: "bold" }}>
        $ {Product.price * Product.count}
      </Typography>
      <IconButton
        className="clearBtn"
        onClick={() => dispatch(RemoveCart(Product))}
      >
        <MdOutlineClear />
      </IconButton>
    </Card>
  );
};

export default CartItem;
