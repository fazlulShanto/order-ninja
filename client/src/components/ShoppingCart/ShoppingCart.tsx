import { ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer, Button, Badge } from "antd";
import React, { useState, useContext } from "react";
import type { DrawerProps } from "antd/es/drawer";
import ShoppingCartContext from "../../context/ShoppingCartContext";
import SingleCartItem from "./SingleCartItem";
import { useNavigate } from "react-router-dom";


function ShoppingCart() {
    const [open, setOpen] = useState(false);
    const { cartQuantity, cartItems } = useContext(ShoppingCartContext);
    const navigator = useNavigate();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={showDrawer}
                style={{ marginRight: "8px", marginTop: "8px" }}
            >
                <Badge count={cartQuantity}>
                    <ShoppingCartOutlined
                        style={{ fontSize: "40px", color: "green" }}
                    />
                </Badge>
            </button>
            <Drawer
            
                title="Shopping Cart"
                placement="right"
                onClose={onClose}
                open={open}
            >
                {/* {console.log(cartItems)} */}

                <div
                    style={{
                        // border: "1px solid red",
                        flexDirection: "column",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        {cartItems.map((item) => {
                            return (
                                <SingleCartItem
                                    key={Math.random()}
                                    itemId={item.id}
                                    quantity={item.quantity}
                                />
                            );
                        })}
                        
                    </div>

                    <Button type="primary" onClick={()=>{navigator('/place-order')}} >Place Order</Button>
                </div>
            </Drawer>
        </>
    );
}

export default ShoppingCart;
