import "./widgestSm.css"
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
//import { userRequest } from "../../requestMethods";
import {getAllLeaders} from "./widgestSlice"
import { connect } from "react-redux";
const WidgestSm = ({
  getAllLeaders,
  leaders
}) => {

  const [leader,setLeader]=useState(leaders?.leaders||[])
  const [more,setMore]=useState(3)

  useEffect(()=>{
  const getUsers= async ()=>{
    try{
    
    getAllLeaders();
    }catch(error){

    }
  }
  getUsers()
 
  },[])
  useEffect(()=>{
    console.log("leaders",leaders)
    setLeader(leaders?.leaders?.slice(0,more))
    //setLeader(leader.slice(0,more))
  },[leaders,more])

    return (
<div className="widgetSm">
      <span className="widgetSmTitle">Leadersboard</span>
      {/* {leader && leader.map(item=>{
        <ul className="widgetSmListItem">
         <li>
         <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
            className="topAvatar"
          />
          <section className="t">{"jjjj"}</section>
         </li>
        </ul>
})} */}
      {/* <div className="widgetSmListItem">
      <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
            className="topAvatar"
          />
          <section className="t">{"jj"}</section>
      </div>
      <div className="widgetSmListItem">
      <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
            className="topAvatar"
          />
          <section className="t">nithin</section>
      </div> */}
          
      <ul className="widgetSmList">
        {leader?.length ?(leader.map(user=>(
        <li className="widgetSmListItem" key={1}>
          <img
            src={user.image} alt=""
            className="topAvatar"
          />
          
                    
                
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.name}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))):(<>
        <h1 className="t">No Leaders records in DataBase</h1>
        </>
        
         )}
        
      </ul>
      {leader?.length===3 && (<button
      onClick={()=>setMore(leaders?.length||20)}>
        Load More
      </button>)}
      {leader?.length===leaders?.leaders.length && (<button
      onClick={()=>setMore(3)}>
        Show Less
      </button>)}
    </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
  getAllLeaders: () => dispatch(getAllLeaders()),
  
});
const mapStateToProps = (state) => ({
  leaders: state.entities.leaders.Leaders,
  isLoading: state.entities.leaders.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgestSm);
