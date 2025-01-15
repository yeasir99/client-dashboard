import PendingOrderList from "@/components/moneyApproval/PendingOrderList"
import CompleteOrderList from "@/components/moneyApproval/CompleteOrderList"

const page = () => {
  return (
    <div>
    <PendingOrderList />
    <CompleteOrderList />
    </div>
  )
}

export default page