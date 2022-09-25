import React from "react";
import './dashboardadmin.css'
import {useState, useEffect} from "react";
import { utils, getDefaultProvider, ethers } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import Child from "./chain-info/Child.json"
import { DAppProvider, useEthers, useContractFunction } from '@usedapp/core'


function DashboardAdmin(){

    const [presupuesto, setPresupuesto] = useState(0)

    const { activateBrowserWallet, account } = useEthers()
    const abi = new utils.Interface(Child["abi"])
    const auctionContract = new Contract('0x41Dc5c8de461b7dcaD5a0044C0F1F69Af4d90Ab1', abi, getDefaultProvider())

    const { state, send } = useContractFunction(auctionContract, 'supplyToPool', { transactionName: 'supplyToPool' })


    const close = () => {
        void send(utils.parseEther(String(20)))
    }




    return(
        <div>
            <p className="AdminTitle">Admin Dashboard</p>
            <div className="Ellipse14"></div>
            <div className="Ellipse15"></div>
            <p className="DT">Debtors</p>
            <div className="GR11"></div>
            <p className="RS">Register Supplier</p>
            <button className="RB">Register</button>
            <div className="GR12"></div>
            <p className="RM">Recieved Messages:</p>
            <button className="SB">Send Message</button>
            <div className="GR13"></div>
            <p className="PTS">Pay to Supplier</p>
            <button className="PayAll">Pay All</button>
            <div className="GR14"></div>
            <button onClick={close} className="PLIA">Provide Liquidity In Aave</button>


        </div>
    );
}
export default DashboardAdmin;