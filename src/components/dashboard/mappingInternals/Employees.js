import { useState, useEffect } from 'react';

const Employees = ({
  asmId,
  selectedUser,
  setSelectedUser,
  getUserDataById,
  mappingUser,
  setMappingUser,
}) => {
  const [employee, setEmployee] = useState([]);
  const [activeUsers, setActiveUsers] = useState('');
  useEffect(() => {
    if (asmId) {
      getUserDataById(
        'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_userview&PDesignationID=',
        asmId,
        setEmployee
      );
    }
  }, [asmId]);
  return (
    <div>
      <h1 className="text-lg font-semibold">List of the Employee:</h1>
      <div>
        {employee.length > 0 &&
          employee.map(item => (
            <div key={item.UserID}>
              <label>
                <input
                  type="checkbox"
                  value={item.UserID}
                  checked={activeUsers == item.UserID}
                  onChange={e => {
                    if (activeUsers == e.target.value) {
                      setActiveUsers('');
                      setMappingUser({
                        ...mappingUser,
                        user: '',
                      });
                      setSelectedUser({
                        ...selectedUser,
                        userId: '',
                      });
                    } else {
                      setActiveUsers(e.target.value);
                      setMappingUser({
                        ...mappingUser,
                        user: e.target.value,
                      });
                      setSelectedUser({
                        ...selectedUser,
                        userId: e.target.value,
                      });
                    }
                  }}
                  className="mx-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                {item.EmpName}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Employees;
