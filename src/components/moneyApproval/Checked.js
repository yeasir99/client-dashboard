import {useState} from 'react'
const Checked = ({viewableData}) => {
    console.log(viewableData)
    const [formData, setFormData] = useState({
        CheckedComments: ''
    })

    const handleCancel = async () =>{
        // handle cancel
    }
    const handleChecked = async () =>{
        // handle reject
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
          <h1>{viewableData.data.MRID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt Number:</h1>
          <h1>{viewableData.data.MRNo}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt Date:</h1>
          <h1>{viewableData.data.MRDate}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Party Name:</h1>
          <h1>{viewableData.data.PartyName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Received Amount:</h1>
          <h1>{viewableData.data.AmountReceived}</h1>
        </div>
        </>}
      </div>
    </div>
    </div>
    <div className="py-6">

        <label
            htmlFor="CheckedComments"
            className="block text-sm font-bold mb-1"
          >
            Checked Comment:
          </label>
            <textarea id="CheckedComments" className="text-md outline-1 border-1 focus:ring-0 rounded-md w-full block text-sm" name="CheckedComments" type="text" value={formData.CheckedComments} onChange={e => {
                setFormData({
                    ...formData,
                    CheckedComments: e.target.value
                })
            }}  />
<div className="flex justify-between py-3 px-1">
          <button className="bg-red-400 px-6 py-2 rounded-md text-white" onClick={handleCancel}>
            Cancel
          </button>
          <button className="bg-primary px-6 py-2 rounded-md text-white" onClick={handleChecked}>
            Checked
          </button>
        </div>
    </div>
    </>
  )
}

export default Checked