import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { getALlProducts } from "../../../../services/Business/allProducts";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

interface IMarketPlaceBody {
    query: string;
}

function MarketPlacebody({ query, category }) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const pd = async () => {
            const result = await getALlProducts();
            // console.log('✨✨🎇🎆',typeof result);
            setProductList(result);
        };
        pd();
    }, [query, category, productList.length]);

    return (
        <div style={{ border: "1px solid red", marginTop: "8px" }}>
            <div>
                <p>{query}</p>
                <span>==========</span>
                <p>{category}</p>
                <span>{new Date().toLocaleTimeString()}</span>
            </div>

            <div style={{display:'flex',gap : '4px'}}>
                {productList?.map((prdc) => {
                    // console.log(`=`.repeat(20));
                    // console.log(prdc);
                    return <SingleProductCard productInfo={prdc} />;
                })}
            </div>
        </div>
    );
}

export default MarketPlacebody;
