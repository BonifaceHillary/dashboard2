import React from 'react'

import "./widget.scss"

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {

  let data;

  const amount = 500;
  const diff = 30;

switch (type){
  case "customer":
    data = {
      title: "CUSTOMER",
      isMoney: false,
      link: "see details",
      icon: < Person2OutlinedIcon className='icon' style={{color: "crimson", backgroundColor: "#ff000033"}} />
    };
      break;


       case "oder":
    data = {
      title: "ODERS",
      isMoney: false,
      link: "veiw all oders",
      icon: < ShoppingCartIcon className='icon' style={{color: "goldenrod", backgroundColor: "#daa52033"}} /> 
    };
      break;


       case "earnings":
    data = {
      title: "TOTAL EARNINGS",
      isMoney: true,
      link: "veiw all earnings",
      icon: <  MonetizationOnIcon className='icon' style={{color: "green", backgroundColor: "#00800033"}} /> 
    };
      break;


       case "balance":
    data = {
      title: "MY BALANCE",
      isMoney: true,
      link: "withdraw money",
      icon: < AccountBalanceWalletIcon className='icon' style={{color: "purple", backgroundColor: "#80008033"}} /> 
    };
      break;

    default:
      break;
}


  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
           </div>
          {data.icon}
        
      </div>
    </div>
  )
}

export default Widget 
