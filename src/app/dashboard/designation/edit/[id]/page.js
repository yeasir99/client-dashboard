import Designation from '@/components/dashboard/edit/Designation';
const page = ({ params }) => {
  console.log(params);
  return <Designation id={params.id} />;
};

export default page;
