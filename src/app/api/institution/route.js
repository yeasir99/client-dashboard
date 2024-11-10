import axios from 'axios';

export const POST = async request => {
  try {
    const formData = await request.formData();

    console.log(formData);

    return Response.redirect(
      `${process.env.URL_DOMAIN}/dashboard/institution/add`
    );
  } catch (error) {
    return new Response('failed to add User', {
      status: 500,
    });
  }
};
