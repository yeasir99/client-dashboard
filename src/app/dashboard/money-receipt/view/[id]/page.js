'use client'
import {useState, useEffect} from 'react';
import axios from 'axios'

const page = ({params}) => {
    const [state, setState] = useState({
        status: 'pending',
        data: null
    })

    const getData = async id => {
        const res = await axios.get(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_moneyreceipt&MRID=${id}`)
    setState({
        status: 'idle',
        data: res.data
    })
    }

    useEffect(()=>{
        if(params.id){
            getData(params.id)
        }
    }, [params.id])

    if(state.status === 'pending'){
        return <div className="text-xl font-semibold text-center py-6">Loading...</div>
    }
  return (
    <div>
    <div className="max-w-xl bg-gray-200 mx-auto rounded-md p-3 my-5">
    <h1 className="text-center text-xl font-semibold py-4">Receipt Details</h1>
    <h1>ID: {state.data.receipt.MRID}</h1>
    <h1>Receipt Number: {state.data.receipt.MRNo}</h1>
    <h1>Date: {state.data.receipt.MRDate}</h1>
    <h1>Party Name: {state.data.receipt.PartyName}</h1>
    <h1>Amount Received: {state.data.receipt.AmountReceived}</h1>
        </div>
    </div>
  )
}

export default page