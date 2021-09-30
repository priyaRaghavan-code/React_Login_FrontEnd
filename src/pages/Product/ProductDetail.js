import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  removeSelectedProduct,
  // fetchProduct,
} from "../../store/actions/ProductAction";

export const ProductDetail = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, name, price, description } = product;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (productId && productId !== "") dispatch(fetchProduct(productId));
  //   return () => {
  //     dispatch(removeSelectedProduct());
  //   };
  // }, [productId]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg space-y-10 mt-14 flex-center">
      <img className="w-sm object-cover h-48" src={image} alt="Display" />

      <div className="">{name}</div>
      <div>Rs {price}</div>
    </div>
  );
};
