import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/ProductAction";
import { ProductComponent } from "./ProductComponent";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      <ProductComponent />
    </div>
  );
};
