import axios from 'axios';

export const POST = async request => {
  try {
    const formData = await request.formData();

    const image = formData.get('InstitutionScanImagePath');
    console.log(image);

    console.log(formData);

    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_institution',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log(res);

    // {
    //   "institutionTypeID": 1,
    //   "institutionName": "Dhaka High School",
    //   "TotalStudents": 1500,
    //   "ContactPersonName": "Rahim Uddin",
    //   "Designation": "Principal",
    //   "ContactPhone": "01712345678",
    //   "Address": "123 Dhaka Road",
    //   "RegionID": 1,
    //   "InstitutionScanImagePath": "/images/institution1.jpg",
    //   "details": [
    //     {
    //       "TeacherName": "Nur Islam",
    //       "Designation": "Math Teacher",
    //       "ContactPhone": "01712345678",
    //       "sndClassID": 1,
    //       "sndSubjectID": 1
    //     },
    //     {
    //       "TeacherName": "Liza Akter",
    //       "Designation": "English Teacher",
    //       "ContactPhone": "01712345679",
    //       "sndClassID": 1,
    //       "sndSubjectID": 2
    //     }
    //   ]
    // }

    return Response.redirect(`${process.env.URL_DOMAIN}/dashboard/institution`);
  } catch (error) {
    return new Response('failed to add User', {
      status: 500,
    });
  }
};
