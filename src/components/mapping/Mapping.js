'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mapping = () => {
  const [land, setLand] = useState('first');
  // user start
  const [userType, setUserType] = useState('');
  const [rsmData, setRsmData] = useState([]);
  const [dsmData, setDsmData] = useState([]);
  const [asmData, setAsmData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [selectedRsm, setSelectedRsm] = useState('');
  const [selectedDsm, setSelectedDsm] = useState('');
  const [selectedAsm, setSelectedAsm] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  //   user end

  //   location start

  const [locationType, setLocationType] = useState('');
  const [divisionData, setDivisionData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [thanaData, setThanaData] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedThana, setSelectedThana] = useState('');
  const [location, setLocation] = useState([]);

  console.log(location);

  // location end

  // user start
  const getRsmData = async () => {
    const res = await axios.get(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=1515'
    );
    setRsmData(res.data.data);
  };

  const getDsmData = async () => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=${selectedRsm}`
    );
    setDsmData(res.data.data);
  };

  const getAsmData = async () => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=${selectedDsm}`
    );
    setAsmData(res.data.data);
  };

  const getOtherData = async () => {
    const res = await axios.get(
      `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=${selectedAsm}`
    );
    setOtherData(res.data.data);
  };

  useEffect(() => {
    if (userType) {
      getRsmData();
    }
  }, [userType]);

  useEffect(() => {
    if (selectedRsm) {
      getDsmData();
    }
  }, [selectedRsm]);

  useEffect(() => {
    if (selectedDsm) {
      getAsmData();
    }
  }, [selectedDsm]);

  useEffect(() => {
    if (selectedAsm) {
      getOtherData();
    }
  }, [selectedAsm]);

  // user end

  //   location start

  const getDivisionData = async () => {
    const res = await axios.get(
      'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_regionDivision'
    );
    setDivisionData(res.data);
  };

  useEffect(() => {
    if (locationType) {
      getDivisionData();
    }
  }, [locationType]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl capitalize mb-3">Mapping Employee Vs Region</h1>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm"
          />
        </form>
      </div>
      {land === 'first' ? (
        <div>
          <h2 className="text-center font-semibold text-xl py-3 capitalize">
            select the employee type
          </h2>
          <div className="max-w-md mx-auto mt-3">
            <select
              name="RSM"
              className="w-full rounded-md"
              value={userType}
              onChange={event => {
                setUserType(event.target.value);
                setEmployeeData(null);
                setSelectedRsm('');
                setSelectedDsm('');
                setSelectedAsm('');
              }}
            >
              <option value="" disabled>
                Choose Employee Type
              </option>
              <option value="rsm">RSM</option>
              <option value="dsm">DSM</option>
              <option value="asm">ASM</option>
              <option value="others">Others</option>
            </select>
          </div>
          {userType && (
            <div className="max-w-md mx-auto">
              {userType === 'rsm' ? (
                <div>
                  <h1 className="capitalize py-2 pl-2 font-semibold">
                    List of the Employee:
                  </h1>
                  {rsmData.length &&
                    rsmData.map(item => (
                      <div key={item.UserID}>
                        <label>
                          <input
                            type="checkbox"
                            value={item}
                            checked={
                              employeeData && employeeData.UserID == item.UserID
                            }
                            onChange={e => {
                              setEmployeeData(item);
                            }}
                            className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          {item.EmpName}
                        </label>
                      </div>
                    ))}
                </div>
              ) : userType === 'dsm' ? (
                <div>
                  {rsmData.length && (
                    <div>
                      <div className="max-w-md mx-auto mt-3">
                        <select
                          name="RSM"
                          className="w-full rounded-md"
                          value={selectedRsm}
                          onChange={event => {
                            setSelectedRsm(event.target.value);
                            setEmployeeData(null);
                          }}
                        >
                          <option value="" disabled>
                            Select RSM
                          </option>
                          {rsmData.map(item => (
                            <option
                              value={item.DesignationID}
                              key={item.UserID}
                            >
                              {item.EmpName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {selectedRsm && dsmData.length && (
                    <h1 className="capitalize py-2 pl-2 font-semibold">
                      List of the Employee:
                    </h1>
                  )}
                  {selectedRsm &&
                    dsmData.length &&
                    dsmData.map(item => (
                      <div key={item.UserID}>
                        <label>
                          <input
                            type="checkbox"
                            value={item}
                            checked={
                              employeeData && employeeData.UserID == item.UserID
                            }
                            onChange={e => {
                              setEmployeeData(item);
                            }}
                            className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          {item.EmpName}
                        </label>
                      </div>
                    ))}
                </div>
              ) : userType === 'asm' ? (
                <div>
                  {rsmData.length && (
                    <div>
                      <div className="max-w-md mx-auto mt-3">
                        <select
                          name="RSM"
                          className="w-full rounded-md"
                          value={selectedRsm}
                          onChange={event => {
                            setSelectedRsm(event.target.value);
                            setEmployeeData(null);
                          }}
                        >
                          <option value="" disabled>
                            Select RSM
                          </option>
                          {rsmData.map(item => (
                            <option
                              value={item.DesignationID}
                              key={item.UserID}
                            >
                              {item.EmpName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {selectedRsm && dsmData.length && (
                    <div>
                      <div className="max-w-md mx-auto mt-3">
                        <select
                          name="DSM"
                          className="w-full rounded-md"
                          value={selectedDsm}
                          onChange={event => {
                            setSelectedDsm(event.target.value);
                            setEmployeeData(null);
                          }}
                        >
                          <option value="" disabled>
                            Select DSM
                          </option>
                          {dsmData.map(item => (
                            <option
                              value={item.DesignationID}
                              key={item.UserID}
                            >
                              {item.EmpName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {selectedDsm && asmData.length && (
                    <h1 className="capitalize py-2 pl-2 font-semibold">
                      List of the Employee:
                    </h1>
                  )}
                  {selectedDsm &&
                    asmData.length &&
                    asmData.map(item => (
                      <div key={item.UserID}>
                        <label>
                          <input
                            type="checkbox"
                            value={item}
                            checked={
                              employeeData && employeeData.UserID == item.UserID
                            }
                            onChange={e => {
                              setEmployeeData(item);
                            }}
                            className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          {item.EmpName}
                        </label>
                      </div>
                    ))}
                </div>
              ) : (
                <div>
                  {rsmData.length && (
                    <div>
                      <div className="max-w-md mx-auto mt-3">
                        <select
                          name="RSM"
                          className="w-full rounded-md"
                          value={selectedRsm}
                          onChange={event => {
                            setSelectedRsm(event.target.value);
                            setEmployeeData(null);
                          }}
                        >
                          <option value="" disabled>
                            Select RSM
                          </option>
                          {rsmData.map(item => (
                            <option
                              value={item.DesignationID}
                              key={item.UserID}
                            >
                              {item.EmpName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {selectedRsm && dsmData.length && (
                    <div>
                      <div className="max-w-md mx-auto mt-3">
                        <select
                          name="DSM"
                          className="w-full rounded-md"
                          value={selectedDsm}
                          onChange={event => {
                            setSelectedDsm(event.target.value);
                            setEmployeeData(null);
                          }}
                        >
                          <option value="" disabled>
                            Select DSM
                          </option>
                          {dsmData.map(item => (
                            <option
                              value={item.DesignationID}
                              key={item.UserID}
                            >
                              {item.EmpName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {selectedDsm && asmData.length && (
                    <div>
                      <div className="max-w-md mx-auto mt-3">
                        <select
                          name="ASM"
                          className="w-full rounded-md"
                          value={selectedAsm}
                          onChange={event => {
                            setSelectedAsm(event.target.value);
                            setEmployeeData(null);
                          }}
                        >
                          <option value="" disabled>
                            Select ASM
                          </option>
                          {asmData.map(item => (
                            <option
                              value={item.DesignationID}
                              key={item.UserID}
                            >
                              {item.EmpName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                  {selectedAsm && otherData.length && (
                    <h1 className="capitalize py-2 pl-2 font-semibold">
                      List of the Employee:
                    </h1>
                  )}
                  {selectedAsm &&
                    otherData.length &&
                    otherData.map(item => (
                      <div key={item.UserID}>
                        <label>
                          <input
                            type="checkbox"
                            value={item}
                            checked={
                              employeeData && employeeData.UserID == item.UserID
                            }
                            onChange={e => {
                              setEmployeeData(item);
                            }}
                            className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          {item.EmpName}
                        </label>
                      </div>
                    ))}
                </div>
              )}
              <div className="flex justify-end pt-6">
                <button
                  className="px-6 py-1 bg-primary text-xl text-white rounded-md"
                  disabled={employeeData ? false : true}
                  onClick={() => {
                    setLand('area');
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="max-w-md mx-auto mt-3 bg-gray-200 py-3 px-3 rounded-md">
            <h1 className="font-semibold">{employeeData.EmpName}</h1>
            <h1>{employeeData.Designation}</h1>
            <h1>will be assign</h1>
          </div>
          <h2 className="text-center font-semibold text-xl py-3 capitalize">
            select the Location type
          </h2>
          <div className="max-w-md mx-auto mt-3">
            <select
              name="RSM"
              className="w-full rounded-md"
              value={locationType}
              onChange={event => {
                setLocationType(event.target.value);
              }}
            >
              <option value="" disabled>
                Choose Location Type
              </option>
              <option value="division">Division</option>
              <option value="district">District</option>
              <option value="thana">Thana</option>
              <option value="zone">Zone</option>
            </select>
          </div>
          {locationType && (
            <div className="max-w-md mx-auto">
              {locationType === 'division' ? (
                <div>
                  <h1 className="capitalize py-2 pl-2 font-semibold">
                    List of the Division:
                  </h1>
                  {divisionData.length &&
                    divisionData.map(item => (
                      <div key={item.RegionID}>
                        <label>
                          <input
                            type="checkbox"
                            value={item.RegionID}
                            checked={location.includes(item.RegionID)}
                            onChange={e => {
                              console.log(location.includes(item.RegionID));
                              if (location.includes(item.RegionID)) {
                                setLocation(
                                  location.filter(
                                    ele => ele.RegionID != item.RegionID
                                  )
                                );
                              } else {
                                setLocation([
                                  ...location,
                                  Number(e.target.value),
                                ]);
                              }
                            }}
                            className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          {item.RegionName}
                        </label>
                      </div>
                    ))}
                </div>
              ) : locationType === 'district' ? (
                <div>
                  <div className="max-w-md mx-auto mt-3">
                    <select
                      name="Division"
                      className="w-full rounded-md"
                      value={selectedDivision}
                      onChange={event => {
                        setSelectedDivision(event.target.value);
                      }}
                    >
                      <option value="" disabled>
                        Select Division
                      </option>
                      {divisionData.map(item => (
                        <option value={item.RegionID} key={item.RegionID}>
                          {item.RegionName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div>show others</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mapping;
