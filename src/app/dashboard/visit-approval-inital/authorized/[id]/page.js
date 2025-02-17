import Authorized from '@/components/dashboard/visit-plan-approval/Authorized'

const page = ({params}) => {
  return (
    <Authorized id={params.id} />
  )
}

export default page