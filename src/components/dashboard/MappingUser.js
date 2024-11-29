import useGetData from '@/utils/useGetData';
import { useState, useEffect } from 'react';

const MappingUser = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const { status, data } = useGetData(
    'https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_sndUsers'
  );

  console.log(activeUsers);

  useEffect(() => {
    if (data.length > 0) {
      let dataWillBeSet = data.filter(item => Boolean(item.Status));
      setActiveUsers(dataWillBeSet);
    }
  }, [data]);

  const handleChange = e => {
    if (selectedUser === e.target.value) {
      setSelectedUser('');
    } else {
      setSelectedUser(e.target.value);
    }
  };

  if (status === 'pending') {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {activeUsers.length > 0 &&
        activeUsers.map(item => (
          <div key={item.UserID}>
            <label>
              <input
                type="checkbox"
                value={item.EmployeeID}
                checked={selectedUser === item.EmployeeID}
                onChange={handleChange}
                className="mx-2"
              />
              {item.EmpName}
            </label>
          </div>
        ))}
    </div>
  );
};

export default MappingUser;
