'use client';
import { useState, useEffect } from 'react';
import useGetData from '@/utils/useGetData';
import axios from 'axios';

const PartyManagementAreaAdd = ({ id }) => {
  const [allArea, setAllArea] = useState({
    division: '',
    district: '',
    thana: '',
    location: [],
    locationWithName: [],
  });
  const [district, setDistrict] = useState([]);
  const [thana, setThana] = useState([]);
  const [locations, setLocations] = useState([]);

  const { status, data } = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDivision'
  );

  const getUserDataById = async (url, id, cb) => {
    const res = await axios.get(`${url}${id}`);
    cb(res.data);
  };

  const getlocations = async (url, id, cb) => {
    const res = await axios.get(`${url}${id}`);
    cb(res.data.data);
  };

  useEffect(() => {
    if (allArea.division) {
      getUserDataById(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDistrict&ParentRegionID=`,
        allArea.division,
        setDistrict
      );
    }
  }, [allArea.division]);

  useEffect(() => {
    if (allArea.district) {
      getUserDataById(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionThana&ParentRegionID=`,
        allArea.district,
        setThana
      );
    }
  }, [allArea.district]);

  useEffect(() => {
    if (allArea.thana) {
      getlocations(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_location&RegionID=`,
        allArea.thana,
        setLocations
      );
    }
  }, [allArea.thana]);

  const handleSubmit = async e => {
    e.preventDefault();
    const PartyAreas = allArea.locationWithName.map(item => ({
      RegionID: item.AreaID,
      RegionName: item.AreaName,
    }));

    const res = await axios.post(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_partydetailsAreas&PartyID=${id}`,
      { PartyAreas }
    );
    console.log(res);
  };

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Add Covered Area</h1>
      </div>
      <div>
        <label className="capitalize flex font-semibold text-md py-1">
          Division:
        </label>

        <select
          name="Division"
          className="w-full rounded-md"
          defaultValue=""
          onChange={e => {
            setAllArea({
              ...allArea,
              division: e.target.value,
            });
          }}
          required
        >
          <option value="" disabled={true} selected></option>
          {data.length &&
            data.map(item => (
              <option value={item.RegionID} key={item.RegionID}>
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
          name="Division"
          className="w-full rounded-md"
          defaultValue=""
          onChange={e => {
            setAllArea({
              ...allArea,
              district: e.target.value,
            });
          }}
          disabled={district.length ? false : true}
          required
        >
          <option value="" disabled={true} selected></option>
          {district.length &&
            district.map(item => (
              <option value={item.RegionID} key={item.RegionID}>
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
          name="Thana"
          className="w-full rounded-md"
          defaultValue=""
          onChange={e => {
            setAllArea({
              ...allArea,
              thana: e.target.value,
            });
          }}
          disabled={thana.length ? false : true}
          required
        >
          <option value="" disabled={true} selected></option>
          {thana.length &&
            thana.map(item => (
              <option value={item.RegionID} key={item.RegionID}>
                {item.RegionName}
              </option>
            ))}
        </select>
      </div>
      <div>
        <h1 className="text-lg font-semibold">List of the Location:</h1>
        <div>
          {locations.length > 0 &&
            locations.map(item => (
              <div key={item.AreaID}>
                <label>
                  <input
                    type="checkbox"
                    value={item.AreaID}
                    checked={allArea.location.includes(item.AreaID)}
                    onChange={() => {
                      if (allArea.location.includes(item.AreaID)) {
                        setAllArea({
                          ...allArea,
                          location: allArea.location.filter(
                            ele => ele !== item.AreaID
                          ),
                          locationWithName: allArea.locationWithName.filter(
                            ele => ele.AreaID !== item.AreaID
                          ),
                        });
                      } else {
                        setAllArea({
                          ...allArea,
                          location: [...allArea.location, item.AreaID],
                          locationWithName: [...allArea.locationWithName, item],
                        });
                      }
                    }}
                    className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  {item.AreaName}
                </label>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="capitalize bg-primary px-5 py-1 text-white rounded-md mt-9"
        >
          Save Area
        </button>
      </div>
    </form>
  );
};

export default PartyManagementAreaAdd;