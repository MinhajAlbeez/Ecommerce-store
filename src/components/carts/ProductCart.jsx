import React from "react";
import "./ProductCart.css";
import { Tooltip } from "antd";
import Item1 from "../../assets/blacktee.png";
import Item2 from "../../assets/yellowtee.png";
import Item3 from "../../assets/bluetee.png";
import Item4 from "../../assets/orangetee.png";
import { useNavigate } from "react-router-dom";
import {
  FullscreenOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons"; // Import additional icons

const ProductCart = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Sunbeam Tote",
      price: 20.0,
      image: Item1,
    },
    {
      id: 2,
      name: "ZebraBlend T-Shirt",
      price: 55.0,
      image: Item2,
    },
    {
      id: 3,
      name: "Test product",
      price: 114.0,
      image: Item3,
    },
    {
      id: 4,
      name: "Test product",
      price: 114.0,
      image: Item4,
    },
  ];

  const HandleView = () => {
    navigate("/dashboard/viewall");
  };

  const handleViewAll = () => {
    navigate("/dashboard/view-product");
  };

  return (
    <>
      <div className="Latest__Arivals">
        <p>Latest Arrivals</p>
        <p onClick={HandleView} style={{ cursor: "pointer" }}>
          view all
        </p>
      </div>
      <div className="cart">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-overlay">
              <Tooltip title="Add To Cart">
                <ShoppingCartOutlined className="cart-item-icon" />
              </Tooltip>
              <Tooltip title="View">
                <FullscreenOutlined className="cart-item-icon" 
                onClick={handleViewAll}
                />
              </Tooltip>
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCart;
