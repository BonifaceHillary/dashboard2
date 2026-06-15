import React, { Component } from 'react'

import "./home.scss"

import Sidebar from '../../components/sidebar/Sidebar'

 import Navbar  from '../../components/navbar/Navbar'

 import Widget from '../../components/widget/Widget'

import Featured from '../../components/featured/Featured'

import Chart from '../../components/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      
     <div className="homecontainer">
        <Navbar />

     <div className="widget">
        <Widget type="customer" />
         <Widget type="oder" />
          <Widget type="earnings" />
           <Widget type="balance" />
        </div>

        <div className="chart">
          <Featured />
          <Chart />
        </div>

      </div> 
    </div>
  )
}

export default Home
