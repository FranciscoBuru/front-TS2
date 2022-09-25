import React from "react";
import './dashboardcommunity.css'
function DashboardCommunity(){
    return(
        <div>
            <p className="CommDash">Community Dashboard</p>
            <div className="Ellipse10"></div>
            <div className="Ellipse11"></div>
            <div className="GR1">
            <br/>
                TV in contract: 20 USDT
                <br/>
                <br/>
                TV in aave: 50 USDT
            </div>
            <div className="GR2">
            <br/>
                Total money made in aave: 31.25 USDT
            </div>
            <div className="GR4">
                Graphs coming soon...
            </div>
            

        </div>
    );
}
export default DashboardCommunity;