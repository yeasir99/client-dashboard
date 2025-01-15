import PendingOrderList from "@/components/expenseApproval/PendingOrderList"
import CompleteOrderList from "@/components/expenseApproval/CompleteOrderList"
const page = () => {
  return (
    <div>
        <PendingOrderList />
        <CompleteOrderList />
    </div>
  )
}

export default page