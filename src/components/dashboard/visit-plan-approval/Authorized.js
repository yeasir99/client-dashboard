'use client'
import {useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Authorized = ({id}) => {
    const [formData, setFormData] = useState({
        AuthorizedComments: '',
      });
    
      const router = useRouter();

      const handleReject = async () => {
        const res = await axios.post(
          `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalRejected_CancelledVisitEntry&VisitPlanID=${id}`,
          {
            VisitPlanID: id,
            RejectComments: formData.AuthorizedComments,
            UserID: 501,
          }
        );
        router.push('/dashboard/visit-approval-inital');
      };
      const handleAuthorized = async () => {
        const res = await axios.post(
          `https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalDetailsVisitEntry&VisitPlanID=${id}`,
          {
            VisitPlanID: id,
            AuthComments: formData.AuthorizedComments,
            UserID: 501,
          }
        );
        router.push('/dashboard/visit-approval-inital');
      };
  return (
    <>
        <div className="py-6">
        <label
          htmlFor="AuthorizedComments"
          className="block text-sm font-bold mb-1"
        >
          Authorized Comment:
        </label>
        <textarea
          id="AuthorizedComments"
          className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm"
          name="AuthorizedComments"
          type="text"
          value={formData.AuthorizedComments}
          onChange={e => {
            setFormData({
              ...formData,
              AuthorizedComments: e.target.value,
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
            onClick={handleAuthorized}
          >
            Authorization
          </button>
        </div>
      </div>
    </>
  )
}

export default Authorized