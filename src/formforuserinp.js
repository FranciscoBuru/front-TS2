import React from "react";
import './formuserinp.css';
import {useState, useEffect} from "react";
import { utils, getDefaultProvider } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import Child from "./chain-info/Child.json"
import { DAppProvider, useEthers, useContractFunction } from '@usedapp/core'

function FormUserInp() {
    const[name,setName]=useState('')
    const[NooP,setNoop]=useState('')
    const[cont,setCont]=useState('')
    function getCont(val){
        setCont(val.target.value)
    }
    function getNoop(val){
        setNoop(val.target.value)
    }
    function getName(val)
    {
        setName(val.target.value)

    }



    const { activateBrowserWallet, account } = useEthers()
    const abi = new utils.Interface(Child["abi"])
    const auctionContract = new Contract('0x41Dc5c8de461b7dcaD5a0044C0F1F69Af4d90Ab1', abi, getDefaultProvider())

    const { state, send } = useContractFunction(auctionContract, 'addUnit', { transactionName: 'addUnit' })


    const close = () => {
        void send(NooP, name, '0x41Dc5c8de461b7dcaD5a0044C0F1F69Af4d90Ab1')
    }




    return (
        <div>
             
            
            <div className="ForNo">
               <div className="ForNoText"> <label htmlFor="Noofprop">Number of property</label></div>
                <input type="text" value={NooP} placeholder="Property number" onChange={getNoop} name="NoofP" id="NoofP" className="ForNoInput"/>
            </div>
            <div className="ForName">
                <div className="ForNameText"><label htmlFor="Name">Name</label></div>
                <input type="text" value={name} placeholder="name" onChange={getName} name="Name" id="Name" className="ForNameInput"/>
            </div>
            <div className="ForAmount">
            <div className="FNT"><label htmlFor="Name">Community address</label></div>
                <input value={cont} onChange={getCont} placeholder="Community address `0xAc2...`" type="text" name="Amount" id="Amount" className="ForAmountInput"/>
            </div>
            <div>
                <button onClick={close} className="RegisterProperty">Register Property</button>
            </div>

        </div>
    );

}
export default FormUserInp;