import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/FeaturedInfo/featuredinfo"
import "./Home.css"
import {UserData} from "../../dummyData"


import  WidgestSm  from "../../components/widgestSM/widgestSm"
import { WidgestLg } from "../../components/widgestLg/widgestLg"
import { useEffect, useMemo, useState } from "react"
//import { userRequest } from "../../requestMethods"
const Home = () => {
    
    return (
        < div className="home">
            <Featuredinfo/>
            <div className="graph">
              <div>
              <Chart data={UserData} title="Todays Trandings" grid dataKey="Active User"/>
              </div>
              <div className="homeWidgest">
                 <WidgestSm/>
                
               </div>
            </div>
            <WidgestLg/>
               
           
        </div>

    )
}

export default Home
