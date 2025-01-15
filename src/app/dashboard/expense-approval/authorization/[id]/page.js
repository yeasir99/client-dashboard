'use client'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Authorized from '@/components/expenseApproval/Authorized'

const page = ({params}) => {
    const [viewableData, setViewableData] = useState({
        status: 'pending',
        data: null
    })
    const getData = async id => {
        const res = await axios.get(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_BDExpReqAll&BDExpReqID=${id}`)
        setViewableData({
            status: 'idle',
            data: res.data?.BDExpReq ? res.data : null
        })
    }
    useEffect(()=>{
if(params.id){
    getData(params.id)
}
    }, [params.id])
return <Authorized viewableData={viewableData} />
}

export default page