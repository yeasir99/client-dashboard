'use client'
import useGetData from "@/utils/useGetData"
import PendingList from "./PendingList"
import CompletedList from "./CompletedList"

const SalesOrderList = () => {
    const pendingData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersApproval&UserID=501')
    const completedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersCompleteRejectCancelled&UserID=498')
  return (
    <>
        <PendingList pendingData={pendingData} type="sales" />
        <CompletedList completedData={completedData} type="sales" />
    </>
  )
}

export default SalesOrderList