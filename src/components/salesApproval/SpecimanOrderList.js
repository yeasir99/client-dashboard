'use client'
import useGetData from "@/utils/useGetData"
import PendingList from "./PendingList"
import CompletedList from "./CompletedList"
import RejectedList from "./RejectedList"
import CencelledList from "./CencelledList"

const SpecimanOrderList = () => {
    const pendingData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersSpecemenApproval&UserID=501')
    const completedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersSpecemanComplete&UserID=501')
    const RejectedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersSpecemanReject&UserID=501')
    const CancelledData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersSpecemanCancelled&UserID=498')
  return (
    <>
        <PendingList pendingData={pendingData} type="speciman" />
        <CompletedList completedData={completedData} type="speciman" />
        <RejectedList RejectedData={RejectedData} type="speciman" />
        <CencelledList CancelledData={CancelledData} type="speciman" />
    </>
  )
}

export default SpecimanOrderList