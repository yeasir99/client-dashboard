'use client'
import { useSession } from "next-auth/react"
import {useState, useEffect} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useGetData from "@/utils/useGetData";
import axios from "axios";
import { useRouter } from 'next/navigation';

const page = () => {
  const [name, setName] = useState('')
  const [intName ,setIntName] = useState([])
  const [formData, setFormData] = useState({
    VisitPlanNo: '',
    VisitPlanDate: new Date().toISOString().split('T')[0],
    InstitutionTypeID: '',
    InstitutionID: '',
    PurposeID: '',
    VisitUserID: '',
    UserID: ''
  })
  const { data: session, status } = useSession()
  useEffect(()=>{
    if(session?.user){
      setFormData({
        ...formData,
        VisitUserID: session.user.id,
        UserID: session.user.id
      })
      setName(session.user.name)
    }

  }, [session])

const instutionType = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_institutiontypes')
const purposeCategory = useGetData('https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_visitpurposes')

const getPerpouse = async () => {
  const res = await axios.post('https://kblsf.site/DLogicKBL/salesforce_api.php?action=generate_new_visit_plan_number')
  setFormData({
    ...formData,
    VisitPlanNo: res.data.newVisitPlanNo
  })
}

useEffect(()=>{
  getPerpouse()
}, [])

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

const handleChange = e => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}
const router = useRouter()
const handleSubmit = async e =>{
  e.preventDefault();
  const res = await axios.post('https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_visit_plan', formData)
  router.push('/dashboard/visit-plan')
}

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Visit Plan Requisition</h1>
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
        <h2 className="text-lg font-semibold mb-2 capitalize">
          Add New visit plan Requisition
        </h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Visit No:
            </label>

            <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full text-sm"
            value={formData.VisitPlanNo}
            readOnly
          />
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Employee Name:
            </label>

            <input
            type="text"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full text-sm"
            value={name}
            readOnly
          />
          </div>
          <div className="w-full">
                    <label className="capitalize flex font-semibold text-md py-1">
                      Visit Date:
                    </label>
          
                    <DatePicker
                      selected={formData.VisitPlanDate}
                      onChange={date =>
                        setFormData({
                          ...formData,
                          VisitPlanDate: date.toISOString().split('T')[0],
                        })
                      }
                      className="rounded-md"
                    />
                  </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
            Institution/Party Type:
            </label>

            <select name="InstitutionTypeID" className="w-full rounded-md" value={formData.InstitutionTypeID} onChange={handleChange}>
              <option value="" disabled={true}></option>
              {instutionType.data.length && instutionType.data.map(item =>{
               return <option value={item.ID} key={item.ID}>{item.CategoryName}</option>
              })}
            </select>
          </div>
          <div>
          <label className="capitalize flex font-semibold text-md py-1">
          Institution/Party Name:
          </label>

          <select
            name="InstitutionID"
            className="w-full rounded-md"
            onChange={handleChange}
            value={formData.InstitutionID}
            required
            disabled={formData.InstitutionTypeID ? false : true}
          >
            <option value="" disabled={true}></option>
            {intName.length &&
              intName.map(item => (
                <option value={item.InstitutionID} key={item.InstitutionID}>
                  {item.InstitutionName}
                </option>
              ))}
          </select>
        </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
            Visit Purpose:
            </label>

            <select name="PurposeID" className="w-full rounded-md" value={formData.PurposeID} onChange={handleChange}>
              <option value="" disabled={true}></option>
              {purposeCategory.data.length && purposeCategory.data.map(item =>(
                <option value={item.ID} key={item.ID}>{item.CategoryName}</option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md" type="submit">
              save visit plan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
