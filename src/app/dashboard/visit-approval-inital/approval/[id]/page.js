'use client'
import Approved from '@/components/dashboard/visit-plan-approval/Approved'
import useGetData from "@/utils/useGetData"

const page = ({params}) => {
  const viewableData = useGetData(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_visit_entryforApproval&VisitPlanID=${params.id}`)
  return (
    <Approved viewableData={viewableData} id={params.id} />
  )
}

export default page