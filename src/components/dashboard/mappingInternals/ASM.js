import { useState, useEffect } from 'react';

const ASM = ({ dsmId, selectedUser, setSelectedUser, getUserDataById }) => {
  const [asm, setAsm] = useState([]);
  useEffect(() => {
    if (dsmId) {
      getUserDataById(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=',
        dsmId,
        setAsm
      );
    }
  }, [dsmId]);
  return (
    <div>
      <label className="capitalize flex font-semibold text-md py-1">ASM:</label>

      <select
        name="Asm"
        className="w-full rounded-md"
        defaultValue=""
        onChange={e => {
          setSelectedUser({
            ...selectedUser,
            asmId: e.target.value,
          });
        }}
        disabled={asm.length ? false : true}
      >
        <option value="" disabled={true} selected></option>
        {asm.length &&
          asm.map(item => (
            <option value={item.DesignationID} key={item.UserID}>
              {item.EmpName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ASM;
