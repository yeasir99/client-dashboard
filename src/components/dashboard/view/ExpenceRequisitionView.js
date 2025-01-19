'use client';
import useGetData from '@/utils/useGetData';

const ExpenceRequisitionView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_BDExpReqAll&BDExpReqID=${id}`
  );

  const renderApprovalSection = (label, comments, by, date) => (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <h1 className="text-lg">{label} Comments:</h1>
        <h1>{comments || 'N/A'}</h1>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-lg">{label} By:</h1>
        <h1>{by || 'N/A'}</h1>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-lg">Date:</h1>
        <h1>{date || 'N/A'}</h1>
      </div>
    </div>
  );

  if (status === 'pending') {
    return (
      <div className="text-center text-xl font-semibold py-6">Loading...</div>
    );
  }

  return (
    <div>
      <div className="max-w-xl bg-gray-200 mx-auto rounded-md p-3 my-5">
        <h1>ID: {data.BDExpReq.BDExpReqID}</h1>
        <h1>Institution Type: {data.BDExpReq.InstitutionTypeName}</h1>
        <h1>Institution Name: {data.BDExpReq.InstitutionName}</h1>
        <h1>Total Amount: {data.BDExpReq.TotalAmount}</h1>
      </div>

      <div className="flex justify-center mt-5">
        <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
          <h1 className="text-center text-xl font-semibold mb-3">
            Comment details
          </h1>
          {data.BDExpReqApprovals.CanclledComments ? (
            <div className="mt-4">
              <h1 className="text-lg font-semibold">Cancellation Details</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Cancelled By:</h1>
                <h1>{data.BDExpReqApprovals.CancelledBy}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Date:</h1>
                <h1>{data.BDExpReqApprovals.CancelledDate}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Comments:</h1>
                <h1>{data.BDExpReqApprovals.CanclledComments || 'N/A'}</h1>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-center text-lg font-semibold mb-3">
                Approval Details
              </h1>
              {data.BDExpReqApprovals.CheckedComments &&
                renderApprovalSection(
                  'Checked',
                  data.BDExpReqApprovals.CheckedComments,
                  data.BDExpReqApprovals.CheckedBy,
                  data.BDExpReqApprovals.CheckedDate
                )}
              {data.BDExpReqApprovals.AuthComments &&
                renderApprovalSection(
                  'Authorized',
                  data.BDExpReqApprovals.AuthComments,
                  data.BDExpReqApprovals.AuthBy,
                  data.BDExpReqApprovals.AuthDate
                )}
              {data.BDExpReqApprovals.AppComments &&
                renderApprovalSection(
                  'Approved',
                  data.BDExpReqApprovals.AppComments,
                  data.BDExpReqApprovals.AppBy,
                  data.BDExpReqApprovals.AppDate
                )}
              {data.BDExpReqApprovals.RejectComments &&
                renderApprovalSection(
                  'Rejected',
                  data.BDExpReqApprovals.RejectComments,
                  data.BDExpReqApprovals.RejectBy,
                  data.BDExpReqApprovals.RejectDate
                )}
              {!data.BDExpReqApprovals.CheckedComments &&
                !data.BDExpReqApprovals.AuthComments &&
                !data.BDExpReqApprovals.AppComments && (
                  <div className="text-center">
                    No Approval Details Available
                  </div>
                )}
            </>
          )}
        </div>
      </div>

      <div className="overflow-x-scroll">
        <div className="inline-block max-w-full w-full pt-5">
          <div>
            <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr className="bg-text1 text-white">
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Teacher Name
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
                    Books Group
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Books Name
                  </th>
                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Total Student
                  </th>

                  <th
                    scope="col"
                    className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.BDExpReqDetails.length &&
                  data.BDExpReqDetails.map(item => (
                    <tr
                      className="border-b border-neutral-200 dark:border-white/10"
                      key={item.SL}
                    >
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.TeacherName}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.Designation}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.ContactPhone}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.BooksGroup}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.ProductName}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.StudentsCount}
                      </td>
                      <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                        {item.DonationAmount}
                      </td>
                    </tr>
                  ))}
                <tr className="border-b border-neutral-200 dark:border-white/10">
                  <td
                    className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"
                    colSpan="5"
                  ></td>
                  <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                    Total
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3 font-medium">
                    {data.BDExpReqDetails.length &&
                      data.BDExpReqDetails.reduce(
                        (accumulator, currentValue) =>
                          accumulator + Number(currentValue.DonationAmount),
                        0
                      )}
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

export default ExpenceRequisitionView;
