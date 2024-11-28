import axios from 'axios';

export const POST = async request => {
  try {
    const formData = await request.formData();
    console.log(formData);

    // const res = await axios.post(
    //   'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndUser',
    //   newUser
    // );

    return Response.redirect(`${process.env.URL_DOMAIN}`);
  } catch (error) {
    return new Response('failed to add User', {
      status: 500,
    });
  }
};
