'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useGetData from '@/utils/useGetData';

const UserEmployeeEdit = ({ id }) => {
  const [desigs, setDesigs] = useState([]);
  const [reportingTo, setReportingTo] = useState([]);
  const [formData, setFormData] = useState({
    image: '',
    employeeId: '',
    employeeName: '',
    dasignationRole: '',
    password: '',
    userName: '',
    email: '',
    phone: '',
    address: '',
    reportingTo: '',
    status: '',
  });

  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_sndUser&UserID=${id}`
  );

  useEffect(() => {
    if (status !== 'pending') {
      setFormData({
        image: '',
        employeeId: data.EmployeeID,
        employeeName: data.EmpName,
        dasignationRole: data.DesignationID,
        password: '',
        userName: data.Username,
        email: data.Email,
        phone: data.Phone,
        address: data.Address,
        reportingTo: data.ReportingToUserID,
        status: data.Status,
      });
    }
  }, [status]);

  const getDesig = async cb => {
    const res = await axios.get(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_desigs'
    );
    if (res.status === 200) {
      cb(res.data);
    }
  };

  const getReporting = async cb => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/spsalesforce_api.php?action=get_all_ReportUser&DesignationID=${formData.dasignationRole}`
    );
    if (res.status === 200) {
      cb(res.data);
    }
  };

  useEffect(() => {
    getDesig(setDesigs);
    getReporting(setReportingTo);
  }, []);

  useEffect(() => {
    if (formData.dasignationRole){ 
      getReporting(setReportingTo);
    }
  }, [formData.dasignationRole]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">User Management</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      <form
        className="w-full max-w-lg"
        action="/api/user-registration/update"
        method="POST"
        encType="multipart/form-data"
      >
        <input name="id" value={id} readonly className="hidden" />
        <div className="mb-5">
          <div>
            <label
              htmlFor="EmployeeID"
              className="capitalize flex font-semibold text-md py-1"
            >
              employeeID:
            </label>

            <input
              id="EmployeeID"
              name="employeeId"
              type="text"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.employeeId}
              required
            />
          </div>

          <div>
            <label
              htmlFor="EmployeeName"
              className="capitalize flex font-semibold text-md py-1"
            >
              employee Name:
            </label>

            <input
              id="EmployeeName"
              type="text"
              name="employeeName"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.employeeName}
              required
            />
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Dasignation/Role:
            </label>
            <select
              name="dasignationRole"
              className="w-full rounded-md"
              onChange={handleChange}
              value={formData.dasignationRole}
              required
            >
              {desigs.length &&
                desigs.map(item => (
                  <option value={item.ID} key={item.ID}>
                    {item.CategoryName}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="userName"
              className="capitalize flex font-semibold text-md py-1"
            >
              User Name / User Id:
            </label>

            <input
              id="userName"
              type="text"
              name="userName"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.userName}
              required
            />
          </div>

          <div>
            <label
              htmlFor="Password"
              className="capitalize flex font-semibold text-md py-1"
            >
              password:
            </label>

            <input
              id="Password"
              type="password"
              name="password"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div>
            <label
              htmlFor="Image"
              className="capitalize flex font-semibold text-md py-1"
            >
              User's Picture:
            </label>
            <div className="border-[1px] border-[#6b7280] p-1 rounded-md bg-white">
              <input
                id="Image"
                type="file"
                name="image"
                className="w-full rounded-md mb-1"
                onChange={e => {
                  const file = e.target.files[0];
                  setFormData({ ...formData, [e.target.name]: file });
                }}
                value={formData.image}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Email"
              className="capitalize flex font-semibold text-md py-1"
            >
              email:
            </label>

            <input
              id="Email"
              type="email"
              name="email"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div>
            <label
              htmlFor="Phone"
              className="capitalize flex font-semibold text-md py-1"
            >
              Phone:
            </label>

            <input
              id="Phone"
              type="number"
              name="phone"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.phone}
              required
            />
          </div>
          <div>
            <label
              htmlFor="Address"
              className="capitalize flex font-semibold text-md py-1"
            >
              address:
            </label>

            <input
              id="Address"
              type="text"
              name="address"
              className="w-full rounded-md mb-1"
              onChange={handleChange}
              value={formData.address}
              required
            />
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              reporting to:
            </label>

            <select
              name="reportingTo"
              className="w-full rounded-md"
              value={formData.reportingTo}
              onChange={handleChange}
              required
            >
              {reportingTo.length &&
                reportingTo.map(item => (
                  <option value={item.UserID} key={item.UserID}>
                    {item.reportUsers}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Status
            </label>

            <select
              name="status"
              className="w-full rounded-md"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="1">active</option>
              <option value="0">disable</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary px-6 py-2 rounded-md text-surface1"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserEmployeeEdit;
