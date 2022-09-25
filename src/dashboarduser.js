import React from "react";
import './dashboarduser.css';
import { Navigate,useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import { utils, getDefaultProvider, ethers } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import Child from "./chain-info/Child.json"
import { useEthers, useContractFunction } from '@usedapp/core'


function DashboardUser(){
    const navigate = useNavigate();
    const[TypeHere,setTypeHere]=useState('Type Message Here')
    const[Search,setSearch]=useState('Search')
    function getSearch(val){
        setSearch(val.target.value)
    }
    function getTypeHere(val){
        setTypeHere(val.target.value)
    }

    const { activateBrowserWallet, account } = useEthers()
    const abi = new utils.Interface(Child["abi"])
    const auctionContract = new Contract('0x41Dc5c8de461b7dcaD5a0044C0F1F69Af4d90Ab1', abi, getDefaultProvider())

    const { state, send } = useContractFunction(auctionContract, 'depositt', { transactionName: 'depositt', gasLimit: 210000 })

    const close = () => {
        void send(utils.parseEther(String(20)), 11, 10, 2022)
    }

    return(
        
        <div>
            
            <div className="Ellipse12"></div>
            <div className="Ellipse13"></div>
            <div className="GR6">
            
            </div>
            <p className="ProDash">Property Dashboard</p>
            <p className="TD">Total Dues: 1 month</p>
            <button onClick={close} className="PA">Pay All</button>
            <p className="LP">Last Payments:</p>
            <p className="LPP">--August monthly payment</p>
            <p className="AdminYes">Are you a admin? If yes</p>
            <button onClick={() => navigate("/dashboardadmin")} className="CM">Click Me</button>
            <p className="R">Receipts:</p>
            <input type="text" value={Search} onChange={getSearch} name="Search" id="Search" className="Search"/>
            <button className="S"></button>
            <p className="RR">You have no recipts :/</p>
            <p className="SM">Send message to Admin:</p>
            <input type="text" value={TypeHere} onChange={getTypeHere} name="TypeHere" id="TypeHere" className="TypeHere"/>
            <button className="SendMessage">Send</button>
            <div className="R7"></div>
            <div className="GR8">
                
            </div>
            <div className="GR9"></div>
            <div className="GR10"></div>
        </div>
    );
}
export default DashboardUser;