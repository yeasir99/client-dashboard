import { useState, useEffect } from 'react';

const DSM = ({ rsmId, selectedUser, setSelectedUser, getUserDataById }) => {
  const [dsm, setDsm] = useState([]);
  useEffect(() => {
    if (rsmId) {
      getUserDataById(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=',
        rsmId,
        setDsm
      );
    }
  }, [rsmId]);
  return (
    <div>
      <label className="capitalize flex font-semibold text-md py-1">DSM:</label>

      <select
        name="Dsm"
        className="w-full rounded-md"
        defaultValue=""
        onChange={e => {
          setSelectedUser({
            ...selectedUser,
            dsmId: e.target.value,
          });
        }}
        disabled={dsm.length ? false : true}
      >
        <option value="" disabled={true} selected></option>
        {dsm.length &&
          dsm.map(item => (
            <option value={item.DesignationID} key={item.UserID}>
              {item.EmpName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DSM;
