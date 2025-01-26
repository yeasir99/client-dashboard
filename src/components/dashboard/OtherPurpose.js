import useGetData from '@/utils/useGetData';
import { useState, useEffect } from 'react';
import BookByIdV2 from './BookGroupIdV2';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const OtherPurpose = ({ otherPurpose, setOtherPurpose, InstitutionID }) => {
  const teachersData = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_institutionTeacher&InstitutionID=${InstitutionID}`
  );
  const fiscalYear = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_financialyear'
  );
  const bookGroups = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_bookscategorys'
  );
  return (
    <div className="flex flex-col">
      <div>
        <div className="inline-block max-w-full w-full pt-5">
          <div className="overflow-x-scroll">
            <table className="max-w-full w-full overflow-x-scroll border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="bg-text1 text-white">
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Teacher_Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Designation
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Mobile
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Financial_Year
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Books_Group
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Books_Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Student Count
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Total
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {otherPurpose.length &&
                  otherPurpose.map(item => (
                    <tr
                      className="border-b border-neutral-200 dark:border-white/10"
                      key={item.id}
                    >
                      <td className="whitespace-nowrap border-e border-neutral-200 px-2 py-4 font-medium dark:border-white/10">
                        <select
                          id="TeacherName"
                          name="TeacherName"
                          className="w-full rounded-md py-[0.40rem]"
                          value={item.TeacherName}
                          onChange={event => {
                            // const updateTeachersData = (tech, details) => {
                            //   const selectedTeacher = tech.filter(
                            //     item => item.TeacherName == event.target.value
                            //   );
                            //   if (selectedTeacher.length) {
                            //     return {
                            //       ...details,
                            //       TeacherName: selectedTeacher[0].TeacherName,
                            //       Designation: selectedTeacher[0].Designation,
                            //       ContactPhone: selectedTeacher[0].ContactPhone,
                            //     };
                            //   }
                            //   return {
                            //     ...details,
                            //   };
                            // };
                            // setFormData({
                            //   ...formData,
                            //   BDExpReqDetails: formData.BDExpReqDetails.map(
                            //     detail =>
                            //       detail.id === item.id
                            //         ? updateTeachersData(teachers, detail)
                            //         : detail
                            //   ),
                            // });
                          }}
                        >
                          <option value="" disabled></option>
                          {teachersData.data.length &&
                            teachersData.data.map(teach => (
                              <option
                                value={teach.TeacherName}
                                key={teach.InstitutionDetailsID}
                              >
                                {teach.TeacherName}
                              </option>
                            ))}
                        </select>
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.Designation}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.ContactPhone}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-1 py-4 font-medium dark:border-white/10">
                        <select
                          id="FinancialYearID"
                          name="FinancialYearID"
                          className="w-full rounded-md py-[0.40rem]"
                          value={item.FinancialYearID}
                          onChange={event => {
                            // updateOrderDetails(event, item.id)
                          }}
                        >
                          <option value="" disabled></option>
                          {fiscalYear.data.length &&
                            fiscalYear.data.map(item => (
                              <option value={item.id} key={item.id}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-1 py-4 font-medium dark:border-white/10">
                        <select
                          name="BooksGroupID"
                          id="ProductCategoryID"
                          className="w-full rounded-md py-[0.40rem]"
                          value={item.BooksGroupID}
                          onChange={event => {
                            // updateOrderDetails(event, item.id)
                          }}
                        >
                          <option value="" disabled={true}></option>
                          {bookGroups.data.length &&
                            bookGroups.data.map(item => (
                              <option value={item.ID} key={item.ID}>
                                {item.CategoryName}
                              </option>
                            ))}
                        </select>
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-1 py-4 font-medium dark:border-white/10">
                        <BookByIdV2
                          name="ProductID"
                          item={item}
                          //   update={updateOrderDetails}
                        />
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-1 py-4 font-medium dark:border-white/10">
                        <input
                          type="text"
                          name="StudentsCount"
                          className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                          onChange={event => {
                            // updateOrderDetails(event, item.id);
                          }}
                          value={item.StudentsCount}
                        />
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-1 py-4 font-medium dark:border-white/10">
                        <input
                          type="number"
                          id="Total"
                          name="Total"
                          className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                          onChange={event => {
                            // updateOrderDetails(event, item.id);
                          }}
                          value={item.Total}
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center items-end h-full gap-3">
                        <AiOutlineCloseCircle
                          className="text-4xl text-red-500 cursor-pointer"
                          onClick={() => {
                            // setFormData({
                            //   ...formData,
                            //   BDExpReqDetails: formData.BDExpReqDetails.filter(
                            //     info => info.id !== item.id
                            //   ),
                            // });
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                {/* <tr className="border-b border-neutral-200 dark:border-white/10">
                  <td
                    className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"
                    colSpan="6"
                  ></td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                    Total
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                    {formData.TotalAmount}
                  </td>
                </tr> */}
                <tr>
                  <td
                    className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium "
                    colSpan="9"
                  >
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-green-300 text-md rounded-md px-4 py-2"
                        onClick={() => {
                          //   setFormData({
                          //     ...formData,
                          //     BDExpReqDetails: [
                          //       ...formData.BDExpReqDetails,
                          //       {
                          //         id: uuidv4(),
                          //         TeacherName: '',
                          //         Designation: '',
                          //         ContactPhone: '',
                          //         BooksGroupID: '',
                          //         ProductID: '',
                          //         StudentsCount: '',
                          //         DonationAmount: '',
                          //         FinancialYearID: '',
                          //         Total: '',
                          //       },
                          //     ],
                          //   });
                        }}
                      >
                        Add New Row
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPurpose;
