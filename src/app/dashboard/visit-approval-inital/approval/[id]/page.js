import Approved from '@/components/dashboard/visit-plan-approval/Approved'

const page = ({params}) => {
  return (
    <Approved id={params.id} />
  )
}

export default page