'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import convertDateFormat from '@/utils/convertDateFormat';
import formatAmountWithCommas from '@/utils/formatAmountWithCommas';
import useGetData from '@/utils/useGetData';

const page = ({ params }) => {
  const [formData, setFormData] = useState({
    SalesOrderID: '',
    SalesOrderNo: '',
    OrderDate: '',
    PartyName: '',
    orderDetails: [],
    DemandInfo: 'Approved by management',
    ReturnInfo: "Approved by management",
    AuthComments: null,
    AppComments: '',
    UserID: '',
  });
  const [viewableData, setViewableData] = useState({
    status: 'pending',
    data: null
  })

  const demandInfo = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersAutorizationMIS&SalesOrderID=27')
  const returnInfo = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesordersAutorizationMISReturn&SalesOrderID=158')

  const getData = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_order&SalesOrderID=${id}`
    );
    if (res.data.order) {
      setViewableData({
        status: 'idle',
        data: res.data
      })
      setFormData({
        ...formData,
        SalesOrderID: res.data.order.SalesOrderID,
        SalesOrderNo: res.data.order.SalesOrderNo,
        OrderDate: res.data.order.OrderDate,
        PartyName: res.data.order.PartyName,
        orderDetails: res.data.orderDetails.length ? res.data.orderDetails : [],
        UserID: res.data.order.UserID,
      });
    }
  };

  useEffect(() => {
    if (params.id) {
      getData(params.id);
    }
  }, [params]);


  const renderApprovalSection = (label, comments, by, date) => (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <h1 className="text-lg">Date:</h1>
        <h1>{date || 'N/A'}</h1>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-lg">{label} By:</h1>
        <h1>{by || 'N/A'}</h1>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-lg">{label} Status:</h1>
        <h1>{comments || 'N/A'}</h1>
      </div>
    </div>
  );

  const router = useRouter()

 
  const handleAuthorize = async () => {
    const dataWillBeSubmitted = {
      SalesOrderID: formData.SalesOrderID,
    DemandInfo: formData.DemandInfo,
    ReturnInfo: "Approved for 90 units due to stock limitations",
    AuthComments: null,
    AppComments: formData.AppComments,
    UserID: formData.UserID
    }
     const res = await axios.post('https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalDetails', dataWillBeSubmitted)
     router.push('/dashboard/sales-order-approval')
  }

  const handleReject = async () => {
    const dataWillBeSubmitted = {
      SalesOrderID: formData.SalesOrderID,
      RejectComments: formData.AppComments,
      UserID: formData.UserID,
    }
   const res = await axios.post('https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalRejected_Cancelled', dataWillBeSubmitted)
   router.push('/dashboard/sales-order-approval')
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">
          Sales Order - Approval
        </h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div>
        <div>
          <label
            htmlFor="SalesOrderNo"
            className="block text-sm font-bold mb-1"
          >
            Sale Order No:
          </label>
          <input
            type="text"
            id="SalesOrderNo"
            name="SalesOrderNo"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            readOnly
            value={formData.SalesOrderNo}
          />
        </div>
        <div>
          <label htmlFor="OrderDate" className="block text-sm font-bold mb-1">
            Order Date:
          </label>
          <input
            type="text"
            id="OrderDate"
            name="OrderDate"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            readOnly
            value={formData.OrderDate}
          />
        </div>
        <div>
          <label htmlFor="PartyName" className="block text-sm font-bold mb-1">
            Party Name:
          </label>
          <input
            type="text"
            id="PartyName"
            name="PartyName"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            readOnly
            value={formData.PartyName}
          />
        </div>
        <div>
          {formData.orderDetails.length > 0 && (
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
                            Financial Year
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Product Name
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Price
                          </th>

                          <th scope="col" className="px-6 py-4">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.orderDetails.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.SL}
                          >
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.FinancialYear}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.ProductName}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.Quantity}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {formatAmountWithCommas(Number(item.Price))}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                              {formatAmountWithCommas(Number(item.Price) * Number(item.Quantity))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {viewableData.data && <div className="flex justify-center mt-5">
        <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
          {viewableData.data.approvals.CanclledComments ? (
            <div className="mt-4">
              <h1 className="text-lg font-semibold">Cancellation Details</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Date:</h1>
                <h1>{viewableData.data.approvals.CancelledDate}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Cancelled By:</h1>
                <h1>{viewableData.data.approvals.CancelledBy}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg">Comments:</h1>
                <h1>{viewableData.data.approvals.CanclledComments || 'N/A'}</h1>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-center text-lg font-semibold mb-3">
              Approval Comments
              </h1>
              {viewableData.data.approvals.CheckedComments &&
                renderApprovalSection(
                  'Checked',
                  viewableData.data.approvals.CheckedComments,
                  viewableData.data.approvals.CheckedBy,
                  convertDateFormat(viewableData.data.approvals.CheckedDate.split(' ')[0])
                )}
              {viewableData.data.approvals.AuthComments &&
                renderApprovalSection(
                  'Authorized',
                  viewableData.data.approvals.AuthComments,
                  viewableData.data.approvals.AuthBy,
                  convertDateFormat(viewableData.data.approvals.AuthDate.split(' ')[0])
                )}
              {viewableData.data.approvals.RejectComments &&
                renderApprovalSection(
                  'Rejected',
                  viewableData.data.approvals.RejectComments,
                  viewableData.data.approvals.RejectBy,
                  convertDateFormat(viewableData.data.approvals.RejectDate.split(' ')[0])
                )}
              {viewableData.data.approvals.AppComments &&
                renderApprovalSection(
                  'Approved',
                  viewableData.data.approvals.AppComments,
                  viewableData.data.approvals.AppBy,
                  convertDateFormat(viewableData.data.approvals.AppDate.split(' ')[0])
                )}
              {!viewableData.data.approvals.CheckedComments &&
                !viewableData.data.approvals.AuthComments &&
                !viewableData.data.approvals.AppComments && (
                  <div className="text-center">
                    No Approval Details Available
                  </div>
                )}
            </>
          )}
        </div>
      </div>}
      <h1 className="text-xl font-semibold text-center py-4">Demand Info</h1>
{demandInfo.data.length > 0 && <div>
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
                            SL
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Product Name
                          </th>

                          <th scope="col" className="px-6 py-4">
                          Products Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {demandInfo.data.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.SL}
                          >
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.SL}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.ProductName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                              {item.ProductsValue}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
</div>}
<h1 className="text-xl font-semibold text-center py-4">Return Info</h1>
{returnInfo.data.length > 0 && <div>
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
                            SL
                          </th>
                          <th
                            scope="col"
                            className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                          >
                            Product Name
                          </th>
                          <th scope="col" className="px-6 py-4">
                          Products Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {returnInfo.data.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.SL}
                          >
                          <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.SL}
                            </td>
                            
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.ProductName}
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                              {item.ProductsValue}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
</div>}


        <div>
          <label
            htmlFor="AppComments"
            className="block text-sm font-bold mb-1"
          >
            Approved Comment:
          </label>
          <textarea
            type="text"
            id="AppComments"
            name="AppComments"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.AppComments}
            onChange={(e) =>{
              setFormData(prevData => ({
                ...prevData,
                AppComments: e.target.value
              }))
            }}
          />
        </div>
        <div className="flex justify-between py-3 px-1">
          <button className="bg-red-400 px-6 py-2 rounded-md text-white" onClick={handleReject}>
            Reject Order
          </button>
          <button className="bg-primary px-6 py-2 rounded-md text-white" onClick={handleAuthorize}>
            Approve
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
