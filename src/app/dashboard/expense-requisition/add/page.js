'use client';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useGetData from '@/utils/useGetData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const page = () => {
  const [formData, setFormData] = useState({
    BDExpReqNo: '',
    BDExpUserID: '',
    BDExpReqDate: new Date().toISOString().split('T')[0],
    InstitutionTypeID: '',
    InstitutionID: '',
    TotalAmount: '',
    UserID: '',
    BDExpReqDetails: [
      {
        id: uuidv4(),
        TeacherName: '',
        Designation: '',
        ContactPhone: '',
        BooksGroupID: '',
        ProductID: '',
        StudentsCount: '',
        DonationAmount: '',
      },
    ],
  });

  const [intName, setIntName] = useState([]);

  console.log(formData);

  const getBDExpReqNo = async () => {
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=generate_new_BDExpReq_number'
    );
    if (res.data.newBDExpReqNo) {
      setFormData({
        ...formData,
        BDExpReqNo: res.data.newBDExpReqNo,
      });
    }
  };

  useEffect(() => {
    getBDExpReqNo();
  }, []);

  const getInstutionName = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_institutionName&InstitutionTypeID=${id}`
    );
    if (res.data.length) {
      setIntName(res.data);
    }
  };

  useEffect(() => {
    if (formData.InstitutionTypeID) {
      getInstutionName(formData.InstitutionTypeID);
    }
  }, [formData.InstitutionTypeID]);

  const institution = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_institutiontypes'
  );

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">
          Add Business Development Expense Requisition
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="BDExpReqNo" className="block text-sm font-bold mb-1">
          Sale Order No:
        </label>
        <input
          type="text"
          id="BDExpReqNo"
          name="BDExpReqNo"
          className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          readOnly
          value={formData.BDExpReqNo}
        />
        <div className="w-full">
          <label className="capitalize flex font-semibold text-md py-1">
            Receipt Date:
          </label>

          <DatePicker
            selected={formData.BDExpReqDate}
            onChange={date =>
              setFormData({
                ...formData,
                BDExpReqDate: date.toISOString().split('T')[0],
              })
            }
            className="rounded-md"
          />
        </div>

        <div>
          <label className="capitalize flex font-semibold text-md py-1">
            Institution Type:
          </label>

          <select
            name="InstitutionTypeID"
            className="w-full rounded-md"
            defaultValue=""
            onChange={handleChange}
            value={formData.InstitutionTypeID}
            required
          >
            <option value="" disabled={true} selected></option>
            {institution.data.length &&
              institution.data.map(item => (
                <option value={item.ID} key={item.ID}>
                  {item.CategoryName}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="capitalize flex font-semibold text-md py-1">
            Institution Name:
          </label>

          <select
            name="InstitutionID"
            className="w-full rounded-md"
            defaultValue=""
            onChange={handleChange}
            value={formData.InstitutionID}
            required
            disabled={formData.InstitutionTypeID ? false : true}
          >
            <option value="" disabled={true} selected></option>
            {intName.length &&
              intName.map(item => (
                <option value={item.InstitutionID} key={item.InstitutionID}>
                  {item.InstitutionName}
                </option>
              ))}
          </select>
        </div>
        {/* table start */}
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
                        Student Count
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
