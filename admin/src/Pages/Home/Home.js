import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/FeaturedInfo/featuredinfo"
import "./Home.css"
import {UserData} from "../../dummyData"


import { WidgestSm } from "../../components/widgestSM/widgestSm"
import { WidgestLg } from "../../components/widgestLg/widgestLg"
import { useEffect, useMemo, useState } from "react"
import { userRequest } from "../../requestMethods"
const Home = () => {
    const [userSetatus,setUserStats]=useState([])
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );
      useEffect(()=>{
        const getStats = async () => {
            try {
              const res = await userRequest.get("/users/stats");
              res.data.map((item) =>
                setUserStats((prev) => [
                  ...prev,
                  { name: MONTHS[item._id - 1], "Active User": item.total },
                ])
              );
            } catch {}
          };
          getStats();
      },[MONTHS])
      console.log(userSetatus)
    return (
        < div className="home">
            <Featuredinfo/>
            <Chart data={userSetatus} title="User Analytics" grid dataKey="Active User"/>
               <div className="homeWidgest">
                 <WidgestSm/>
                 <WidgestLg/>
               </div>
           
        </div>

    )
}

export default Home
