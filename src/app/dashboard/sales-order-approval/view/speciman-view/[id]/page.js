'use client'
import ViewSingle from "@/components/salesApproval/ViewSingle"
import {useState, useEffect} from 'react'
import axios from "axios"

const page = ({params}) => {
    const [viewableData, setViewableData] = useState({
        status: 'pending',
        data: null
    })

    console.log(viewableData)
   const getData = async id => {
const res = await axios.get(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_order&SalesOrderID=${id}`)
setViewableData({
    status: 'idle',
    data: res.data.order ? res.data : null
})
   }

useEffect(() => {
    if(params.id){
        getData(params.id)
    }
}, [params])
    return (
    <ViewSingle viewableData={viewableData} />
  )
}

export default page