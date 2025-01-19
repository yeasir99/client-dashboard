'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const page = ({ params }) => {
  const [state, setState] = useState({
    status: 'pending',
    data: null,
  });

  const getData = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_moneyreceipt&MRID=${id}`
    );
    setState({
      status: 'idle',
      data: res.data,
    });
  };

  useEffect(() => {
    if (params.id) {
      getData(params.id);
    }
  }, [params.id]);

  if (state.status === 'pending') {
    return (
      <div className="text-xl font-semibold text-center py-6">Loading...</div>
    );
  }

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

  return (
    <>
      <div>
        <div className="max-w-xl bg-gray-200 mx-auto rounded-md p-3 my-5">
          <h1 className="text-center text-xl font-semibold py-4">
            Collection Details
          </h1>
          <h1>Receipt Number: {state.data.receipt.MRNo}</h1>
          <h1>Date: {state.data.receipt.MRDate}</h1>
          <h1>Party Name: {state.data.receipt.PartyName}</h1>
          <h1>Amount Received: {state.data.receipt.AmountReceived}</h1>
          <h1>Payment Method: {state.data.receipt.PaymentMethod}</h1>
          <h1>
            Payment Method Details: {state.data.receipt.PaymentMethodDetails}
          </h1>
          {state.data.receipt.PaymentMethodDetailsAcc && (
            <h1>
              Account Number: {state.data.receipt.PaymentMethodDetailsAcc}
            </h1>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
          <h1 className="text-center text-xl font-semibold mb-3">
            Comment details
          </h1>
          {state.data.Approvals.CanclledComments ? (
            <div className="mt-4">
              <h1 className="text-lg font-semibold">Cancellation Details</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Cancelled By:</h1>
                <h1>{state.data.Approvals.CancelledBy}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Date:</h1>
                <h1>{state.data.Approvals.CancelledDate}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Comments:</h1>
                <h1>{state.data.Approvals.CanclledComments || 'N/A'}</h1>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-center text-lg font-semibold mb-3">
                Approval Details
              </h1>
              {state.data.Approvals.CheckedComments &&
                renderApprovalSection(
                  'Checked',
                  state.data.Approvals.CheckedComments,
                  state.data.Approvals.CheckedBy,
                  state.data.Approvals.CheckedDate
                )}
              {state.data.Approvals.AuthComments &&
                renderApprovalSection(
                  'Authorized',
                  state.data.Approvals.AuthComments,
                  state.data.Approvals.AuthBy,
                  state.data.Approvals.AuthDate
                )}
              {state.data.Approvals.AppComments &&
                renderApprovalSection(
                  'Approved',
                  state.data.Approvals.AppComments,
                  state.data.Approvals.AppBy,
                  state.data.Approvals.AppDate
                )}
              {!state.data.Approvals.CheckedComments &&
                !state.data.Approvals.AuthComments &&
                !state.data.Approvals.AppComments && (
                  <div className="text-center">
                    No Approval Details Available
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
