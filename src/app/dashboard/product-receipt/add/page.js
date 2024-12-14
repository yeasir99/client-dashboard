'use client';
import { useState, useEffect } from 'react';
import useGetData from '@/utils/useGetData';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';

const page = () => {
  const [formData, setFormData] = useState({
    ProductReceiptNo: '',
    ReceiptDate: new Date(),
    BindingPartyID: '',
    ChallanNumber: '',
    PrintEdition: '',
    FinancialYearID: '',
    ProductCategoryID: '',
    ProductID: '',
    Quantity: '',
    Rate: '',
    ProductionOrderQty: '',
    UserID: '',
    ChallanCopyPath: '',
  });

  const [booksName, setBooksName] = useState([]);

  const session = useSession();

  const { status, data } = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_bindingparties'
  );
  const fiscalYear = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_financialyear'
  );

  const booksGroups = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_bookscategorys'
  );

  const generateReceiptId = async () => {
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=generate_new_product_receipt_number'
    );
    setFormData({
      ...formData,
      ProductReceiptNo: res.data.NewProductReceiptNo,
    });
  };

  const getBooksNameById = async () => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_productcategorywise&Categoryid=${formData.ProductCategoryID}`
    );
    setBooksName(res.data);
  };

  useEffect(() => {
    generateReceiptId();
  }, []);

  useEffect(() => {
    if (formData.ProductCategoryID) {
      getBooksNameById();
    }
  }, [formData.ProductCategoryID]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const dataWillBeSubmitted = new FormData();

    for (const key in formData) {
      if (key === 'ChallanCopyPath' && formData[key]) {
        dataWillBeSubmitted.append(key, formData[key], formData[key].name);
      } else if (key === 'ReceiptDate') {
        dataWillBeSubmitted.append(
          key,
          formData[key].toISOString().split('T')[0]
        );
      } else if (key === 'UserID') {
        const id = session.data.user.id;
        dataWillBeSubmitted.append(key, id);
      } else {
        dataWillBeSubmitted.append(key, formData[key]);
      }
    }
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_preceipt',
      dataWillBeSubmitted
    );
    router.push('/dashboard/product-receipt');
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Product Receipt List</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <div className="max-w-2xl bg-gray-200 rounded-md px-4 py-4">
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
            htmlFor="PrintEdition"
            className="capitalize flex font-semibold text-md py-1"
          >
            Print:
          </label>
          <input
            type="text"
            id="PrintEdition"
            name="PrintEdition"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.PrintEdition}
            onChange={handleChange}
          />
          <div>
            <label
              className="capitalize flex font-semibold text-md py-1"
              htmlFor="FinancialYearID"
            >
              Financial Year:
            </label>

            <select
              id="FinancialYearID"
              name="FinancialYearID"
              className="w-full rounded-md py-[0.40rem]"
              value={formData.FinancialYearID}
              onChange={handleChange}
            >
              <option value="" disabled></option>
              {fiscalYear.data.length &&
                fiscalYear.data.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              className="capitalize flex font-semibold text-md py-1"
              htmlFor="ProductCategoryID"
            >
              Books Group:
            </label>

            <select
              name="ProductCategoryID"
              id="ProductCategoryID"
              className="w-full rounded-md py-[0.40rem]"
              value={formData.ProductCategoryID}
              onChange={handleChange}
            >
              <option value="" disabled={true}></option>
              {booksGroups.data.length &&
                booksGroups.data.map(item => (
                  <option value={item.ID} key={item.ID}>
                    {item.CategoryName}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              className="capitalize flex font-semibold text-md py-1"
              htmlFor="ProductID"
            >
              Books Name:
            </label>

            <select
              name="ProductID"
              id="ProductID"
              className="w-full rounded-md py-[0.40rem]"
              value={formData.ProductID}
              onChange={handleChange}
              disabled={formData.ProductCategoryID ? false : true}
            >
              <option value="" disabled={true}></option>
              {booksName.length &&
                booksName.map(item => (
                  <option value={item.ProductID} key={item.ProductID}>
                    {item.ProductName}
                  </option>
                ))}
            </select>
          </div>
          <label
            htmlFor="Quantity"
            className="capitalize flex font-semibold text-md py-1"
          >
            Quantity:
          </label>
          <input
            type="text"
            id="Quantity"
            name="Quantity"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.Quantity}
            onChange={handleChange}
          />
          <label
            htmlFor="Rate"
            className="capitalize flex font-semibold text-md py-1"
          >
            Rate:
          </label>
          <input
            type="text"
            id="Rate"
            name="Rate"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.Rate}
            onChange={handleChange}
          />
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

          <div>
            <label
              className="capitalize flex font-semibold text-md py-1"
              htmlFor="ChallanCopyPath"
            >
              Challan Copy Upload:
            </label>
            <div className="border-[1px] border-[#6b7280] p-1 rounded-md bg-white">
              <input
                id="ChallanCopyPath"
                type="file"
                name="ChallanCopyPath"
                className="w-full rounded-md mb-1"
                onChange={e => {
                  const file = e.target.files[0];
                  setFormData({ ...formData, ChallanCopyPath: file });
                }}
              />
            </div>
          </div>

          <label
            htmlFor="ProductionOrderQty"
            className="capitalize flex font-semibold text-md py-1"
          >
            Production Order Qty:
          </label>
          <input
            type="text"
            id="ProductionOrderQty"
            name="ProductionOrderQty"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.ProductionOrderQty}
            onChange={handleChange}
          />

          <div className="mt-5" type="submit">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save Receipt
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
