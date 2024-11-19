'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const page = () => {
  const [formData, setFormData] = useState({
    division: '',
    district: '',
    thana: '',
    area: '',
  });
  const { division, district, thana, area } = formData;
  const [divisionList, setDivisionList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [thanaList, setThanaList] = useState([]);
  const [areaList, setAreaList] = useState([]);

  console.log(areaList);

  const getDivision = async () => {
    const res = await axios.get(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDivision'
    );
    setDivisionList(res.data);
  };

  const getDistrict = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDistrict&ParentRegionID=${id}`
    );
    setDistrictList(res.data);
  };

  const getThana = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionThana&ParentRegionID=${id}`
    );
    setThanaList(res.data);
  };

  const getArea = async id => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionThana&ParentRegionID=${id}`
    );
    setAreaList(res.data);
  };

  useEffect(() => {
    getDivision();
  }, []);

  useEffect(() => {
    if (divisionList.length) {
      const id = divisionList.filter(item => item.RegionName === division)[0]
        .RegionID;
      getDistrict(id);
    }
  }, [division]);

  useEffect(() => {
    if (districtList.length) {
      const founded = districtList.filter(
        item => item.RegionName === district
      )[0];
      const id = founded?.RegionID;
      if (id) {
        getThana(id);
      }
    }
  }, [district]);

  useEffect(() => {
    if (thanaList.length) {
      const founded = thanaList.filter(item => item.RegionName === thana)[0];
      const id = founded?.RegionID;
      if (id) {
        getArea(id);
      }
    }
  }, [thana]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Region management</h1>
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
          add new Region
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Division:
            </label>
            <select
              className="w-full rounded-md"
              name="division"
              onChange={handleChange}
              value={formData.division}
            >
              <option value="" disabled></option>
              {divisionList.length &&
                divisionList.map(item => (
                  <option value={item.RegionName} key={item.RegionID}>
                    {item.RegionName}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              District:
            </label>

            <select
              className="w-full rounded-md"
              name="district"
              onChange={handleChange}
              value={formData.district}
              disabled={division ? false : true}
            >
              <option value="" disabled></option>
              {districtList.length &&
                districtList.map(item => (
                  <option value={item.RegionName} key={item.RegionID}>
                    {item.RegionName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Thana:
            </label>

            <select
              className="w-full rounded-md"
              name="thana"
              onChange={handleChange}
              value={formData.thana}
              disabled={district ? false : true}
            >
              <option value="" disabled></option>
              {thanaList.length &&
                thanaList.map(item => (
                  <option value={item.RegionName} key={item.RegionID}>
                    {item.RegionName}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="capitalize flex font-semibold text-md py-1">
              Area:
            </label>

            <select
              className="w-full rounded-md"
              name="area"
              onChange={handleChange}
              value={formData.area}
              disabled={thana ? false : true}
            >
              <option value="" disabled></option>
              {areaList.length &&
                areaList.map(item => (
                  <option value={item.RegionName} key={item.RegionID}>
                    {item.RegionName}
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-5" type="submit">
            <button className="capitalize bg-primary px-5 py-1 text-white rounded-md">
              save region-type
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
