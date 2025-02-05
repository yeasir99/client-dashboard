'use client'
import useGetData from "@/utils/useGetData"
import PendingList from "./PendingList"
import CompletedList from "./CompletedList"
import RejectedList from "./RejectedList"
import CencelledList from "./CencelledList"

const SalesOrderList = () => {
    const pendingData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersApproval&UserID=501')
    const completedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersComplete&UserID=501')
    const RejectedData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersReject&UserID=501')
    const CancelledData = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersCancelled&UserID=501')
  return (
    <>
        <PendingList pendingData={pendingData} type="sales" />
        <CompletedList completedData={completedData} type="sales" />
        <RejectedList RejectedData={RejectedData} type="sales" />
        <CencelledList CancelledData={CancelledData} type="sales"  />
    </>
  )
}

export default SalesOrderList