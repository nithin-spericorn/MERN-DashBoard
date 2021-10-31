import { NotificationsNone,Language, Settings } from '@material-ui/icons'


import "./TopBar.css"

const Tobbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="Topleft">
                <a href="https://www.spericorn.com">
            <img class="logo-dark" src="https://www.spericorn.com/wp-content/themes/spericorn_new/assets/img/logo-dark.png" alt=""/>
                           
                    </a>
                </div>
                <div className="Topright">
                    <div className="topbarIconContainer">
                      <NotificationsNone/>
                      <span className="topbariconBadge">
                          2
                      </span>
                    </div>
                    <div className="topbarIconContainer">
                      < Language/>
                      <span className="topbariconBadge">
                          2
                      </span>
                    </div>
                    <div className="topbarIconContainer">
                      <Settings/>
                      
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Tobbar
