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

    const datawillBeSend = new FormData();

    datawillBeSend.append('EmployeeID', employeeId);
    datawillBeSend.append('EmpName', employeeName);
    datawillBeSend.append('DesignationID', dasignationRole);
    datawillBeSend.append('Username', userName);
    datawillBeSend.append('Password', password);
    datawillBeSend.append('Email', email);
    datawillBeSend.append('Phone', phone);
    datawillBeSend.append('Address', address);
    datawillBeSend.append('ReportingToUserID', reportingTo);
    datawillBeSend.append('Status', 0);
    datawillBeSend.append('Userpicture', updatedImage);

    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndUser',
      datawillBeSend,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log(res);

    return Response.redirect(`${process.env.URL_DOMAIN}`);
  } catch (error) {
    return new Response('failed to add User', {
      status: 500,
    });
  }
};
