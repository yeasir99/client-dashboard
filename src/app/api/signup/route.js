import axios from 'axios';
import cloudinary from '../../../../config/cloudinary';

export const POST = async request => {
  try {
    const formData = await request.formData();
    const employeeId = formData.get('employeeId');
    const employeeName = formData.get('employeeName');
    const dasignationRole = formData.get('dasignationRole');
    const userId = formData.get('userId');
    const userName = formData.get('userName');
    const password = formData.get('password');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const reportingTo = formData.get('reportingTo');
    const image = formData.get('image');
    const status = formData.get('status');

    //upload image to cloudinary
    const imageBuffer = await image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);
    const imageBase64 = imageData.toString('base64');

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: 'dlink',
      }
    );
    let newUser = {
      EmployeeID: employeeId,
      EmpName: employeeName,
      DesignationID: dasignationRole,
      Username: userName,
      Password: password,
      Email: email,
      Phone: phone,
      Address: address,
      ReportingToUserID: reportingTo,
      Status: status,
      userpicture: result.secure_url,
    };

    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndUser',
      newUser
    );

    return Response.redirect(`${process.env.URL_DOMAIN}`);
  } catch (error) {
    return new Response('failed to add User', {
      status: 500,
    });
  }
};
