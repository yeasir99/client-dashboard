import axios from 'axios';
import cloudinary from '../../../../config/cloudinary';

export const POST = async request => {
  try {
    const formData = await request.formData();
    const employeeId = formData.get('employeeId');
    const employeeName = formData.get('employeeName');
    const dasignationRole = formData.get('dasignationRole');
    const userName = formData.get('userName');
    const password = formData.get('password');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const reportingTo = formData.get('reportingTo');
    const image = formData.get('image');
    const status = formData.get('status');

    const imageName = image.name.split('.');
    const imageType = imageName[imageName.length - 1];
    const updatedImage = new File([image], `${employeeId}.${imageType}`, {
      type: image.type,
    });

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
      Userpicture: updatedImage,
      status: Boolean(Number(status)),
    };

    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndUser',
      newUser
    );

    console.log(res);

    return Response.redirect(
      `${process.env.URL_DOMAIN}/dashboard/user-employee`
    );
  } catch (error) {
    return new Response('failed to add User', {
      status: 500,
    });
  }
};
