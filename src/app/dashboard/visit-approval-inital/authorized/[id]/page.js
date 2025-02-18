'use client'
import Authorized from '@/components/dashboard/visit-plan-approval/Authorized'
import useGetData from "@/utils/useGetData"

const page = ({params}) => {
  const viewableData = useGetData(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_visit_entryforApproval&VisitPlanID=${params.id}`)
  return (
    <Authorized viewableData={viewableData} id={params.id} />
  )
}

export default page