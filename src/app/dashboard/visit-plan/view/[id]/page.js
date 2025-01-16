'use client'
import axios from 'axios'
import {useState, useEffect} from 'react'

const page = ({params}) => {
    const [visitData, setVisitData] = useState({
        status: 'pending',
        data: null
    })

    console.log(visitData)

    const getData = async id =>{
        const res = await axios.get(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_visit_plan&VisitPlanID=${id}`)
        console.log(res)
        setVisitData({
            status: 'idle',
            data: res.data?.VisitPlan ? res.data.VisitPlan : null
        })
    }

    useEffect(()=>{
        if(params.id){
            getData(params.id)
        }
    }, [params.id])
    if(visitData.status === 'pending'){
        return <div className='text-xl font-semibold text-center py-6'>Loading...</div>
    }
    if(visitData.data === null){
        return <div className='text-xl font-semibold text-center py-6'>No Data To Display</div> 
    }
  return (
    <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Visit Plan Information
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Id:</h1>
          <h1>{visitData.data.VisitPlanID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Visit Plan No:</h1>
          <h1>{visitData.data.VisitPlanNo}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Purpose Name:</h1>
          <h1>{visitData.data.PurposeName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Visit User Name:</h1>
          <h1>{visitData.data.VisitUserName}</h1>
        </div>
      </div>
    </div>
  )
}

export default page