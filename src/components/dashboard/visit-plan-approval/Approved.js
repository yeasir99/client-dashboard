'use client'
import {useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Approved = ({id}) => {
    const [formData, setFormData] = useState({
        ApprovalComments: '',
      });
      const router = useRouter();
      const handleReject = async () => {
      const res = await axios.post(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalDetailsVisitEntry&VisitPlanID=${id}`,
        {
          VisitPlanID: id,
          RejectComments: formData.ApprovalComments,
          UserID: 501,
        }
      );
      router.push('/dashboard/visit-approval-inital');
    };
    const handleApproved = async () => {
      const res = await axios.post(
        `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalRejected_CancelledVisitEntry&VisitPlanID=${id}`,
        {
          VisitPlanID: id,
          AppComments: formData.ApprovalComments,
          UserID: 501,
        }
      );
      router.push('/dashboard/visit-approval-inital');
    };
  return (
    <>
        <div className="py-6">
        <label
          htmlFor="ApprovalComments"
          className="block text-sm font-bold mb-1"
        >
          Approval Comment:
        </label>
        <textarea
          id="ApprovalComments"
          className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          name="ApprovalComments"
          type="text"
          value={formData.ApprovalComments}
          onChange={e => {
            setFormData({
              ...formData,
              ApprovalComments: e.target.value,
            });
          }}
        />
        <div className="flex justify-between py-3 px-1">
          <button
            className="bg-red-400 px-6 py-2 rounded-md text-white"
            onClick={handleReject}
          >
            Reject
          </button>
          <button
            className="bg-primary px-6 py-2 rounded-md text-white"
            onClick={handleApproved}
          >
            Approval
          </button>
        </div>
      </div>
    </>
  )
}

export default Approved