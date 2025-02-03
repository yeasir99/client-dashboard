'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import getCurrentDate from '@/utils/getCurrentDate';
import convertDateFormat from '@/utils/convertDateFormat';

const page = ({params}) => {
  const [formData, setFormData] = useState({
    ChallanNo: '',
    ChallanDate: getCurrentDate(),
    SalesOrderNo: '',
    SalesOrderID: '',
    UserID: '',
    SpecimenUserName: '',
    Details: [],
  });
  const [orderDetails, setOrderDetails] = useState(null);

  const getChalanNumber = async () => {
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=generate_new_Challan_number'
    );
    setFormData(prevData => ({
      ...prevData,
      ChallanNo: res.data.NewChallanNo,
    }));
  };

  const getOrderDetails = async id => {
    setOrderDetails(null);
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_orderforchallan&SalesOrderID=${id}`
    );
    setOrderDetails(res.data);
  };

  useEffect(() => {
    if (params.id) {
      getOrderDetails(params.id);
    }
  }, [params.id]);

  useEffect(() => {
    getChalanNumber();
  }, []);

  useEffect(() => {
    if (orderDetails) {
      setFormData(prevData => ({
        ...prevData,
        SalesOrderNo: orderDetails.order.SalesOrderNo,
        SalesOrderID: orderDetails.order.SalesOrderID,
        UserID: orderDetails.order.UserID,
        SpecimenUserName: orderDetails.order.SpecimenUserName,
        Details: orderDetails.orderDetails.map(item => ({
          SL: item.SL,
          FinancialYearID: item.FinancialYearID,
          ProductCategoryID: item.ProductCategoryID,
          CategoryName: item.CategoryName,
          ProductID: item.ProductID,
          ProductName: item.ProductName,
          OrderQty: item.Quantity,
          ChallanQty: '',
          AvailQty: item.AvailableQty,
        })),
      }));
    }
  }, [orderDetails]);

  const router = useRouter();

  const handleSubmit = async e =>{
    e.preventDefault()
    const dataWillbeSubmitted = {};
    dataWillbeSubmitted.ChallanNo = formData.ChallanNo;
    dataWillbeSubmitted.ChallanDate = formData.ChallanDate;
    dataWillbeSubmitted.SalesOrderID = formData.SalesOrderID;
    dataWillbeSubmitted.UserID = formData.UserID;
    dataWillbeSubmitted.Details = formData.Details.map(item => ({
      FinancialYearID: item.FinancialYearID,
      ProductCategoryID: item.ProductCategoryID,
      ProductID: item.ProductID,
      OrderQty: item.OrderQty,
      ChallanQty: Number(item.ChallanQty),
      AvailQty: item.AvailQty,
    }));

    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=Create_DeliveryChallanAll',
      dataWillbeSubmitted
    );
    router.push('/dashboard/delivery-challan');
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Add delivery challan</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="w-full bg-gray-200 rounded-md px-4 py-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="designation"
              className="capitalize flex font-semibold text-md py-1"
            >
              Challan No:
            </label>
            <input
              type="text"
              className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              value={formData.ChallanNo}
              readOnly
            />
            <div>
              <label className="capitalize flex font-semibold text-md py-1">
                Challan Date:
              </label>

              <input
              type="text"
              className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              value={convertDateFormat(formData.ChallanDate)}
              readOnly
            />
            </div>

            <div>
              <label className="capitalize flex font-semibold text-md py-1">
                Sales Order No:
              </label>

              <input
              type="text"
              className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              value={formData.SalesOrderNo}
              readOnly
            />
            </div>
            <label className="block text-sm font-bold mb-1">Speciman User Name:</label>
            <input
              type="text"
              className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
              value={formData.SpecimenUserName}
              readOnly
            />
          </div>
          {/* table Start */}
          <div className="flex flex-col">
            <h1 className="text-2xl capitalize mb-3">Product Details</h1>
            <div className="overflow-x-auto">
              <div className="inline-block max-w-full w-full pt-5">
                <div className="overflow-hidden">
                  <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
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
                          Order Qty
                        </th>
                        <th
                          scope="col"
                          className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                        >
                          Challan QTY.
                        </th>

                        <th scope="col" className="px-6 py-4">
                          Avail.QTY
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.Details.length ? (
                        formData.Details.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.SL}
                          >
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.FinancialYearID}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.CategoryName}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.ProductName}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.OrderQty}
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              <input
                                type="number"
                                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                                value={item.ChallanQty}
                                onChange={e => {
                                  setFormData(prevData => ({
                                    ...prevData,
                                    Details: prevData.Details.map(detail => {
                                      if (detail.SL === item.SL) {
                                        return {
                                          ...detail,
                                          ChallanQty: e.target.value,
                                        };
                                      } else {
                                        return detail;
                                      }
                                    }),
                                  }));
                                }}
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                              {item.AvailQty}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="border-b border-neutral-200 dark:border-white/10"></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md w-full">
              Save invoice
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
