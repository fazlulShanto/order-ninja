import React from 'react';
import DashboardCard from '../dashboard-card/DashboardCard';
import style from './SellerStats.module.css';
import { FiBarChart2 } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineException } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

function SellerStatsContainer() {
  return (
        <div className={[style["statsCardDiv"]].join(" ")}>
                <DashboardCard
                    cardTitle="Today Sales"
                    cardFigure="$1K"
                    cardStats="+6% from yesterday"
                    cardBg={"#FFE2E5"}
                    statBg={"#f8b7c9"}
                    icon={
                        <FiBarChart2
                            size={40}
                            style={{
                                backgroundColor: "#FA5A7D",
                                padding: "4px",
                                borderRadius: "50%",
                            }}
                        />
                    }
                />
                <DashboardCard
                    cardTitle="Today Order"
                    cardFigure="300"
                    cardStats="+6% from yesterday"
                    cardBg={"#FFF4DE"}
                    statBg={"#f8b7c9"}
                    icon={
                        <AiOutlineException
                            size={40}
                            style={{
                                backgroundColor: "#FF947A",
                                padding: "8px",
                                borderRadius: "50%",
                            }}
                        />
                    }
                />
                <DashboardCard
                    cardTitle="Product Sold"
                    cardFigure="5"
                    cardStats="+6% from yesterday"
                    cardBg={"#DCFCE7"}
                    statBg={"#f8b7c9"}
                    icon={
                        <MdOutlineSell
                            size={40}
                            style={{
                                backgroundColor: "#3cd856",
                                padding: "8px",
                                borderRadius: "50%",
                            }}
                        />
                    }
                />
                <DashboardCard
                    cardTitle="Total Customers"
                    cardFigure="400"
                    cardStats="+6% from last month"
                    cardBg={"#F3E8FF"}
                    statBg={"#f8b7c9"}
                    icon={
                        <BsFillPeopleFill
                            size={40}
                            style={{
                                backgroundColor: "#BF83FF",
                                padding: "8px",
                                borderRadius: "50%",
                            }}
                        />
                    }
                />
            </div>
  )
}

export default SellerStatsContainer