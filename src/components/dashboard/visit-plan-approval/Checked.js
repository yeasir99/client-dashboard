'use client'
import {useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Checked = ({id}) => {
    const [formData, setFormData] = useState({
        CheckedComments: '',
      });
      const router = useRouter();
      const handleChecked = async () => {
        const res = await axios.post(
          `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalDetailsVisitEntry&VisitPlanID=${id}`,
          {
            VisitPlanID: id,
            CheckedComments: formData.CheckedComments,
            UserID: 501,
          }
        );
        console.log(res)
        router.push('/dashboard/visit-approval-inital');
      };
      
      const handleCancel = async () => {
        const res = await axios.post(
          `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalRejected_CancelledVisitEntry&VisitPlanID=${id}`,
          {
            VisitPlanID: id,
            CanclledComments: formData.CheckedComments,
            UserID: 501,
          }
        );
        console.log(res)
        router.push('/dashboard/visit-approval-inital');
      };
  return (
    <>
    <div className="py-6">
        <label
          htmlFor="CheckedComments"
          className="block text-sm font-bold mb-1"
        >
          Checked Comment:
        </label>
        <textarea
          id="CheckedComments"
          className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          name="CheckedComments"
          type="text"
          value={formData.CheckedComments}
          onChange={e => {
            setFormData({
              ...formData,
              CheckedComments: e.target.value,
            });
          }}
        />
        <div className="flex justify-between py-3 px-1">
          <button
            className="bg-red-400 px-6 py-2 rounded-md text-white"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-primary px-6 py-2 rounded-md text-white"
            onClick={handleChecked}
          >
            Checked
          </button>
        </div>
      </div>
    </>
  )
}

export default Checked