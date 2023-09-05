import React, { useState } from 'react';
import DashboardCard from '../dashboard-card/DashboardCard';
import style from './SellerStats.module.css';
import { FiBarChart2 } from "react-icons/fi";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineException } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import {useEffect} from 'react';
import { Spin } from 'antd';
import CustomInstance from '../../lib/axios';



function SellerStatsContainer() {

    const [stats,setStats] = useState();
    const [loading,setLoading] = useState(true);

    const {id : user_id,store_id} = JSON.parse(localStorage.getItem('raw_user')!);

    useEffect(()=>{
        const getStats =async () => {

            try {
                const {data} = await CustomInstance(`/store/stats/${store_id}`);
                setStats(data);
                console.log(`🎄🎀🎗🎠🎑🎊🎉`,data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        getStats();
    },[])


  return (
        <Spin spinning={loading}>
           {stats ?  <div className={[style["statsCardDiv"]].join(" ")}>
                <DashboardCard
                    cardTitle="Today Sales"
                    cardFigure={stats.sells}
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
                    cardFigure={stats.orders}
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
                    cardFigure={stats.quantity}
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
                    cardTitle="Customers Served"
                    cardFigure={stats.customers}
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
            </div> :null}
        </Spin>
  )
}

export default SellerStatsContainer