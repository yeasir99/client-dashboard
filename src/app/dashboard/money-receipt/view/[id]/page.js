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
    <>

<div>
    <div className="max-w-xl bg-gray-200 mx-auto rounded-md p-3 my-5">
    <h1 className="text-center text-xl font-semibold py-4">Receipt Details</h1>
    <h1>ID: {state.data.receipt.MRID}</h1>
    <h1>Receipt Number: {state.data.receipt.MRNo}</h1>
    <h1>Date: {state.data.receipt.MRDate}</h1>
    <h1>Party Name: {state.data.receipt.PartyName}</h1>
    <h1>Amount Received: {state.data.receipt.AmountReceived}</h1>
    <h1>Payment Method: {state.data.receipt.PaymentMethod}</h1>
        </div>
    </div>

        <div className="flex justify-center mt-5">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Comment details
        </h1>
        {state.data.Approvals.CheckedComments ? <div>
            <div className="flex items-center gap-2">
          <h1 className="text-lg">Checked Comments:</h1>
          <h1>{state.data.Approvals.CheckedComments}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Checked By:</h1>
          <h1>{state.data.Approvals.CheckedBy}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Date:</h1>
          <h1>{state.data.Approvals.CheckedDate}</h1>
        </div>
        {state.data.Approvals.AuthComments ? <div>
            <div className="flex items-center gap-2">
          <h1 className="text-lg">Authorized Comments:</h1>
          <h1>{state.data.Approvals.AuthComments}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Authorized By:</h1>
          <h1>{state.data.Approvals.AuthBy}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Date:</h1>
          <h1>{state.data.Approvals.AuthDate}</h1>
        </div>
        {state.data.Approvals.AppComments ? <div>
            <div className="flex items-center gap-2">
          <h1 className="text-lg">Approved Comments:</h1>
          <h1>{state.data.Approvals.AuthComments}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Approved By:</h1>
          <h1>{state.data.Approvals.AuthBy}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Date:</h1>
          <h1>{state.data.Approvals.AuthDate}</h1>
        </div>
        </div> : <div>Process Is Not Approved Yet</div> }
        </div> : <div>Process Is Not Authorized Yet</div> }
        </div> : <div>Approval Process Is Still In Unchecked</div> }
      </div>
    </div>
    </>
    
  )
}

export default page