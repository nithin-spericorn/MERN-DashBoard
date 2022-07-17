import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <div className="sidebarMenu"> 
            <h3 className="sidebarTitle">DashBoard</h3>
            <ul className="sidebarlist">
              <Link to="/" className="link">
                <li className="sidebarlistitem active">
                  <LineStyle className="sidebarIcon"/>
                  Home
                </li>
                </Link>
                <li className="sidebarlistitem">
                  <Timeline  className="sidebarIcon"/>
                  Analytics
                </li>
                <li className="sidebarlistitem">
                  <TrendingUp  className="sidebarIcon"/>
                  sales
                </li>
            </ul>

            </div>
            <div className="sidebarMenu"> 
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarlist">
              <Link to="/" className="link">
                <li className="sidebarlistitem">
                  <PermIdentity className="sidebarIcon"/>
                  User
                </li>
                </Link>
                <Link to="/" className="link">
                <li className="sidebarlistitem">
                  <Storefront  className="sidebarIcon"/>
                  Products
                </li>
                </Link>
                <li className="sidebarlistitem">
                  <AttachMoney  className="sidebarIcon"/>
                  Transactions
                </li>
            </ul>

            </div>
            <div className="sidebarMenu"> 
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                  <BarChart className="sidebarIcon"/>
                  Reports
                </li>
                <li className="sidebarlistitem">
                  <MailOutline  className="sidebarIcon"/>
                  Mail
                </li>
                <li className="sidebarlistitem">
                  <DynamicFeed   className="sidebarIcon"/>
                  Feedback
                </li>
                <li className="sidebarlistitem">
                  <ChatBubbleOutline   className="sidebarIcon"/>
                  Message
                </li>
            </ul>

            </div>
            <div className="sidebarMenu"> 
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                  <WorkOutline className="sidebarIcon"/>
                  Manage
                </li>
                <li className="sidebarlistitem">
                  <Timeline  className="sidebarIcon"/>
                  Analytics
                </li>
                <li className="sidebarlistitem">
                  <Report  className="sidebarIcon"/>
                  Report
                </li>
            </ul>

            </div>
            </div>
        </div>
    )
}

export default Sidebar
