'use client';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useGetData from '@/utils/useGetData';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import BookById from '@/components/dashboard/BookById';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ProductReceiptEdit = ({ id }) => {
  const [formData, setFormData] = useState({
    ProductReceiptNo: '',
    ReceiptDate: new Date(),
    BindingPartyID: '',
    ChallanNumber: '',
    UserID: '',
    ChallanCopyPath: '',
    orderDetails: [
      {
        id: uuidv4(),
        FinancialYearID: '',
        ProductCategoryID: '',
        ProductID: '',
        Quantity: '',
        Price: '',
        TotalPrice: 0,
      },
    ],
  });

  const [booksName, setBooksName] = useState([]);

  const orginalData = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_ppreceiptall&ProductReceiptID=${id}`
  );

  const { status, data } = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_bindingparties'
  );
  const fiscalYear = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_financialyear'
  );

  const booksGroups = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_bookscategorys'
  );

  const getBooksNameById = async () => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_productcategorywise&Categoryid=${formData.ProductCategoryID}`
    );
    setBooksName(res.data);
  };

  useEffect(() => {
    if (orginalData.data.success) {
      const { receipt, details } = orginalData.data;
      console.log(details);
      setFormData({
        ProductReceiptNo: receipt.ProductReceiptNo,
        ReceiptDate: receipt.ReceiptDate,
        BindingPartyID: receipt.BindingPartyID,
        BindingPartyName: receipt.BindingPartyName,
        ChallanNumber: receipt.ChallanNumber,
        UserID: receipt.UserID,
        orderDetails: details.length
          ? details.map(item => {
              return {
                id: item.SL,
                FinancialYearID: item.FinancialYearID,
                ProductCategoryID: item.ProductCategoryID,
                ProductID: item.ProductID,
                Quantity: item.ProductID,
                Price: item.Rate,
                TotalPrice: item.Total,
              };
            })
          : formData.orderDetails,
      });
    }
  }, [orginalData.data]);

  useEffect(() => {
    if (formData.ProductCategoryID) {
      getBooksNameById();
    }
  }, [formData.ProductCategoryID]);

  useEffect(() => {
    const total = formData.orderDetails.reduce(
      (sum, item) => sum + (Number(item.TotalPrice) || 0),
      0
    );

    setFormData(prevState => ({
      ...prevState,
      TotalAmount: total,
    }));
  }, [formData.orderDetails]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateOrderDetails = (event, itemId) => {
    setFormData({
      ...formData,
      orderDetails: formData.orderDetails.map(detail =>
        detail.id === itemId
          ? { ...detail, [event.target.name]: event.target.value }
          : detail
      ),
    });
  };

  const getPrice = async (item, { name, value }) => {
    try {
      const res = await axios.get(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_productrate&FinancialYearID=${item.FinancialYearID}&ProductID=${value}`
      );

      setFormData({
        ...formData,
        orderDetails: formData.orderDetails.map(detail =>
          detail.id === item.id
            ? {
                ...detail,
                [name]: value,
                Price: res.data.Rate ? res.data.Rate : '',
              }
            : detail
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderDetailBook = (event, item) => {
    const value = event.target.value;
    const name = event.target.name;

    if (value) {
      getPrice(item, { name, value });
    }
  };

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    const dataWillBeSubmitted = {};
    for (const key in formData) {
      if (key === 'orderDetails') {
        formData.orderDetails.forEach((item, index) => {
          dataWillBeSubmitted.append(
            `Details[${index}][FinancialYearID]`,
            item.FinancialYearID
          );
          dataWillBeSubmitted.append(
            `Details[${index}][ProductCategoryID]`,
            item.ProductCategoryID
          );
          dataWillBeSubmitted.append(
            `Details[${index}][ProductID]`,
            item.ProductID
          );
          dataWillBeSubmitted.append(
            `Details[${index}][Quantity]`,
            item.Quantity
          );
          dataWillBeSubmitted.append(`Details[${index}][Rate]`, item.Price);
        });
      } else {
        dataWillBeSubmitted[key] = formData[key];
      }
    }
    console.log(formData);
    console.log(dataWillBeSubmitted);
    const res = await axios.put(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=update_ppreceiptall&ProductReceiptID=${id}`,
      dataWillBeSubmitted
    );

    router.push('/dashboard/product-receipt');
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Update Product Receipt</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="bg-gray-200 rounded-md px-4 py-4">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="ProductReceiptNo"
            className="block text-md font-bold mb-1"
          >
            Receipt Ref No:
          </label>
          <input
            type="text"
            id="ProductReceiptNo"
            name="ProductReceiptNo"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            readOnly
            value={formData.ProductReceiptNo}
          />
          <div className="w-full">
            <label className="capitalize flex font-semibold text-md py-1">
              Receipt Date:
            </label>

            <DatePicker
              selected={formData.ReceiptDate}
              onChange={date =>
                setFormData({
                  ...formData,
                  ReceiptDate: date,
                })
              }
              className="rounded-md"
            />
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Binding Party Name:
            </label>

            <select
              name="BindingPartyID"
              className="w-full rounded-md py-[0.40rem]"
              onChange={handleChange}
              value={formData.BindingPartyID}
            >
              <option value="" disabled={true}></option>
              {data.length &&
                data.map(item => (
                  <option value={item.BindingPartyID} key={item.BindingPartyID}>
                    {item.PartyName}
                  </option>
                ))}
            </select>
          </div>

          <label
            htmlFor="ChallanNumber"
            className="capitalize flex font-semibold text-md py-1"
          >
            Challan Number:
          </label>
          <input
            type="text"
            id="ChallanNumber"
            name="ChallanNumber"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.ChallanNumber}
            onChange={handleChange}
          />

          <div className="flex flex-col">
            {/* table Start */}
            <h2 className="text-xl font-semibold my-2 capitalize">
              add Product details
            </h2>
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
                          Qty
                        </th>
                        <th
                          scope="col"
                          className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                        >
                          Price
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
                      {formData.orderDetails.length &&
                        formData.orderDetails.map(item => (
                          <tr
                            className="border-b border-neutral-200 dark:border-white/10"
                            key={item.id}
                          >
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              <select
                                id="FinancialYearID"
                                name="FinancialYearID"
                                className="w-full rounded-md py-[0.40rem]"
                                value={item.FinancialYearID}
                                onChange={event =>
                                  updateOrderDetails(event, item.id)
                                }
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
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              <select
                                name="ProductCategoryID"
                                id="ProductCategoryID"
                                className="w-full rounded-md py-[0.40rem]"
                                value={item.ProductCategoryID}
                                onChange={event =>
                                  updateOrderDetails(event, item.id)
                                }
                              >
                                <option value="" disabled={true}></option>
                                {booksGroups.data.length &&
                                  booksGroups.data.map(item => (
                                    <option value={item.ID} key={item.ID}>
                                      {item.CategoryName}
                                    </option>
                                  ))}
                              </select>
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              <BookById
                                name="ProductID"
                                item={item}
                                update={updateOrderDetailBook}
                              />
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              <input
                                type="text"
                                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                                name="Quantity"
                                onChange={event =>
                                  setFormData({
                                    ...formData,
                                    orderDetails: formData.orderDetails.map(
                                      detail =>
                                        detail.id === item.id
                                          ? {
                                              ...detail,
                                              [event.target.name]:
                                                event.target.value,
                                            }
                                          : detail
                                    ),
                                  })
                                }
                                value={item.Quantity}
                                required
                              />
                            </td>
                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              <input
                                type="text"
                                className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                                name="Price"
                                onChange={event =>
                                  setFormData({
                                    ...formData,
                                    orderDetails: formData.orderDetails.map(
                                      detail =>
                                        detail.id === item.id
                                          ? {
                                              ...detail,
                                              [event.target.name]:
                                                event.target.value,
                                              TotalPrice:
                                                Number(event.target.value) *
                                                Number(item.Quantity),
                                            }
                                          : detail
                                    ),
                                  })
                                }
                                value={item.Price}
                                required
                              />
                            </td>

                            <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                              {item.Quantity
                                ? Number(item.Price) * Number(item.Quantity)
                                : Number(item.Price)}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex justify-center items-end h-full gap-3">
                              <AiOutlineCloseCircle
                                className="text-4xl text-red-500 cursor-pointer"
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    orderDetails: formData.orderDetails.filter(
                                      info => info.id !== item.id
                                    ),
                                  });
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      <tr className="border-b border-neutral-200 dark:border-white/10">
                        <td
                          className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10"
                          colSpan="4"
                        ></td>
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          Total
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                          {formData.TotalAmount}
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium "
                          colSpan="7"
                        >
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="bg-green-300 text-md rounded-md px-4 py-2"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  orderDetails: [
                                    ...formData.orderDetails,
                                    {
                                      id: uuidv4(),
                                      FinancialYearID: '',
                                      ProductCategoryID: '',
                                      ProductID: '',
                                      Quantity: '',
                                      Price: '',
                                    },
                                  ],
                                });
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

          <div className="mt-5" type="submit">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Update Receipt
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductReceiptEdit;
