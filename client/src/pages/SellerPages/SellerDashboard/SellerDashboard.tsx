import React from "react";
import SellerLayout from "../../../layout/Seller/SellerLayout";
import DashboardCard from "../../../components/dashboard-card/DashboardCard";

import style from "./sellerdashboard.module.css";
import SellerWeeklyChart from "../../../components/SellerWeeklyChart";
import SingleLatestSellerProduct from "../../../components/SingleLatestSellerProduct/SingleLatestSellerProduct";
import SellerTopProducts from "../../../components/SellerTopProducts/SellerTopProducts";
import SellerLatestOrders from "../../../components/SellerLatestOrder/SellerLatestOrders";
import SellerStatsContainer from "../../../components/SellerStats/SellerStatsContainer";


function SellerDashboard() {

    
    // console.log(style)
    return (
        <SellerLayout>
            {/* 90 vh here */}
            {/* 27 vh */}
            <SellerStatsContainer />
            {/* 57vh */}
            <div className={[style["plotContainer"]].join(" ")}>
                {/* 20vh */}
                <div className={[style["plots"]].join(" ")}>
                    <SellerWeeklyChart />
                    <SellerTopProducts />
                </div>
                {/*  */}
                < SellerLatestOrders />

            </div>

            {/* <DashboardCard /> */}
        </SellerLayout>
    );
}

export default SellerDashboard;
