'use client';
import { useState, useEffect } from 'react';
import useGetData from '@/utils/useGetData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const page = () => {
  const [formData, setFormData] = useState({
    MRNo: '',
    PartyID: '',
    MRDate: new Date().toISOString().split('T')[0],
    AmountReceived: '',
    InWord: '',
    PaymentMethodID: '',
    PaymentMethodDetailsID: '',
    ReceivedByUserID: 501,
  });
  const [methodDetail, setMethodInDetails] = useState([]);

  console.log(formData);
  function numberToWords(num) {
    if (num === 0) return 'zero';

    const belowTwenty = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    const tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
    const thousands = ['', 'thousand', 'million', 'billion'];

    function helper(n) {
      if (n === 0) return '';
      if (n < 20) return belowTwenty[n] + ' ';
      if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
      if (n < 1000)
        return belowTwenty[Math.floor(n / 100)] + ' hundred ' + helper(n % 100);
      return '';
    }

    let word = '';
    let i = 0;

    while (num > 0) {
      if (num % 1000 !== 0) {
        word = helper(num % 1000) + thousands[i] + ' ' + word;
      }
      num = Math.floor(num / 1000);
      i++;
    }

    return word.trim();
  }

  useEffect(() => {
    if (formData.AmountReceived) {
      const receiveText = numberToWords(Number(formData.AmountReceived));
      setFormData(prevData => ({
        ...prevData,
        InWord: receiveText,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        InWord: '',
      }));
    }
  }, [formData.AmountReceived]);

  const getMoneyReceipt = async () => {
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=generate_new_money_receipt_number'
    );
    if (res.data?.NewMRNo) {
      setFormData({
        ...formData,
        MRNo: res.data.NewMRNo,
      });
    }
  };

  const allParties = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_parties_users&UserID=501`
  );

  useEffect(() => {
    getMoneyReceipt();
  }, []);

  const paymentMethod = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_PaymentMethod'
  );

  const getMethodInDetail = async id => {
    setFormData(prevData => ({
      ...prevData,
      PaymentMethodDetailsID: '',
    }));
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_PaymentMethodCash&PaymentMethodID=${id}`
    );
    setMethodInDetails(res.data);
  };

  useEffect(() => {
    if (formData.PaymentMethodID) {
      getMethodInDetail(formData.PaymentMethodID);
    }
  }, [formData.PaymentMethodID]);

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_moneyreceipt',
      formData
    );
    router.push('/dashboard/money-receipt');
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">add money receipts</h1>
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
          <label htmlFor="MRNo" className="block text-sm font-bold mb-1">
            Receipt Number:
          </label>
          <input
            type="text"
            id="MRNo"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            value={formData.MRNo}
            readOnly
          />
          <div className="w-full">
            <label className="capitalize flex font-semibold text-md py-1">
              Receipt Date:
            </label>

            <DatePicker
              selected={formData.MRDate}
              onChange={date =>
                setFormData({
                  ...formData,
                  MRDate: date.toISOString().split('T')[0],
                })
              }
              className="rounded-md"
            />
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Party Name:
            </label>

            <select
              name="PartyID"
              className="w-full rounded-md"
              onChange={e => {
                setFormData({
                  ...formData,
                  PartyID: e.target.value,
                });
              }}
              value={formData.PartyID}
              required
            >
              <option value=""></option>
              {allParties.data.length &&
                allParties.data.map(item => (
                  <option value={item.PartyID} key={item.PartyID}>
                    {item.PartyName}
                  </option>
                ))}
            </select>
          </div>
          <label
            htmlFor="AmountReceived"
            className="block text-sm font-bold mb-1"
          >
            Amount Received:
          </label>
          <input
            type="number"
            id="AmountReceived"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
            onChange={event => {
              setFormData({
                ...formData,
                AmountReceived: event.target.value,
              });
            }}
            value={formData.AmountReceived}
          />
          <label
            htmlFor="InWord"
            className="block text-sm font-bold mb-1 capitalize"
          >
            Amount In word:
          </label>
          <input
            type="text"
            id="InWord"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm capitalize"
            value={formData.InWord}
            readOnly
          />
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Payment Method:
            </label>

            <select
              name="PaymentMethodID"
              className="w-full rounded-md"
              value={formData.PaymentMethodID}
              onChange={event => {
                setFormData({
                  ...formData,
                  PaymentMethodID: event.target.value,
                });
              }}
            >
              <option value="" disabled={true}></option>
              {paymentMethod.data.length &&
                paymentMethod.data.map(method => (
                  <option
                    value={method.PaymentMethodID}
                    key={method.PaymentMethodID}
                  >
                    {method.PMName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Payment Method Details:
            </label>

            <select
              name="PaymentMethodDetailsID"
              className="w-full rounded-md"
              value={formData.PaymentMethodDetailsID}
              onChange={event => {
                setFormData({
                  ...formData,
                  PaymentMethodDetailsID: event.target.value,
                });
              }}
              disabled={formData.PaymentMethodID ? false : true}
            >
              <option value="" disabled={true}></option>
              {methodDetail.length &&
                methodDetail.map(method => (
                  <option
                    value={method.PaymentMethodDetailsID}
                    key={method.PaymentMethodDetailsID}
                  >
                    {method.PMDName}
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              Save Money Receipt
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
