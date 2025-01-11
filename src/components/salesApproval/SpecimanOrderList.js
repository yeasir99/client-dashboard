'use client'
import useGetData from "@/utils/useGetData"
import PendingList from "./PendingList"
import CompletedList from "./CompletedList"

const SpecimanOrderList = () => {
    const pendingData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersSpecemenApproval&UserID=501')
    const completedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersSpecemanCompleteRejectCancelled&UserID=501')
  return (
    <>
        <PendingList pendingData={pendingData} type="speciman" />
        <CompletedList completedData={completedData} type="speciman" />
    </>
  )
}

export default SpecimanOrderList