import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const Authorized = ({viewableData}) => {
    const [formData, setFormData] = useState({
        AuthorizedComments: ''
    })

    const router = useRouter()

    const handleReject = async () =>{
        const res = await axios.post(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalRejected_CancelledMR&MRID=${viewableData.data.MRID}`, {
                MRID: viewableData.data.receipt.MRID,
                RejectComments: formData.AuthorizedComments,
                UserID: 501
        })
        router.push('/dashboard/money-receipt-approval')
    }
    const handleChecked = async () =>{
        const res = await axios.post(`https://kblsf.site/DLogicKBL/salesforce_api.php?action=create_sndApprovalDetailsMR&MRID=${viewableData.data.MRID}`,{
            MRID: viewableData.data.receipt.MRID,
           CheckedComments: null,
           AuthComments: formData.AuthorizedComments,
           AppComments: null,
           UserID: 501
       })
       router.push('/dashboard/money-receipt-approval')
    }
    if(viewableData.status === 'pending'){
        return <div className="text-xl font-semibold text-center py-5">Loading...</div>
    }
    if(viewableData.status === 'pending'){
        return <div className="text-xl font-semibold text-center py-5">Loading...</div>
    }
  return (
    <>
        <div>
        <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Receipt Information
        </h1>
        {viewableData.data === null ? <div className="text-center text-xl font-semibold py-5">No Data to Display</div> : <>
            <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt Id:</h1>
          <h1>{viewableData.data.receipt.MRID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt Number:</h1>
          <h1>{viewableData.data.receipt.MRNo}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt Date:</h1>
          <h1>{viewableData.data.receipt.MRDate}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Party Name:</h1>
          <h1>{viewableData.data.receipt.PartyName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Received Amount:</h1>
          <h1>{viewableData.data.receipt.AmountReceived}</h1>
        </div>
        </>}
      </div>
    </div>
    </div>
    {/* display comment */}

    <div className="flex justify-center mt-5">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Comment details
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Checked Comments:</h1>
          <h1>{viewableData.data.Approvals.CheckedComments}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Checked By:</h1>
          <h1>{viewableData.data.Approvals.CheckedBy}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Date:</h1>
          <h1>{viewableData.data.Approvals.CheckedDate}</h1>
        </div>
      </div>
    </div>

    {/* auth comment */}
    <div className="py-6">

        <label
            htmlFor="AuthorizedComments"
            className="block text-sm font-bold mb-1"
          >
            Authorized Comment:
          </label>
            <textarea id="AuthorizedComments" className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm" name="AuthorizedComments" type="text" value={formData.AuthorizedComments} onChange={e => {
                setFormData({
                    ...formData,
                    AuthorizedComments: e.target.value
                })
            }}  />
<div className="flex justify-between py-3 px-1">
          <button className="bg-red-400 px-6 py-2 rounded-md text-white" onClick={handleReject}>
            Reject
          </button>
          <button className="bg-primary px-6 py-2 rounded-md text-white" onClick={handleChecked}>
            Authorization
          </button>
        </div>
    </div>
    </>
  )
}

export default Authorized