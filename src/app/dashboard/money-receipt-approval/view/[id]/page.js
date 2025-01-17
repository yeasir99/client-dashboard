'use client'
import axios from "axios"
import { useState, useEffect } from "react"
import ReceiptSingleView from "@/components/moneyApproval/ReceiptSingleView"

const page = ({params}) => {
    const [viewableData, setViewableData] = useState({
        status: 'pending',
        data: null
    })

    console.log(viewableData)

const getData = async id => {
    const res = await axios.get(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_moneyreceipt&MRID=${id}`)
setViewableData({
    status: 'idle',
    data: res.data
})
}

useEffect(()=>{
if(params.id){
    getData(params.id)
}
}, [params.id])

  return (
    <ReceiptSingleView viewableData={viewableData} /> 
  )
}

export default page