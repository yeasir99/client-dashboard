import axios from 'axios';

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
      status: 0,
    };

    console.log(updatedImage);

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
