import React, { Dispatch, SetStateAction } from "react";
import { ShopOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";
const compStyle: React.CSSProperties = {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    // justifyContent: "space-around",
    alignItems: "center",
    // border : '1px solid red'
};

const choiceBox: React.CSSProperties = {
    marginTop: "16px",
    height: "140px",
    width: "140px",
    backgroundColor: "white",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const choiceBoxDiv: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
};

interface Mycomp {
    setC: Dispatch<SetStateAction<number>>;
    setValue: Dispatch<SetStateAction<string>>;
}

const RgisterStep1: React.FC<Mycomp> = ({ setC, setValue }) => {
    const handleBusiness = () => {
        setValue("business");
        setC((pr) => pr + 1);
    };

    const handleSuplier = () => {
        setC((pr) => pr + 1);
        setValue("supplier");
    };

    return (
        <div style={compStyle}>
            <div>
                <h1>Get Started</h1>
                <h3>You are a:</h3>
            </div>
            <div style={choiceBoxDiv}>
                <Button onClick={handleSuplier} style={choiceBox}>
                    <ShopOutlined
                        style={{ fontSize: "48px", color: "green" }}
                    />
                    <h3>supplier</h3>
                </Button>
                <Button onClick={handleBusiness} style={choiceBox}>
                    <ShoppingOutlined
                        style={{ fontSize: "48px", color: "purple" }}
                    />
                    <h3>Business Owner</h3>
                    {/* <div>Business Owner</div> */}
                </Button>
            </div>
        </div>
    );
};

export default RgisterStep1;
