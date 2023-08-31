import React, { useState } from "react";
import BusinessLayout from "../../../layout/Bussiness/BusinessLayout";
import MarketplaceSearchbar from "./MarketPlceSearchbar/MarketplaceSearchbar";
import MarketPlacebody from "./MarketPlaceBody/MarketPlacebody";
import { Col, Row, Select } from "antd";
function BusinessMarketPlace() {
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");

    const handleSearch = (value) => {
        setSearchQuery(value);
        // Perform search logic here based on the search query
    };
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
      setCategory(value);
    };
    return (
        <BusinessLayout>
            <Row>
                <Col span={12}>
                    <MarketplaceSearchbar onSearch={handleSearch} />
                </Col>
                <Col offset={4} span={8}>
                    <Select
                        placeholder="Select a Category"
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                            
                        ]}
                    />
                </Col>
               
            </Row>

            <MarketPlacebody query={searchQuery} category={category} />
        </BusinessLayout>
    );
}

export default BusinessMarketPlace;
