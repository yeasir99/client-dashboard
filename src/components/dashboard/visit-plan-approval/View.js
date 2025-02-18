'use client'
import useGetData from "@/utils/useGetData"
import PlanInfo from './PlanInfo';
import TeachersDetails from './TeachersDetails';
import DisplayTADA from './DisplayTADA';
import Comments from './Comments';

const View = ({id}) => {
  const viewableData = useGetData(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_visit_entryforApproval&VisitPlanID=${id}`)
  if(viewableData.status === 'pending'){
    return <div className="text-xl font-semibold text-center py-6">Loading...</div>
  }
  return (
    <>
      {viewableData.data?.VisitPlan && <PlanInfo VisitPlan={viewableData.data.VisitPlan} />}
    
    {viewableData.data?.Details && <div>
      {viewableData.data.Details.length > 0 ? <TeachersDetails teachersInfo={viewableData.data.Details} PurposeID={viewableData.data.VisitPlan.PurposeID} /> : <div className='text-xl font-semibold text-center py-3'>No Teachers Details Found</div>}
    </div>}
    {viewableData.data?.TADADetails && <div>
      {viewableData.data.TADADetails.length > 0 ? <DisplayTADA tadaDetails={viewableData.data.TADADetails} /> : <div className='text-xl font-semibold text-center py-3'>No TA/DA Details Found</div>}
    </div>}
    {viewableData.data?.visitApprovalsPlan && <Comments Approvals={viewableData.data.visitApprovalsPlan} />}
    </>
  )
}

export default View