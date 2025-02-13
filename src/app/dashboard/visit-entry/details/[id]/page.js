'use client';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useGetData from '@/utils/useGetData';
import axios from 'axios';
import PurposeBusinessDev from '@/components/dashboard/PurposeBusinessDev';
import OtherPurpose from '@/components/dashboard/OtherPurpose';
import getCurrentDate from '@/utils/getCurrentDate';
import { useRouter } from 'next/navigation';

const page = ({ params }) => {
  const [previousData, setPreviousData] = useState({
    status: 'loading',
    data: null,
  });
  const [perpouseAmount, setPerpouseAmount] = useState([]);
  const [otherPurpose, setOtherPurpose] = useState([
    {
      id: uuidv4(),
      TeacherName: '',
      Designation: '',
      ContactPhone: '',
      FinancialYearID: '',
      BooksGroupID: '',
      ProductID: '',
      StudentsCount: '',
    },
  ]);

  const [timeData, setTimeData] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [tadaData, setTadaData] = useState([
    {
      id: uuidv4(),
      type: '',
      amount: '',
    },
  ]);

  console.log(tadaData)
  const tadaType = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_tada_allowances'
  );

  const getprevData = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_visit_planDetails&VisitPlanID=${id}`
    );
    setPreviousData({
      status: 'idle',
      data: res.data,
    });
  };

  useEffect(() => {
    if (params.id) {
      getprevData(params.id);
    }
  }, [params.id]);

  useEffect(() => {
    if (previousData.data && previousData.data?.VisitPlanID) {
      setPerpouseAmount([...previousData.data.Details]);
    }
  }, [previousData]);

  const router = useRouter()

const handleSubmit = async e =>{
  e.preventDefault();
  const dataWillBeSubmit = {
    CheckInTime: timeData.startDate,
    CheckOutTime: timeData.endDate,
    Latitude: 0,
    Longitude: 0, 
    VisitEntryDate: getCurrentDate(),
    VEStatus: 1,
    Details: otherPurpose.map(item => ({
      TeacherName: item.TeacherName,
      Designation: item.Designation,
      Phone: item.ContactPhone,
      FinancialYearID: item.FinancialYearID,
      ProductCategoryID: item.BooksGroupID,
      ProductID: item.ProductID,
      StudentNo: item.StudentsCount,
      DonationAmount: 0,
      SpecimenQty: 0
    })),
    TADADetails: tadaData.map(item =>({
      TADACategoryID: item.type,
      Amount: item.amount,
    }))
  }

  const res = await axios.post(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_visit_entryall&VisitPlanID=${params.id}`, dataWillBeSubmit)
  router.push('/dashboard/visit-entry')

}


  if (previousData.status === 'pending') {
    <div className="text-xl font-semibold text-center py-10">Loading...</div>;
  }

  if (previousData.data && !previousData.data?.VisitPlanID) {
    <div className="text-xl font-semibold text-center py-10">
      Data Not Found
    </div>;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Visit Entry Details</h1>
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
        <table className="max-w-full w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr className="bg-text1 text-white">
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Plan ID
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Visit Date
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Employee Name
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Place
              </th>

              <th
                scope="col"
                className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
              >
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                {previousData.data?.VisitPlanID}
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                {previousData.data?.VisitPlanDate}
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                {previousData.data?.VisitUserName}
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                {previousData.data?.InstituteName}
              </td>
              <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                {previousData.data?.PurposeName}
              </td>
            </tr>
          </tbody>
        </table>
        <form className="mb-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8 mb-5">
            <div>
              <label className="font-semibold pr-5">
                Actual Check In Time:
              </label>
              <DatePicker
                selected={timeData.startDate}
                onChange={date =>
                  setTimeData(prevData => ({
                    ...prevData,
                    startDate: date,
                  }))
                }
                showTimeSelect
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                required
              />
            </div>
            <div>
              <label className="font-semibold pr-5">
                Actual Check Out Time:
              </label>
              <DatePicker
                selected={timeData.endDate}
                onChange={date =>
                  setTimeData(prevData => ({
                    ...prevData,
                    endDate: date,
                  }))
                }
                showTimeSelect
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                required
              />
            </div>
          </div>
        
        {/* start */}
        {/* {previousData.data && previousData.data.PurposeID == 79 && (
          <PurposeBusinessDev
            perpouseAmount={perpouseAmount}
            setPerpouseAmount={setPerpouseAmount}
          />
        )} */}
        {previousData.data && (
          <OtherPurpose
            otherPurpose={otherPurpose}
            setOtherPurpose={setOtherPurpose}
            InstitutionID={previousData.data.InstitutionID}
          />
        )}
        {/* end */}
        <h1 className="text-2xl capitalize mb-2">TA/DA Allowance</h1>
        <div className="flex flex-col">
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
                        TA/DA Allowance Type
                      </th>
                      <th
                        scope="col"
                        className="border-e border-neutral-200 px-6 py-4 dark:border-white/10"
                      >
                        Amount
                      </th>

                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tadaData.map(item => (
                      <tr
                        className="border-b border-neutral-200 dark:border-white/10 text-black"
                        key={item.id}
                      >
                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          <select
                            name="type"
                            className="w-full rounded-md"
                            onChange={event => {
                              setTadaData(prevData =>
                                prevData.map(itemData =>
                                  itemData.id === item.id
                                    ? {
                                        ...itemData,
                                        type: event.target.value,
                                      }
                                    : itemData
                                )
                              );
                            }}
                            value={item.type}
                          >
                            <option value="" disabled={true}></option>
                            {tadaType.data.length &&
                              tadaType.data.map(tada => (
                                <option value={tada.ID} key={tada.id}>
                                  {tada.CategoryName}
                                </option>
                              ))}
                          </select>
                        </td>

                        <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium dark:border-white/10">
                          <input
                            type="number"
                            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
                            name="amount"
                            onChange={event => {
                              setTadaData(prevData =>
                                prevData.map(itemData =>
                                  itemData.id === item.id
                                    ? {
                                        ...itemData,
                                        amount: event.target.value,
                                      }
                                    : itemData
                                )
                              );
                            }}
                            value={item.amount}
                          />
                        </td>

                        <td className="whitespace-nowrap px-6 py-4 flex justify-center gap-3">
                          <AiOutlineCloseCircle
                            className="text-4xl text-red-500 cursor-pointer"
                            onClick={() => {
                              setTadaData(prevData =>
                                prevData.filter(
                                  itemData => itemData.id !== item.id
                                )
                              );
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary px-3 py-1 rounded-md text-white"
            onClick={() => {
              setTadaData(prevData => [
                ...prevData,
                {
                  id: uuidv4(),
                  type: '',
                  amount: '',
                },
              ]);
            }}
            type='button'
          >
            Add Row
          </button>
        </div>
        <button className="bg-primary px-3 py-1 rounded-md text-white" type='submit'>
          Save Entry
        </button>
        </form>
      </div>
    </>
  );
};

export default page;
