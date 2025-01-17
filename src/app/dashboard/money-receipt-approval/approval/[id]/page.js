'use client'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Approval from '@/components/moneyApproval/Approval'

const page = ({params}) => {
    const [viewableData, setViewableData] = useState({
        status: 'pending',
        data: null
    })
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
    <Approval viewableData={viewableData} />
  )
}

export default page 