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
    const status = formData.get('status');

    let updatedImage;
    if (image.size) {
      const imageName = image.name.split('.');
      const imageType = imageName[imageName.length - 1];
      updatedImage = new File([image], `${employeeId}.${imageType}`, {
        type: image.type,
      });
    }

    let newUser = {
      EmployeeID: employeeId,
      EmpName: employeeName,
      DesignationID: dasignationRole,
      Username: userName,
      Email: email,
      Phone: phone,
      Address: address,
      ReportingToUserID: reportingTo,
      status: Boolean(Number(status)),
    };
    if (updatedImage) {
      newUser.Userpicture = updatedImage;
    }
    if (password) {
      newUser.Password = password;
    }
    const res = await axios.put(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=update_sndUser&UserID=${employeeId}`,
      newUser
    );

    return Response.redirect(
      `${process.env.URL_DOMAIN}/dashboard/user-employee`
    );
  } catch (error) {
    return new Response('failed to Update User', {
      status: 500,
    });
  }
};
