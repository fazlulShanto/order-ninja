import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Row, Col, Result, Button, Spin } from "antd";
import CustomInstance from "../../lib/axios";
import { getPathaoCost } from "../../services/pathao.service";

function OrderSummary({ setTotal, next, shipping }) {
  const { delivery_fee, setDeliveryFee, cartItems, cartQuantity } =
    useShoppingCart();
  const [loading, setLoading] = useState(true);
  const [finalData, setFinalData] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [weightTotal, setTotalWeight] = useState(0);
  const [currentCost, setCost] = useState(0);

  const getSingleCartItem = async (id: any) => {
    const { data } = await CustomInstance(`/product/single/${id}`);
    return data;
  };

  useEffect(() => {
    let _subTotal = 0;
    let _itemWeight = 0;
    const getProduct = async () => {
      try {
        const result = [];
        for (let i = 0; i < cartItems.length; i++) {
          const res = await getSingleCartItem(cartItems[i].id);
          result.push({ ...res, quantity: cartItems[i].quantity });
          _subTotal += cartItems[i].quantity * Number(res.price);
          _itemWeight += cartItems[i].quantity * Number(res.weight);
        }
        setFinalData(result);
        setSubTotal(_subTotal);
        setTotalWeight(_itemWeight);

        //const calculate

        const cost = await getPathaoCost({
          weight: _itemWeight,
          city: shipping.city,
          zone: shipping.zone,
        });
        setCost(cost);
        setTotal(cost + _subTotal);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);
  //   }, [cartItems, setTotal, shipping?.city, shipping?.zone]);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50vw" }}>
        <Row
          style={{
            backgroundColor: "#202124",
            color: "white",
            fontWeight: 600,
            padding: "8px 8px",
            marginBottom: "4px",
            borderRadius: "4px",
          }}
        >
          <Col span={8}> Name </Col>
          <Col span={8}> Quantity </Col>
          <Col span={8} style={{ textAlign: "right" }}>
            Price
          </Col>
        </Row>
        {finalData.map((v) => (
          // <div>
          <Row
            key={Math.random()}
            style={{
              backgroundColor: "white",
              padding: "8px",
              marginBottom: "4px",
              borderRadius: "4px",
            }}
          >
            <Col key={Math.random()} span={8}>
              {" "}
              {v.name}{" "}
            </Col>
            <Col key={Math.random()} span={8}>
              {" "}
              {v.quantity}{" "}
            </Col>
            <Col key={Math.random()} span={8} style={{ textAlign: "right" }}>
              ৳{v.quantity * v.price}{" "}
            </Col>
          </Row>

          // </div>
        ))}
        <div style={{ border: "1px solid black" }}></div>

        <Row style={{ paddingRight: "8px" }}>
          <Col span={12}> SubTotal </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            {" "}
            ৳{subTotal}
          </Col>
        </Row>
        {/* <Row style={{paddingRight : '8px',marginTop:'8px'}}>
                <Col span={12}> Total Weight </Col>
                <Col span={12} style={{textAlign:'right'}}> {weightTotal}kg</Col>
            </Row> */}
        <Spin tip="calculating delivery cost!" spinning={loading}>
          <Row style={{ paddingRight: "8px", marginTop: "8px" }}>
            <Col span={12}> Shipping Cost </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              {" "}
              ৳{currentCost}
            </Col>
          </Row>
        </Spin>
        <div style={{ border: "1px solid black" }}></div>
        <Row
          style={{
            paddingRight: "8px",
            backgroundColor: "white",
            padding: "8px",
            marginTop: "8px",
            borderRadius: "6px",
          }}
        >
          <Col span={12}> Total </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            ৳{subTotal + currentCost}
          </Col>
        </Row>
        <Row>
          <Button
            disabled={loading}
            onClick={() => next()}
            style={{ width: "100%", marginTop: "16px" }}
            type="primary"
          >
            Next
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default OrderSummary;
