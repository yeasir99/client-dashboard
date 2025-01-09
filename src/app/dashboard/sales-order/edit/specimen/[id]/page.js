import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SpecimanOrderEdit from '@/components/dashboard/edit/SpecimanOrderEdit';
const page = async ({params}) => {
    const session = await getServerSession(authOptions);
  return <SpecimanOrderEdit id={params.id} session={session} />;
}

export default page