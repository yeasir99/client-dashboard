import { useState, useEffect } from 'react';
import useGetData from '@/utils/useGetData';
import axios from 'axios';

const Locations = ({
  updateState,
  fieldKey,
  divisionID = '',
  districtID = '',
  thanaID = '',
  areaID = '',
}) => {
  const [locationID, setLocationID] = useState({
    divisionID: '',
    districtID: '',
    thanaID: '',
    areaID: areaID,
  });

  const [district, setDistrict] = useState([]);
  const [thana, setThana] = useState([]);
  const [area, setArea] = useState([]);

  const getLocationData = async (url, id, cb) => {
    const res = await axios.get(`${url}${id}`);
    cb([...res.data]);
  };

  const { status, data } = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDivision'
  );

  useEffect(() => {
    if (locationID.divisionID) {
      getLocationData(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDistrict&ParentRegionID=',
        locationID.divisionID,
        setDistrict
      );
    }
  }, [locationID.divisionID]);

  useEffect(() => {
    if (locationID.districtID) {
      getLocationData(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionThana&ParentRegionID=',
        locationID.districtID,
        setThana
      );
    }
  }, [locationID.districtID]);

  useEffect(() => {
    if (locationID.thanaID) {
      getLocationData(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionArea&ParentRegionID=',
        locationID.thanaID,
        setArea
      );
    }
  }, [locationID.thanaID]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="Division">
            Division:
          </label>
          <select
            className="w-full rounded-md"
            id="Division"
            name="division"
            value={locationID.divisionID}
            onChange={e => {
              setLocationID({
                ...locationID,
                divisionID: e.target.value,
                districtID: '',
                thanaID: '',
                areaID: '',
              });
              updateState(fieldKey, '');
            }}
          >
            <option value="" disabled={true} selected>
              {divisionID}
            </option>
            {data.length &&
              data.map(item => (
                <option value={item.RegionID} key={item.RegionID}>
                  {item.RegionName}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="District">
            District:
          </label>
          <select
            id="District"
            name="District"
            className="w-full rounded-md"
            value={locationID.districtID}
            onChange={e => {
              setLocationID({
                ...locationID,
                districtID: e.target.value,
                thanaID: '',
                areaID: '',
              });
              updateState(fieldKey, '');
            }}
            disabled={locationID.divisionID ? false : true}
          >
            <option value="" disabled={true} selected>
              {districtID}
            </option>
            {district.length &&
              district.map(item => (
                <option value={item.RegionID} key={item.RegionID}>
                  {item.RegionName}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="Thana">
            Thana:
          </label>
          <select
            id="Thana"
            name="Thana"
            className="w-full rounded-md"
            value={locationID.thanaID}
            onChange={e => {
              setLocationID({
                ...locationID,
                thanaID: e.target.value,
                areaID: '',
              });
              updateState(fieldKey, '');
            }}
            disabled={locationID.districtID ? false : true}
          >
            <option value="" disabled={true} selected>
              {thanaID}
            </option>
            {thana.length &&
              thana.map(item => (
                <option value={item.RegionID} key={item.RegionID}>
                  {item.RegionName}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold mb-1" htmlFor="Area">
          Area:
        </label>
        <select
          id="Area"
          name="Area"
          className="w-full rounded-md"
          value={locationID.areaID}
          onChange={e => {
            setLocationID({
              ...locationID,
              areaID: e.target.value,
            });
            updateState(fieldKey, e.target.value);
          }}
          disabled={locationID.thanaID ? false : true}
        >
          <option value="" disabled={true} selected>
            {areaID}
          </option>
          {area.length &&
            area.map(item => (
              <option value={item.RegionID} key={item.RegionID}>
                {item.RegionName}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default Locations;
