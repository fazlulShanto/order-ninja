import React from 'react'
import { Card ,Typography} from 'antd';
import { DatabaseFilled} from '@ant-design/icons';
import { FiBarChart2 } from "react-icons/fi";
import style from './dashboardcard.module.css';
// const style:React.CSSProperties = {
//     borderRadius:'50%',
//     // backgroundColor :'#FA5A7D',
//     padding:4,
    
// };



function DashboardCard({icon,cardBg ,statBg ,cardTitle,cardFigure,cardStats} : any) {

    const cardContainerStyle :React.CSSProperties = {
        backgroundColor : cardBg,
    }
    const cardStatBg :React.CSSProperties = {
        color : statBg
    }

  return (
    <Card className={style['cardContainer']} style={cardContainerStyle} >
    {icon}
    <h2 className={style['cardHeader']} > {cardFigure} </h2>
    <p className={style['cardTitle']}>{cardTitle}</p>
    <p  className={style['cardStat']} > {cardStats} </p>
  </Card>
  );
}

export default DashboardCard;
